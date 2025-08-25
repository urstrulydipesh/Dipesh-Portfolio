import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Real-Time Chat Platform',
    description: 'A real-time chat app with authentication, chat rooms, and instant messaging using React, Node.js, Express, MongoDB, and Socket.IO. Responsive UI with scalable backend.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/urstrulydipesh',
    live: '',
    status: 'Ongoing',
  },
  {
    title: 'Doctor Appointment Website',
    description: 'A full-stack medical appointment booking system with JWT authentication, doctor directory, real-time scheduling, and patient dashboards using the MERN stack and TailwindCSS.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TailwindCSS', 'JWT'],
    github: 'https://github.com/urstrulydipesh/MediCare-Doctor',
    live: '',
    status: 'Ongoing',
  },
  {
    title: 'Movie Recommendation System',
    description: 'Content-based movie recommender using Python, Pandas, and Scikit-Learn with TF-IDF and cosine similarity. Includes a Streamlit frontend for real-time suggestions.',
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'NLP', 'Streamlit'],
    github: 'https://github.com/urstrulydipesh/movie-recommender',
    live: '',
    status: 'Completed',
  },
  {
    title: 'E-commerce Website (InkSloth)',
    description: 'A WordPress-based apparel store using WooCommerce and Elementor. Includes product catalog, cart, authentication, and optimized SEO with responsive UI.',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'SEO'],
    github: 'https://github.com/urstrulydipesh',
    live: 'https://inksloth.com/',
    status: 'Completed',
  },
  {
    title: 'Interactive To-Do List',
    description: 'A responsive task management app with add, edit, delete, and completion tracking using React.js, Tailwind CSS, and Hooks. Deployed on Netlify.',
    tags: ['React', 'TailwindCSS', 'JavaScript', 'Vite'],
    github: 'https://github.com/urstrulydipesh/To-Do-List',
    live: 'https://to-do-list-dipesh.netlify.app/',
    status: 'Completed',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A minimalistic and professional personal portfolio built with Next.js and TailwindCSS. Showcases projects, skills, experience, and allows users to connect via LinkedIn, GitHub, and other profiles.',
    tags: ['Next.js', 'TailwindCSS', 'React', 'JavaScript'],
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
            {/* Status Badge */}
            <div className="absolute top-3 right-3">
              <Badge
                variant={project.status === 'Completed' ? 'default' : 'secondary'}
                className={project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}
              >
                {project.status}
              </Badge>
            </div>

            <CardHeader>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full justify-start gap-4">
                <Button asChild variant="outline" size="sm" className="transition-all hover:bg-yellow-400 hover:text-black">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="transition-all hover:bg-yellow-400 hover:text-black">
                  <Link href={project.live || '#'} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    See Project
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
