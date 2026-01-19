
import React from 'react';

const ParticleBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-obsidian/90 z-0"></div>
            {Array.from({ length: 50 }).map((_, i) => (
                <div
                    key={i}
                    className={`absolute rounded-full animate-float opacity-20 ${i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                        }`}
                    style={{
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${10 + Math.random() * 10}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
