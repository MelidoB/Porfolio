import React from 'react';
import { Link } from 'react-router-dom';
import MeImage from '../assets/Home/Me.jpg';

function HeroSection() {
  return (
    <section className="text-gray-600 body-font">
      {/* 
        Use smaller top/bottom padding on mobile (py-12), 
        then scale up at md:py-24 for medium screens and above.
      */}
      <div className="container mx-auto flex px-5 py-12 md:py-24 md:flex-row flex-col items-center">
        {/* 
          For the text, reduce size on mobile with text-2xl,
          scale up to text-4xl on small screens (sm:),
          and up to text-5xl on medium screens (md:) 
        */}
        <div className="md:w-1/2 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
          <h1 className="title-font text-2xl sm:text-4xl md:text-5xl mb-4 font-bold text-gray-900">
            I&apos;m Melido Bello
          </h1>
          <h2 className="title-font text-lg sm:text-2xl md:text-3xl mb-4 font-medium text-gray-700">
            Software Engineer | FullStack Developer
          </h2>
          <p className="mb-8 leading-relaxed text-sm sm:text-base">
            I am a dedicated and innovative FullStack Developer passionate about creating impactful
            digital experiences. I specialize in designing and developing solutions that combine 
            creativity with functionality.
          </p>
          <div className="flex justify-center space-x-4">
  <Link
    to="/projects"
    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 sm:px-6 
               focus:outline-none hover:bg-indigo-600 rounded text-sm sm:text-lg"
  >
    View Projects
  </Link>
  <Link
    to="/contact"
    className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-4 sm:px-6 
               focus:outline-none hover:bg-gray-200 rounded text-sm sm:text-lg"
  >
    Contact Me
  </Link>
</div>

        </div>
        {/* 
          Make sure the image is constrained to full width on small screens
          (w-full) and half width on md: 
        */}
        <div className="md:w-1/2 w-full">
          <img className="object-cover object-center rounded" alt="Profile" src={MeImage} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
