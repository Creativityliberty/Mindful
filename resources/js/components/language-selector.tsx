import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function LanguageSelector({ className = '' }: { className?: string }) {
    const { i18n } = useTranslation();
    const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fr';

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className={`inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background/50 px-3 py-1 text-xs font-semibold tracking-wider text-foreground backdrop-blur hover:bg-muted/40 transition-colors ${className}`}
                    aria-label="Changer de langue"
                >
                    <Globe className="h-3.5 w-3.5 text-sky-400" />
                    <span>{currentLang === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}</span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32 rounded-xl border border-border/40 bg-background/95 backdrop-blur shadow-xl">
                <DropdownMenuItem
                    onClick={() => changeLanguage('fr')}
                    className={`cursor-pointer flex items-center justify-between text-xs font-medium ${
                        currentLang === 'fr' ? 'text-sky-400 font-bold bg-sky-400/10' : ''
                    }`}
                >
                    <span>🇫🇷 Français</span>
                    {currentLang === 'fr' && <span className="text-[10px]">✓</span>}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => changeLanguage('en')}
                    className={`cursor-pointer flex items-center justify-between text-xs font-medium ${
                        currentLang === 'en' ? 'text-sky-400 font-bold bg-sky-400/10' : ''
                    }`}
                >
                    <span>🇬🇧 English</span>
                    {currentLang === 'en' && <span className="text-[10px]">✓</span>}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
