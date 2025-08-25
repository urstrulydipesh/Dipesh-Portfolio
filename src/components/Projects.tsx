import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Real-Time Chat Platform',
    description:
      'A real-time chat app with authentication, chat rooms, and instant messaging using React, Node.js, Express, MongoDB, and Socket.IO. Responsive UI with scalable backend.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/urstrulydipesh',
    live: '',
    status: 'Ongoing',
  },
  {
    title: 'Doctor Appointment Website',
    description:
      'A full-stack medical appointment booking system with JWT authentication, doctor directory, real-time scheduling, and patient dashboards using the MERN stack and TailwindCSS.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TailwindCSS', 'JWT'],
    github: 'https://github.com/urstrulydipesh/MediCare-Doctor',
    live: '',
    status: 'Ongoing',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'Content-based movie recommender using Python, Pandas, and Scikit-Learn with TF-IDF and cosine similarity. Includes a Streamlit frontend for real-time suggestions.',
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'NLP', 'Streamlit'],
    github: 'https://github.com/urstrulydipesh/movie-recommender',
    live: '',
    status: 'Completed',
  },
  {
    title: 'E-commerce Website (InkSloth)',
    description:
      'A WordPress-based apparel store using WooCommerce and Elementor. Includes product catalog, cart, authentication, and optimized SEO with responsive UI.',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'SEO'],
    github: 'https://github.com/urstrulydipesh',
    live: 'https://inksloth.com/',
    status: 'Completed',
  },
  {
    title: 'Interactive To-Do List',
    description:
      'A responsive task management app with add, edit, delete, and completion tracking using React.js, Tailwind CSS, and Hooks. Deployed on Netlify.',
    tags: ['React', 'TailwindCSS', 'JavaScript', 'Vite'],
    github: 'https://github.com/urstrulydipesh/To-Do-List',
    live: 'https://to-do-list-dipesh.netlify.app/',
    status: 'Completed',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A personal portfolio website showcasing my projects, experience, skills, and achievements, built with React and TailwindCSS, fully responsive and interactive.',
    tags: ['React', 'TailwindCSS', 'Next.js'],
    github: 'https://github.com/urstrulydipesh/Dipesh-Portfolio',
    live: 'https://dipesh-sah-portfolio.netlify.app/',
    status: 'Completed',
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
          A showcase of diverse projects that demonstrate my expertise in building scalable, real-world applications with modern technologies.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="relative flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
          >
            {/* Header with title and status badge */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start px-4 pt-4">
              <CardHeader className="p-0 flex-1">
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              {/* Status Badge */}
              <div className="mt-2 sm:mt-0">
                <Badge
                  variant={project.status === 'Completed' ? 'default' : 'secondary'}
                  className={project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}
                >
                  {project.status}
                </Badge>
              </div>
            </div>

            {/* Tags */}
            <CardContent className="flex-grow px-4 pt-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            {/* Footer buttons */}
            <CardFooter className="flex w-full justify-start gap-4 px-4 pb-4">
              <Button asChild variant="outline" size="sm">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={project.live || '#'} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  See Project
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
