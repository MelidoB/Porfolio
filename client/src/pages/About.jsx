import React, { useState } from 'react';

function About() {
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      
      {/* Personal Details */}
      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-2">Melido Bello</h3>
        <p><strong>Location:</strong> New York, NY</p>
        <p>
          <strong>Email:</strong>{" "}
          <a className="text-blue-500 hover:underline" href="mailto:enrriquebello10@gmail.com">
            enrriquebello10@gmail.com
          </a>
        </p>
        <p><strong>Phone:</strong> (646) 427-8606</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.linkedin.com/in/m%C3%A9lido-bello-4405b3191/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/mélido-bello-4405b3191
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/MelidoB"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/MelidoB
          </a>
        </p>
      </div>

      {/* Education & Skills */}
      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-2">Education & Skills</h3>
        <p>
          <strong>City College of New York (CCNY), CUNY</strong> — Bachelor of Science in Computer Science
          <span className="block">Expected: Jan 2025</span>
        </p>
        <p><strong>Relevant Coursework:</strong> Software Engineering, Algorithms, Data Structures, Computer Organization, Python Programming</p>
        <p><strong>Programming:</strong> Python, Next.js, Flask, Tailwind CSS</p>
        <p><strong>Technologies:</strong> AWS Connect, Amazon S3, Firebase, VS Code, Git/GitHub, Microsoft Office</p>
        <p><strong>Certification:</strong> Oracle Cloud Infrastructure 2024 Certified Foundations Associate</p>
        <p><strong>Languages:</strong> Spanish (Native), English (Fluent)</p>
      </div>

      {/* Resume Download */}
      <div className="bg-white shadow p-6 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Resume</h3>
        <a 
          href="/resume.pdf" 
          download 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Download Resume (PDF)
        </a>
      </div>

      {/* Image Upload Section */}
      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4 text-center">Upload Profile Image</h3>
        <div className="flex flex-col items-center">
          {preview ? (
            <img src={preview} alt="Profile Preview" className="w-32 h-32 object-cover rounded-full mb-4" />
          ) : (
            <div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full mb-4">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload}
            className="block"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
