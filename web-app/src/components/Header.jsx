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
        <button className="text-slate-400 hover:text-primary transition-colors scale-95 active:scale-90 transition-transform">
          <span className="material-symbols-outlined" data-icon="terminal">terminal</span>
        </button>
        <div className="w-10 h-10 rounded-full border-2 border-primary shadow-[0_0_10px_rgba(168,85,247,0.5)] overflow-hidden">
          <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjVSqk2-1s04dyJw2qZRmNuHUdMSA6ahJ50pXncW4TCycTUYWDlVs_4oqBmu284WnWCL1NgUmFBqbULplzp4eyqrBIMa3HHz1hNetaH7dQAEqIhsSIY8n_7cWkiTjdMwXPvVfKIJyFjk3BKSr6hoyL-ZGmC1mfBQLOBS9JbsCvz0pZIx5rGYSayrOpzwCIMhYHzbtyuvnflenZIdXy8jmVboAt80rZb6yk7fjCXCPx8LlYUhQMo_1OhMKzq98wBWh6c8vLmUD5iEk" />
        </div>
      </div>
    </header>
  );
};

export default Header;
