import { Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-5 md:px-8 pb-8 pt-12">
      <div className="max-w-content mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center sm:text-left">
            <div className="font-display text-sm font-semibold text-fg mb-1">
              <span className="text-accent">JHB</span>
              <span className="text-fg-tertiary mx-1.5">/</span>
              <span className="text-fg-secondary">{profile.name}</span>
            </div>
            <p className="text-caption text-fg-tertiary">
              {profile.title} — {profile.location}
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-tertiary hover:text-fg transition-colors duration-250"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-tertiary hover:text-fg transition-colors duration-250"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <span className="w-px h-4 bg-border" />
            <span className="text-caption text-fg-tertiary">
              &copy; {year}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
