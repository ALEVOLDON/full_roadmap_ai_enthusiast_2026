import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="lg:ml-64 border-t border-primary/10 bg-slate-950/40 backdrop-blur-md py-12 px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('title')}</span>
          <p className="text-slate-500 text-sm font-space-grotesk tracking-widest uppercase">{t('footerSubtitle')}</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group" href="https://github.com/ALEVOLDON/full_roadmap_ai_enthusiast_2026" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-lg" data-icon="terminal">terminal</span>
            <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
          </a>
        </div>
        
        <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-right">
          {t('rightsReserved')}
        </div>
      </div>
      
      {/* Subtle Background Glow in Footer */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 h-24 bg-primary/10 blur-[80px] -z-10"></div>
    </footer>
  );
};

export default Footer;
