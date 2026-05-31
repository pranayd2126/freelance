import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown, HiLogout, HiUser, HiCog, HiFolder, HiBell } from 'react-icons/hi';
import useAuth from '../../hooks/useAuth';
import { logout } from '../../redux/slices/authSlice';
import Avatar from './Avatar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const dispatch = useDispatch();
  const navigate = navigateFn();

  function navigateFn() {
    try {
      return useNavigate();
    } catch (e) {
      return () => {};
    }
  }

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate('/login');
    });
  };

  const getDashboardLink = () => {
    if (user?.role === 'student') return '/dashboard/student';
    if (user?.role === 'client') return '/dashboard/client';
    if (user?.role === 'admin') return '/dashboard/admin';
    return '/dashboard';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            StudentBid
          </span>
        </Link>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm font-semibold transition-colors ${
                isActive ? 'text-orange-600' : 'text-stone-600 hover:text-stone-950'
              }`
            }
          >
            Browse Projects
          </NavLink>
          <a
            href="/#how-it-works"
            className="text-sm font-semibold text-stone-600 hover:text-stone-950 transition-colors"
          >
            How It Works
          </a>
          <Link to={getDashboardLink()}
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 transition-colors">
                Dashboard
          </Link>
        </div>
 
        {/* Right side: Authenticated / Call to Actions */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4 relative">
              <Link to="/dashboard/notifications" className="text-stone-600 hover:text-orange-600 transition-colors p-2 rounded-full hover:bg-stone-100 relative">
                <HiBell className="h-6 w-6" />
              </Link>
              <div className="relative">
                <button
                   onClick={() => setDropdownOpen(!dropdownOpen)}
                   className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-stone-150 transition-colors text-left"
                >
                  <Avatar name={user?.fullName} src={user?.avatar?.url} size="sm" />
                  <div className="leading-tight hidden lg:block">
                    <p className="text-sm font-semibold text-stone-800">{user?.fullName}</p>
                    <p className="text-xs text-stone-500 capitalize">{user?.role}</p>
                  </div>
                  <HiChevronDown className="h-4 w-4 text-stone-500" />
                </button>
 
                <AnimatePresence>
                  {dropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-white border border-stone-200 rounded-xl shadow-lg py-1 z-55"
                      >
                        <Link
                          to={`/${user?.role}/${user?._id}`}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 transition-colors"
                        >
                          <HiUser className="h-4 w-4 text-stone-550" />
                          Profile
                        </Link>
                        <Link
                          to="/dashboard/settings"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 transition-colors"
                        >
                          <HiCog className="h-4 w-4 text-stone-550" />
                          Settings
                        </Link>
                        <hr className="border-stone-100 my-1" />
                        <button
                          onClick={() => {
                            setDropdownOpen(false);
                            handleLogout();
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
                        >
                          <HiLogout className="h-4 w-4" />
                          Logout
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-stone-750 hover:text-stone-950 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors shadow-sm"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-16 bottom-0 w-64 bg-white border-l border-slate-200 z-50 p-4 md:hidden flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  Browse Projects
                </NavLink>
                <a
                  href="/#how-it-works"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  How It Works
                </a>
              </div>
              <div className="border-t border-stone-100 pt-4 flex flex-col gap-3">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-3 px-3 py-2">
                      <Avatar name={user?.fullName} src={user?.avatar?.url} size="md" />
                      <div>
                        <p className="text-sm font-semibold text-stone-850">{user?.fullName}</p>
                        <p className="text-xs text-stone-500 capitalize">{user?.role}</p>
                      </div>
                    </div>
                    <Link
                      to={getDashboardLink()}
                      onClick={() => setIsOpen(false)}
                      className="px-3 py-2 text-base font-semibold text-stone-700 hover:bg-stone-50 rounded-lg"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        handleLogout();
                      }}
                      className="w-full px-3 py-2 text-base font-semibold text-red-650 hover:bg-red-50 rounded-lg text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 rounded-lg"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center px-4 py-2 text-sm font-semibold text-white bg-orange-650 hover:bg-orange-700 rounded-lg shadow-sm"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
