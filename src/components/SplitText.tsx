import React from 'react';

interface SplitTextProps {
    text: string;
    className?: string;
    id?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    style?: React.CSSProperties;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className, id, prefix, suffix, style }) => {
    return (
        <div id={id} className={`split-text-container ${className}`} style={style}>
            {prefix && <span className="inline-block mr-2 opacity-0 translate-y-5 blur-sm split-word">{prefix}</span>}
            {text.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-[0.3em] opacity-0 translate-y-5 blur-sm split-word">
                    {word}
                </span>
            ))}
            {suffix && <span className="inline-block ml-1 opacity-0 translate-y-5 blur-sm split-word">{suffix}</span>}
        </div>
    );
};