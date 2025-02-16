import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="max-w-full mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard 
          title="Project One" 
          description="An innovative solution addressing real-world challenges." 
          link="#"
          imageUrl="https://dummyimage.com/400x300"
        />
        <ProjectCard 
          title="Project Two" 
          description="A creative project blending design with functionality." 
          link="#"
          imageUrl="https://dummyimage.com/400x300"
        />
        <ProjectCard 
          title="Project Three" 
          description="Cutting-edge technology meets elegant design." 
          link="#"
          imageUrl="https://dummyimage.com/400x300"
        />
      </div>
    </section>
  );
};

export default Projects;
