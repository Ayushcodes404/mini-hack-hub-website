import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin } from 'lucide-react';
import TypewriterText from './TypewriterText';

const Hero = () => {
  const [firstTextComplete, setFirstTextComplete] = useState(false);
  const [secondTextComplete, setSecondTextComplete] = useState(false);

  const scrollToInfo = () => {
    const infoSection = document.getElementById('info-section');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-dot-pattern min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl leading-tight">
          <span className="block">
            <TypewriterText 
              text="Mini Hackathon" 
              speed={100}
              onComplete={() => setFirstTextComplete(true)}
            />
          </span>
          {firstTextComplete && (
            <span className="block text-primary">
              <TypewriterText 
                text="Innovate. Create. Solve." 
                speed={50}
                delay={300}
                onComplete={() => setSecondTextComplete(true)}
              />
            </span>
          )}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
          Join us for 6 hours of exciting coding marathon where you'll learn and solve real-world problems, 
          collaborate with talented peers, and compete for amazing prizes!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 text-black font-medium">
          <div className="flex items-center gap-2 justify-center">
            <CalendarDays className="h-5 w-5" />
            <span>May 12 and 14, 2025</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <MapPin className="h-5 w-5" />
            <span>S G Balekundri Institute of Technology</span>
          </div>
        </div>

        <div className="mt-10">
          <Button size="lg" className="rounded-md shadow px-8 bg-black text-white hover:bg-black/80 transition duration-200" onClick={scrollToInfo}>
            Explore Now
          </Button>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
