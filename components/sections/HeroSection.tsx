import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { personalInfo } from '../../data/portfolioData';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: personalInfo.titles,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="flex items-center justify-center text-center min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          <span className="block">{personalInfo.name}</span>
        </h1>
        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
            {personalInfo.brand}
        </h2>
        <div className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400 h-10 sm:h-12">
            <span ref={el}></span>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-transform hover:scale-105"
          >
            View My Work <FaArrowDown />
          </a>
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-600 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;