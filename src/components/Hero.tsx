import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../data/profile';
import NetworkBackground from './NetworkBackground';

const XIcon = ({ size = 15, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Use scroll position to revert the entry animations when scrolling down
  const { scrollY } = useScroll();
  const leftX = useTransform(scrollY, [0, 800], ["0vw", "-100vw"]);
  const rightX = useTransform(scrollY, [0, 800], ["0vw", "100vw"]);
  const imgY = useTransform(scrollY, [0, 800], ["0%", "100%"]);
  const fadeOut = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-[100svh] overflow-hidden bg-black flex flex-col items-center justify-start md:justify-center pt-12 md:pt-20"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%'
      } as React.CSSProperties}
    >
      {/* Network Effect Layer */}
      <NetworkBackground />

      {/* --- TYPOGRAPHY LAYER --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full h-full overflow-hidden">

        {/* Desktop Split Layout */}
        <div className="hidden md:block relative w-full h-full max-w-[1600px] mx-auto">

          <motion.div
            style={{ x: leftX, opacity: fadeOut }}
            className="absolute top-[32%] -translate-y-1/2 right-[50%] mr-[8vw] lg:mr-[10vw] xl:mr-[11vw] flex items-center justify-end z-10"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="text-[clamp(4.5rem,6.5vw,10rem)] leading-[0.85] font-[900] text-white tracking-tighter whitespace-nowrap">
                JAWAD
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ x: rightX, opacity: fadeOut }}
            className="absolute top-[32%] -translate-y-1/2 left-[50%] ml-[6vw] lg:ml-[8vw] xl:ml-[9vw] flex flex-col justify-center items-start z-10"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col justify-center items-start"
            >
              <div className="text-[clamp(4.5rem,6.5vw,10rem)] leading-[0.85] font-[900] text-white tracking-tighter whitespace-nowrap">
                HAMEED
              </div>
              <div className="text-[clamp(1rem,1.5vw,2rem)] leading-none font-medium text-[#8a8a9a] tracking-[0.55em] mt-3 ml-2 whitespace-nowrap">
                B A L O C H
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ y: imgY, opacity: fadeOut }}
        className="absolute top-0 left-0 w-full h-[100svh] items-end justify-center z-20 pointer-events-none select-none hidden md:flex"
      >
        <motion.img
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
          src="/no-bg.webp"
          alt="Jawad Hameed Baloch - AI Systems Architect"
          className="h-[70vh] md:h-[85vh] w-auto object-contain object-bottom"
          draggable={false}
        />
      </motion.div>

      {/* --- UI LAYER: LEFT CONTENT --- */}
      <motion.div
        className="absolute left-6 md:left-12 lg:left-24 bottom-[15%] max-w-[600px] z-30 pointer-events-auto hidden md:block"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-[1px] bg-accent" />
          <h1 className="text-sm tracking-[0.2em] font-medium text-fg-secondary uppercase whitespace-nowrap" aria-label="Jawad Hameed Baloch - AI Systems Architect">
            GEN AI Engineer & AI System Architect
          </h1>
        </div>

        <p className="text-3xl md:text-4xl font-light text-fg mb-5 leading-tight">
          Building intelligent systems<br />
          that solve <span className="font-medium bg-gradient-to-r from-accent to-[#7c5cfc] bg-clip-text text-transparent">real world problems.</span>
        </p>

        <p className="text-sm text-fg-tertiary tracking-[0.15em] mb-12">
          AI • LLMs • RAG • AGENTIC SYSTEMS
        </p>

        <div className="flex items-center gap-8">
          <a href="#projects" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300">
            <span className="text-sm font-medium tracking-widest text-fg-secondary group-hover:text-fg whitespace-nowrap">VIEW MY WORK</span>
            <ArrowUpRight size={16} className="text-fg-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a href="/resume.pdf" target="_blank" className="group flex items-center gap-3 text-sm font-medium tracking-widest text-fg-secondary hover:text-fg transition-colors whitespace-nowrap">
            DOWNLOAD RESUME
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* --- UI LAYER: RIGHT SOCIAL RAIL --- */}
      <div className="absolute right-6 md:right-12 lg:right-16 top-[65%] -translate-y-1/2 flex flex-col gap-12 z-30 pointer-events-auto hidden md:flex">

        <motion.div
          className="relative flex flex-col w-[160px]"
        >
          <div className="absolute left-0 top-3 bottom-3 w-px bg-border">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
          </div>

          {[
            { icon: Github, label: 'GitHub', href: profile.links.github, colorClass: '' },
            { icon: Linkedin, label: 'LinkedIn', href: profile.links.linkedin, colorClass: '' },
            { icon: XIcon, label: 'X', href: profile.links.twitter, colorClass: '' },
            { icon: Mail, label: 'Email', href: `mailto:${profile.email}`, colorClass: '' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 py-4 pl-6 border-b border-border/40 last:border-0 text-white hover:text-white transition-colors duration-300 relative"
            >
              <div className="absolute left-[-2.5px] w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />

              <item.icon size={15} className={`group-hover:-translate-y-0.5 transition-transform duration-300 ${item.colorClass}`} />
              <span className="text-[11px] font-medium tracking-wide">
                {item.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* --- SCROLL INDICATORS --- */}
      <motion.div
        className="absolute left-8 lg:left-8 bottom-[15%] hidden lg:flex flex-col items-center gap-6 z-30"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-fg-tertiary [writing-mode:vertical-rl] rotate-180">
          SCROLL TO EXPLORE
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent relative">
          <motion.div
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-fg"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-30 pointer-events-none hidden md:flex"
      >
        <div className="w-6 h-10 rounded-full border border-border/60 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-fg"
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-fg-tertiary">
          SCROLL DOWN
        </span>
      </motion.div>

      {/* --- MOBILE STRICT LAYOUT (Only visible on mobile) --- */}
      <div className="relative z-30 flex md:hidden flex-col items-center justify-start w-full pt-0 pb-12 overflow-x-hidden">
        
        {/* MOBILE PORTRAIT + SPLIT NAME */}
        <div className="relative w-full h-[40vh] min-h-[250px] shrink-0 mb-8 flex justify-center items-end pointer-events-none select-none -translate-x-3">
          {/* JAWAD (Left) */}
          <motion.div 
            style={{ x: leftX, opacity: fadeOut }}
            className="absolute top-[45%] -translate-y-1/2 right-[50%] mr-[15vw] flex items-center justify-end z-10"
          >
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
            >
              <h1 className="text-[clamp(1.95rem,8.5vw,3.25rem)] leading-[0.85] font-[900] text-white tracking-tighter whitespace-nowrap">
                JAWAD
              </h1>
            </motion.div>
          </motion.div>

          {/* HAMEED BALOCH (Right) */}
          <motion.div 
            style={{ x: rightX, opacity: fadeOut }}
            className="absolute top-[45%] -translate-y-1/2 left-[50%] ml-[13vw] flex flex-col justify-center items-start z-10"
          >
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col justify-center items-start"
            >
              <h1 className="text-[clamp(1.95rem,8.5vw,3.25rem)] leading-[0.85] font-[900] text-white tracking-tighter whitespace-nowrap">
                HAMEED
              </h1>
              <h2 className="text-[clamp(0.5rem,2.5vw,0.85rem)] leading-none font-medium text-[#8a8a9a] tracking-[0.55em] mt-1 ml-1 whitespace-nowrap">
                B A L O C H
              </h2>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ y: imgY, opacity: fadeOut }} 
            className="w-auto h-[82%] relative z-20 flex justify-center items-end"
          >
            <motion.img 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
              src="/no-bg.webp" 
              alt="Jawad Hameed Baloch - AI Systems Architect"
              className="h-full object-contain object-bottom pointer-events-none"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* LEFT ALIGNED CONTENT CONTAINER */}
        <div className="w-full px-6 flex flex-col items-start mb-8 max-w-[400px]">
          {/* ROLE */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[1px] bg-accent" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-medium text-fg-secondary uppercase whitespace-nowrap">
              GEN AI Engineer & AI System Architect
            </span>
          </div>

          {/* TAGLINE */}
          <p className="text-xl sm:text-2xl font-light text-fg mb-4 leading-tight text-left">
            Building intelligent systems<br />
            that solve <span className="font-medium bg-gradient-to-r from-accent to-[#7c5cfc] bg-clip-text text-transparent">real world problems.</span>
          </p>

          {/* CATEGORY LINE */}
          <p className="text-[9px] sm:text-[10px] text-fg-tertiary tracking-[0.15em] text-left">
            AI • LLMs • RAG • AGENTIC SYSTEMS
          </p>
        </div>

        {/* BUTTONS (Row) */}
        <div className="flex flex-row items-center justify-center gap-3 w-full max-w-[400px] px-6 mb-6">
          <a href="#projects" className="group flex-1 flex items-center justify-center gap-1.5 px-2 py-4 rounded-2xl border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300">
            <span className="text-[10px] font-medium tracking-widest text-fg-secondary group-hover:text-fg whitespace-nowrap">VIEW MY WORK</span>
            <ArrowUpRight size={14} className="text-fg-secondary group-hover:text-accent" />
          </a>

          <a href="/resume.pdf" target="_blank" className="group flex-1 flex items-center justify-center gap-1.5 px-2 py-4 rounded-2xl border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300">
            <span className="text-[10px] font-medium tracking-widest text-fg-secondary group-hover:text-fg whitespace-nowrap">RESUME</span>
            <Download size={14} className="text-fg-secondary group-hover:text-fg" />
          </a>
        </div>

        {/* SOCIAL LINKS (2x2) */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-[400px] px-6 mb-12">
          {[
            { icon: Github, label: 'GitHub', href: profile.links.github },
            { icon: Linkedin, label: 'LinkedIn', href: profile.links.linkedin },
            { icon: XIcon, label: 'X', href: profile.links.twitter },
            { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-4 py-4 rounded-2xl border border-border/40 hover:border-accent/40 bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <item.icon size={14} className="text-white" />
                <span className="text-[11px] font-medium tracking-wide text-white">
                  {item.label}
                </span>
              </div>
              <ArrowUpRight size={12} className="text-fg-tertiary group-hover:text-white" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
