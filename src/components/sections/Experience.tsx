
import React from 'react';
import RevealCard from '../ui/RevealCard';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: 'AI Intern',
            company: 'Digital Empowerment Network',
            period: 'July 2025 - Sept 2025',
            description: 'Architected and deployed enterprise-grade generative AI solutions. Specialized in optimizing RAG pipelines for high-accuracy retrieval and reducing LLM latency by 40%.',
            stack: ['Python', 'LangChain', 'OpenAI', 'Vector DB'],
            type: 'Internship'
        },
        {
            title: 'Generative AI Engineer',
            company: 'Freelance & Personal Projects',
            period: '2022 - Present',
            description: 'Developing autonomous agents and scalable AI infrastructures. Delivering custom LLM fine-tuning and end-to-end automation workflows for international clients.',
            stack: ['PyTorch', 'FastAPI', 'Docker', 'React'],
            type: 'Freelance'
        }
    ];

    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-matte-charcoal">
            {/* Background Decoration */}
            <div className="absolute left-0 top-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <span className="text-cyber-cyan font-mono text-sm tracking-[0.2em] uppercase block mb-3">Career Trajectory</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-white">Professional Experience</h2>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="h-full">
                            <RevealCard className="h-full p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-500">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-cyber-cyan">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/5 flex items-center gap-2">
                                            <Calendar className="w-3 h-3" />
                                            {exp.period}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                    <p className="text-amethyst-purple font-medium mb-4">{exp.company}</p>
                                    <p className="text-gray-400 leading-relaxed mb-6 font-light">
                                        {exp.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {exp.stack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyber-cyan/30 rounded-full text-xs text-gray-300 hover:text-cyber-cyan transition-colors duration-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </RevealCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
