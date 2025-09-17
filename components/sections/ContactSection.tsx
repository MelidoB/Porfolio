import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out via email or connect with me on social media.
          </p>
          
          <div className="mt-10">
            <a 
              href={`mailto:${personalInfo.contact.email}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-sky-600 text-white font-medium rounded-lg shadow-lg hover:bg-sky-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              <FaEnvelope size={20} />
              <span>{personalInfo.contact.email}</span>
            </a>
          </div>

          <div className="mt-12">
            <p className="text-slate-500 dark:text-slate-400">Let's Connect</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="GitHub">
                <FaGithub size={32} />
              </a>
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;