import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
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
  Sparkles,
  Zap,
  Target,
  Award,
  Download,
  User,
  Briefcase,
  GraduationCap,
  MessageCircle,
  CheckCircle,
  AlertCircle,
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
    <span className="text-cyan-400 font-mono">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Floating Code Elements Component
const FloatingCode = () => {
  const codeElements = [
    '<div>', '</div>', '{ }', '()', '=>', 'const', 'let', 'import', 'export', 'function', 'class', 'async', 'await'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeElements.map((element, index) => (
        <div
          key={index}
          className="absolute text-xs text-blue-400/30 font-mono animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

// Animated Code Editor Component
const AnimatedCodeEditor = () => {
  const codeLines = [
    { line: 1, code: <><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {`{`}</> },
    { line: 2, code: <><span className="text-green-400">name:</span> <span className="text-yellow-400">'Jawad Hameed Baloch'</span>,</> },
    { line: 3, code: <><span className="text-green-400">role:</span> <span className="text-yellow-400">'AI Engineer'</span>,</> },
    { line: 4, code: <><span className="text-green-400">skills:</span> [<span className="text-yellow-400">'Python'</span>, <span className="text-yellow-400">'Generative AI'</span>],</> },
    { line: 5, code: <><span className="text-green-400">passion:</span> <span className="text-yellow-400">'Innovation'</span></> },
    { line: 6, code: <>{`}`};</> },
    { line: 7, code: <><span className="text-purple-400">return</span> <span className="text-blue-400">developer</span>;</> }
  ];

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm shadow-2xl max-w-md">
      <div className="flex items-center mb-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 ml-3 text-xs">portfolio.js</span>
      </div>
      <div className="space-y-1">
        {codeLines.map(({ line, code }) => (
          <div key={line} className="flex items-center">
            <div className="text-gray-400 w-8 flex-shrink-0">{line}</div>
            <div className="ml-4">{code}</div>
          </div>
        ))}
      </div>
    </div>
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

// Particle Background Component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
            opacity: Math.random() * 0.5 + 0.3
          }}
        />
      ))}
    </div>
  );
};

// Floating Geometric Shapes
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute border border-blue-500/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
};

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

