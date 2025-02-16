import React from 'react';

const About = () => (
  <div className="w-full min-h-screen flex flex-col bg-gray-100 dark:bg-black dark:text-white">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-10 py-10">
      {/* Title */}
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-4xl font-serif font-semibold">About Me</h2>
        <span className="w-16 h-1 bg-rose-500 rounded"></span>
        <span className="w-8 h-1 bg-rose-500 rounded"></span>
      </div>

      {/* Personal Overview */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold">
          I'm Melido Bello and I'm <span className="text-rose-500">Software Engineer</span>
        </h4>
        <p className="mt-2">
          I am a dedicated and innovative FullStack Developer passionate about creating impactful digital experiences. I specialize in designing and developing solutions that combine creativity with functionality.
        </p>
      </div>

      {/* Personal Info & Skills */}
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Personal Info */}
        <div className="flex-1">
          <ul className="text-gray-900 dark:text-gray-200 font-serif space-y-2">
            <li className="py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-bold">Degree:</span> BSc. Computer Science
            </li>
            <li className="py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-bold">Location:</span> New York, NY
            </li>
            <li className="py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-bold">Email:</span> <span className="ml-1">enrriquebello10@gmail.com</span>
            </li>
            
          </ul>
          <div className="mt-4 flex gap-4 justify-center sm:justify-start">
            <button className="px-4 sm:px-6 py-2 bg-rose-600 rounded-full text-white font-bold">
              Download CV
            </button>
            <button className="px-4 sm:px-6 py-2 bg-rose-600 rounded-full text-white font-bold">
              Hire me
            </button>
          </div>
        </div>
        {/* Skills */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Flask</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">AWS Connect</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Amazon S3</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Firebase</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">VS Code</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Git/GitHub</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Microsoft Office</span>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-4">Education</h3>
        <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
          <p>
            <strong>City College of New York (CCNY), CUNY</strong> — Bachelor of Science in Computer Science
            <span className="block text-gray-600 dark:text-gray-300">Expected: Jan 2025</span>
          </p>
          <p className="mt-2">
            <strong>Relevant Coursework:</strong> Software Engineering, Algorithms, Data Structures, Computer Organization, Python Programming.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-4">Experience</h3>
        <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg space-y-4">
          <div>
            <p>
              <strong>Basic Moving, Brooklyn, NY</strong> — Mover
              <span className="block text-gray-600 dark:text-gray-300">Summer 2023 &amp; Summer 2024</span>
            </p>
            <p className="mt-1">
              Safely packed, transported, and unpacked fragile items ensuring damage-free delivery.
            </p>
          </div>
          <div>
            <p>
              <strong>NYPL (The New York Public Library), New York, NY</strong> — STEM Intern
              <span className="block text-gray-600 dark:text-gray-300">Jun 2019 - Aug 2019</span>
            </p>
            <p className="mt-1">
              Guided students in STEAM projects and assisted in developing a water temperature regulation device.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications & Associations */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-4">Certifications</h3>
          {/* Certification image slot */}
          <img
            src="https://dummyimage.com/200x200?text=Certificate"
            alt="Certification"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-center">
            <strong>Oracle Cloud Infrastructure 2024 Certified Foundations Associate</strong>
          </p>
          {/* Certification link */}
          <a 
            href="https://example.com/certificate-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-2 text-blue-500 hover:underline"
          >
            View Certificate
          </a>
        </div>
        {/* Associations */}
        <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-4">Associations</h3>
          {/* Association image slot */}
          <img
            src="https://dummyimage.com/200x200?text=FRC"
            alt="FIRST Robotics Competition"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-center">
            <strong>FIRST Robotics Competition (FRC)</strong>
            <span className="block text-gray-600 dark:text-gray-300">Jan 2017 – Dec 2018</span>
          </p>
          {/* Association link */}
          <a 
            href="https://example.com/frc-info" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-2 text-blue-500 hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
