import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Sidebar = () => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'dashboard', label: t('dashboard'), icon: 'dashboard', active: true },
    { id: 'roadmap', label: t('roadmap'), icon: 'route' },
    { id: 'faq', label: t('faq'), icon: 'quiz' },
  ];

  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-secondary/20 bg-slate-950/80 backdrop-blur-2xl flex flex-col py-6 z-40 overflow-y-auto hidden lg:flex">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center border border-secondary/40">
            <span className="material-symbols-outlined text-secondary" data-icon="auto_awesome">auto_awesome</span>
          </div>
          <div>
            <div className="font-space-grotesk text-sm uppercase tracking-widest text-secondary font-bold">{t('title')}</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-inter">{t('referenceGuide')}</div>
          </div>
        </div>
      </div>
      
      <nav className="flex-1">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-4 px-6 py-4 font-space-grotesk text-sm uppercase tracking-widest transition-all group ${
              item.active 
                ? 'bg-secondary/10 text-secondary border-r-4 border-secondary font-bold' 
                : 'text-slate-500 hover:text-secondary hover:bg-slate-900/50'
            }`}
          >
            <span className={`material-symbols-outlined ${!item.active && 'group-hover:translate-x-1 transition-transform'}`} data-icon={item.icon}>
              {item.icon}
            </span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto px-6 pt-6 border-t border-secondary/10">
        <div className="flex flex-col gap-2">
          <a 
            className="flex items-center gap-4 text-slate-500 hover:text-secondary font-space-grotesk text-xs uppercase tracking-widest transition-all" 
            href="https://github.com/ALEVOLDON/full_roadmap_ai_enthusiast_2026/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-sm" data-icon="description">description</span>
            {t('docs')}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
