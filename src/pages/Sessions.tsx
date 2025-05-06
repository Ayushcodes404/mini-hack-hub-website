
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const SessionsPage = () => {
  const day1Sessions = [
    {
      time: '9:00 AM - 10:00 AM',
      title: 'Opening Ceremony',
      description: 'Welcome address, introduction to the hackathon, and kickoff presentations.',
      speaker: 'Organizing Committee',
      track: 'Main'
    },
    {
      time: '10:00 AM - 11:00 AM',
      title: 'Problem Statement Deep Dive',
      description: 'Detailed explanation of all problem statements and evaluation criteria.',
      speaker: 'Industry Partners',
      track: 'Main'
    },
    {
      time: '11:00 AM - 12:00 PM',
      title: 'Team Formation',
      description: 'Networking session for participants to form teams or find team members.',
      speaker: 'Facilitators',
      track: 'Main'
    },
    {
      time: '12:00 PM - 1:00 PM',
      title: 'Lunch Break',
      description: 'Networking lunch with mentors and industry experts.',
      track: 'Break'
    },
    {
      time: '1:00 PM - 2:00 PM',
      title: 'Workshop: Rapid Prototyping',
      description: 'Learn techniques for quickly building and validating your ideas.',
      speaker: 'Sarah Johnson, UX Designer',
      track: 'Workshop'
    },
    {
      time: '2:00 PM - 3:00 PM',
      title: 'Workshop: API Integration',
      description: 'How to leverage existing APIs to enhance your hackathon projects.',
      speaker: 'Mike Chen, Senior Developer',
      track: 'Workshop'
    },
    {
      time: '3:00 PM - 8:00 PM',
      title: 'Hacking Session',
      description: 'Teams work on their projects with mentor support available.',
      track: 'Hacking'
    },
    {
      time: '8:00 PM - 9:00 PM',
      title: 'Dinner',
      description: 'Refuel and network with other participants.',
      track: 'Break'
    },
    {
      time: '9:00 PM - 12:00 AM',
      title: 'Hacking Session Continues',
      description: 'Late night hacking with mentors available for consultation.',
      track: 'Hacking'
    }
  ];

  const day2Sessions = [
    {
      time: '12:00 AM - 8:00 AM',
      title: 'Overnight Hacking',
      description: 'Continue working on projects, with breaks as needed. Snacks and coffee provided.',
      track: 'Hacking'
    },
    {
      time: '8:00 AM - 9:00 AM',
      title: 'Breakfast',
      description: 'Morning meal and networking.',
      track: 'Break'
    },
    {
      time: '9:00 AM - 12:00 PM',
      title: 'Final Hacking Session',
      description: 'Last push to complete projects before submission deadline.',
      track: 'Hacking'
    },
    {
      time: '12:00 PM - 1:00 PM',
      title: 'Lunch Break',
      description: 'Final meal before presentations.',
      track: 'Break'
    },
    {
      time: '1:00 PM - 4:00 PM',
      title: 'Project Presentations',
      description: 'Teams present their solutions to judges and audience.',
      track: 'Main'
    },
    {
      time: '4:00 PM - 5:00 PM',
      title: 'Judging Deliberation',
      description: 'Judges evaluate projects while participants network and relax.',
      track: 'Break'
    },
    {
      time: '5:00 PM - 6:00 PM',
      title: 'Closing Ceremony',
      description: 'Announcement of winners, prize distribution, and closing remarks.',
      speaker: 'Organizing Committee & Sponsors',
      track: 'Main'
    }
  ];

  const getTrackColor = (track: string) => {
    switch (track) {
      case 'Main':
        return 'bg-blue-100 text-blue-800';
      case 'Workshop':
        return 'bg-green-100 text-green-800';
      case 'Hacking':
        return 'bg-purple-100 text-purple-800';
      case 'Break':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderTimelineItem = (session: any, index: number) => (
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
        <h1 className="text-4xl font-bold">Event Schedule</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Explore our jam-packed 24-hour hackathon schedule
        </p>
      </div>

      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="day1">Day 1 (June 15)</TabsTrigger>
          <TabsTrigger value="day2">Day 2 (June 16)</TabsTrigger>
        </TabsList>
        <TabsContent value="day1">
          <Card>
            <CardHeader>
              <CardTitle>Day 1: Kickoff & Ideation</CardTitle>
              <CardDescription>
                The first day focuses on understanding the problems, forming teams, and starting development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {day1Sessions.map((session, index) => renderTimelineItem(session, index))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="day2">
          <Card>
            <CardHeader>
              <CardTitle>Day 2: Development & Presentation</CardTitle>
              <CardDescription>
                The second day is all about finalizing projects and presenting solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {day2Sessions.map((session, index) => renderTimelineItem(session, index))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Workshops & Mentorship</CardTitle>
          <CardDescription>Special sessions to enhance your skills during the event</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold">Mentor Office Hours</h3>
              <p className="mt-2 text-muted-foreground">
                Throughout the hackathon, mentors will be available for one-on-one consultations.
                Sign up for 15-minute slots with experts in various domains.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold">Technical Support</h3>
              <p className="mt-2 text-muted-foreground">
                Stuck on a technical challenge? Our support team will be available 
                at the designated help desk throughout the event.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SessionsPage;
