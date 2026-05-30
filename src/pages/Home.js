import React from 'react';
import { PageShell } from '../components/layout';
import { Bio, Openings, Updates, SelectiveProjects, Service, Funding, Name } from '../components/sections';

const Home = () => {
  return (
    <PageShell className="pt-8" animationClassName="space-y-16">
      <Bio />
      
      <Openings />

      <Updates />
      
      <SelectiveProjects />
      
      <Service />
      
      <Funding />
      
      <Name />
    </PageShell>
  );
};

export default Home;
