import Link from "next/link";
import { Github, Linkedin, Code, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-accent" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dipesh Kumar Sah. All rights
            reserved.
          </p>
        </div>

        {/* Right side - social links */}
        <div className="flex gap-4">
          {/* GitHub */}
          <Link
            href="https://github.com/urstrulydipesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform hover:scale-125 hover:rotate-6 active:scale-95"
          >
            <Github className="h-6 w-6 text-muted-foreground hover:text-accent" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/urstrulydipesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:scale-125 hover:rotate-6 active:scale-95"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-accent" />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/yourstruly_dipesh/" // <-- update here
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-transform hover:scale-125 hover:rotate-6 active:scale-95"
          >
            <Instagram className="h-6 w-6 text-muted-foreground hover:text-accent" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
