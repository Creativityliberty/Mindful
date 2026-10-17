import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import fr from './locales/fr.json';

const resources = {
    fr: { translation: fr },
    en: { translation: en },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en'],
        debug: false,
        interpolation: {
            escapeValue: false, // React already escapes values
        },
        detection: {
            // SEO is French-first until translated server-rendered routes exist.
            // A visitor may still explicitly choose a language in the UI.
            order: ['cookie', 'localStorage'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;
