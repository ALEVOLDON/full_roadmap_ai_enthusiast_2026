import { useLanguage } from '../context/language';
import { cheatSheets } from '../data/content';

export const CheatSheetModal = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();
  const sheets = cheatSheets[lang] || cheatSheets.en;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-2xl w-full shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
          <span>💡</span> {t('cheatSheet')}
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          {lang === 'ru' ? 'Ключевые концепции и шаблоны кода 2026 года.' : 'Key 2026 architecture patterns and code snippets.'}
        </p>

        <div className="space-y-6">
          {sheets.map((sheet, index) => (
            <div key={index} className="bg-slate-950/60 rounded-xl p-4 border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{sheet.icon}</span>
                <h4 className="font-semibold text-slate-200">{sheet.title}</h4>
              </div>
              <p className="text-xs text-slate-400 mb-3">{sheet.description}</p>
              <pre className="bg-slate-900 p-3 rounded-lg font-mono text-xs text-cyan-300 overflow-x-auto border border-slate-800">
                <code>{sheet.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheatSheetModal;
