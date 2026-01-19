import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const RevealCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <div
            className={`group relative border border-white/10 bg-white/5 overflow-hidden rounded-xl ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>

            {/* Border Beam Effect */}
            <div className="absolute inset-0 rounded-xl border border-white/5" />
            <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </div>
        </div>
    );
};

export default RevealCard;
