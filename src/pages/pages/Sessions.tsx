import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const SessionsPage = () => {
  const sessions = [
    {
      time: '9:00 AM - 9:05 AM',
      title: 'Inauguration',
      description: 'Brief intro about the Mini-Hackathon, its purpose & importance.',
      speaker: 'Organizing Committee',
      track: 'Main'
    },
    {
      time: '9:05 AM - 9:35 AM',
      title: 'Frontend Basics',
      description: 'Basics of frontend web development, open-source AI tools for UI, syntax connection to backend (POST methods, forms, etc.).',
      speaker: 'Nilesh Patil',
      track: 'Workshop'
    },
    {
      time: '9:35 AM - 10:05 AM',
      title: 'Backend with Flask',
      description: 'Firebase & Flask overview, types of databases, frontend-backend connectivity, importance of hackathons for engineering students.',
      speaker: 'Abhay Patil',
      track: 'Workshop'
    },
    {
      time: '10:05 AM - 10:45 AM',
      title: 'Git, GitHub & LinkedIn',
      description: 'Git basics using GUI (repo creation, push, pull, commit), navigating GitHub, importance of LinkedIn for networking.',
      speaker: 'Anshul Halakarni',
      track: 'Workshop'
    },
    {
      time: '10:45 AM - 11:45 AM',
      title: 'Simple Chatbots',
      description: 'Creating simple chatbots for specific tasks, hands-on demo, easy-to-understand explanation for beginners.',
      speaker: 'Ayush Tammannavar',
      track: 'Workshop'
    }
  ];

  const getTrackColor = (track) => {
    switch (track) {
      case 'Main':
        return 'bg-blue-100 text-blue-800';
      case 'Workshop':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderTimelineItem = (session, index) => (
    <div key={index} className="relative pl-10 pb-10">
      {index !== 0 && <div className="timeline-connector"></div>}
      <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
      </div>
      <div className="bg-card rounded-lg shadow-sm border p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <p className="font-mono text-sm text-muted-foreground">{session.time}</p>
          <Badge variant="outline" className={getTrackColor(session.track)}>
            {session.track}
          </Badge>
        </div>
        <h3 className="font-bold text-xl">{session.title}</h3>
        <p className="text-muted-foreground mt-2">{session.description}</p>
        {session.speaker && (
          <p className="mt-2 text-sm font-medium">Speaker: {session.speaker}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Mini-Hackathon Schedule</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Explore our hands-on sessions designed to boost your skills.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Agenda</CardTitle>
          <CardDescription>
            A comprehensive guide to the sessions lined up for the mini-hackathon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {sessions.map((session, index) => renderTimelineItem(session, index))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SessionsPage;