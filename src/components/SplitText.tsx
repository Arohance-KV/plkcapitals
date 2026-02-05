import React from 'react';

interface SplitTextProps {
    text: string;
    className?: string;
    id?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className, id }) => {
    return (
        <div id={id} className={`split-text-container ${className}`}>
            {text.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-[0.3em] opacity-0 translate-y-5 blur-sm split-word">
                    {word}
                </span>
            ))}
        </div>
    );
};