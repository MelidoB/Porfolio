import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>
      <div className="bg-white shadow p-6 rounded-lg max-w-md mx-auto text-center">
        <p>
          <strong>Email:</strong> 
          <a href="mailto:enrriquebello10@gmail.com" className="text-blue-500 hover:underline ml-1">
            enrriquebello10@gmail.com
          </a>
        </p>
        {/* You can add more contact details if needed */}
      </div>
    </div>
  );
};

export default Contact;
