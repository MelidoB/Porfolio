import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-700";

  const NavLinkItems = () => (
    <>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={linkClasses}>
          {link.text}
        </a>
      ))}
    </>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold tracking-wider text-slate-800 dark:text-white">
              {personalInfo.name}
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <NavLinkItems />
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a href={`mailto:${personalInfo.contact.email}`} className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="Email">
              <FaEnvelope size={22} />
            </a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4 p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700" aria-label="Open menu">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-slate-100 dark:bg-slate-800 p-4 space-y-2">
          <NavLinkItems />
          <div className="flex items-center space-x-4 pt-4 border-t border-slate-300 dark:border-slate-700">
             <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
             <a href={`mailto:${personalInfo.contact.email}`} className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="Email">
              <FaEnvelope size={22} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;