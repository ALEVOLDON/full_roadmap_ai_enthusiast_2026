import { motion } from 'framer-motion';
import { useLanguage } from '../context/language';

export const Achievements = ({ globalProgress, completedProjectsCount }) => {
  const { lang } = useLanguage();

  const achievements = [
    {
      id: 'badge1',
      title: { en: 'AI Apprentice', ru: 'ИИ-Подмастерье' },
      desc: { en: 'Completed initial roadmap setup & fundamentals.', ru: 'Освоены основы и база промптинга.' },
      icon: 'school',
      unlocked: globalProgress >= 10,
    },
    {
      id: 'badge2',
      title: { en: 'MCP Explorer', ru: 'Исследователь MCP' },
      desc: { en: 'Mastered Model Context Protocol & local tool integration.', ru: 'Освоен Model Context Protocol и локальные инструменты.' },
      icon: 'power',
      unlocked: globalProgress >= 30,
    },
    {
      id: 'badge3',
      title: { en: 'Agent Architect', ru: 'Архитектор Агентов' },
      desc: { en: 'Built autonomous RAG agents & multi-agent loops.', ru: 'Созданы автономные RAG-агенты и мультиагентные циклы.' },
      icon: 'smart_toy',
      unlocked: globalProgress >= 60 || completedProjectsCount >= 2,
    },
    {
      id: 'badge4',
      title: { en: 'SaaS Monetizer', ru: 'Монетизатор SaaS' },
      desc: { en: 'Shipped production Micro-SaaS with Stripe & caching.', ru: 'Запущен Micro-SaaS с оплатой и семантическим кэшем.' },
      icon: 'payments',
      unlocked: globalProgress >= 85 || completedProjectsCount >= 3,
    },
    {
      id: 'badge5',
      title: { en: '2026 AI Master', ru: 'Мастер ИИ 2026' },
      desc: { en: '100% Roadmap completion. Ready for production market.', ru: '100% прохождение дорожной карты. Готов к рынку.' },
      icon: 'workspace_premium',
      unlocked: globalProgress >= 100,
    },
  ];

  return (
    <section className="mb-section-gap font-space-grotesk">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            🏆 {lang === 'ru' ? 'Достижения и Бейджи' : 'Achievements & Badges'}
          </h2>
          <p className="text-sm text-slate-400">
            {lang === 'ru' ? 'Разблокируйте награды по мере прохождения треков.' : 'Unlock rewards as you progress through learning paths.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {achievements.map((badge) => (
          <motion.div
            key={badge.id}
            whileHover={{ y: -3 }}
            className={`p-4 rounded-2xl border transition-all ${
              badge.unlocked
                ? 'bg-slate-900/90 border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.15)] text-white'
                : 'bg-slate-950/40 border-slate-800/60 opacity-50 grayscale text-slate-500'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                badge.unlocked ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300' : 'bg-slate-800 text-slate-600'
              }`}>
                <span className="material-symbols-outlined">{badge.icon}</span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                badge.unlocked ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-600'
              }`}>
                {badge.unlocked ? (lang === 'ru' ? 'Открыто' : 'Unlocked') : (lang === 'ru' ? 'Закрыто' : 'Locked')}
              </span>
            </div>

            <h4 className="font-bold text-sm mb-1">{badge.title[lang] || badge.title.en}</h4>
            <p className="text-xs text-slate-400 line-clamp-2">{badge.desc[lang] || badge.desc.en}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
