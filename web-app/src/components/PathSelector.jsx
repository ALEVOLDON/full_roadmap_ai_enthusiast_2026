import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, DollarSign } from 'lucide-react';

const paths = [
  { id: 'beginner', title: 'Beginner', icon: <User />, color: 'purple' },
  { id: 'developer', title: 'Developer', icon: <Code2 />, color: 'cyan' },
  { id: 'money', title: 'Money', icon: <DollarSign />, color: 'emerald' }
];

const PathSelector = ({ selectedPath, onSelect }) => {
  return (
    <div className="flex flex-col md-flex-row gap-4 mb-12">
      {paths.map((path) => (
        <motion.button
          key={path.id}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(path.id)}
          className={`flex-1 glass p-6 flex items-center gap-4 transition-all ${
            selectedPath === path.id 
              ? `border-${path.color}-500 bg-${path.color}-500/10 neon-glow` 
              : 'hover-bg-white-5'
          }`}
          style={{
            borderColor: selectedPath === path.id ? `var(--${path.color}-500)` : ''
          }}
        >
          <div className={`p-3 rounded-xl bg-${path.color}-500/20 text-${path.color}-400`}>
            {path.icon}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-lg">{path.title}</h4>
            <span className="text-xs text-muted uppercase tracking-widest">Путь развития</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default PathSelector;
