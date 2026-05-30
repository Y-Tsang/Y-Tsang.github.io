import React from 'react';

const InlineLogo = ({ src, alt, className = '' }) => (
  <img
    src={src}
    alt={alt}
    className={`mx-0.5 inline-block h-[1.6em] w-[1.6em] object-contain align-[-0.38em] ${className}`}
  />
);

export default InlineLogo;
