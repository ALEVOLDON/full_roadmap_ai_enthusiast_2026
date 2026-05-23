import React from 'react';
import { motion } from 'framer-motion';

const CoreStack = ({ stack }) => {
  const getIcon = (category) => {
    switch (category) {
      case 'AI Core': return '🧠';
      case 'Backend': return '⚙️';
      case 'Automation': return '🧩';
      case 'Frontend': return '🎨';
      default: return '🛠';
    }
  };

  const getBorderClass = (category) => {
    if (category === 'Backend') return 'glow-border-cyan';
    if (category === 'Frontend') return 'glow-border-emerald';
    return '';
  };

  const getBadgeClass = (category) => {
    if (category === 'AI Core') return 'bg-primary/10 border-primary/30 text-primary';
    if (category === 'Backend') return 'bg-secondary/10 border-secondary/30 text-secondary';
    if (category === 'Frontend') return 'bg-tertiary/10 border-tertiary/30 text-tertiary';
    return 'bg-surface-container-high border-outline-variant text-on-surface-variant';
  };

  return (
    <section id="stack" className="mb-section-gap">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block font-inter">Tooling</span>
          <h2 className="text-3xl lg:text-4xl font-bold">The 2026 Core Stack</h2>
        </div>
        <div className="text-on-surface-variant font-body-md border-b border-outline-variant hidden sm:block">Latest Update: Jan 12</div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stack.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass-panel p-6 ${getBorderClass(item.category)}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{getIcon(item.category)}</span>
              <h4 className="text-xl font-bold text-on-surface">{item.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className={`px-3 py-1 rounded border text-[10px] font-bold uppercase tracking-widest ${getBadgeClass(item.category)}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreStack;
