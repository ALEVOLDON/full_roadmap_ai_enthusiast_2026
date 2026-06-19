import { motion } from 'framer-motion';
import { useLanguage } from '../context/language';

const AIHub = () => {
  const { lang } = useLanguage();

  const copy = {
    en: {
      eyebrow: 'Community',
      title: 'The AI Hub',
      discussTitle: 'Roadmap Discussions',
      discussText: 'Use the repository to suggest new modules, update links, and discuss the practical projects.',
      discussAction: 'Open Repository',
      practiceTitle: 'Build Notes',
      practiceText: 'Track what you build for each level and turn the roadmap into portfolio-ready proof.',
      next: 'Next: Agentic Product Systems',
      contributeTitle: 'Open Source',
      contributeText: 'Improve the roadmap data, localization, and web experience through focused pull requests.',
      merged: 'Focused, practical contributions',
      viewRepo: 'View Repo',
    },
    ru: {
      eyebrow: 'Сообщество',
      title: 'AI Hub',
      discussTitle: 'Обсуждение карты',
      discussText: 'Используйте репозиторий, чтобы предлагать новые модули, обновлять ссылки и обсуждать практические проекты.',
      discussAction: 'Открыть репозиторий',
      practiceTitle: 'Заметки по сборке',
      practiceText: 'Фиксируйте, что вы собрали на каждом уровне, и превращайте карту в портфолио с реальными результатами.',
      next: 'Дальше: агентные продуктовые системы',
      contributeTitle: 'Open Source',
      contributeText: 'Улучшайте данные карты, локализацию и веб-интерфейс через небольшие понятные pull request.',
      merged: 'Практические точечные улучшения',
      viewRepo: 'Репозиторий',
    },
  };

  const t = copy[lang] || copy.en;

  return (
    <section id="hub" className="mb-section-gap scroll-mt-24">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block font-inter">{t.eyebrow}</span>
        <h2 className="text-3xl lg:text-4xl font-bold">{t.title}</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          whileHover={{ y: -4 }}
          className="glass-panel p-8 border-primary/20 flex flex-col justify-between hover:bg-primary/5 transition-all group"
        >
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary" data-icon="forum">forum</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.discussTitle}</h3>
            <p className="text-on-surface-variant mb-8 font-body-md">{t.discussText}</p>
          </div>
          <a
            href="https://github.com/ALEVOLDON/full_roadmap_ai_enthusiast_2026"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-primary text-on-primary-container font-bold rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all uppercase tracking-widest text-xs text-center"
          >
            {t.discussAction}
          </a>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          className="glass-panel p-8 border-secondary/20 flex flex-col hover:bg-secondary/5 transition-all group"
        >
          <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary" data-icon="video_library">video_library</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">{t.practiceTitle}</h3>
          <p className="text-on-surface-variant mb-6 font-body-md">{t.practiceText}</p>
          <div className="relative rounded-xl overflow-hidden aspect-video border border-secondary/30 bg-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="z-10 flex flex-col items-center">
              <span className="material-symbols-outlined text-secondary text-5xl mb-2" data-icon="play_circle">play_circle</span>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] text-center px-4">{t.next}</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          className="glass-panel p-8 border-tertiary/20 flex flex-col hover:bg-tertiary/5 transition-all group"
        >
          <div className="w-12 h-12 rounded-lg bg-tertiary/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-tertiary" data-icon="terminal">terminal</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">{t.contributeTitle}</h3>
          <p className="text-on-surface-variant mb-6 font-body-md">{t.contributeText}</p>
          
          <div className="flex flex-wrap gap-1 p-4 bg-slate-950/40 rounded-lg border border-tertiary/10">
            {[...Array(24)].map((_, i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-sm ${
                  i % 5 === 0 ? 'bg-tertiary/100 shadow-[0_0_8px_rgba(78,222,163,0.5)]' : 
                  i % 3 === 0 ? 'bg-tertiary/60' : 
                  i % 2 === 0 ? 'bg-tertiary/30' : 'bg-tertiary/10'
                }`}
              ></div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{t.merged}</span>
            <a
              href="https://github.com/ALEVOLDON/full_roadmap_ai_enthusiast_2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-tertiary font-bold uppercase tracking-widest hover:underline"
            >
              {t.viewRepo}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHub;
