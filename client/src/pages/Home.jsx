import React from 'react'
import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <div>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-gray-700">
          I am a passionate developer showcasing my projects and skills.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard 
            title="Project One" 
            description="A brief description of project one." 
            link="#"
          />
          <ProjectCard 
            title="Project Two" 
            description="A brief description of project two." 
            link="#"
          />
        </div>
      </section>
    </div>
  )
}

export default Home
