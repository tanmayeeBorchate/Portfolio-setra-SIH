import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-gray-900 dark:bg-[#0a0d14] dark:text-gray-100 transition-colors duration-200">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#0f172a] transition-colors duration-200">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            {/* Left — Project Info */}
            <div className="max-w-sm">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                Setra
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">
                A hydrodynamic flood-inundation modelling framework for dam-break and river blockage scenarios.
              </p>
            </div>

            {/* Right — Nav Links */}
            <div className="flex flex-col items-start sm:items-end gap-2.5">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'How it works', id: 'how-it-works' },
                { label: 'Documents', id: 'documents' },
                { label: 'Team', id: 'team' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800/80 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">
              SIH26 &middot; Smart India Hackathon &middot; Software &middot; Smart Automation &middot; Smart India Hackathon 2026
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              An academic project for Smart India Hackathon 2026.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
