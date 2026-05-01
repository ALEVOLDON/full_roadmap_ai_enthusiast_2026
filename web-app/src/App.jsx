import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { roadmapData as initialData } from './data/roadmap';
import { pathsData, coreStack, requiredProjects as initialProjects } from './data/paths';
import RoadmapCard from './components/RoadmapCard';
import PathSelector from './components/PathSelector';
import CoreStack from './components/CoreStack';
import ProjectTracker from './components/ProjectTracker';
import { Sparkles, Code2, ChevronRight } from 'lucide-react';

function App() {
  const [roadmap, setRoadmap] = useState(() => {
    const saved = localStorage.getItem('ai_roadmap_2026_progress');
    return saved ? JSON.parse(saved) : initialData;
  });

  const [selectedPath, setSelectedPath] = useState(() => {
    return localStorage.getItem('ai_roadmap_2026_path') || 'beginner';
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('ai_roadmap_2026_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  useEffect(() => {
    localStorage.setItem('ai_roadmap_2026_progress', JSON.stringify(roadmap));
    localStorage.setItem('ai_roadmap_2026_path', selectedPath);
    localStorage.setItem('ai_roadmap_2026_projects', JSON.stringify(projects));
  }, [roadmap, selectedPath, projects]);

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

  const handleToggleProject = (projectId) => {
    setProjects(prev => prev.map(p => 
      p.id === projectId ? { ...p, completed: !p.completed } : p
    ));
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

      <header className="relative pt-20 px-6 text-center max-w-4xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1-5 rounded-full bg-white-5 border border-white-10 mb-6 text-sm font-medium text-purple-400"
        >
          <Sparkles className="w-4 h-4" />
          <span>From Zero to Builder — 2026</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          AI Enthusiast <span className="gradient-text">Roadmap</span>
        </h1>
        
        <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10">
          Это не теория. Это система, которая ведёт тебя от нуля до реальных AI-продуктов.
        </p>

        {/* Overall Progress */}
        <div className="max-w-lg mx-auto glass px-8 py-6 neon-glow my-8">
          <div className="flex justify-between items-end mb-4">
            <div className="text-left">
              <h4 className="text-lg font-bold text-white mb-1">Общий прогресс</h4>
              <p className="text-xs text-muted">Ваш путь к мастерству в ИИ</p>
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
        {/* Path Selection */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center font-outfit">Выбери свой путь</h2>
          <PathSelector selectedPath={selectedPath} onSelect={setSelectedPath} />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPath}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-8 border-white-5"
            >
              <h3 className="text-2xl font-bold mb-4">{pathsData[selectedPath].title}</h3>
              <p className="text-muted mb-8">{pathsData[selectedPath].description}</p>
              
              <div className="grid grid-cols-1 md-grid-cols-2 gap-8">
                {pathsData[selectedPath].steps.map((step) => (
                  <div key={step.id} className="space-y-4">
                    <h4 className="font-bold flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-purple-500" />
                      {step.title}
                    </h4>
                    <ul className="space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                          <div className="w-1-5 h-1-5 bg-white-10 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Core Stack */}
        <CoreStack data={coreStack} />

        {/* Required Projects */}
        <ProjectTracker projects={projects} onToggle={handleToggleProject} />

        {/* Complete Journey */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center font-outfit">Полный путь обучения</h2>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-8">
            {roadmap.map((stage) => (
              <RoadmapCard 
                key={stage.id} 
                stage={stage} 
                onToggleTask={handleToggleTask} 
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 pt-10 border-t border-white-10 text-center text-muted text-sm flex flex-col md-flex-row items-center justify-center gap-4 md-gap-8 max-w-6xl mx-auto">
        <p>© 2026 AI Roadmap Project</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" className="hover-text-white transition-colors flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            GitHub
          </a>
          <span className="opacity-20">•</span>
          <a href="#" className="hover-text-white transition-colors">Build &gt; Learn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
