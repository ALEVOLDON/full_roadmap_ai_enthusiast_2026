import { motion } from 'framer-motion';
import { useLanguage } from '../context/language';

const ProgressDashboard = ({ progress, onExport }) => {
  const { t, lang } = useLanguage();

  const getProgressMessage = () => {
    if (progress === 0) {
      return lang === 'ru'
        ? 'Выберите трек и отметьте свою первую задачу, чтобы начать отслеживать прогресс.'
        : 'Select a path and check your first task to start tracking your progress.';
    }
    const percent = Math.min(99, Math.round(10 + progress * 0.85));
    return lang === 'ru'
      ? `Вы на данный момент опережаете ${percent}% энтузиастов на этом пути.`
      : `You are currently outperforming ${percent}% of enthusiasts on this path.`;
  };

  return (
    <section id="dashboard" className="mb-section-gap scroll-mt-24">
      <div className="glass-panel p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <div className="z-10 text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('overallCompletion')}</h2>
          <p className="text-lg text-on-surface-variant mb-6 max-w-md font-body-lg">
            {getProgressMessage()}
          </p>
          <button
            onClick={onExport}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-secondary/40 bg-secondary/10 text-secondary hover:bg-secondary/20 transition-all text-xs font-bold uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm" data-icon="download">download</span>
            {t('exportProgress')}
          </button>
        </div>

        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle className="text-surface-container-highest" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="8"></circle>
            <motion.circle
              initial={{ strokeDashoffset: 691 }}
              animate={{ strokeDashoffset: 691 - (691 * progress) / 100 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="text-primary drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              cx="128"
              cy="128"
              fill="transparent"
              r="110"
              stroke="currentColor"
              strokeDasharray="691"
              strokeWidth="8"
              strokeLinecap="round"
            ></motion.circle>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-4xl text-on-surface font-bold font-space-grotesk">{progress}%</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{t('overallCompletion')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;