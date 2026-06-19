import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { paths, coreStack, initialProjects } from './data/paths';
import { timelineStages } from './data/content';
import { useLanguage } from './context/language';

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

function mergeTimelineState(saved) {
  return timelineStages.map((stage) => {
    const matchStage = saved?.find((item) => item.id === stage.id);
    if (!matchStage) return stage;
    const updatedTasks = stage.tasks.map((task) => {
      const matchTask = matchStage.tasks?.find((t) => t.id === task.id);
      return matchTask ? { ...task, completed: matchTask.completed } : task;
    });
    return { ...stage, tasks: updatedTasks };
  });
}

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
        return initialProjects.map((p) => {
          const match = parsed.find((item) => item.id === p.id);
          return match ? { ...p, completed: match.completed } : p;
        });
      } catch {
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
        return paths.map((p) => {
          const matchPath = parsed.find((item) => item.id === p.id);
          if (matchPath) {
            const updatedSteps = p.steps.map((s) => {
              const matchStep = matchPath.steps.find((step) => step.id === s.id);
              return matchStep ? { ...s, completed: matchStep.completed } : s;
            });
            const completedCount = updatedSteps.filter((s) => s.completed).length;
            const progress = Math.round((completedCount / updatedSteps.length) * 100);
            return { ...p, steps: updatedSteps, progress };
          }
          return p;
        });
      } catch {
        return paths;
      }
    }
    return paths;
  });

  const [timelineState, setTimelineState] = useState(() => {
    const saved = localStorage.getItem('ai_roadmap_2026_timeline_state');
    if (saved) {
      try {
        return mergeTimelineState(JSON.parse(saved));
      } catch {
        return timelineStages;
      }
    }
    return timelineStages;
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

  useEffect(() => {
    localStorage.setItem('ai_roadmap_2026_timeline_state', JSON.stringify(timelineState));
  }, [timelineState]);

  const handleToggleProject = (id) => {
    setProjects((prev) => prev.map((p) =>
      p.id === id ? { ...p, completed: !p.completed } : p
    ));
  };

  const handleToggleStep = (pathId, stepId) => {
    setPathsState((prev) => prev.map((p) => {
      if (p.id === pathId) {
        const updatedSteps = p.steps.map((s) =>
          s.id === stepId ? { ...s, completed: !s.completed } : s
        );
        const completedCount = updatedSteps.filter((s) => s.completed).length;
        const progress = Math.round((completedCount / updatedSteps.length) * 100);
        return { ...p, steps: updatedSteps, progress };
      }
      return p;
    }));
  };

  const handleToggleTimelineTask = (stageId, taskId) => {
    setTimelineState((prev) => prev.map((stage) => {
      if (stage.id !== stageId) return stage;
      const updatedTasks = stage.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      return { ...stage, tasks: updatedTasks };
    }));
  };

  const totalSteps = pathsState.reduce((acc, p) => acc + p.steps.length, 0);
  const completedSteps = pathsState.reduce((acc, p) => acc + p.steps.filter((s) => s.completed).length, 0);
  const totalTimelineTasks = timelineState.reduce((acc, s) => acc + s.tasks.length, 0);
  const completedTimelineTasks = timelineState.reduce((acc, s) => acc + s.tasks.filter((t) => t.completed).length, 0);
  const completedProjects = projects.filter((p) => p.completed).length;
  const totalItems = totalSteps + totalTimelineTasks + projects.length;
  const completedItems = completedSteps + completedTimelineTasks + completedProjects;
  const globalProgress = Math.round((completedItems / totalItems) * 100);

  const handleExportProgress = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      selectedPath,
      paths: pathsState.map((p) => ({ id: p.id, steps: p.steps.map((s) => ({ id: s.id, completed: s.completed })) })),
      projects: projects.map((p) => ({ id: p.id, completed: p.completed })),
      timeline: timelineState.map((s) => ({ id: s.id, tasks: s.tasks.map((t) => ({ id: t.id, completed: t.completed })) })),
      globalProgress,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ai-roadmap-progress-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mesh-gradient min-h-screen">
      <Header />
      <Sidebar />

      <main className="lg:ml-64 pt-32 px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
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

        <ProgressDashboard progress={globalProgress} onExport={handleExportProgress} />

        <CoreStack stack={coreStack} />

        <ProjectTracker
          projects={projects}
          onToggle={handleToggleProject}
        />

        <MasteryTimeline
          stages={timelineState}
          onToggleTask={handleToggleTimelineTask}
        />

        <AIHub />

        <FAQ />

        <FinalCTA />
      </main>

      <Footer />

      <div className="fixed top-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-1/4 -left-64 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </div>
  );
}

export default App;