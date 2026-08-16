import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { profile } from '../data/profile';

const categories = Object.entries(profile.skills);

export default function Skills() {
  return (
    <section id="skills" className="relative py-section px-5 md:px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Stack"
          subtitle="Technologies and tools I work with regularly."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {categories.map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: ci * 0.06 }}
            >
              <h3 className="text-label uppercase text-accent tracking-[0.12em] mb-4 pb-3 border-b border-border">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
