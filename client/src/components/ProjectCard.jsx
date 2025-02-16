import React from 'react'

function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition duration-200">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  )
}

export default ProjectCard
