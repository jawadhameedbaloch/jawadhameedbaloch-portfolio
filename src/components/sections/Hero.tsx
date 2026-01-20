
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import NeuralNetwork from '../ui/NeuralNetwork';
import TypewriterEffect from '../ui/TypewriterEffect';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-matte-charcoal">
            <NeuralNetwork />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/10 hover:border-cyber-cyan/50 transition-colors"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-cyan"></span>
                        </span>
                        <span className="text-gray-300 text-sm font-medium tracking-wide">Available for New Opportunities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[1.7rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4 md:mb-8 whitespace-nowrap overflow-visible flex justify-center w-full"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyber-cyan to-amethyst-purple bg-300% animate-gradient px-4 pb-2">
                            JAWAD HAMEED BALOCH
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
                    >
                        Crafting <span className="text-white font-medium">Intelligent Systems</span> &{' '}
                        <TypewriterEffect texts={['Generative AI Solutions', 'Scalable Architectures', 'Future Tech']} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <div className="flex items-center gap-4 p-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors">
                            {[
                                { icon: Github, href: "https://github.com/jawadhameedbaloch", color: "hover:bg-gray-800" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/jawadhameedbaloch2/", color: "hover:bg-[#0077b5]" },
                                { icon: Mail, href: "mailto:jawadhameedbaloch@gmail.com", color: "hover:bg-red-600" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 bg-white/5 rounded-full hover:text-white transition-all duration-300 border border-transparent hover:border-white/30 ${social.color}`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        <a href="/Jawad Hameed Baloch-Resume.pdf" target="_blank" className="relative group px-8 py-4 bg-gradient-to-r from-cyber-cyan to-amethyst-purple rounded-full font-bold text-white overflow-hidden shadow-lg shadow-cyber-cyan/25 hover:shadow-cyber-cyan/40 transition-shadow duration-300">
                            <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left" />
                            <span className="relative flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                Get Resume
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Gradient Overlay for Depth */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-matte-charcoal to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
