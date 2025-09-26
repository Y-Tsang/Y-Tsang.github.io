import React from 'react';

/**
 * Reusable Link component for external links
 * Automatically opens in new tab with security attributes
 * @param {React.ReactNode} children - Link text content
 * @param {string} link - URL to link to
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to anchor element
 */
const Link = ({ children, link, className = "", ...props }) => {
  return (
    <a
      href={link}
      className={`text-blue-500 hover:text-blue-700 hover:underline ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
