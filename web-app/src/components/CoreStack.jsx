import { motion } from 'framer-motion';
import { useLanguage } from '../context/language';

const CoreStack = ({ stack }) => {
  const { lang, t } = useLanguage();

  const getIcon = (categoryEn) => {
    switch (categoryEn) {
      case 'AI Core': return '🧠';
      case 'Backend & Data': return '⚙️';
      case 'Orchestration': return '🧩';
      case 'Frontend': return '🎨';
      default: return '🛠';
    }
  };

  const getBorderClass = (categoryEn) => {
    if (categoryEn === 'Backend & Data') return 'glow-border-cyan';
    if (categoryEn === 'Frontend') return 'glow-border-emerald';
    return '';
  };

  const getBadgeClass = (categoryEn) => {
    if (categoryEn === 'AI Core') return 'bg-primary/10 border-primary/30 text-primary';
    if (categoryEn === 'Backend & Data') return 'bg-secondary/10 border-secondary/30 text-secondary';
    if (categoryEn === 'Frontend') return 'bg-tertiary/10 border-tertiary/30 text-tertiary';
    return 'bg-surface-container-high border-outline-variant text-on-surface-variant';
  };

  return (
    <section id="stack" className="mb-section-gap">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block font-inter">Tooling</span>
          <h2 className="text-3xl lg:text-4xl font-bold">{t('coreStackTitle')}</h2>
        </div>
        <div className="text-on-surface-variant font-body-md border-b border-outline-variant hidden sm:block">
          {lang === 'ru' ? 'Последнее обновление: 19 июня' : 'Latest Update: June 19'}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stack.map((item, index) => {
          const catEn = item.category.en;
          const catName = item.category[lang] || item.category;

          return (
            <motion.div
              key={catEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel p-6 ${getBorderClass(catEn)}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{getIcon(catEn)}</span>
                <h4 className="text-xl font-bold text-on-surface">{catName}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 rounded border text-[10px] font-bold uppercase tracking-widest ${getBadgeClass(catEn)}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreStack;
