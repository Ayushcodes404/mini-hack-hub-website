
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LoadingScreen from '@/components/LoadingScreen';
import HackathonCube from '@/components/HackathonCube';

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLoadComplete = () => {
    setLoading(false);
  };

  const handleEnterSite = () => {
    navigate('/info');
  };

  return (
    <>
      {loading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow flex flex-col items-center justify-center bg-dot-pattern">
            <div className="w-full max-w-lg">
              <HackathonCube />
            </div>
            
            <div className="text-center px-4 mt-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-black">
                Mini <span className="text-primary">Hackathon</span>
              </h1>
              <p className="mt-4 text-xl text-black/70">
                Innovation starts here. Join us for 24 hours of coding, collaboration, and creativity.
              </p>
              
              <div className="mt-10">
                <Button 
                  size="lg" 
                  className="rounded-md shadow px-8 py-6 text-lg bg-black text-white hover:bg-black/80"
                  onClick={handleEnterSite}
                >
                  Enter Site
                </Button>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-sm text-black/50">June 15-16, 2025 • Tech Hub Campus</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;
