import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roadmapData as initialData } from './data/roadmap';
import RoadmapCard from './components/RoadmapCard';
import { Sparkles, Code2 } from 'lucide-react';

function App() {
  const [roadmap, setRoadmap] = useState(() => {
    const saved = localStorage.getItem('ai_roadmap_2026_progress');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('ai_roadmap_2026_progress', JSON.stringify(roadmap));
  }, [roadmap]);

  const handleToggleTask = (stageId, taskId) => {
    setRoadmap(prev => prev.map(stage => {
      if (stage.id === stageId) {
        return {
          ...stage,
          tasks: stage.tasks.map(task => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          })
        };
      }
      return stage;
    }));
  };

  const totalTasks = roadmap.reduce((acc, stage) => acc + stage.tasks.length, 0);
  const completedTasks = roadmap.reduce((acc, stage) => 
    acc + stage.tasks.filter(t => t.completed).length, 0
  );
  const overallProgress = (completedTasks / totalTasks) * 100;

  return (
    <div className="min-h-screen pb-20">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-n10p left-n10p w-40p h-40p bg-purple-20 blur-120px rounded-full" />
        <div className="absolute bottom-n10p right-n10p w-40p h-40p bg-cyan-20 blur-120px rounded-full" />
      </div>

      <header className="relative pt-20 px-6 text-center max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1-5 rounded-full bg-white-5 border border-white-10 mb-6 text-sm font-medium text-purple-400"
        >
          <Sparkles className="w-4 h-4" />
          <span>Дорожная карта на 2026 год</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          AI Enthusiast <span className="gradient-text">Roadmap</span>
        </h1>
        
        <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10">
          Ваш персональный план развития в мире автономных агентов, 
          локальных моделей и ИИ-продуктов нового поколения.
        </p>

        {/* Overall Progress */}
        <div className="max-w-lg mx-auto glass px-8 py-6 neon-glow my-12">
          <div className="flex justify-between items-end mb-4">
            <div className="text-left">
              <h4 className="text-lg font-bold text-white mb-1">Прогресс обучения</h4>
              <p className="text-xs text-muted">Ваш путь к мастерству в ИИ 2026</p>
            </div>
            <span className="text-3xl font-extrabold gradient-text">{Math.round(overallProgress)}%</span>
          </div>
          <div className="h-3 w-full bg-white-5 rounded-full overflow-hidden p-1 border border-white-10">
            <motion.div 
              animate={{ width: `${overallProgress}%` }}
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 rounded-full"
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md-grid-cols-2 gap-8">
          {roadmap.map((stage) => (
            <RoadmapCard 
              key={stage.id} 
              stage={stage} 
              onToggleTask={handleToggleTask} 
            />
          ))}
        </div>
      </main>

      <footer className="mt-20 pt-10 border-t border-white-10 text-center text-muted text-sm flex flex-col md-flex-row items-center justify-center gap-4 md-gap-8 max-w-6xl mx-auto">
        <p>© 2026 AI Roadmap Project</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover-text-white transition-colors flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            GitHub
          </a>
          <span className="opacity-20">•</span>
          <a href="#" className="hover-text-white transition-colors">Personal Roadmap</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
