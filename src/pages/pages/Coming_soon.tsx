import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-600 mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;