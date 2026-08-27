import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    style?: React.CSSProperties;
    showIcon?: boolean;
}

const Logo: React.FC<LogoProps> = ({
    className = 'h-8 w-auto',
    style = {},
    showIcon = true,
    ...props
}) => {
    return (
        <div className={`inline-flex items-center gap-2.5 ${className}`} style={style}>
            {showIcon && (
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-400 text-white font-bold shadow-md shadow-sky-400/20">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                    >
                        {/* Modern F + S interwoven emblem */}
                        <path d="M4 15s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2" />
                        <path d="M4 9s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2" />
                    </svg>
                </div>
            )}
            <div className="flex items-center">
                <span className="text-lg font-bold tracking-tight text-foreground font-sans">
                    Formation<span className="text-sky-400">Session</span>
                </span>
            </div>
        </div>
    );
};

export default Logo;
