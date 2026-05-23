import React from 'react';
import { motion } from 'framer-motion';

const PathSelector = ({ paths, selectedPath, onSelect }) => {
  const getColorClasses = (color) => {
    switch (color) {
      case 'primary': return { text: 'text-primary', border: 'border-primary', glow: 'glow-border-purple', bg: 'bg-primary' };
      case 'secondary': return { text: 'text-secondary', border: 'border-secondary', glow: 'glow-border-cyan', bg: 'bg-secondary' };
      case 'tertiary': return { text: 'text-tertiary', border: 'border-tertiary', glow: 'glow-border-emerald', bg: 'bg-tertiary' };
      default: return { text: 'text-white', border: 'border-white', glow: '', bg: 'bg-white' };
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {paths.map((path) => {
        const colors = getColorClasses(path.color);
        const isActive = selectedPath === path.id;
        
        return (
          <motion.div
            key={path.id}
            whileHover={{ y: -4 }}
            onClick={() => onSelect(path.id)}
            className={`glass-panel p-8 cursor-pointer transition-all ${
              isActive ? `border-b-0 border-r-0 border-l-0 ${colors.glow} shadow-[0_10px_30px_-10px_rgba(76,215,246,0.3)]` : ''
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <div className={`text-[10px] font-bold uppercase tracking-[0.2em] ${colors.text}`}>{path.level}</div>
              {isActive && (
                <span className={`px-2 py-0.5 rounded ${path.color === 'secondary' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'} text-[8px] font-bold uppercase tracking-widest`}>Active</span>
              )}
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
            <p className="text-on-surface-variant text-sm mb-6 font-body-md">{path.description}</p>
            
            {/* Nested Steps */}
            <div className="space-y-4 mb-8 relative pl-4">
              <div className={`absolute left-0 top-2 bottom-2 w-[1px] ${colors.bg}/30 opacity-30`}></div>
              {path.steps.map((step) => (
                <div key={step.id} className="relative flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full z-10 ${
                    step.completed ? `${colors.bg} shadow-[0_0_8px_rgba(168,85,247,1)]` :
                    step.started || step.inProgress ? `${colors.bg}/40 border ${colors.border}` :
                    'bg-slate-700 border border-slate-600'
                  }`}></div>
                  <span className={`text-xs font-medium ${
                    step.completed ? colors.text :
                    step.started || step.inProgress ? 'text-on-surface' :
                    'text-slate-500'
                  }`}>
                    {step.label}
                  </span>
                  {step.completed && <span className={`material-symbols-outlined ${colors.text} text-[10px]`} data-icon="check_circle">check_circle</span>}
                  {step.started && <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-[6px] font-bold text-on-surface-variant uppercase tracking-widest">Started</span>}
                  {step.inProgress && <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-[6px] font-bold text-on-surface-variant uppercase tracking-widest">In Progress</span>}
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${path.progress}%` }}
                className={`h-full ${colors.bg} shadow-[0_0_10px_rgba(168,85,247,0.5)]`}
              ></motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PathSelector;
