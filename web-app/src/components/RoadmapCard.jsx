import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Code, Rocket, CheckCircle2, Circle } from 'lucide-react';

const icons = {
  Brain: <Brain className="w-8 h-8 text-purple-500" />,
  Shield: <Shield className="w-8 h-8 text-cyan-500" />,
  Code: <Code className="w-8 h-8 text-emerald-500" />,
  Rocket: <Rocket className="w-8 h-8 text-rose-500" />
};

const RoadmapCard = ({ stage, onToggleTask }) => {
  const completedCount = stage.tasks.filter(t => t.completed).length;
  const progress = (completedCount / stage.tasks.length) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass p-8 relative overflow-hidden group transition-all duration-500"
    >
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover-opacity-40 transition-all">
        {icons[stage.icon]}
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-white-5 rounded-2xl">
          {icons[stage.icon]}
        </div>
        <div>
          <span className="text-xs font-bold text-muted uppercase tracking-widest">{stage.period}</span>
          <h3 className="text-2xl font-bold">{stage.title}</h3>
        </div>
      </div>

      <p className="text-muted mb-8 leading-relaxed">
        {stage.goal}
      </p>

      <div className="space-y-4">
        {stage.tasks.map((task) => (
          <div 
            key={task.id}
            onClick={() => onToggleTask(stage.id, task.id)}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <div className="mt-1 transition-all">
              {task.completed ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : (
                <Circle className="w-5 h-5 text-slate-400 opacity-20 hover:opacity-100" />
              )}
            </div>
            <span className={`text-sm transition-all ${task.completed ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
              {task.text}
            </span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-muted">Progress</span>
          <span className="text-xs font-bold">{Math.round(progress)}%</span>
        </div>
        <div className="h-1_5 w-full bg-white-5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className={`h-full ${progress === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-purple-500 to-emerald-500'}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapCard;
