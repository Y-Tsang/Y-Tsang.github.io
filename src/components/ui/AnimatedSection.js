import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * AnimatedSection component that provides fade-up scroll-triggered animations using Tailwind CSS
 * Simple and clean fade-up animation from bottom when element enters viewport
 * @param {React.ReactNode} children - Content to be animated
 * @param {number} delay - Animation delay in milliseconds
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the wrapper div
 */
const AnimatedSection = ({ 
  children, 
  delay = 0,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1, '0px 0px -50px 0px');

  const baseClasses = 'transition-all duration-1000 ease-out';
  
  const animationState = isVisible 
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10';
  
  const combinedClasses = `${baseClasses} ${animationState} ${className}`;
  
  return (
    <div 
      ref={ref}
      className={combinedClasses}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
