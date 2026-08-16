import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile } from '../data/profile';

export default function Projects() {
  return (
    <section id="projects" className="relative py-section px-5 md:px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Production applications I've designed, built, and shipped."
        />

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {profile.projects.map((project, i) => {
            const Wrapper = project.url ? motion.a : motion.div;
            return (
              <Wrapper
                key={project.code}
                {...(project.url ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-interactive group bg-bg-surface border border-border rounded-xl p-6 md:p-7 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-micro uppercase text-accent tracking-[0.12em] block mb-2">
                      {project.tag}
                    </span>
                    <h3 className="text-heading text-fg">{project.name}</h3>
                  </div>
                  {project.url && (
                    <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center shrink-0 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300">
                      <ArrowUpRight
                        size={16}
                        className="text-fg-tertiary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      />
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-body-sm text-fg-secondary leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-micro uppercase text-fg-tertiary bg-bg-elevated px-2.5 py-1 rounded group-hover:text-fg-secondary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
