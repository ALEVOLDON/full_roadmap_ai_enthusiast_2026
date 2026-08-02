import { useLanguage } from '../context/language';

const Header = ({ onOpenCheatSheet, onOpenShare }) => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 w-full border-b border-primary/20 bg-slate-950/60 backdrop-blur-xl flex justify-between items-center px-8 h-20 max-w-full mx-auto z-50 shadow-[0_0_20px_rgba(168,85,247,0.15)] font-space-grotesk tracking-tight">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('title')}</span>
        <nav className="hidden md:flex gap-6">
          <a className="text-primary border-b-2 border-primary pb-1" href="#paths">{t('pathways')}</a>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="#stack">{t('stack')}</a>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="#projects">{t('projects')}</a>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="#hub">{t('community')}</a>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenCheatSheet}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 transition-all text-xs font-semibold cursor-pointer"
        >
          💡 <span className="hidden sm:inline">{t('cheatSheet')}</span>
        </button>

        <button
          onClick={onOpenShare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition-all text-xs font-semibold cursor-pointer"
        >
          📤 <span className="hidden sm:inline">{t('shareProgress')}</span>
        </button>

        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-primary/30 bg-slate-900/60 hover:bg-primary/10 text-primary hover:text-white transition-all text-xs font-bold font-space-grotesk tracking-widest uppercase cursor-pointer"
        >
          🌐 {lang === 'en' ? 'RU' : 'EN'}
        </button>
      </div>
    </header>
  );
};

export default Header;
