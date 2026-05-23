import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { paths, coreStack, initialProjects } from './data/paths';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PathSelector from './components/PathSelector';
import ProgressDashboard from './components/ProgressDashboard';
import CoreStack from './components/CoreStack';
import ProjectTracker from './components/ProjectTracker';
import MasteryTimeline from './components/MasteryTimeline';
import AIHub from './components/AIHub';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [selectedPath, setSelectedPath] = useState(() => {
    return localStorage.getItem('ai_roadmap_2026_path') || 'developer';
  });
  
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('ai_roadmap_2026_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [pathsState, setPathsState] = useState(() => {
    const saved = localStorage.getItem('ai_roadmap_2026_paths_state');
    return saved ? JSON.parse(saved) : paths;
  });

  useEffect(() => {
    localStorage.setItem('ai_roadmap_2026_path', selectedPath);
  }, [selectedPath]);

  useEffect(() => {
    localStorage.setItem('ai_roadmap_2026_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('ai_roadmap_2026_paths_state', JSON.stringify(pathsState));
  }, [pathsState]);

  const handleToggleProject = (id) => {
    setProjects(prev => prev.map(p => 
      p.id === id ? { ...p, completed: !p.completed } : p
    ));
  };

  const handleToggleStep = (pathId, stepId) => {
    setPathsState(prev => prev.map(p => {
      if (p.id === pathId) {
        const updatedSteps = p.steps.map(s => 
          s.id === stepId ? { ...s, completed: !s.completed } : s
        );
        const completedCount = updatedSteps.filter(s => s.completed).length;
        const progress = Math.round((completedCount / updatedSteps.length) * 100);
        return { ...p, steps: updatedSteps, progress };
      }
      return p;
    }));
  };

  // Calculate dynamic global progress
  const totalSteps = pathsState.reduce((acc, p) => acc + p.steps.length, 0);
  const completedSteps = pathsState.reduce((acc, p) => acc + p.steps.filter(s => s.completed).length, 0);
  const completedProjects = projects.filter(p => p.completed).length;
  const globalProgress = Math.round(((completedSteps + completedProjects) / (totalSteps + projects.length)) * 100);

  return (
    <div className="mesh-gradient min-h-screen">
      <Header />
      <Sidebar />
      
      <main className="lg:ml-64 pt-32 px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-section-gap">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-7xl font-bold text-on-surface mb-6 leading-tight font-space-grotesk"
          >
            Forge Your <span className="text-primary">Intelligence.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-on-surface-variant max-w-2xl mb-12 font-body-lg"
          >
            Navigate the complexities of the 2026 AI landscape with a precision-engineered curriculum designed for creators, not just consumers.
          </motion.p>
          
          <PathSelector 
            paths={pathsState} 
            selectedPath={selectedPath} 
            onSelect={setSelectedPath} 
            onToggleStep={handleToggleStep}
          />
        </section>

        <ProgressDashboard progress={globalProgress} />
        
        <CoreStack stack={coreStack} />
        
        <ProjectTracker 
          projects={projects} 
          onToggle={handleToggleProject} 
        />

        <MasteryTimeline />
        
        <AIHub />
        
        <FAQ />
        
        <FinalCTA />
      </main>

      <Footer />

      {/* Visual Decor Elements */}
      <div className="fixed top-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-1/4 -left-64 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </div>
  );
}

export default App;
