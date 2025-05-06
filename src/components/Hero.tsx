
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Clock } from 'lucide-react';
import TypewriterText from './TypewriterText';

const Hero = () => {
  const [firstTextComplete, setFirstTextComplete] = useState(false);
  const [secondTextComplete, setSecondTextComplete] = useState(false);
  
  return (
    <div className="relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
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
                    speed={100}
                    delay={300}
                    onComplete={() => setSecondTextComplete(true)}
                  />
                </span>
              )}
            </h1>
            <p className="mt-3 max-w-md mx-auto lg:mx-0 text-base text-black/70 sm:text-lg md:mt-5 md:text-xl">
              Join us for an exciting 24-hour coding marathon where you'll solve real-world problems, 
              collaborate with talented peers, and compete for amazing prizes!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mt-6 md:mt-8">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CalendarDays className="h-5 w-5 text-black" />
                <span>June 15-16, 2025</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="h-5 w-5 text-black" />
                <span>Tech Hub Campus</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Clock className="h-5 w-5 text-black" />
                <span>24 Hours</span>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10">
              <Button size="lg" className="rounded-md shadow px-8 bg-black text-white hover:bg-black/80">
                Register Now
              </Button>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="w-full p-8 border-2 border-black rotate-3 transition-transform duration-700 hover:rotate-0">
              <div className="p-8 border-2 border-black -rotate-2 transition-transform duration-700 hover:rotate-0 flex items-center justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  CODE
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
