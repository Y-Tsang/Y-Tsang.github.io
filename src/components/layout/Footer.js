import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-2 z-10">
      <div className="container mx-auto text-center text-xs">
        &copy; Copyright {new Date().getFullYear()} Yuhan Zeng. Designed and developed by Yuhan Zeng.
      </div>
    </footer>
  );
};

export default Footer;