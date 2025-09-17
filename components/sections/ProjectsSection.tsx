import React, { useState, useMemo } from 'react';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import ProjectCard from '../ProjectCard';
import ProjectModal from '../ProjectModal';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectCategories = useMemo(() => {
    const categories = new Set<string>();
    projects.forEach(p => p.categories.forEach(c => categories.add(c)));
    return ['All', ...Array.from(categories)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(p => p.categories.includes(activeFilter));
  }, [activeFilter]);

  const openModal = (project: Project) => {
    document.body.style.overflow = 'hidden';
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    document.body.style.overflow = '';
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here's a selection of my work. Filter by category to see what I can do.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {projectCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === category 
                  ? 'bg-sky-600 text-white' 
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={`${activeFilter}-${project.title}`} 
              project={project} 
              onOpenModal={openModal} 
              style={{ animationDelay: `${index * 100}ms`}}
            />
          ))}
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
};

export default ProjectsSection;