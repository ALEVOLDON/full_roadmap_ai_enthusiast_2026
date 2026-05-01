import React from 'react';
import { motion } from 'framer-motion';

const CoreStack = ({ data }) => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center font-outfit">🔥 Core Stack (2026)</h2>
      <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-6">
        {data.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-6 border-white-5"
          >
            <h4 className="text-purple-400 font-bold mb-4 text-sm uppercase tracking-wider">{item.category}</h4>
            <ul className="space-y-2">
              {item.tools.map((tool, tIdx) => (
                <li key={tIdx} className="text-slate-300 text-sm flex items-center gap-2">
                  <div className="w-1 h-1 bg-purple-500 rounded-full" />
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreStack;
