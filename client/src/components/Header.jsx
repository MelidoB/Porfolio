import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow p-4">
    <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Portfolio</div>
      <nav className="flex items-center space-x-6">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div className="flex space-x-4">
        
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
      </div>
      </nav>
    </div>
  </header>
);

export default Header;
