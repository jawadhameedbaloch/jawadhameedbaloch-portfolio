import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const skills = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-blue-500 to-blue-600' },
    { name: 'LLMs', logo: 'https://cdn-icons-png.flaticon.com/512/2591/2591980.png', color: 'from-emerald-400 to-cyan-500', invert: true },
    { name: 'RAG', logo: 'https://cdn-icons-png.flaticon.com/512/2082/2082875.png', color: 'from-purple-400 to-pink-500', invert: true },
    { name: 'Streamlit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg', color: 'from-red-500 to-pink-600' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'from-purple-500 to-pink-600' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: 'from-orange-500 to-red-600' },
    { name: 'OpenAI', logo: 'https://www.svgrepo.com/show/306500/openai.svg', color: 'from-green-500 to-teal-600', invert: true },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'from-orange-500 to-red-600' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'from-yellow-400 to-yellow-500' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'from-orange-500 to-red-600' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', color: 'from-purple-500 to-pink-600' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'from-green-500 to-emerald-600' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'from-orange-600 to-red-700' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'from-gray-700 to-black', invert: true },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: 'from-blue-600 to-indigo-700' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: 'from-blue-500 to-blue-600' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: 'from-blue-500 to-blue-600' },
];

const MagneticIcon = ({ skill }: { skill: typeof skills[0] & { invert?: boolean } }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const { left, top, width, height } = rect;
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            x.set((clientX - centerX) * 0.2);
            y.set((clientY - centerY) * 0.2);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className="relative group cursor-pointer"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 rounded-full`} />

            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <img
                    src={skill.logo}
                    alt={skill.name}
                    className={`w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300 group-hover:scale-110 ${skill.invert ? 'filter invert brightness-0' : 'grayscale group-hover:grayscale-0'}`}
                    draggable="false"
                />
            </div>

            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-matte-charcoal border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                {skill.name}
            </span>
        </motion.div>
    );
};

const SkillIcons = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto py-10">
            {skills.map((skill, index) => (
                <MagneticIcon key={index} skill={skill} />
            ))}
        </div>
    );
};

export default SkillIcons;
