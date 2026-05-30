import React from 'react';
import projects from '../../data/projects';
import theme from '../../config/theme';
import { ProjectList } from '../ui';

const SelectiveProjects = () => {
  return(
    <>
      <section id="selective-projects" className="bg-white">
        <div className="w-full">
          <h2 className={`${theme.text.sectionTitle} mb-6`}>Selected Projects</h2>
          <ProjectList projects={projects} />
        </div>
      </section>
    </>
  )
}

export default SelectiveProjects;
