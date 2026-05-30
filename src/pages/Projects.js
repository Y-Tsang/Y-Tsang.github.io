import React from 'react';
import projects from '../data/projects';
import { PageShell } from '../components/layout';
import { ProjectList } from '../components/ui';

const Projects = () => {
  return (
    <PageShell className="pt-10 pb-16">
      <ProjectList projects={projects} groupByYear />
    </PageShell>
  );
};

export default Projects;
