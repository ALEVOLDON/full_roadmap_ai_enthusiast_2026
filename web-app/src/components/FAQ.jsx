import { useLanguage } from '../context/language';
import { faqs } from '../data/content';

const FAQ = () => {
  const { lang, t } = useLanguage();
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