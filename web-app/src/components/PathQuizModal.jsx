import { useState } from 'react';
import { useLanguage } from '../context/language';

export const PathQuizModal = ({ isOpen, onClose, onSelectPath }) => {
  const { lang } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [resultPath, setResultPath] = useState(null);

  if (!isOpen) return null;

  const questions = [
    {
      id: 'q1',
      title: lang === 'ru' ? 'Каков ваш опыт в программировании?' : 'What is your coding experience level?',
      options: [
        { label: lang === 'ru' ? 'Новичок / Без опыта в коде' : 'Beginner / No coding experience', score: 'beginner' },
        { label: lang === 'ru' ? 'Пишу на Python / JS / Node.js' : 'I code in Python / JS / Node.js', score: 'developer' },
        { label: lang === 'ru' ? 'Опытный разработчик / Фаундер' : 'Senior Engineer / Startup Founder', score: 'money' },
      ],
    },
    {
      id: 'q2',
      title: lang === 'ru' ? 'Какова ваша главная цель?' : 'What is your primary goal?',
      options: [
        { label: lang === 'ru' ? 'Понять возможности LLM и автоматизировать контент' : 'Understand LLMs & automate content creation', score: 'beginner' },
        { label: lang === 'ru' ? 'Создавать RAG-системы, MCP-серверы и агентов' : 'Build RAG pipelines, MCP servers & AI agents', score: 'developer' },
        { label: lang === 'ru' ? 'Запустить работающий B2B ИИ-сервис (Micro-SaaS)' : 'Launch a working B2B AI Micro-SaaS product', score: 'money' },
      ],
    },
    {
      id: 'q3',
      title: lang === 'ru' ? 'Сколько времени вы готовы уделять сборке проектов?' : 'How much time will you spend building?',
      options: [
        { label: lang === 'ru' ? '1–2 часа в день (быстрый старт)' : '1–2 hours per day (quick start)', score: 'beginner' },
        { label: lang === 'ru' ? 'Несколько часов в день (серьезная разработка)' : 'A few hours per day (deep engineering)', score: 'developer' },
        { label: lang === 'ru' ? 'Спринт на выходных (вывод продукта в продакшен)' : 'Weekend sprint (ship to production market)', score: 'money' },
      ],
    },
  ];

  const handleSelectOption = (score) => {
    const nextAnswers = { ...answers, [currentStep]: score };
    setAnswers(nextAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result
      const scores = Object.values(nextAnswers);
      const count = { beginner: 0, developer: 0, money: 0 };
      scores.forEach((s) => (count[s] = (count[s] || 0) + 1));
      
      let best = 'beginner';
      if (count.developer >= count.beginner && count.developer >= count.money) best = 'developer';
      if (count.money > count.developer && count.money > count.beginner) best = 'money';
      
      setResultPath(best);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResultPath(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm font-space-grotesk">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
        <button
          onClick={() => {
            handleReset();
            onClose();
          }}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {!resultPath ? (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {lang === 'ru' ? `Вопрос ${currentStep + 1} из ${questions.length}` : `Question ${currentStep + 1} of ${questions.length}`}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              {questions[currentStep].title}
            </h3>

            <div className="space-y-3">
              {questions[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.score)}
                  className="w-full text-left p-4 rounded-xl bg-slate-950/60 hover:bg-slate-800 border border-slate-800 hover:border-primary/50 text-sm font-medium text-slate-200 transition-all flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors text-sm">chevron_right</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4 text-primary">
              <span className="material-symbols-outlined text-3xl">auto_awesome</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {lang === 'ru' ? 'Рекомендованный трек:' : 'Recommended Path:'}
            </h3>
            
            <div className="text-2xl font-bold text-primary uppercase tracking-wider mb-4">
              {resultPath === 'beginner' && (lang === 'ru' ? '🟢 1. Новичок (Fundamentals)' : '🟢 1. Beginner')}
              {resultPath === 'developer' && (lang === 'ru' ? '🟡 2. Разработчик (Agents & RAG)' : '🟡 2. Developer')}
              {resultPath === 'money' && (lang === 'ru' ? '💰 3. Монетизация (Micro-SaaS)' : '💰 3. Money Path')}
            </div>

            <p className="text-xs text-slate-400 mb-6">
              {lang === 'ru'
                ? 'Этот трек максимально соответствует вашему уровню и текущим целям.'
                : 'This path matches your current skill baseline and goals best.'}
            </p>

            <button
              onClick={() => {
                onSelectPath(resultPath);
                handleReset();
                onClose();
              }}
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
            >
              {lang === 'ru' ? 'Перейти к треку' : 'Go to Recommended Path'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PathQuizModal;
