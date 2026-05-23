import React from 'react';
import { motion } from 'framer-motion';

const ProgressDashboard = ({ progress }) => {
  return (
    <section className="mb-section-gap">
      <div className="glass-panel p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <div className="z-10 text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Operational Mastery</h2>
          <p className="text-lg text-on-surface-variant mb-8 max-w-md font-body-lg">
            {progress === 0 
              ? "Select a path and check your first task to start tracking your progress." 
              : `You are currently outperforming ${Math.min(99, Math.round(10 + progress * 0.85))}% of enthusiasts on this path.`
            }
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-8 py-3 bg-primary text-on-primary-container font-bold rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all uppercase tracking-widest text-xs">
              Resume Session
            </button>
            <button className="px-8 py-3 glass-panel text-on-surface font-bold rounded-lg border-primary/20 hover:bg-primary/5 transition-all uppercase tracking-widest text-xs">
              View Milestone
            </button>
          </div>
        </div>
        
        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle className="text-surface-container-highest" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="8"></circle>
            <motion.circle 
              initial={{ strokeDashoffset: 691 }}
              animate={{ strokeDashoffset: 691 - (691 * progress) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-primary drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" 
              cx="128" 
              cy="128" 
              fill="transparent" 
              r="110" 
              stroke="currentColor" 
              strokeDasharray="691" 
              strokeWidth="8"
              strokeLinecap="round"
            ></motion.circle>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-4xl text-on-surface font-bold font-space-grotesk">{progress}%</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Global Progress</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;
