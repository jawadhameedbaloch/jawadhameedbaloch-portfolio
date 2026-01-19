
import React from 'react';

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
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm shadow-2xl max-w-md hover:border-blue-500/50 transition-colors duration-300 transform hover:-translate-y-1">
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
                        <div className="text-gray-400 w-8 flex-shrink-0 select-none">{line}</div>
                        <div className="ml-4">{code}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCodeEditor;
