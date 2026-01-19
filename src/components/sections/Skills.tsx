import SkillIcons from '../ui/SkillIcons';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-matte-charcoal">
      {/* Background Decoration */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="text-cyber-cyan font-mono text-sm tracking-wider uppercase mb-3">Core Competencies</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white font-display">
            Technical Arsenal
          </h2>
        </div>

        <div className="w-full">
          <SkillIcons />
        </div>
      </div>
    </section>
  );
};

export default Skills;
