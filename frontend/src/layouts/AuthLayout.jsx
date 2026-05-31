import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Spinner from '../components/common/Spinner';

const AuthLayout = () => {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Spinner size="lg" />
      </div>
    );
  }

  if (isAuthenticated) {
    if (!user) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <Spinner size="lg" />
        </div>
      );
    }
    if (user.role === 'student') return <Navigate to="/dashboard/student" replace />;
    if (user.role === 'client') return <Navigate to="/dashboard/client" replace />;
    if (user.role === 'admin') return <Navigate to="/dashboard/admin" replace />;
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-stone-50">
      {/* Left branding panel (hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-tr from-stone-900 via-stone-850 to-orange-950 flex-col justify-between p-12 text-white border-r border-stone-800">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">StudentBid</span>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-black leading-tight">
            Find Projects.<br />
            Build Experience.<br />
            Earn Money.
          </h1>
          <p className="text-stone-300 text-lg leading-relaxed max-w-md font-medium">
            The exclusive localized freelance bidding marketplace created just for college students. Start coding, designing, or writing for real-world clients today.
          </p>
        </div>
        <div>
          <p className="text-xs text-stone-400 font-semibold">
            &copy; {new Date().getFullYear()} StudentBid Portal. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-stone-200/80 p-8 sm:p-10 hover:border-orange-200/40 transition-colors">
          <div className="flex justify-center md:hidden mb-6">
            <span className="text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              StudentBid
            </span>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
