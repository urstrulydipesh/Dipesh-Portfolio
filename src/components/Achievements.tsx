import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Award, BookOpenCheck, Users, CalendarCheck, Presentation, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const achievements = [
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Membership Chair',
    source: 'USICT ACM Students Chapter (2024 - Present)',
    description: 'Managed recruitment, onboarding, and member records while organizing drives, workshops, and events to enhance engagement and ensure compliance with ACM standards.',
    link: '#', // Add link here
  },
  {
    icon: <Presentation className="h-8 w-8 text-accent" />,
    title: 'Workshops & Speaker Sessions',
    source: 'ACM / IEEE',
    description: 'Conducted impactful workshops & speaker sessions on Web Development, AI/ML, and other emerging technologies, mentoring students and fostering innovation and leadership.',
    link: '#', // Add link here
  },
  {
    icon: <Activity className="h-8 w-8 text-accent" />,
    title: 'Core Organizing Team',
    source: 'ACM Inter-College Hackathon — HashTech',
    description: 'Organized a 24-hour inter-college hackathon with 150+ participants, contributing to event planning, logistics, and smooth execution of the competition.',
    link: '#', // Add link here
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: '3rd Runner-Up',
    source: 'Web Development Competition — ACM HashTech',
    description: 'Secured third runner-up position, showcasing practical web development skills, problem-solving, and innovative solutions under competitive conditions.',
    link: '#', // Add link here
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-accent" />,
    title: 'Data Fundamentals',
    source: 'IBM SkillsBuild',
    description: 'Earned a digital credential in Data Fundamentals (Analytics, Visualization, Data Science), demonstrating proficiency in data handling and analytical concepts.',
    link: '#', // Add link here
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-accent" />,
    title: 'LeetCode Streak',
    source: 'Personal Achievement',
    description: 'Maintained a 200+ day streak on LeetCode, reflecting discipline, consistency, and strengthening of DSA and competitive programming skills.',
    link: '#', // Add link here
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Achievements & Activities
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Recognitions, leadership roles, and community contributions highlighting my growth, impact, and hands-on experience.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item) => (
          <Card
            key={item.title}
            className="relative transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 group"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              {item.icon}
              <div>
                <CardTitle className="font-headline">{item.title}</CardTitle>
                <CardDescription>{item.source}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                asChild
                variant="default"
                size="sm"
                className="transition-all bg-primary text-white hover:bg-yellow-400 hover:text-black hover:scale-110"
              >
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  Visit
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
