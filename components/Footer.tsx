import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500 dark:text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;