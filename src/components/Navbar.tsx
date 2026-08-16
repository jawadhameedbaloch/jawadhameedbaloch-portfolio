import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const LINKS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop / Mobile Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-bg/80 backdrop-blur-md' : 'py-6 bg-transparent'
        }`}
      >
        <div className="w-full px-5 md:px-12 flex items-center justify-between">
          
          {/* Brand */}
          <button
            onClick={() => go('top')}
            className="flex items-center gap-4 group"
            aria-label="Scroll to top"
          >
            <div className="w-[42px] h-[42px] border border-fg/80 rounded-[10px] flex items-center justify-center group-hover:bg-fg/5 transition-colors duration-300">
              <span className="font-sans font-bold text-fg tracking-wide text-[15px]">JHB</span>
            </div>
            <span className="hidden sm:block text-[12px] font-bold tracking-[0.15em] text-fg uppercase group-hover:text-accent transition-colors duration-300">
              JAWAD HAMEED BALOCH
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${
                  active === l.id ? 'text-fg' : 'text-fg-secondary hover:text-fg'
                }`}
              >
                {l.label}
                {/* Active indicator dot */}
                {active === l.id && (
                  <motion.div 
                    layoutId="navIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-fg rounded-full" 
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => go('contact')}
              className="hidden md:flex items-center gap-2 bg-[#f2f3f7] text-[#0a0a0a] rounded-full px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              LET'S TALK
              <ArrowUpRight size={14} />
            </button>
            
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-fg-secondary hover:text-fg transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-menu"
          >
            <nav className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => go(l.id)}
                  className={`text-left py-4 text-heading font-display transition-colors ${
                    active === l.id ? 'text-fg' : 'text-fg-secondary hover:text-fg'
                  }`}
                >
                  <span className="text-label text-accent mr-3">0{i + 1}</span>
                  {l.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.05 + LINKS.length * 0.05 }}
                className="mt-6 pt-6 border-t border-border"
              >
                <button
                  onClick={() => go('contact')}
                  className="w-full flex items-center justify-center gap-2 bg-[#f2f3f7] text-[#0a0a0a] rounded-full px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
                >
                  LET'S TALK
                  <ArrowUpRight size={16} />
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
