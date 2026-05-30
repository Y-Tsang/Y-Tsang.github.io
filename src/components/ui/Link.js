import React from 'react';
import theme from '../../config/theme';

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
      className={`${theme.link} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
