
import { useRef, useState } from 'react';



import { Mail, MapPin, Send } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';


const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // ... (Keep existing logic or simulate)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding bg-space-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-electric-violet/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-cyber-cyan font-mono text-sm tracking-wider uppercase mb-3 text-center">Get in Touch</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white font-display">
                        Contact Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

                    {/* Left: Info Card */}
                    <div className="bento-card p-8 md:p-10 flex flex-col justify-between min-h-[400px] md:min-h-[500px] relative overflow-hidden order-2 lg:order-1">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Let's build the<br /><span className="text-electric-violet">future together.</span></h2>
                            <p className="text-gray-400 text-lg mb-8 md:mb-12">
                                Ready to start a project or just want to say hi? I'm always open to discussing new AI ventures and opportunities.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:jawadhameedbaloch@gmail.com" className="flex items-center gap-4 text-white group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-base md:text-lg font-medium break-all md:break-normal">jawadhameedbaloch@gmail.com</span>
                                </a>
                                <a href="https://wa.me/923269236946" className="flex items-center gap-4 text-white group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                        <WhatsAppIcon className="w-5 h-5" />
                                    </div>
                                    <span className="text-base md:text-lg font-medium">+92 326 9236946</span>
                                </a>
                                <div className="flex items-center gap-4 text-white group cursor-default">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="text-base md:text-lg font-medium">Larkana, Pakistan</span>
                                </div>
                            </div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-electric-violet/20 blur-[100px] rounded-full pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/20 blur-[100px] rounded-full pointer-events-none"></div>
                    </div>

                    {/* Right: Form Card */}
                    <div className="bento-card p-8 md:p-10 order-1 lg:order-2">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 ml-1">NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className="w-full bg-space-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-electric-violet transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 ml-1">EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="w-full bg-space-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-electric-violet transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 ml-1">MESSAGE</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    className="w-full bg-space-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-electric-violet transition-colors resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full neo-button flex items-center justify-center gap-2 group">
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="text-green-400 text-center font-medium animate-fade-in-up">
                                    Message sent successfully!
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
