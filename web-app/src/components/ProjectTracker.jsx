import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProjectTracker = ({ projects, onToggle }) => {
  const { lang, t } = useLanguage();

  const getBorderColor = (index) => {
    if (index === 0) return 'border-l-primary/60';
    if (index === 1) return 'border-l-secondary/60';
    return 'border-l-tertiary/60';
  };

  const getBadgeColor = (index) => {
    if (index === 0) return 'bg-primary/10 text-primary border-primary/40';
    if (index === 1) return 'bg-secondary/10 text-secondary border-secondary/40';
    return 'bg-tertiary/10 text-tertiary border-tertiary/40';
  };

  const getCheckColor = (index) => {
    if (index === 0) return 'bg-primary shadow-[0_0_10px_rgba(168,85,247,0.5)]';
    if (index === 1) return 'bg-secondary shadow-[0_0_10px_rgba(76,215,246,0.5)]';
    return 'bg-tertiary shadow-[0_0_10px_rgba(78,222,163,0.5)]';
  };

  return (
    <section id="projects" className="mb-section-gap scroll-mt-24">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-tertiary mb-2 block font-inter">{t('missionControl')}</span>
        <h2 className="text-3xl lg:text-4xl font-bold">{t('proofOfBuild')}</h2>
      </div>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass-panel p-6 flex items-center justify-between border-l-4 ${getBorderColor(index)}`}
          >
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded flex items-center justify-center font-bold font-space-grotesk ${getBadgeColor(index)} border`}>
                0{index + 1}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-bold text-on-surface text-lg">{project.title[lang] || project.title}</h4>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-secondary flex items-center p-1 transition-colors"
                      title={t('studyProjectMaterial')}
                    >
                      <span className="material-symbols-outlined text-xs" data-icon="open_in_new">open_in_new</span>
                    </a>
                  )}
                </div>
                <p className="text-sm text-on-surface-variant font-body-md">{project.description[lang] || project.description}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${getBadgeColor(index)}`}>
                {project.xp} {t('xp')}
              </span>
              <button
                onClick={() => onToggle(project.id)}
                className={`w-8 h-8 rounded border-2 transition-all flex items-center justify-center ${
                  project.completed 
                    ? getCheckColor(index) + ' border-transparent' 
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {project.completed && (
                  <span className="material-symbols-outlined text-on-background font-bold text-sm" data-icon="check">check</span>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTracker;
