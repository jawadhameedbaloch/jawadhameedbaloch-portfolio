import { useState } from 'react';

import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-matte-charcoal/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center justify-center w-16 h-11 bg-transparent border-2 border-white rounded-lg hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group">
                        <span className="text-xl font-bold font-display text-white tracking-tighter group-hover:scale-110 transition-transform">
                            JHB<span className="text-cyber-cyan">.</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-cyan transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-white hover:bg-white/10 transition-all hover:border-cyber-cyan/50 hover:shadow-lg hover:shadow-cyber-cyan/20"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-matte-charcoal border-t border-white/10 p-6 space-y-4 shadow-2xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-xl font-bold text-gray-400 hover:text-white transition-colors font-display"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
