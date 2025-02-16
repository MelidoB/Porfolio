import React from 'react';
import ComingSoon from '../assets/projects/comingsoon.jpeg';
import SlitherAssistImage from '../assets/projects/SlitherAssist.jpg';
import SoleSphereImage from '../assets/projects/SoleSphere.png';
import ProjectCard from '../components/ProjectCard';
const Projects = () => {
  return (
    <section className="max-w-full mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard 
          title="Sole Sphere" 
          description="A multi-service e-commerce platform for sneakers, integrating AI for personalized recommendations." 
          link="https://github.com/MarkusCDev/CSC473-GroupProject"
          imageUrl={SoleSphereImage}
        />
        <ProjectCard 
          title="SlitherAssist" 
          description="Enhancing game control and responsiveness with AI-powered adjustments." 
          link="https://github.com/MelidoB/SlitherAssist"
          imageUrl={SlitherAssistImage}
        />
        <ProjectCard 
          title="Project Three" 
          description="Cutting-edge technology meets elegant design." 
          link="#"
          imageUrl={ComingSoon}
        />
      </div>
    </section>
  );
};

export default Projects;
