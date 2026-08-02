import { useState } from 'react';
import { useLanguage } from '../context/language';

export const ShareProgressModal = ({ isOpen, onClose, overallProgress, pathProgresses, onResetProgress }) => {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const markdownText = `🚀 **My AI Roadmap 2026 Progress**\n` +
    `Overall Completion: ${overallProgress}%\n` +
    `• Beginner Path: ${pathProgresses.beginner || 0}%\n` +
    `• Developer Path: ${pathProgresses.developer || 0}%\n` +
    `• Money Path: ${pathProgresses.money || 0}%\n\n` +
    `Track your AI journey: https://alevoldon.github.io/full_roadmap_ai_enthusiast_2026/`;

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(localStorage.getItem('ai_roadmap_state') || '{}');
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "ai_roadmap_progress.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-lg w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h3 className="text-xl font-bold text-white mb-2">{t('shareProgress')}</h3>
        <p className="text-sm text-slate-400 mb-4">
          {lang === 'ru' ? 'Поделитесь своими достижениями или сохраните прогресс.' : 'Share your achievements or backup your state.'}
        </p>

        <div className="bg-slate-950/60 rounded-xl p-4 font-mono text-xs text-slate-300 border border-slate-800 mb-6 whitespace-pre-wrap">
          {markdownText}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">{copied ? 'check' : 'content_copy'}</span>
            {copied ? t('copied') : t('copyMarkdown')}
          </button>
          
          <button
            onClick={handleExportJson}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-xl transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            {t('exportJson')}
          </button>

          <button
            onClick={() => {
              if (confirm(lang === 'ru' ? 'Вы уверены, что хотите сбросить весь прогресс?' : 'Are you sure you want to reset all progress?')) {
                onResetProgress();
                onClose();
              }
            }}
            className="px-4 py-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-sm font-medium rounded-xl border border-rose-500/20 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            {t('resetProgress')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareProgressModal;
