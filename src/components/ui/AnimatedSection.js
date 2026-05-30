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
  baseClassName = 'transition-all duration-1000 ease-out',
  hiddenClassName = 'opacity-0 translate-y-10',
  visibleClassName = 'opacity-100 translate-y-0',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1, '0px 0px -50px 0px');

  const animationState = isVisible 
    ? visibleClassName
    : hiddenClassName;
  
  const combinedClasses = `${baseClassName} ${animationState} ${className}`;
  
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
