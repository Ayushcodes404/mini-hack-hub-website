
import React from 'react';

const HackathonCube = () => {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
      <div className="p-8 border-2 border-black rotate-12 transition-transform duration-700 hover:rotate-0">
        <div className="p-8 border-2 border-black -rotate-6 transition-transform duration-700 hover:rotate-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            LEARN CODE CREATE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HackathonCube;
