import { useState } from 'react';
import { useLanguage } from '../context/language';

export const AIMentorWidget = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'mentor',
      text: lang === 'ru'
        ? 'Привет! Я ваш ИИ-Ментор 2026. Задайте вопрос по MCP, RAG, агентам или монетизации.'
        : 'Hello! I am your 2026 AI Mentor. Ask me anything about MCP, RAG pipelines, agents, or SaaS monetization.'
    }
  ]);

  const presetQuestions = lang === 'ru'
    ? [
        'Что такое MCP Protocol?',
        'В чем разница между GPT-5.5 и Claude Opus 4.8?',
        'Какой векторный поиск выбрать для RAG?'
      ]
    : [
        'What is Model Context Protocol (MCP)?',
        'GPT-5.5 vs Claude Opus 4.8 reasoning?',
        'Which vector database for RAG?'
      ];

  const getKnowledgeAnswer = (query) => {
    const q = query.toLowerCase();
    if (q.includes('mcp') || q.includes('protocol')) {
      return lang === 'ru'
        ? 'MCP (Model Context Protocol) — открытый стандарт безопасного подключения моделей к локальной ФС, Notion и БД без галлюцинаций.'
        : 'MCP (Model Context Protocol) is the open standard for safely exposing local files, tools, and DBs to LLMs.';
    } else if (q.includes('gpt-5.5') || q.includes('opus') || q.includes('reasoning') || q.includes('рассуждения')) {
      return lang === 'ru'
        ? 'Рассуждающие модели 2026 года используют системный промптинг с выделением цепочки мыслей (System 2 thinking) и Extended Thinking.'
        : '2026 reasoning models utilize System 2 thinking, extended contextual prompting, and explicit step-by-step verification.';
    } else if (q.includes('rag') || q.includes('vector') || q.includes('вектор')) {
      return lang === 'ru'
        ? 'Для RAG в 2026 рекомендуется комбинация Supabase (pgvector) для структурированных данных или Qdrant/Pinecone для гибридного поиска.'
        : 'For 2026 RAG pipelines, Supabase pgvector or Qdrant/Pinecone hybrid search (dense + sparse keyword) is recommended.';
    } else {
      return lang === 'ru'
        ? `Отличный вопрос! Чтобы освоить "${query}", следуйте практическому треку Разработчика и создайте Проект №2 (Telegram Bot + MCP).`
        : `Great question! To master "${query}", follow the Developer track and complete Project #2 (Telegram Bot + MCP).`;
    }
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMessage = { sender: 'user', text: query };
    const answer = getKnowledgeAnswer(query);
    const mentorMessage = { sender: 'mentor', text: answer };

    setChatHistory((prev) => [...prev, userMessage, mentorMessage]);
    if (!textToSend) setInputQuery('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-space-grotesk">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-105 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">smart_toy</span>
          <span className="hidden sm:inline text-sm">AI Mentor 2026</span>
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl w-80 sm:w-96 shadow-2xl overflow-hidden flex flex-col max-h-[500px]">
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">smart_toy</span>
              <span className="font-bold text-white text-sm">AI Mentor 2026</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl max-w-[85%] ${
                  msg.sender === 'user'
                    ? 'bg-primary/20 text-slate-100 ml-auto border border-primary/30'
                    : 'bg-slate-800 text-slate-200 border border-slate-700'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Presets */}
          <div className="px-4 py-2 bg-slate-950/50 border-t border-slate-800/80 flex flex-wrap gap-1.5">
            {presetQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="text-[10px] bg-slate-800 hover:bg-slate-700 text-cyan-300 px-2 py-1 rounded-lg border border-slate-700 transition-colors text-left"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'ru' ? 'Задать вопрос...' : 'Ask a question...'}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-primary"
            />
            <button
              onClick={() => handleSend()}
              className="px-3 py-1.5 bg-primary text-white font-bold rounded-xl text-xs hover:bg-primary/80 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIMentorWidget;
