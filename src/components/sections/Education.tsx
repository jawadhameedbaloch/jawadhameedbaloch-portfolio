
import { GraduationCap, MapPin } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Education = () => {
    const animatedElements = useScrollAnimation();
    const isVisible = animatedElements.has('education-content');

    return (
        <section id="education" className="py-20 sm:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div
                    id="education-content"
                    data-animate
                    className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-purple-500 font-mono text-sm tracking-wider uppercase mb-2">My Background</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white font-heading">
                            Education
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mt-4 rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-800/40 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-purple-500/20"></div>

                            <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-900/20 group-hover:rotate-6 transition-transform duration-300">
                                    <GraduationCap className="w-8 h-8 text-white" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Bachelor of Science in Software Engineering</h3>
                                    <p className="text-purple-400 font-medium text-lg mb-4">Sukkur IBA University</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        {/* Date removed as per request */}
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                                            Sukkur, Pakistan
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
