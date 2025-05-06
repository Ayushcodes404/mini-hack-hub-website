
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
            <span className="block">Mini Hackathon</span>
            <span className="block text-primary">Innovate. Create. Solve.</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-black/70 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join us for an exciting 24-hour coding marathon where you'll solve real-world problems, 
            collaborate with talented peers, and compete for amazing prizes!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 md:mt-8">
            <div className="flex items-center justify-center gap-2">
              <CalendarDays className="h-5 w-5 text-black" />
              <span>June 15-16, 2025</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-black" />
              <span>Tech Hub Campus</span>
            </div>
            <div className="flex items-center justify-center gap-2">
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
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
