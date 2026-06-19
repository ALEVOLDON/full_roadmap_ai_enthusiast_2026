import { useState, useEffect } from 'react';
import { LanguageContext } from './language';
import { translations } from '../data/translations';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ai_roadmap_lang') || 'ru';
  });

  useEffect(() => {
    localStorage.setItem('ai_roadmap_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ru' ? 'en' : 'ru'));
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
