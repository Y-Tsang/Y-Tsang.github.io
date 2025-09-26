import React from 'react';
import { AnimatedSection } from '../components/ui';

const Vision = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <AnimatedSection delay={0}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vision</h1>
          <p className="text-xl text-gray-600">
            Under Development
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Vision;
