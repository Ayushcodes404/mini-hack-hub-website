
import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InfoPage = () => {
  return (
    <div>
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About the Hackathon</CardTitle>
              <CardDescription>What makes our event special</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our Mini Hackathon is designed to bring together talented developers, 
                designers, and problem solvers for an intense 24-hour coding marathon. 
                You'll work in teams to tackle real-world challenges, learn new skills, 
                and create innovative solutions that address pressing issues.
              </p>
              <p className="mt-4 text-muted-foreground">
                Whether you're a seasoned developer or just starting your coding journey, 
                this hackathon offers something for everyone - mentorship, workshops, 
                networking opportunities, and a chance to win exciting prizes!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>The hackathon format</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">1. Form Teams</h4>
                <p className="text-muted-foreground">Teams of 2-4 members will collaborate throughout the event.</p>
              </div>
              <div>
                <h4 className="font-semibold">2. Choose a Problem</h4>
                <p className="text-muted-foreground">Pick from our curated list of problem statements.</p>
              </div>
              <div>
                <h4 className="font-semibold">3. Build & Iterate</h4>
                <p className="text-muted-foreground">Develop your solution with help from our mentors.</p>
              </div>
              <div>
                <h4 className="font-semibold">4. Present</h4>
                <p className="text-muted-foreground">Showcase your solution to our judges and audience.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Prizes & Rewards</CardTitle>
              <CardDescription>What you can win</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary/50 p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-primary">1st Place</h3>
                  <p className="text-xl font-semibold mt-2">$3,000</p>
                  <p className="mt-2 text-muted-foreground">Plus mentorship opportunities and tech gadgets</p>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-primary">2nd Place</h3>
                  <p className="text-xl font-semibold mt-2">$1,500</p>
                  <p className="mt-2 text-muted-foreground">Plus software licenses and swag bags</p>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-primary">3rd Place</h3>
                  <p className="text-xl font-semibold mt-2">$500</p>
                  <p className="mt-2 text-muted-foreground">Plus tech books and subscription packages</p>
                </div>
              </div>
              
              <p className="mt-6 text-center text-muted-foreground">
                Special category prizes also available for Most Innovative Solution, Best UI/UX, and People's Choice Award!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
              <CardDescription>Common questions about our hackathon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Who can participate?</h4>
                <p className="text-muted-foreground">
                  Anyone with an interest in technology and problem-solving can join! 
                  Students, professionals, and hobbyists are all welcome.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">Do I need to know how to code?</h4>
                <p className="text-muted-foreground">
                  Basic programming knowledge is helpful, but teams need diverse skills! 
                  Designers, project managers, and subject matter experts are also valuable.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">What should I bring?</h4>
                <p className="text-muted-foreground">
                  Bring your laptop, charger, any special hardware you might need, and your creativity! 
                  We'll provide food, drinks, and a comfortable space to work.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold">Is there a registration fee?</h4>
                <p className="text-muted-foreground">
                  No, participation is completely free! We just ask that you register in advance 
                  so we can plan accommodations accordingly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
