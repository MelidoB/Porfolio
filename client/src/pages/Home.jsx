import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg">
          A showcase of my work, projects, and skills as a developer.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Project One" 
            description="An innovative project solving real-world problems." 
            link="#"
          />
          <ProjectCard 
            title="Project Two" 
            description="A creative solution built with modern web tech." 
            link="#"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