// Skill Icons Component
const SkillIcons = () => {
  const skillIcons = [
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-blue-600' },
    { name: 'Streamlit', icon: '📊', color: 'from-red-500 to-pink-600' },
    { name: 'AI/ML', icon: '🤖', color: 'from-purple-500 to-pink-600' },
    { name: 'LLMs', icon: '🧠', color: 'from-indigo-500 to-purple-600' },
    { name: 'Prompt Engineering', icon: '✍️', color: 'from-green-500 to-teal-600' },
    { name: 'HTML/CSS', icon: '🌐', color: 'from-orange-500 to-red-600' },
    { name: 'Java', icon: '☕', color: 'from-orange-500 to-red-600' },
    { name: 'C#', icon: '💎', color: 'from-purple-500 to-pink-600' },
    { name: 'REST APIs', icon: '🔌', color: 'from-blue-500 to-cyan-600' },
    { name: 'Git', icon: '📚', color: 'from-orange-600 to-red-700' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-700 to-black' },
    { name: 'NumPy', icon: '🔢', color: 'from-blue-600 to-indigo-700' },
    { name: 'Pandas', icon: '🐼', color: 'from-blue-500 to-blue-600' },
    { name: 'PyTorch', icon: '🔥', color: 'from-orange-500 to-red-600' },
    { name: 'Hugging Face', icon: '🤗', color: 'from-yellow-400 to-orange-500' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-blue-600' },
    { name: 'OpenAI', icon: '🧪', color: 'from-green-500 to-emerald-600' },
    // Duplicate for continuous loop
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-blue-600' },
    { name: 'Streamlit', icon: '📊', color: 'from-red-500 to-pink-600' },
    { name: 'AI/ML', icon: '🤖', color: 'from-purple-500 to-pink-600' },
    { name: 'LLMs', icon: '🧠', color: 'from-indigo-500 to-purple-600' },
    { name: 'Prompt Engineering', icon: '✍️', color: 'from-green-500 to-teal-600' },
    { name: 'HTML/CSS', icon: '🌐', color: 'from-orange-500 to-red-600' },
    { name: 'Java', icon: '☕', color: 'from-orange-500 to-red-600' },
    { name: 'C#', icon: '💎', color: 'from-purple-500 to-pink-600' },
    { name: 'REST APIs', icon: '🔌', color: 'from-blue-500 to-cyan-600' },
    { name: 'Git', icon: '📚', color: 'from-orange-600 to-red-700' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-700 to-black' },
    { name: 'NumPy', icon: '🔢', color: 'from-blue-600 to-indigo-700' },
    { name: 'Pandas', icon: '🐼', color: 'from-blue-500 to-blue-600' },
    { name: 'PyTorch', icon: '🔥', color: 'from-orange-500 to-red-600' },
    { name: 'Hugging Face', icon: '🤗', color: 'from-yellow-400 to-orange-500' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-blue-600' },
    { name: 'OpenAI', icon: '🧪', color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll space-x-8 whitespace-nowrap">
        {skillIcons.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 flex-shrink-0"
          >
            <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
              {skill.icon}
            </div>
            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const animatedElements = useScrollAnimation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const skills = [
    'Python', 'Streamlit', 'Generative AI', 'Large Language Models (LLMs)', 
    'Prompt Engineering', 'HTML/CSS', 'Java', 'C#', 'REST APIs', 
    'Git & GitHub', 'NumPy & Pandas', 'PyTorch', 'Hugging Face Transformers', 
    'VS Code', 'OpenAI API'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      title: 'HireSight - Be Seen Be Hired',
      description: 'An AI-powered resume and job description matching platform for students and job seekers.',
      tech: ['React', 'Tailwind', 'Grok API', 'Supabase', 'jsPDF'],
      link: 'https://hiresight.xyz/',
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
      title: 'Personal VPN Extension',
      description: 'A browser extension that allows users to connect through secure VPN servers in 8 countries for enhanced privacy and unrestricted browsing.',
      tech: ['JavaScript', 'Node.js', 'WebExtensions API', 'Express.js', 'Socket.io', 'Browser Extension Development'],
      link: '#',
      icon: <Code className="w-6 h-6" />,
      showLink: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white min-h-screen relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Jawad Hameed Baloch</h1>
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm lg:text-base">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm lg:text-base">Experience</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm lg:text-base">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm lg:text-base">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider text-sm lg:text-base">Contact</a>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10" />
        <FloatingCode />
        <FloatingShapes />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Hello, This is{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Jawad Hameed Baloch
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
                  I'm a{' '}
                  <TypewriterEffect texts={['Professional Generative AI Engineer', 'Python Developer', 'AI Enthusiast']} />
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="https://github.com/jawadhameedbaloch" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a href="https://www.linkedin.com/in/jawadhameedbaloch2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a href="mailto:jawadhameedbaloch@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a 
                  href="https://wa.me/923269236946" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-green-500 transition-colors"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="px-6 sm:px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg text-sm sm:text-base">
                  CONTACT ME
                </a>
                <a 
                  href="/Jawad Hameed Baloch_Resume.pdf" 
                  download="Jawad_Hameed_Baloch_Resume.pdf"
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>GET RESUME !</span>
                </a>
              </div>
            </div>
            
            {/* Right Side - Code Editor Only */}
            <div className="relative order-last lg:order-last">
              <div className="relative">
                <AnimatedCodeEditor />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div 
            id="about-content"
            data-animate
            className={`transition-all duration-1000 ${
              animatedElements.has('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              WHO I AM?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl lg:max-w-5xl">
                  I'm a passionate Generative AI Engineer with 2+ years of experience building intelligent applications 
                  using Python and cutting-edge AI models. I specialize in creating real-world solutions that blend 
                  automation, creativity, and deep learning. From developing AI-powered platforms like HireSight to 
                  creating personal assistants like Mindsight, I focus on making AI accessible and beneficial for everyone. 
                  My approach combines technical expertise with creative problem-solving to deliver impactful results.
                </p>
              </div>
              
              {/* Right Side - Profile Picture */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-48 h-60 sm:w-56 sm:h-72 lg:w-64 lg:h-80 rounded-lg overflow-hidden border-2 border-gray-700 shadow-2xl">
                    <img 
                      src="/mypic.png" 
                      alt="Jawad Hameed Baloch" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -right-8 sm:-right-12 lg:-right-16 top-1/2 transform -translate-y-1/2 text-blue-400 font-bold text-xs sm:text-sm tracking-wider rotate-90">
                  ABOUT ME
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 bg-gray-900/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div 
            id="experience-content"
            data-animate
            className={`transition-all duration-1000 ${
              animatedElements.has('experience-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              Experiences
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/80 p-6 sm:p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">Generative AI Engineer</h3>
                    <p className="text-gray-400 text-sm sm:text-base">Freelance & Personal Projects</p>
                    <p className="text-gray-500 text-sm">2022 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
            Skills
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <SkillIcons />
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
      <section id="projects" className="py-16 sm:py-20 bg-gray-900/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="projects-content"
            data-animate
            className={`transition-all duration-1000 ${
              animatedElements.has('projects-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              PROJECTS
            </h2>
            
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800/80 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.showLink && (
                      <a
                        href={project.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group/link text-sm sm:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
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
      <section id="education" className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="education-content"
            data-animate
            className={`transition-all duration-1000 ${
              animatedElements.has('education-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              Educations
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/80 p-6 sm:p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">Bachelor of Science in Software Engineering</h3>
                    <p className="text-gray-400 text-sm sm:text-base">Sukkur IBA University</p>
                    <p className="text-gray-500 text-sm">2021 - 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-900/50 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            id="contact-content"
            data-animate
            className={`transition-all duration-1000 ${
              animatedElements.has('contact-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
              CONTACT WITH ME
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Left Side - Contact Form */}
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-300">
                  Have a question or want to work together? Feel free to reach out!
                </p>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm sm:text-base">Your Name:</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm sm:text-base">Your Email:</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm sm:text-base">Your Message:</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-green-400 bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Message sent successfully!</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-400 bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm">Failed to send message. Please try again.</span>
                    </div>
                    )}
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              </div>
              
              {/* Right Side - Contact Info */}
              <div className="relative">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm sm:text-base">Email</p>
                      <p className="text-white text-sm sm:text-base">jawadhameedbaloch@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <WhatsAppIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm sm:text-base">WhatsApp</p>
                      <p className="text-white text-sm sm:text-base">+92 326 9236946</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm sm:text-base">Location</p>
                      <p className="text-white text-sm sm:text-base">Larkana, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <a href="https://github.com/jawadhameedbaloch" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-6 h-6 sm:w-8 sm:h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/jawadhameedbaloch2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                    </a>
                    <a href="mailto:jawadhameedbaloch@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                    </a>
                    <a 
                      href="https://wa.me/923269236946" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-green-500 transition-colors"
                      title="WhatsApp"
                    >
                      <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </a>
                  </div>
                </div>
                
                <div className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 text-blue-400 font-bold text-xs sm:text-sm tracking-wider rotate-90">
                  CONTACT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2024 Jawad Hameed Baloch
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;