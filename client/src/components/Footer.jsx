import React from 'react';

function Footer() {
  return (
    <footer className="bg-white shadow py-4 mt-8">
      <div className="container mx-auto text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
