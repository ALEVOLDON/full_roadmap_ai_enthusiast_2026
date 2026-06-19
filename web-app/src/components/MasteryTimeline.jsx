import { motion } from 'framer-motion';
import { useLanguage } from '../context/language';

const MasteryTimeline = () => {
  const { lang, t } = useLanguage();

  const stages = {
    en: [
      {
        id: 'q1',
        title: 'Q1: Reasoning & Agents',
        description: 'Mastering GPT-5.5 and Claude Fable 5 / Opus 4.8 reasoning patterns, alongside Model Context Protocol (MCP). Building autonomous tool-use loops.',
        color: 'primary',
        active: true,
      },
      {
        id: 'q2',
        title: 'Q2: Local AI & NPU',
        description: 'Optimizing Llama 3.3 and Phi-4 for edge NPU hardware. Setting up local MCP servers and offline RAG systems with Exo.',
        color: 'secondary',
        active: true,
      },
      {
        id: 'q3',
        title: 'Q3: AI-Native Engineering',
        description: 'Deep agentic workflows using PydanticAI, LangGraph, and Vercel AI SDK. Building production-grade code with Claude Code and OpenHands.',
        color: 'tertiary',
        active: false,
        dimmed: true,
      },
      {
        id: 'q4',
        title: 'Q4: Cost-Efficient Scaling',
        description: 'Deploying multi-agent micro-SaaS with semantic routing, prompt caching, and Llama Guard safety rails.',
        color: 'outline',
        active: false,
        dimmed: true,
      },
    ],
    ru: [
      {
        id: 'q1',
        title: 'Q1: Рассуждения и Агенты',
        description: 'Освоение паттернов рассуждения GPT-5.5 и Claude Fable 5 / Opus 4.8, а также Model Context Protocol (MCP). Создание автономных циклов работы с инструментами.',
        color: 'primary',
        active: true,
      },
      {
        id: 'q2',
        title: 'Q2: Локальный ИИ и NPU',
        description: 'Оптимизация Llama 3.3 и Phi-4 для локального NPU оборудования. Запуск локальных MCP-серверов и автономных RAG-систем через Exo.',
        color: 'secondary',
        active: true,
      },
      {
        id: 'q3',
        title: 'Q3: AI-Native разработка',
        description: 'Глубокие агентные воркфлоу на базе PydanticAI, LangGraph и Vercel AI SDK. Написание продакшен-кода с помощью Claude Code и OpenHands.',
        color: 'tertiary',
        active: false,
        dimmed: true,
      },
      {
        id: 'q4',
        title: 'Q4: Эффективное масштабирование',
        description: 'Деплой мультиагентных микро-SaaS решений с семантической маршрутизацией, кэшированием промптов и системами безопасности Llama Guard.',
        color: 'outline',
        active: false,
        dimmed: true,
      },
    ]
  };

  const currentStages = stages[lang] || stages.en;

  const getColorClass = (color) => {
    switch (color) {
      case 'primary': return 'border-primary text-primary';
      case 'secondary': return 'border-secondary text-secondary';
      case 'tertiary': return 'border-tertiary text-tertiary';
      default: return 'border-outline text-on-surface-variant';
    }
  };

  const getDotColorClass = (color) => {
    switch (color) {
      case 'primary': return 'bg-primary shadow-[0_0_15px_rgba(168,85,247,0.4)]';
      case 'secondary': return 'bg-secondary shadow-[0_0_15px_rgba(76,215,246,0.4)]';
      case 'tertiary': return 'bg-tertiary shadow-[0_0_15px_rgba(78,222,163,0.4)]';
      default: return 'bg-outline';
    }
  };

  return (
    <section id="roadmap" className="mb-section-gap circuit-bg rounded-3xl p-8 lg:p-12 scroll-mt-24">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block font-inter">{t('timeline')}</span>
        <h2 className="text-3xl lg:text-4xl font-bold">{t('masteryRoadmap')}</h2>
      </div>
      
      <div className="relative space-y-12 pl-12">
        {/* Connecting Line */}
        <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-tertiary shadow-[0_0_10px_rgba(76,215,246,0.5)]"></div>
        
        {currentStages.map((stage, index) => (
          <motion.div 
            key={stage.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative ${stage.dimmed ? 'opacity-50' : ''}`}
          >
            <div className={`absolute -left-12 top-1 w-8 h-8 rounded-full bg-slate-900 border-2 flex items-center justify-center ${getColorClass(stage.color)}`}>
              <div className={`w-2 h-2 rounded-full ${getDotColorClass(stage.color)}`}></div>
            </div>
            <div>
              <h4 className={`text-xl font-bold mb-2 ${getColorClass(stage.color)}`}>{stage.title}</h4>
              <p className="text-on-surface-variant max-w-xl font-body-md">{stage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MasteryTimeline;
