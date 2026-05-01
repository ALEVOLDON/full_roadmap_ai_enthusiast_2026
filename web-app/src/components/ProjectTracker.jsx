import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Trophy } from 'lucide-react';

const ProjectTracker = ({ projects, onToggle }) => {
  const completedCount = projects.filter(p => p.completed).length;

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold font-outfit">🧪 Required Projects</h2>
          <p className="text-muted text-sm mt-2">❗ Без них не двигаться дальше</p>
        </div>
        <div className="flex items-center gap-3 glass px-4 py-2 border-emerald-500/30">
          <Trophy className="w-5 h-5 text-emerald-400" />
          <span className="font-bold text-emerald-400">{completedCount} / {projects.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md-grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            onClick={() => onToggle(project.id)}
            className={`glass p-6 cursor-pointer border-2 transition-all ${
              project.completed ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white-5 hover-border-white-10'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className={`font-bold text-lg ${project.completed ? 'text-emerald-400' : ''}`}>
                {project.title}
              </h4>
              {project.completed ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              ) : (
                <Circle className="w-6 h-6 text-slate-600" />
              )}
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTracker;
