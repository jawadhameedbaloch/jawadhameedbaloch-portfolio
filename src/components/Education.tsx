import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { profile } from '../data/profile';

export default function Education() {
  return (
    <section id="education" className="relative py-section px-5 md:px-8">
      <div className="max-w-content mx-auto">
        <SectionHeader eyebrow="Education" title="Academic Background" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="bg-bg-surface border border-border rounded-xl p-6 md:p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <span className="text-label uppercase text-fg-tertiary tracking-[0.1em]">Degree</span>
            </div>
            <h3 className="text-heading text-fg">{profile.education.program}</h3>
            <p className="text-body-sm text-fg-secondary mt-2">{profile.education.school}</p>
            <p className="text-caption text-fg-tertiary font-mono mt-2">{profile.education.date}</p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-bg-surface border border-border rounded-xl p-6 md:p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-violet/10 flex items-center justify-center">
                <Award size={20} className="text-accent-violet" />
              </div>
              <span className="text-label uppercase text-fg-tertiary tracking-[0.1em]">Certifications</span>
            </div>
            <ul className="space-y-3">
              {profile.certifications.map((cert) => (
                <li key={cert} className="text-body-sm text-fg-secondary flex gap-3">
                  <span className="text-accent shrink-0 mt-0.5">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
