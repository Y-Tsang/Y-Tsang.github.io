import React from 'react';
import { AnimatedSection } from '../components/ui';
import { Bio, Openings, Updates, Publications, Service, Funding, Name } from '../components/sections';

const Home = () => {
  return (
    <div>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex-grow pt-8 space-y-16">
        <AnimatedSection delay={0}>
          <Bio />
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <Openings />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <Updates />
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <Publications />
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <Service />
        </AnimatedSection>
        
        <AnimatedSection delay={500}>
          <Funding />
        </AnimatedSection>
        
        <AnimatedSection delay={600}>
          <Name />
        </AnimatedSection>
      </main>
    </div>
  );
};

export default Home;
