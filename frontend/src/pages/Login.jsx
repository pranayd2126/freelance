import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { login, clearError } from '../redux/slices/authSlice';
import { useEffect } from 'react';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && user) {
      toast.success(`Welcome back, ${user.fullName}!`);
      if (user.role === 'student') navigate('/dashboard/student');
      else if (user.role === 'client') navigate('/dashboard/client');
      else if (user.role === 'admin') navigate('/dashboard/admin');
      else navigate('/dashboard');
    }
  }, [isAuthenticated, user, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="space-y-6">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-black text-stone-850 tracking-tight">Login</h2>
        <p className="text-sm text-stone-550 mt-1 font-medium">Access your StudentBid dashboard</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="name@university.edu"
          icon={HiMail}
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={HiLockClosed}
          error={errors.password?.message}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              className="rounded border-stone-300 text-orange-600 focus:ring-orange-500 h-4 w-4"
            />
            <span className="text-xs text-stone-500 font-semibold">Remember me</span>
          </label>
          <a href="#" className="text-xs font-bold text-orange-600 hover:text-orange-800">
            Forgot Password?
          </a>
        </div>

        <Button type="submit" isLoading={isLoading} fullWidth className="mt-2">
          Sign In
        </Button>
      </form>

      <div className="text-center text-xs text-stone-500 font-medium">
        Don't have an account?{' '}
        <Link to="/register" className="font-bold text-orange-600 hover:text-orange-850">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
