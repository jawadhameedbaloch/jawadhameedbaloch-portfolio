import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { profile } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="relative py-section px-5 md:px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Contributed"
          subtitle="Professional roles and engineering work."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-px bg-gradient-to-b from-border via-border to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {profile.experience.map((exp, i) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-10 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[120px] top-2 w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 ring-4 ring-bg" />

                {/* Date column */}
                <div className="flex md:flex-col items-baseline md:items-end gap-2 md:gap-0 md:pr-8 md:text-right">
                  <span className="text-caption text-fg-secondary font-mono">{exp.date.split(' — ')[0]}</span>
                  <span className="text-fg-tertiary md:hidden">—</span>
                  <span className="text-caption text-fg-tertiary font-mono">{exp.date.split(' — ')[1]}</span>
                </div>

                {/* Content card */}
                <div className="bg-bg-surface border border-border rounded-xl p-6 md:p-7 md:ml-6">
                  <h3 className="text-heading text-fg">{exp.role}</h3>
                  <p className="text-body-sm text-fg-secondary mt-1">{exp.org}</p>

                  <ul className="mt-5 space-y-3">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="text-body-sm text-fg-secondary leading-relaxed flex gap-3">
                        <span className="text-accent mt-1 shrink-0 text-xs">▪</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology tags */}
                  <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-micro uppercase text-fg-tertiary bg-bg-elevated px-2.5 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
