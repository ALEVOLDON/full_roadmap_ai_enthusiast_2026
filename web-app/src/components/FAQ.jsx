import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
  const { lang, t } = useLanguage();

  const faqs = {
    en: [
      {
        question: 'Is this roadmap updated for the latest GPT-5.5 and Claude 4/4.5 releases?',
        answer: 'Yes, we update the curriculum weekly. The GPT-5.5 and Claude Opus 4.8 orchestration modules are currently being integrated in Level 02 (Developer) and Level 03 (Money).',
      },
      {
        question: 'Do I need a GPU to complete Level 02?',
        answer: 'While many exercises use APIs (OpenAI/Anthropic), Level 02 includes local LLM optimization. We provide cloud instances for students without high-end local hardware.',
      },
      {
        question: 'Can I monetize my Level 03 project immediately?',
        answer: 'The Money track is specifically designed to help you launch a production-ready SaaS. We cover Stripe integration, token metering, and marketing frameworks for rapid growth.',
      },
    ],
    ru: [
      {
        question: 'Обновлена ли эта дорожная карта под последние релизы GPT-5.5 и Claude 4/4.5?',
        answer: 'Да, мы обновляем программу еженедельно. Модули оркестрации под GPT-5.5 и Claude Opus 4.8 в данный момент внедрены на уровне Разработчика (Level 02) и Монетизации (Level 03).',
      },
      {
        question: 'Нужен ли мне GPU для прохождения Уровня 02?',
        answer: 'Хотя многие упражнения используют API (OpenAI/Anthropic), Уровень 02 включает оптимизацию локальных LLM. Мы предоставляем облачные серверы для студентов без мощного локального оборудования.',
      },
      {
        question: 'Могу ли я сразу монетизировать проект из Уровня 03?',
        answer: 'Направление монетизации специально разработано для запуска готового к продакшену SaaS. Мы рассматриваем интеграцию Stripe, учет токенов и маркетинговые фреймворки для быстрого старта.',
      },
    ]
  };

  const currentFaqs = faqs[lang] || faqs.en;

  return (
    <section id="faq" className="mb-section-gap scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block font-inter">{t('inquiries')}</span>
          <h2 className="text-3xl lg:text-4xl font-bold">{t('faqTitle')}</h2>
        </div>
        
        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <details key={index} className="glass-panel group overflow-hidden border-outline-variant/30 rounded-xl">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-900/50 transition-colors list-none">
                <span className="font-bold text-on-surface">{faq.question}</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-secondary" data-icon="expand_more">expand_more</span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant font-body-md border-t border-outline-variant/10">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
