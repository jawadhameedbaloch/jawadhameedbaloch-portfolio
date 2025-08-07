import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink,
  Code,
  Database,
  Bot,
  Cpu,
  Calendar,
  MapPin,
  ChevronDown,
} from 'lucide-react';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

// Typewriter Effect Component
const TypewriterEffect = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex % texts.length];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span className="text-blue-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Scroll Animation Hook
const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return animatedElements;
};


function App() {
  const animatedElements = useScrollAnimation();

  const skills = [
    'Python', 'Streamlit', 'Generative AI', 'Large Language Models (LLMs)', 
    'Prompt Engineering', 'HTML/CSS', 'Java', 'C#', 'REST APIs', 
    'Git & GitHub', 'NumPy & Pandas', 'PyTorch', 'Hugging Face Transformers', 
    'VS Code', 'OpenAI API'
  ];

  const projects = [
    {
      title: 'HireSight - Be Seen Be Hired',
      description: 'An AI-powered resume and job description matching platform for students and job seekers.',
      tech: ['React', 'Tailwind', 'Grok API', 'Supabase', 'jsPDF'],
      link: 'https://thehiresight.netlify.app',
      icon: <Bot className="w-6 h-6" />,
      showLink: true
    },
    {
      title: 'Mindsight',
      description: 'Personal AI assistant trained on local system data to perform file access, queries, and automation.',
      tech: ['Python', 'NLP', 'Voice Recognition', 'OS Integration'],
      link: '#',
      icon: <Cpu className="w-6 h-6" />,
      showLink: false
    },
    {
      title: 'AI Productivity Tracker',
      description: 'Browser-based app that tracks screen time, productivity goals, and sends reminders.',
      tech: ['JavaScript', 'Python', 'HTML/CSS', 'Local Storage', 'Notifications API'],
      link: '#',
      icon: <Database className="w-6 h-6" />,
      showLink: false
    },
    {
      title: 'Flower Classifier AI App',
      description: 'Web app that classifies flower images using a trained model with real-time predictions.',
      tech: ['TensorFlow', 'Keras', 'Streamlit', 'Python', 'NumPy'],
      link: '#',
      icon: <Code className="w-6 h-6" />,
      showLink: false
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Jawad Hameed Baloch
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 h-8 sm:h-10 md:h-12">
              <TypewriterEffect texts={['Professional Generative AI Engineer', 'Python Developer', 'AI Enthusiast']} />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              I'm a Generative AI Engineer passionate about building intelligent applications using Python and cutting-edge AI models. 
              I specialize in creating real-world solutions that blend automation, creativity, and deep learning.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a href="mailto:jawadhameedbaloch@gmail.com" className="bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto text-center">
              Get In Touch
            </a>
            <a href="#projects" className="border border-gray-600 hover:border-blue-400 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center">
              View Projects
            </a>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="about-content"
            data-animate
            className={`transition-all duration-1000 ${
              animatedElements.has('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-blue-400">Building the Future with AI</h3>
                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
                  As a dedicated Generative AI Engineer, I bridge the gap between complex AI technologies and practical applications. 
                  My journey in software engineering has evolved into a specialization in artificial intelligence, where I create 
                  solutions that not only solve problems but anticipate future needs.
                </p>
                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
                  From developing AI-powered platforms like HireSight to creating personal assistants like Mindsight, 
                  I focus on making AI accessible and beneficial for everyone. My approach combines technical expertise 
                  with creative problem-solving to deliver impactful results.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0">
                <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                    <AnimatedCounter end={4} />+
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">AI Projects</div>
                </div>
                <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                    <AnimatedCounter end={15} />+
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">Technologies</div>
                </div>
                <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                    <AnimatedCounter end={2} />+
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
                </div>
                <div className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
                    <AnimatedCounter end={100} />%
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-950 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="relative">
            <div className="flex animate-scroll space-x-4 md:space-x-8 whitespace-nowrap">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-blue-500/30 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 flex-shrink-0"
                >
                  <span className="text-blue-300 font-medium text-sm md:text-base">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="projects-content"
            data-animate
            className={`transition-all duration-1000 ${
              animatedElements.has('projects-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group"
                >
                  <div className="p-4 md:p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 p-2 rounded-lg mr-4 group-hover:bg-blue-500 transition-colors">
                        {project.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 text-blue-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.showLink && (
                      <a
                        href={project.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm md:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="education-content"
            data-animate
            className={`transition-all duration-1000 ${
              animatedElements.has('education-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 p-4 md:p-8">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                      Bachelor of Computer Science in Software Engineering
                    </h3>
                    <div className="flex items-center text-blue-400 mb-4 text-sm md:text-base">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Sukkur IBA University</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      Comprehensive education in software development principles, algorithms, data structures, 
                      and modern programming paradigms. Specialized focus on artificial intelligence, machine learning, 
                      and software architecture design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="contact-content"
            data-animate
            className={`transition-all duration-1000 ${
              animatedElements.has('contact-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-gray-300 mb-8 px-4">
                  Ready to collaborate on your next AI project? Let's discuss how we can bring your ideas to life.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <a
                  href="mailto:jawadhameedbaloch@gmail.com"
                  className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 text-center group"
                >
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Email</h3>
                  <p className="text-gray-400 text-sm">jawadhameedbaloch@<br />gmail.com</p>
                </a>
                
                <a
                  href="tel:+923269236946"
                  className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 text-center group"
                >
                  <Phone className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">Phone</h3>
                  <p className="text-gray-400 text-sm">+92 326 9236 946</p>
                </a>
                
                <a
                  href="https://github.com/jawadhameedbaloch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 text-center group"
                >
                  <Github className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">GitHub</h3>
                  <p className="text-gray-400 text-sm">jawadhameedbaloch</p>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/jawadhameedbaloch2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 text-center group"
                >
                  <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">jawadhameedbaloch2</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © 2024 Jawad Hameed Baloch.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
