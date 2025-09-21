import React from 'react';
import { Project } from '../types';
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal, style }) => {
  const { title, description, link, imageUrl, tags } = project;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden group animate-fade-in" style={style}>
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-4 text-sm font-medium">
          {project.liveDemoUrl && (
             <a 
              href={project.liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
           <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
          <button 
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <FaFileAlt /> Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;