import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { paths, coreStack, initialProjects } from './data/paths';
import { useLanguage } from './context/LanguageContext';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PathSelector from './components/PathSelector';
import ProgressDashboard from './components/ProgressDashboard';
import CoreStack from './components/CoreStack';
import ProjectTracker from './components/ProjectTracker';
import MasteryTimeline from './components/MasteryTimeline';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const { t } = useLanguage();
  const [selectedPath, setSelectedPath] = useState(() => {
    return localStorage.getItem('ai_roadmap_2026_path') || 'developer';
  });
  
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('ai_roadmap_2026_projects');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return initialProjects.map(p => {
          const match = parsed.find(item => item.id === p.id);
          return match ? { ...p, completed: match.completed } : p;
        });
      } catch (e) {
        return initialProjects;
      }
    }
    return initialProjects;
  });

  const [pathsState, setPathsState] = useState(() => {
    const saved = localStorage.getItem('ai_roadmap_2026_paths_state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return paths.map(p => {
          const matchPath = parsed.find(item => item.id === p.id);
          if (matchPath) {
            const updatedSteps = p.steps.map(s => {
              const matchStep = matchPath.steps.find(step => step.id === s.id);
              return matchStep ? { ...s, completed: matchStep.completed } : s;
            });
            const completedCount = updatedSteps.filter(s => s.completed).length;
            const progress = Math.round((completedCount / updatedSteps.length) * 100);
            return { ...p, steps: updatedSteps, progress };
          }
          return p;
        });
      } catch (e) {
        return paths;
      }
    }
    return paths;
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
            {t('forgeYour')} <span className="text-primary">{t('intelligence')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-on-surface-variant max-w-2xl mb-12 font-body-lg"
          >
            {t('heroSubtitle')}
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
