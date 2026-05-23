import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Is this roadmap updated for the latest o1-pro release?',
      answer: 'Yes, we update the curriculum weekly. The o1-pro orchestration module is currently being beta-tested in Level 02 (Developer).',
    },
    {
      question: 'Do I need a GPU to complete Level 02?',
      answer: 'While many exercises use APIs (OpenAI/Anthropic), Level 02 includes local LLM optimization. We provide cloud instances for students without high-end local hardware.',
    },
    {
      question: 'Can I monetize my Level 03 project immediately?',
      answer: 'The Money track is specifically designed to help you launch a production-ready SaaS. We cover Stripe integration, token metering, and marketing frameworks for rapid growth.',
    },
  ];

  return (
    <section id="faq" className="mb-section-gap scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block font-inter">Inquiries</span>
          <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
