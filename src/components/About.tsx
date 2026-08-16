import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="relative py-section px-5 md:px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader eyebrow="ABOUT" title="Building AI That Ships" />

        <div className="mt-12 md:mt-20 flex flex-col items-start">

          {/* Text Content */}
          <div className="max-w-[760px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xl md:text-2xl lg:text-[1.7rem] text-fg leading-relaxed font-light mb-8">
                I engineer production-grade AI systems from retrieval-augmented generation and intelligent search to autonomous agentic workflows. I design scalable architectures and build reliable AI applications using Python, modern LLM frameworks, and machine learning technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <p className="text-base md:text-lg text-fg-secondary leading-relaxed font-light mb-16">
                I work across the full AI engineering lifecycle — architecture, backend systems, model integration, APIs, frontend interfaces, and deployment. My focus is turning complex AI capabilities into practical products that are reliable, scalable, and built to solve real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <h3 className="text-[10px] md:text-xs font-semibold uppercase text-fg-tertiary tracking-[0.2em] mb-6">
                CURRENT FOCUS
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  'LLM Engineering',
                  'RAG Systems',
                  'Agentic Workflows',
                  'Production AI',
                  'AI Systems Architecture'
                ].map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 text-xs md:text-sm font-medium tracking-wide text-fg-secondary border border-border/60 rounded-full bg-white/5 hover:border-accent/40 hover:text-fg transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
