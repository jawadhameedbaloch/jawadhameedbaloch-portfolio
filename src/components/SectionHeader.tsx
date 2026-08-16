import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-16"
    >
      <span className="text-label uppercase text-accent tracking-[0.15em] block mb-3">
        {eyebrow}
      </span>
      <h2 className="text-display-md text-fg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-body text-fg-secondary max-w-xl">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px bg-gradient-to-r from-border to-transparent" />
    </motion.div>
  );
}
