import React from 'react';
import theme from '../../config/theme';
import ProjectCard from './ProjectCard';

const HIGHLIGHT_AUTHOR = 'Yuhan Zeng';

const groupProjectsByYear = (projects) => {
  return projects.reduce((groups, project) => {
    const year = project.year || 'Other';
    return {
      ...groups,
      [year]: [...(groups[year] || []), project],
    };
  }, {});
};

const ProjectList = ({ projects, groupByYear = false }) => {
  if (!groupByYear) {
    return (
      <div className="w-full space-y-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            highlightAuthor={HIGHLIGHT_AUTHOR}
          />
        ))}
      </div>
    );
  }

  const groupedProjects = groupProjectsByYear(projects);
  const years = Object.keys(groupedProjects).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="w-full space-y-10">
      {years.map((year) => (
        <section key={year} className="w-full">
          <h2 className={`mb-4 border-b border-gray-100 pb-2 text-xl font-semibold tracking-tight ${theme.text.heading}`}>
            {year}
          </h2>
          <div className="w-full space-y-6">
            {groupedProjects[year].map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                highlightAuthor={HIGHLIGHT_AUTHOR}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectList;
