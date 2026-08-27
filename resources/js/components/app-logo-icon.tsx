import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2" />
            <path d="M4 9s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2" />
        </svg>
    );
}
