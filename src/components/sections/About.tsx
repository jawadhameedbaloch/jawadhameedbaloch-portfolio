




const About = () => {
    return (
        <section id="about" className="section-padding bg-space-black relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">About Me</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Discover the engineer behind the code.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Card 1: Main Bio - Spans 2 cols on mobile and desktop */}
                    <div className="bento-card p-8 col-span-2 md:col-span-2 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-4 font-heading">Generative AI Engineer</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I specialize in building intelligent, scalable systems. Bridging the gap between complex AI models and user-friendly applications is my passion. With expertise in <span className="text-electric-violet font-semibold">Python, LLMs</span>, and modern web tech, I turn concepts into reality.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'Generative AI', 'React', 'RAG', 'Machine Learning'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-sm text-starlight border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Photo - Spans 2 cols on mobile, 1 on desktop */}
                    <div className="bento-card p-2 h-64 md:h-auto overflow-hidden relative group col-span-2 md:col-span-1">
                        <img
                            src="/jawad-hameed-baloch-ai-engineer.png"
                            alt="Jawad Hameed Baloch - AI Systems Architect"
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <p className="text-white font-bold">Jawad Hameed Baloch</p>
                        </div>
                    </div>

                    {/* Card 3: Stats - Default span 1 (side-by-side on mobile) */}
                    <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[160px] relative z-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <h4 className="text-4xl md:text-5xl font-bold text-cyber-cyan mb-2">2+</h4>
                        <p className="text-white font-bold uppercase tracking-wider text-sm md:text-base visible opacity-100">Years Exp</p>
                    </div>

                    {/* Card 4: Projects Count - Default span 1 (side-by-side on mobile) */}
                    <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[160px] relative z-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <h4 className="text-4xl md:text-5xl font-bold text-amethyst-purple mb-2">10+</h4>
                        <p className="text-white font-bold uppercase tracking-wider text-sm md:text-base visible opacity-100">Projects</p>
                    </div>

                    {/* Card 5: Focus - Spans 2 cols on mobile, 1 on desktop */}
                    <div className="bento-card p-8 col-span-2 md:col-span-1 flex flex-col justify-center bg-gradient-to-br from-electric-violet/20 to-transparent">
                        <h3 className="text-xl font-bold text-white mb-2">Current Focus</h3>
                        <p className="text-gray-400 text-sm">Exploring Multi-Agent Systems and Advanced RAG Architectures.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
