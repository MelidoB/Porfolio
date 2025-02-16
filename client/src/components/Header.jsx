import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
        <nav className="space-x-6">
          <Link className="text-gray-700 hover:text-blue-500" to="/">Home</Link>
          <Link className="text-gray-700 hover:text-blue-500" to="/about">About</Link>
          <Link className="text-gray-700 hover:text-blue-500" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
