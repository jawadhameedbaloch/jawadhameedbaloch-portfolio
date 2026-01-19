
import React from 'react';

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

export default FloatingCode;
