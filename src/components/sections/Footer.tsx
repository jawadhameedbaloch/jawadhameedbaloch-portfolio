
import { Github, Linkedin, Mail } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="py-8 bg-space-black border-t border-white/5 relative z-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-500 text-sm font-medium">
                        © 2025 Jawad Hameed Baloch.
                    </p>

                    <div className="flex space-x-6">
                        <a href="https://github.com/jawadhameedbaloch" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors hover:-translate-y-1 transform duration-200">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/jawadhameedbaloch2/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors hover:-translate-y-1 transform duration-200">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:jawadhameedbaloch@gmail.com" className="text-gray-500 hover:text-red-500 transition-colors hover:-translate-y-1 transform duration-200">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
