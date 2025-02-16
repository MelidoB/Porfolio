import React from 'react';

function ProjectCard({ title, description, link, imageUrl }) {
  return (
    <div className="bg-white border rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-40 object-cover rounded mb-4" 
        />
      )}
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-full transition-colors"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
