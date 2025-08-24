import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Blog Express',
    description: 'A full-featured blogging platform built with the MERN stack. It includes user authentication, CRUD operations for posts, and a modern, responsive UI.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    github: 'https://github.com/urstrulydipesh',
    live: '',
  },
  {
    title: 'iNotebook',
    description: 'A cloud-based note-taking application that allows users to securely store and manage their notes online. Features user authentication and a clean interface.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/urstrulydipesh',
    live: '',
  },
  {
    title: 'Real-Time Code Editor',
    description: 'A collaborative code editor that enables multiple users to write and edit code in real-time. Built using Socket.io for seamless synchronization.',
    tags: ['React', 'Socket.io', 'Node.js'],
    github: 'https://github.com/urstrulydipesh',
    live: '',
  },
];

export function Projects() {
  return (
    <section id="projects" className="container bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          My Projects
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          A selection of projects I've worked on.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full justify-start gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                {project.live && (
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                       <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
