import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <Link className="mr-4 hover:text-blue-500" to="/">Home</Link>
          <Link className="mr-4 hover:text-blue-500" to="/about">About</Link>
          <Link className="hover:text-blue-500" to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
