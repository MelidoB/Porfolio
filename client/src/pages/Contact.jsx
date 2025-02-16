import React from 'react';

function Contact() {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Information</h2>
      <div className="space-y-4 text-lg">
        <p>
          <strong>Email:</strong>{" "}
          <a className="text-blue-500 hover:underline" href="mailto:enrriquebello10@gmail.com">
            enrriquebello10@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> (646) 427-8606
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/m%C3%A9lido-bello-4405b3191/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/mélido-bello-4405b3191
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a className="text-blue-500 hover:underline" href="https://github.com/MelidoB" target="_blank" rel="noopener noreferrer">
            github.com/MelidoB
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
