import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InfoPage = () => {
  return (
    <div>
      <Hero />
      <div id="info-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About the Event</CardTitle>
              <CardDescription>What makes our event special</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This event is all about seniors guiding juniors through the exciting world of hackathons. 
                What makes it special? It’s not just about tips and tricks—it’s about one batch lifting the next. 
                From building standout LinkedIn and GitHub profiles to using AI tools, 
                Firebase, and chatbots, seniors are sharing what they’ve learned the hard way, 
                so juniors can dream bigger and build smarter. It’s knowledge, passed heart to heart.
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
                <h4 className="font-semibold">1. Gain Knowledge </h4>
                <p className="text-muted-foreground">Join us for a 3-hour hands-on session where you’ll explore web development like never before! Learn how to supercharge your projects with AI tools, integrate Firebase, polish your GitHub and LinkedIn profiles, and even build your own chatbot. It’s everything you need to level up—packed into one exciting session!</p>
              </div>
              <div>
                <h4 className="font-semibold">2. Form Team</h4>
                <p className="text-muted-foreground">Pick out your peers to build a team.</p>
              </div>
              <div>
                <h4 className="font-semibold">3. Ideate, Build & Iterate</h4>
                <p className="text-muted-foreground">Select a problem statement from any of the two domains and devise a solution utilizing the knowledge acquired.</p>
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
                  <h3 className="text-2xl font-bold text-primary">Exciting Prizes</h3>
                  <p className="text-xl font-semibold mt-2">Goodies</p>
                  <p className="mt-2 text-muted-foreground">One winner will be picked from each domain</p>
                </div>
              </div>
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
                  PS: You need to be a student of SGBIT (1st year) to participate.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Do I need to know how to code?</h4>
                <p className="text-muted-foreground">
                  No, we will take care of that.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">What should I bring?</h4>
                <p className="text-muted-foreground">
                  Bring your laptop, charger, any special hardware you might need, and your creativity! 
                  This is not mandatory, but make sure each team has at least two laptops.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Is there a registration fee?</h4>
                <p className="text-muted-foreground">
                  No, participation is completely free!
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