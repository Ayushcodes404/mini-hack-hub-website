
import React, { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * (15 - 5) + 5;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          if (onLoadComplete) {
            setTimeout(() => {
              onLoadComplete();
            }, 500);
          }
          return 100;
        }
        
        return newProgress;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, [onLoadComplete]);
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="relative">
        <Loader className="w-16 h-16 text-white animate-spin" />
      </div>
      <h1 className="mt-8 text-4xl font-bold text-white">
        Mini Hackathon 
      </h1>
      <div className="w-64 h-1 mt-8 overflow-hidden bg-white/20 rounded-full">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-white/70">{Math.floor(progress)}%</p>
    </div>
  );
};

export default LoadingScreen;
