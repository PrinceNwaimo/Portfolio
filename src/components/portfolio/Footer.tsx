import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
          <div className="text-center xl:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Prince Nwaimo - DevOps & Cloud Engineer. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:nwaimo.prince@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nwaimo-prince"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
