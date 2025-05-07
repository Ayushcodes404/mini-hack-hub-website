
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProblemsPage = () => {
  const categories = [
    { id: 'all', name: 'All Problems' },
    { id: 'health', name: 'Healthcare' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'education', name: 'Education' },
    { id: 'finance', name: 'Finance' }
  ];
  
  const problems = [
    {
      id: 1,
      title: 'AI-Powered Medical Diagnosis Assistant',
      description: 'Design a system that uses machine learning to assist healthcare professionals in diagnosing common diseases based on patient symptoms and medical history.',
      category: 'health',
      difficulty: 'Hard',
      sponsor: 'MedTech Solutions',
      resources: ['Machine learning APIs', 'Sample anonymized medical data', 'Healthcare professional mentors']
    },
    {
      id: 2,
      title: 'Smart Waste Sorting System',
      description: 'Create an intelligent waste management solution that can identify and sort different types of recyclable materials using computer vision.',
      category: 'sustainability',
      difficulty: 'Medium',
      sponsor: 'GreenEarth Initiative',
      resources: ['Computer vision libraries', 'IoT sensor documentation', 'Environmental impact metrics']
    },
    {
      id: 3,
      title: 'Personalized Learning Platform',
      description: 'Develop an adaptive learning platform that customizes educational content based on individual student performance and learning styles.',
      category: 'education',
      difficulty: 'Medium',
      sponsor: 'EduTech Innovations',
      resources: ['Learning management system APIs', 'Educational content samples', 'Education psychology research papers']
    },
    {
      id: 4,
      title: 'Financial Literacy Game for Teens',
      description: 'Build an engaging mobile game that teaches teenagers essential financial concepts like budgeting, saving, and investing through interactive challenges.',
      category: 'finance',
      difficulty: 'Easy',
      sponsor: 'Future Finance Foundation',
      resources: ['Game development frameworks', 'Financial curriculum materials', 'User experience design mentors']
    },
    {
      id: 5,
      title: 'Remote Health Monitoring System',
      description: 'Create a solution that allows patients with chronic conditions to monitor vital health metrics at home and share data securely with healthcare providers.',
      category: 'health',
      difficulty: 'Medium',
      sponsor: 'ConnectedCare Inc.',
      resources: ['Health monitoring APIs', 'Secure data transmission protocols', 'Patient journey maps']
    },
    {
      id: 6,
      title: 'Carbon Footprint Tracker',
      description: 'Design an application that helps individuals and businesses track and reduce their carbon emissions through daily choices and long-term planning.',
      category: 'sustainability',
      difficulty: 'Easy',
      sponsor: 'Climate Action Network',
      resources: ['Carbon calculation models', 'Sustainability best practices', 'Behavior change frameworks']
    },
    {
      id: 7,
      title: 'Language Learning Through Immersive AR',
      description: 'Develop an augmented reality application that helps users learn new languages by overlaying vocabulary and translations onto real-world objects.',
      category: 'education',
      difficulty: 'Hard',
      sponsor: 'LinguaTech Labs',
      resources: ['AR development kits', 'Language learning methodologies', 'Multi-lingual datasets']
    },
    {
      id: 8,
      title: 'Fraud Detection for Small Businesses',
      description: 'Create a tool that helps small businesses identify potentially fraudulent transactions and activities using pattern recognition and anomaly detection.',
      category: 'finance',
      difficulty: 'Hard',
      sponsor: 'SecureTransaction Systems',
      resources: ['Financial transaction datasets', 'Fraud pattern documentation', 'Risk assessment frameworks']
    }
  ];
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'health':
        return 'bg-blue-100 text-blue-800';
      case 'sustainability':
        return 'bg-green-100 text-green-800';
      case 'education':
        return 'bg-purple-100 text-purple-800';
      case 'finance':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Problem Statements</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Choose from these exciting challenges for your hackathon project
        </p>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex flex-wrap mb-8 h-auto">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="mb-2">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems
                .filter(problem => category.id === 'all' || problem.category === category.id)
                .map((problem) => (
                  <Card key={problem.id} className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle>{problem.title}</CardTitle>
                        <Badge className={getDifficultyColor(problem.difficulty)}>
                          {problem.difficulty}
                        </Badge>
                      </div>
                      <CardDescription>
                        Sponsored by {problem.sponsor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{problem.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">Available Resources:</h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {problem.resources.map((resource, index) => (
                            <li key={index}>{resource}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-4">
                        <Badge className={getCategoryColor(problem.category)}>
                          {getCategoryName(problem.category)}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Submission Guidelines</CardTitle>
          <CardDescription>How to present your solution</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">1. Project Repository</h4>
            <p className="text-muted-foreground">
              Submit your code to a public GitHub repository with clear documentation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold">2. Demo Video</h4>
            <p className="text-muted-foreground">
              Create a 3-5 minute video demonstrating your solution and explaining key features.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold">3. Presentation Deck</h4>
            <p className="text-muted-foreground">
              Prepare a slide deck covering the problem, your approach, solution architecture, and outcomes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold">4. Live Demo</h4>
            <p className="text-muted-foreground">
              Be prepared to give a live demonstration to judges during your presentation slot.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Judging Criteria</CardTitle>
          <CardDescription>How solutions will be evaluated</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold">Innovation (25%)</h4>
              <p className="text-sm text-muted-foreground">
                Originality and creativity of the solution approach
              </p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold">Technical Complexity (25%)</h4>
              <p className="text-sm text-muted-foreground">
                Implementation quality, architecture, and technical skills demonstrated
              </p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold">Impact & Practicality (25%)</h4>
              <p className="text-sm text-muted-foreground">
                Potential real-world impact and feasibility of implementation
              </p>
            </div>
            
            <div className="bg-secondary p-4 rounded-lg">
              <h4 className="font-semibold">Presentation (25%)</h4>
              <p className="text-sm text-muted-foreground">
                Quality of demo, clarity of explanation, and presentation skills
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProblemsPage;
