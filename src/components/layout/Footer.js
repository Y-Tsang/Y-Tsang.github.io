import React from 'react';
import theme from '../../config/theme';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className={`${theme.layout.container} flex flex-col gap-2 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between`}>
        <p>&copy; {new Date().getFullYear()} Yuhan Zeng (Tsang).</p>
        <p className="text-gray-400">Designed and developed by Yuhan Zeng (Tsang).</p>
      </div>
    </footer>
  );
};

export default Footer;