import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b border-primary/20 bg-slate-950/60 backdrop-blur-xl flex justify-between items-center px-8 h-20 max-w-full mx-auto z-50 shadow-[0_0_20px_rgba(168,85,247,0.15)] font-space-grotesk tracking-tight">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Enthusiast Roadmap 2026</span>
        <nav className="hidden md:flex gap-6">
          <a className="text-primary border-b-2 border-primary pb-1" href="#">Pathways</a>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Stack</a>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Projects</a>
          <a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Community</a>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest hidden sm:block">From Zero to Builder</div>
      </div>
    </header>
  );
};

export default Header;
