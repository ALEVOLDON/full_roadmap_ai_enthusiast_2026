import { motion } from 'framer-motion';
import { useLanguage } from '../context/language';

const MasteryTimeline = ({ stages, onToggleTask }) => {
  const { lang, t } = useLanguage();

  const getColorClass = (color) => {
    switch (color) {
      case 'primary': return 'border-primary text-primary';
      case 'secondary': return 'border-secondary text-secondary';
      case 'tertiary': return 'border-tertiary text-tertiary';
      default: return 'border-outline text-on-surface-variant';
    }
  };

  const getDotColorClass = (color) => {
    switch (color) {
      case 'primary': return 'bg-primary shadow-[0_0_15px_rgba(168,85,247,0.4)]';
      case 'secondary': return 'bg-secondary shadow-[0_0_15px_rgba(76,215,246,0.4)]';
      case 'tertiary': return 'bg-tertiary shadow-[0_0_15px_rgba(78,222,163,0.4)]';
      default: return 'bg-outline';
    }
  };

  const getTaskCheckClass = (color, completed) => {
    if (!completed) return 'border border-white/20';
    switch (color) {
      case 'primary': return 'bg-primary shadow-[0_0_8px_rgba(168,85,247,0.4)]';
      case 'secondary': return 'bg-secondary shadow-[0_0_8px_rgba(76,215,246,0.4)]';
      case 'tertiary': return 'bg-tertiary shadow-[0_0_8px_rgba(78,222,163,0.4)]';
      default: return 'bg-outline';
    }
  };

  return (
    <section id="roadmap" className="mb-section-gap circuit-bg rounded-3xl p-8 lg:p-12 scroll-mt-24">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block font-inter">{t('timeline')}</span>
        <h2 className="text-3xl lg:text-4xl font-bold">{t('masteryRoadmap')}</h2>
      </div>

      <div className="relative space-y-12 pl-12">
        <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-tertiary shadow-[0_0_10px_rgba(76,215,246,0.5)]"></div>

        {stages.map((stage, index) => {
          const title = stage.title[lang] || stage.title;
          const description = stage.description[lang] || stage.description;

          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${stage.dimmed ? 'opacity-50' : ''}`}
            >
              <div className={`absolute -left-12 top-1 w-8 h-8 rounded-full bg-slate-900 border-2 flex items-center justify-center ${getColorClass(stage.color)}`}>
                <div className={`w-2 h-2 rounded-full ${getDotColorClass(stage.color)}`}></div>
              </div>
              <div>
                <h4 className={`text-xl font-bold mb-2 ${getColorClass(stage.color)}`}>{title}</h4>
                <p className="text-on-surface-variant max-w-xl font-body-md mb-4">{description}</p>

                <div className="space-y-2 pl-2">
                  {stage.tasks.map((task) => {
                    const label = task.label[lang] || task.label;
                    return (
                      <div
                        key={task.id}
                        onClick={() => onToggleTask(stage.id, task.id)}
                        className="flex items-center justify-between group/task cursor-pointer max-w-xl"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded flex items-center justify-center transition-all ${getTaskCheckClass(stage.color, task.completed)}`}>
                            {task.completed && (
                              <span className="material-symbols-outlined text-slate-900 font-bold text-[8px]" data-icon="check">check</span>
                            )}
                          </div>
                          <span className={`text-xs font-medium transition-colors ${task.completed ? getColorClass(stage.color) : 'text-slate-400 group-hover/task:text-white'}`}>
                            {label}
                          </span>
                        </div>
                        {task.url && (
                          <a
                            href={task.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-slate-500 hover:text-secondary opacity-0 group-hover/task:opacity-100 transition-opacity p-1"
                            title={t('studyMaterial')}
                          >
                            <span className="material-symbols-outlined text-xs" data-icon="open_in_new">open_in_new</span>
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MasteryTimeline;