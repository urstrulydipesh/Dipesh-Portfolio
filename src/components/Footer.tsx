import Link from 'next/link';
import { Github, Linkedin, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <div className="flex items-center gap-2">
           <Code className="h-6 w-6 text-accent" />
           <p className="text-sm text-muted-foreground">
             &copy; {new Date().getFullYear()} Dipesh Kumar Sah. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/urstrulydipesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
          </Link>
          <Link href="https://linkedin.com/in/urstrulydipesh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
