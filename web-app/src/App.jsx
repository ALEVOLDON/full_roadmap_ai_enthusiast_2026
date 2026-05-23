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

  const [globalProgress, setGlobalProgress] = useState(42);

  useEffect(() => {
    localStorage.setItem('ai_roadmap_2026_path', selectedPath);
  }, [selectedPath]);

  useEffect(() => {
    localStorage.setItem('ai_roadmap_2026_projects', JSON.stringify(projects));
  }, [projects]);

  const handleToggleProject = (id) => {
    setProjects(prev => prev.map(p => 
      p.id === id ? { ...p, completed: !p.completed } : p
    ));
  };

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
            paths={paths} 
            selectedPath={selectedPath} 
            onSelect={setSelectedPath} 
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
