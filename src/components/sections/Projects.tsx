import { Github, ExternalLink, Bot, Shield, ArrowUpRight, ScanEye, Code2 } from 'lucide-react';
import RevealCard from '../ui/RevealCard';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'ATS Resume Maker',
            description: 'Engineered a completely free, AI-powered web application that analyzes and optimizes unstructured resume data for 100% Applicant Tracking System (ATS) compliance. Designed with a frictionless, no-signup architecture, the platform empowers job seekers to seamlessly bypass screening bots and maximize their interview callback rates.',
            tech: ['React', 'TypeScript', 'Tailwind', 'nodejs', 'groqapi'],
            link: 'https://atsresumemaker.net/',
            icon: <ScanEye className="w-8 h-8 text-cyber-cyan" />,
            gradient: "from-purple-500/20 to-cyan-500/20"
        },
        {
            title: 'VYNTEX',
            description: 'Full-stack AI application that lets developers chat with any GitHub repository using natural language. Paste a repo URL and the system clones it, chunks the source, generates embeddings, and builds a semantic vector index — powering a complete RAG pipeline that returns context-grounded answers with exact file paths and line number references.',
            tech: ['React', 'TypeScript', 'FastAPI', 'ChromaDB', 'sentence-transformers', 'Groq API'],
            link: 'https://getvyntex.vercel.app/',
            icon: <Code2 className="w-8 h-8 text-cyber-cyan" />,
            gradient: "from-cyan-500/20 to-blue-500/20"
        },
        {
            title: 'SecureVPN Protocol',
            description: 'High-performance, custom-built VPN solution focusing on zero-logging and military-grade encryption. Features optimized routing algorithms for minimal latency.',
            tech: ['Rust', 'Networking', 'Cryptography', 'Linux'],
            link: '#',
            icon: <Shield className="w-8 h-8 text-amethyst-purple" />,
            gradient: "from-pink-500/20 to-purple-500/20"
        }
    ];

    return (
        <section id="projects" className="section-padding relative bg-matte-charcoal overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-cyber-cyan font-mono text-sm tracking-widest uppercase block mb-2">Innovation Lab</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-white">Featured Projects</h2>
                    </motion.div>

                    <motion.a
                        href="https://github.com/jawadhameedbaloch"
                        target="_blank"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyber-cyan/30 transition-all duration-300"
                    >
                        <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                        <span className="text-gray-300 group-hover:text-white font-medium">View Archive</span>
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-cyber-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${index === 0 ? 'md:col-span-2' : ''} h-full`}
                        >
                            <RevealCard className="h-full flex flex-col hover:shadow-2xl hover:shadow-cyber-cyan/10 transition-all duration-500 group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative p-8 flex flex-col h-full z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl group-hover:scale-110 transition-transform duration-300">
                                            {project.icon}
                                        </div>
                                        {project.link !== '#' && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink className="w-6 h-6" />
                                            </a>
                                        )}
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-3 font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1.5 text-xs font-medium text-cyber-cyan bg-cyber-cyan/10 rounded-full border border-cyber-cyan/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </RevealCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
