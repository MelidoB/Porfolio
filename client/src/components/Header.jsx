import React, { useState } from 'react';
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div className="flex space-x-4">
            <a href="https://github.com/MelidoB" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} />
            </a>
          </div>
        </nav>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="flex space-x-4">
              <a href="https://github.com/MelidoB" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
