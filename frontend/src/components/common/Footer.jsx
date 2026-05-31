import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white mt-auto border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <span className="text-xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              StudentBid
            </span>
            <p className="text-stone-400 text-sm leading-relaxed">
              StudentBid is a localized freelance marketplace specifically designed for students to get hands-on experience, build their portfolios, and earn money safely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-stone-250 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-stone-400 hover:text-orange-400 transition-colors text-sm font-medium">
                  Browse Projects
                </Link>
              </li>
              <li>
                <a href="/#how-it-works" className="text-stone-400 hover:text-orange-400 transition-colors text-sm font-medium">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="text-sm font-bold text-stone-250 uppercase tracking-wider mb-4">For Students</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-stone-400 hover:text-orange-400 transition-colors text-sm font-medium">
                  Join as Student
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-stone-400 hover:text-orange-400 transition-colors text-sm font-medium">
                  Find Internships
                </Link>
              </li>
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="text-sm font-bold text-stone-250 uppercase tracking-wider mb-4">For Clients</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-stone-400 hover:text-orange-400 transition-colors text-sm font-medium">
                  Join as Client
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-stone-400 hover:text-orange-400 transition-colors text-sm font-medium">
                  Post a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-850 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-450 text-sm">&copy; {new Date().getFullYear()} StudentBid. All rights reserved.</p>
          <div className="flex space-x-6 text-sm font-semibold">
            <a href="#" className="text-stone-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-400 hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
