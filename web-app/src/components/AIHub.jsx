import React from 'react';
import { motion } from 'framer-motion';

const AIHub = () => {
  return (
    <section id="hub" className="mb-section-gap scroll-mt-24">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block font-inter">Collaboration</span>
        <h2 className="text-3xl lg:text-4xl font-bold">The AI Hub</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Discord Card */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="glass-panel p-8 border-primary/20 flex flex-col justify-between hover:bg-primary/5 transition-all group"
        >
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary" data-icon="forum">forum</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Discord Community</h3>
            <p className="text-on-surface-variant mb-8 font-body-md">Join 50k+ builders sharing prompts, stacks, and alpha on upcoming models.</p>
          </div>
          <button className="w-full py-4 bg-primary text-on-primary-container font-bold rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all uppercase tracking-widest text-xs">
            Join Discord
          </button>
        </motion.div>

        {/* Weekly Workshops */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="glass-panel p-8 border-secondary/20 flex flex-col hover:bg-secondary/5 transition-all group"
        >
          <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary" data-icon="video_library">video_library</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Weekly Workshops</h3>
          <p className="text-on-surface-variant mb-6 font-body-md">Live-streaming advanced RAG implementations every Tuesday at 10 AM PST.</p>
          <div className="relative rounded-xl overflow-hidden aspect-video border border-secondary/30 bg-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="z-10 flex flex-col items-center">
              <span className="material-symbols-outlined text-secondary text-5xl mb-2" data-icon="play_circle">play_circle</span>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Next: Agentic UX Design</span>
            </div>
          </div>
        </motion.div>

        {/* Open Source Contributions */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="glass-panel p-8 border-tertiary/20 flex flex-col hover:bg-tertiary/5 transition-all group"
        >
          <div className="w-12 h-12 rounded-lg bg-tertiary/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-tertiary" data-icon="terminal">terminal</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">OS Contributions</h3>
          <p className="text-on-surface-variant mb-6 font-body-md">Contribute to the roadmap's core engine and earn governance tokens.</p>
          
          <div className="flex flex-wrap gap-1 p-4 bg-slate-950/40 rounded-lg border border-tertiary/10">
            {[...Array(24)].map((_, i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-sm ${
                  i % 5 === 0 ? 'bg-tertiary/100 shadow-[0_0_8px_rgba(78,222,163,0.5)]' : 
                  i % 3 === 0 ? 'bg-tertiary/60' : 
                  i % 2 === 0 ? 'bg-tertiary/30' : 'bg-tertiary/10'
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">124 PRs Merged</span>
            <span className="text-[10px] text-tertiary font-bold uppercase tracking-widest cursor-pointer hover:underline">View Repo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHub;
