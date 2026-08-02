import { useState } from 'react';
import { useLanguage } from '../context/language';

const Header = ({ onOpenCheatSheet, onOpenShare }) => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'paths', label: t('pathways') },
    { id: 'dashboard', label: t('dashboard') },
    { id: 'stack', label: t('stack') },
    { id: 'projects', label: t('projects') },
    { id: 'roadmap', label: t('roadmap') },
    { id: 'hub', label: t('community') },
    { id: 'faq', label: t('faq') },
  ];

  return (
    <>
      <header className="fixed top-0 w-full border-b border-primary/20 bg-slate-950/80 backdrop-blur-xl flex justify-between items-center px-4 sm:px-8 h-16 sm:h-20 max-w-full mx-auto z-50 shadow-[0_0_20px_rgba(168,85,247,0.15)] font-space-grotesk tracking-tight">
        <div className="flex items-center gap-4 sm:gap-8">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <a href="#" className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent truncate">
            {t('title')}
          </a>

          <nav className="hidden lg:flex gap-6">
            <a className="text-primary border-b-2 border-primary pb-1 text-sm font-medium" href="#paths">{t('pathways')}</a>
            <a className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors" href="#stack">{t('stack')}</a>
            <a className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors" href="#projects">{t('projects')}</a>
            <a className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors" href="#hub">{t('community')}</a>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenCheatSheet}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 transition-all text-xs font-semibold cursor-pointer"
            title={t('cheatSheet')}
          >
            💡 <span className="hidden sm:inline">{t('cheatSheet')}</span>
          </button>

          <button
            onClick={onOpenShare}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition-all text-xs font-semibold cursor-pointer"
            title={t('shareProgress')}
          >
            📤 <span className="hidden sm:inline">{t('shareProgress')}</span>
          </button>

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-primary/30 bg-slate-900/60 hover:bg-primary/10 text-primary hover:text-white transition-all text-xs font-bold font-space-grotesk tracking-widest uppercase cursor-pointer"
          >
            🌐 {lang === 'en' ? 'RU' : 'EN'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="relative w-4/5 max-w-xs bg-slate-900 border-r border-slate-800 h-full p-6 pt-24 flex flex-col z-50 overflow-y-auto">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-secondary text-base font-space-grotesk font-medium tracking-wide py-2 border-b border-slate-800/60"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCheatSheet();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-medium text-sm flex items-center justify-center gap-2"
              >
                💡 {t('cheatSheet')}
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenShare();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium text-sm flex items-center justify-center gap-2"
              >
                📤 {t('shareProgress')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
