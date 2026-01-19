
import React, { useState, useEffect } from 'react';

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

export default TypewriterEffect;
