import React from 'react';
import { personalInfo, skills as allSkills } from '../../data/portfolioData';
import { Skill } from '../../types';

// A small component to display a category of skills
const SkillCategory: React.FC<{ category: string; skills: Skill[] }> = ({ category, skills }) => (
    <div>
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">{category}</h4>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                 <span key={skill.name} className="bg-slate-200 dark:bg-slate-700 text-sm font-medium px-3 py-1 rounded-full">
                    {skill.name}
                </span>
            ))}
        </div>
    </div>
);

const AboutSection: React.FC = () => {
  // Group skills by category for display
  const skillsByCategory = allSkills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="about" className="py-20 sm:py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bio and Headshot Section */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img 
              src={personalInfo.headshotUrl} 
              alt="Melido Bello" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg border-4 border-slate-200 dark:border-slate-700" 
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20">
           <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-10">My Tech Stack</h3>
           <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <SkillCategory key={category} category={category} skills={skills} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;