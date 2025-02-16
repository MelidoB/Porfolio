import React from 'react'

function About() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Melido Bello</h3>
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
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Education</h3>
        <p>
          <strong>City College of New York (CCNY), CUNY</strong> — Bachelor of Science in Computer Science 
          <span className="block">Expected: Jan 2025</span>
        </p>
        <p>
          <strong>Relevant Coursework:</strong> Software Engineering, Algorithms, Data Structures, 
          Computer Organization, Python Programming
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Skills & Certifications</h3>
        <p>
          <strong>Programming:</strong> Python, Next.js, Flask, Tailwind CSS
        </p>
        <p>
          <strong>Technologies:</strong> AWS Connect, Amazon S3, Firebase, Visual Studio Code, Git/GitHub, Microsoft Office
        </p>
        <p>
          <strong>Certification:</strong> Oracle Cloud Infrastructure 2024 Certified Foundations Associate
        </p>
        <p>
          <strong>Languages:</strong> Spanish (Native), English (Fluent)
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <p>
          <strong>Sole Sphere - Web App</strong> (Sept 2023 - Jun 2024)
        </p>
        <ul className="list-disc ml-6">
          <li>Built an efficient e-commerce platform for buying, selling, and trading sneakers.</li>
          <li>Implemented a multi-service architecture using React, Flask, Firebase, Google Cloud, Docker, and Tailwind CSS.</li>
          <li>Integrated Google login and ChatGPT for personalized recommendations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Work History</h3>
        <p>
          <strong>Basic Moving, Brooklyn, NY</strong> — Mover (Summer 2023 & Summer 2024)
        </p>
        <ul className="list-disc ml-6">
          <li>Safely packed, transported, and unpacked fragile items, ensuring damage-free delivery.</li>
          <li>Managed a fast-paced workload with a 3-5 person team.</li>
        </ul>
        <p>
          <strong>NYPL, New York, NY</strong> — STEM Intern (Jun 2019 - Aug 2019)
        </p>
        <ul className="list-disc ml-6">
          <li>Guided STEAM projects and taught fundamental engineering concepts.</li>
          <li>Assisted in developing a water temperature regulation device for safety applications.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold">Associations</h3>
        <p>
          <strong>FIRST Robotics Competition (FRC)</strong> (Jan 2017 – Dec 2018)
        </p>
        <ul className="list-disc ml-6">
          <li>Programmed and operated robots, coordinating with team members for competitive success.</li>
        </ul>
      </section>
    </div>
  )
}

export default About
