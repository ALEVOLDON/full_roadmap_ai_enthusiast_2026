import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const PathSelector = ({ paths, selectedPath, onSelect, onToggleStep }) => {
  const { lang, t } = useLanguage();

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary': return { text: 'text-primary', border: 'border-primary', glow: 'glow-border-purple', bg: 'bg-primary' };
      case 'secondary': return { text: 'text-secondary', border: 'border-secondary', glow: 'glow-border-cyan', bg: 'bg-secondary' };
      case 'tertiary': return { text: 'text-tertiary', border: 'border-tertiary', glow: 'glow-border-emerald', bg: 'bg-tertiary' };
      default: return { text: 'text-white', border: 'border-white', glow: '', bg: 'bg-white' };
    }
  };

  return (
    <div id="paths" className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start scroll-mt-24">
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
              <div className={`text-[10px] font-bold uppercase tracking-[0.2em] ${colors.text}`}>{path.level[lang] || path.level}</div>
              {isActive && (
                <span className={`px-2 py-0.5 rounded ${path.color === 'secondary' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'} text-[8px] font-bold uppercase tracking-widest`}>{t('active')}</span>
              )}
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{path.title[lang] || path.title}</h3>
            <p className="text-on-surface-variant text-sm mb-6 font-body-md">{path.description[lang] || path.description}</p>
            
            {/* Nested Steps */}
            <div className="space-y-4 mb-8 relative pl-4">
              <div className={`absolute left-0 top-2 bottom-2 w-[1px] ${colors.bg}/30 opacity-30`}></div>
              {path.steps.map((step) => (
                <div 
                  key={step.id} 
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleStep(path.id, step.id);
                  }}
                  className="relative flex items-center justify-between group/step cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded flex items-center justify-center transition-all z-10 ${
                      step.completed ? `${colors.bg} shadow-[0_0_8px_rgba(168,85,247,0.4)]` : 'border border-white/20'
                    }`}>
                      {step.completed && (
                        <span className="material-symbols-outlined text-slate-900 font-bold text-[8px]" data-icon="check">check</span>
                      )}
                    </div>
                    <span className={`text-xs font-medium transition-colors ${
                      step.completed ? colors.text : 'text-slate-400 group-hover/step:text-white'
                    }`}>
                      {step.label[lang] || step.label}
                    </span>
                  </div>
                  {step.url && (
                    <a
                      href={step.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-500 hover:text-secondary opacity-0 group-hover/step:opacity-100 transition-opacity flex items-center p-1"
                      title={t('studyMaterial')}
                    >
                      <span className="material-symbols-outlined text-xs" data-icon="open_in_new">open_in_new</span>
                    </a>
                  )}
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
