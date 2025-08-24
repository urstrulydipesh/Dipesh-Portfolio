import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center text-center">
      <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Dipesh Sah
      </h1>
      <p className="mt-4 max-w-2xl font-headline text-xl text-accent sm:text-2xl">
        Full Stack Developer
      </p>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Passionate about building modern web applications and solving complex problems. I have experience with the MERN stack and a strong foundation in computer science principles.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
          <Link href="mailto:dipeshsah@example.com">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="#" target="_blank" download>
             <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Link>
        </Button>
      </div>
      <div className="mt-8 flex justify-center gap-6">
        <Link href="https://github.com/urstrulydipesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-accent" />
        </Link>
        <Link href="https://linkedin.com/in/urstrulydipesh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-accent" />
        </Link>
      </div>
    </section>
  );
}
