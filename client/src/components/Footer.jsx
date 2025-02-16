import React from 'react'

function Footer() {
  return (
    <footer className="bg-white shadow mt-8">
      <div className="container mx-auto p-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
