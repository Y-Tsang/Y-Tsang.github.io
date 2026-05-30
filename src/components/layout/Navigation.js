import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import theme from '../../config/theme';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '' },
    { path: '/projects', label: 'Projects', icon: '' },
    { path: '/vision', label: 'Vision', icon: '' },
    { path: '/showcase', label: 'Showcase', icon: '' }
  ];

  const isActivePath = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/70 backdrop-blur-md border-b border-gray-100/60 sticky top-0 z-50">
      <div className={theme.layout.container}>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-lg font-semibold tracking-tight text-gray-900 hover:text-blue-800 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Yuhan Zeng (Tsang)
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-1 text-sm font-medium transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:transition-transform after:duration-200 ${
                    isActivePath(item.path)
                      ? 'text-gray-950 after:scale-x-100 after:bg-gray-950'
                      : 'text-gray-500 hover:text-gray-950 after:scale-x-0 hover:after:scale-x-100 after:bg-gray-300'
                  }`}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>


          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActivePath(item.path)
                    ? 'text-gray-950 bg-gray-50'
                    : 'text-gray-500 hover:text-gray-950 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
