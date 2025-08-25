import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-5"></div>

      {/* Hero content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fadeInDown">
          Dipesh Kumar Sah
        </h1>

        <p className="mt-4 max-w-2xl font-headline text-xl text-accent sm:text-2xl animate-fadeInUp delay-200">
          Full Stack Developer
        </p>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fadeInUp delay-400">
          Passionate about building modern, scalable web applications. Experienced in the MERN stack,
          with a strong foundation in computer science principles. I specialize in designing efficient
          solutions, integrating APIs, and delivering high-quality user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fadeInUp delay-600">
          <Button
            asChild
            variant="default"
            className="relative overflow-hidden group bg-primary hover:bg-primary/90 transition"
          >
            <Link href="mailto:dipesh.shah546@gmail.com" className="relative z-10 flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
              <span className="absolute inset-0 rounded-md bg-yellow-400 opacity-0 transition duration-300 group-hover:opacity-20 blur-lg"></span>
            </Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="relative overflow-hidden group transition"
          >
            <Link
              href="https://drive.google.com/file/d/13rvj0kmeoOwr67tlYDmfRjsRJc8TgK5c/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
              <span className="absolute inset-0 rounded-md bg-yellow-400 opacity-0 transition duration-300 group-hover:opacity-20 blur-lg"></span>
            </Link>
          </Button>
        </div>

        {/* Social links */}
        <div className="mt-8 flex justify-center gap-6 animate-fadeIn delay-600">
          <Link
            href="https://github.com/urstrulydipesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transform transition duration-300 hover:-rotate-6 hover:scale-110"
          >
            <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-accent" />
          </Link>

          <Link
            href="https://linkedin.com/in/urstrulydipesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transform transition duration-300 hover:rotate-6 hover:scale-110"
          >
            <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
