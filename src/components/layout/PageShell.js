import React from 'react';
import theme from '../../config/theme';
import AnimatedSection from '../ui/AnimatedSection';

const PageShell = ({
  children,
  className = '',
  animated = true,
  animationClassName = '',
  delay = 0,
}) => {
  const content = animated ? (
    <AnimatedSection delay={delay} className={animationClassName}>
      {children}
    </AnimatedSection>
  ) : children;

  return (
    <main className={`${theme.layout.page} ${className}`}>
      {content}
    </main>
  );
};

export default PageShell;
