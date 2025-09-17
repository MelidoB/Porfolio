import React, { useEffect } from 'react';
import { Project } from '../types';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaLightbulb } from 'react-icons/fa';
import { GoGoal } from 'react-icons/go';
import { MdDone } from 'react-icons/md';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const { title, link, imageUrl, caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div 
        className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>
        
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-t-lg" />

        <div className="p-6 sm:p-8 md:p-10">
          <h2 id="project-title" className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">{title}</h2>
          <div className="flex flex-wrap gap-4 mb-8">
             {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400">
                <FaExternalLinkAlt /> View Live Demo
              </a>
            )}
             <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
              <FaGithub /> View on GitHub
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-800 dark:text-white mb-3">
                <GoGoal className="text-sky-500" size={24} /> The Problem
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{caseStudy.problem}</p>
            </div>
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-800 dark:text-white mb-3">
                <MdDone className="text-sky-500" size={24} /> My Solution
              </h3>
              <ul className="space-y-2 list-disc list-inside text-slate-600 dark:text-slate-300 leading-relaxed marker:text-sky-500">
                {caseStudy.solution.map((point, index) => <li key={index}>{point}</li>)}
              </ul>
            </div>
             <div>
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-800 dark:text-white mb-3">
                <FaLightbulb className="text-sky-500" size={24} /> Lessons Learned
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{caseStudy.learnings}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;