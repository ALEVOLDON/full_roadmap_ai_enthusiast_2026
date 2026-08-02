import { useState, useEffect } from 'react';
import { useLanguage } from '../context/language';

const ROADMAP_SYSTEM_PROMPT = `You are the official AI Navigator for the "AI Roadmap 2026 — From Zero to Builder" website (https://alevoldon.github.io/full_roadmap_ai_enthusiast_2026/).
Your role is to guide users strictly regarding this website, its 3 learning paths (Beginner, Developer, Money), 4 starter projects (01-content-factory, 02-telegram-mcp, 03-micro-saas, 04-multi-agent-orchestrator), the 2026 core tech stack (MCP, RAG, GPT-5.5, Claude Opus 4.8, Supabase pgvector, LangGraph, PydanticAI), and site features (Search, Quiz, Cheat Sheet 2026, Achievements, Progress Exporter).
Be helpful, concise, professional, and write in the user's language.`;

export const AIMentorWidget = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputQuery, setInputQuery] = useState('');

  // Provider Settings
  const [provider, setProvider] = useState(() => localStorage.getItem('ai_mentor_provider') || 'groq');
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('ai_mentor_apikey') || '');

  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'mentor',
      text: lang === 'ru'
        ? 'Привет! Я ваш ИИ-Навигатор по сайту Дорожная карта ИИ 2026. Задайте любой вопрос по трекам, проектам #1–#4, стеку или настройкам моделей.'
        : 'Hello! I am your AI Navigator for the 2026 AI Roadmap site. Ask me anything about our paths, projects #1–#4, tech stack, or live LLM settings.'
    }
  ]);

  useEffect(() => {
    localStorage.setItem('ai_mentor_provider', provider);
  }, [provider]);

  useEffect(() => {
    localStorage.setItem('ai_mentor_apikey', apiKey);
  }, [apiKey]);

  const presetQuestions = lang === 'ru'
    ? [
        'Какие проекты входят в карту?',
        'Что изучать на треке Разработчика?',
        'Как настроить бесплатный API ключ (Groq/Gemini)?'
      ]
    : [
        'Which starter projects are included?',
        'What to study in Developer Path?',
        'How to set up free API key (Groq/Gemini)?'
      ];

  const getSiteSpecificFallbackAnswer = (query) => {
    const q = query.toLowerCase();

    if (q.includes('ключ') || q.includes('key') || q.includes('groq') || q.includes('gemini') || q.includes('настро')) {
      return lang === 'ru'
        ? 'Нажмите ⚙️ Настройки в шапке Ментора. Вставьте бесплатный API-ключ от Groq (console.groq.com) или Google Gemini (aistudio.google.com) для включения живых ответов моделей Llama 3.3 70B / Gemini 2.5 Flash в реальном времени!'
        : 'Click ⚙️ Settings in the Mentor header. Paste a free API key from Groq (console.groq.com) or Google Gemini (aistudio.google.com) to enable live real-time LLM responses!';
    }

    if (q.includes('проект') || q.includes('project') || q.includes('проекты') || q.includes('projects')) {
      if (q.includes('1') || q.includes('фабрика') || q.includes('content')) {
        return lang === 'ru'
          ? 'Проект №1 "Умная фабрика контента" (projects/01-content-factory): генерация 5 готовых форматов контента (резюме, тред, пост, рассылка, видео-скрипт) на базе OpenAI/Claude API с пресетами тональности.'
          : 'Project #1 "Smart Content Factory" (projects/01-content-factory): generates 5 publish-ready content formats using multi-provider LLM CLI.';
      }
      if (q.includes('2') || q.includes('telegram') || q.includes('телеграм') || q.includes('мозг')) {
        return lang === 'ru'
          ? 'Проект №2 "Telegram-бот Второй мозг + MCP" (projects/02-telegram-mcp): RAG-бот, отвечающий строго по вашим PDF/MD файлам через кастомный MCP-сервер.'
          : 'Project #2 "Second Brain Telegram Bot + MCP" (projects/02-telegram-mcp): RAG Telegram bot reading local files via a custom MCP server.';
      }
      if (q.includes('3') || q.includes('saas') || q.includes('договор')) {
        return lang === 'ru'
          ? 'Проект №3 "Микро-SaaS для бизнеса" (projects/03-micro-saas): B2B генератор договоров на FastAPI + Next.js с семантическим кэшированием и вебхуками Stripe.'
          : 'Project #3 "Micro-SaaS for Business" (projects/03-micro-saas): B2B contract generator on FastAPI + Next.js with semantic request caching & Stripe webhooks.';
      }
      if (q.includes('4') || q.includes('агент') || q.includes('оркестратор') || q.includes('multi')) {
        return lang === 'ru'
          ? 'Проект №4 "Мультиагентный оркестратор" (projects/04-multi-agent-orchestrator): автономная система взаимодействия 3 агентов (Planner, Executor, Reviewer) с итеративной доработкой.'
          : 'Project #4 "Multi-Agent Orchestrator" (projects/04-multi-agent-orchestrator): autonomous loop between Planner, Executor, and Reviewer agents.';
      }
      return lang === 'ru'
        ? 'В дорожную карту входят 4 практических стартовых шаблона: \n1. Умная фабрика контента\n2. Telegram-бот "Второй мозг" + MCP\n3. B2B Микро-SaaS\n4. Мультиагентный оркестратор. Все исходники в папке projects/!'
        : 'The roadmap features 4 starter project templates:\n1. Smart Content Factory\n2. Second Brain Telegram Bot + MCP\n3. B2B Micro-SaaS\n4. Multi-Agent Orchestrator. Sources are in projects/!';
    }

    if (q.includes('трек') || q.includes('path') || q.includes('уровн') || q.includes('level') || q.includes('новичок') || q.includes('разработчик') || q.includes('монетизаци')) {
      if (q.includes('новичок') || q.includes('beginner') || q.includes('1')) {
        return lang === 'ru'
          ? 'Трек №1 "Новичок": основы LLM (токены, контекст, температура), системный промптинг рассуждающих моделей (GPT-5.5, Claude Opus 4.8) и оркестрация без сложного кода.'
          : 'Path #1 "Beginner": LLM fundamentals, system prompting for reasoning models, and orchestration without complex code.';
      }
      if (q.includes('разработчик') || q.includes('developer') || q.includes('2')) {
        return lang === 'ru'
          ? 'Трек №2 "Разработчик": создание RAG-конвейеров, работа с векторными БД (Supabase pgvector / Qdrant), разработка MCP-серверов и автономных агентов.'
          : 'Path #2 "Developer": RAG pipelines, vector DBs (Supabase pgvector), custom MCP servers, and agentic workflows.';
      }
      if (q.includes('монетизаци') || q.includes('money') || q.includes('3') || q.includes('бизнес')) {
        return lang === 'ru'
          ? 'Трек №3 "Монетизация": деплой B2B сервисов (Next.js 15 + Tailwind v4 + Vercel AI SDK), семантическая маршрутизация, кэширование и платежи Stripe.'
          : 'Path #3 "Money": B2B Micro-SaaS deployment (Next.js 15, Vercel AI SDK), semantic request caching, and Stripe payments.';
      }
      return lang === 'ru'
        ? 'Карта включает 3 трека обучения: 🟢 1. Новичок (Основы), 🟡 2. Разработчик (Агенты & MCP), 💰 3. Монетизация (Micro-SaaS). Вы можете пройти тест (кнопка 🧩 Пройти тест в шапке) для выбора оптимального пути!'
        : 'The roadmap has 3 learning paths: 🟢 1. Beginner, 🟡 2. Developer, 💰 3. Money Path. Use the 🧩 Quiz button in the header to find your recommended starting point!';
    }

    return lang === 'ru'
      ? `Я ИИ-Навигатор по этому сайту. Я отвечаю строго по материалам Дорожной карты ИИ 2026: трекам (Beginner/Developer/Money), стартовым проектам #1–#4, стеку (MCP, RAG, GPT-5.5, Opus 4.8) и функциям дашборда. Нажмите ⚙️ чтобы добавить бесплатный ключ Groq/Gemini!`
      : `I am the AI Navigator for this 2026 AI Roadmap website. I strictly answer questions about our paths (Beginner/Developer/Money), starter projects #1–#4, tech stack (MCP, RAG, GPT-5.5, Opus 4.8), and dashboard tools. Click ⚙️ to add a free Groq/Gemini key!`;
  };

  const callLiveLLM = async (query) => {
    if (!apiKey.trim()) return null;

    try {
      if (provider === 'groq') {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey.trim()}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: ROADMAP_SYSTEM_PROMPT },
              { role: 'user', content: query }
            ],
            temperature: 0.5,
            max_tokens: 400
          })
        });
        const data = await response.json();
        return data?.choices?.[0]?.message?.content || null;
      } else if (provider === 'gemini') {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey.trim()}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              { parts: [{ text: `${ROADMAP_SYSTEM_PROMPT}\n\nUser Question: ${query}` }] }
            ]
          })
        });
        const data = await response.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
      }
    } catch {
      return null;
    }
    return null;
  };

  const handleSend = async (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: query };
    setChatHistory((prev) => [...prev, userMessage]);
    if (!textToSend) setInputQuery('');
    setIsLoading(true);

    let answer = null;
    if (apiKey.trim()) {
      answer = await callLiveLLM(query);
    }

    if (!answer) {
      answer = getSiteSpecificFallbackAnswer(query);
    }

    const mentorMessage = { sender: 'mentor', text: answer };
    setChatHistory((prev) => [...prev, mentorMessage]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-space-grotesk">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-105 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">smart_toy</span>
          <span className="hidden sm:inline text-sm">ИИ-Навигатор</span>
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl w-80 sm:w-96 shadow-2xl overflow-hidden flex flex-col max-h-[520px]">
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">smart_toy</span>
              <span className="font-bold text-white text-sm">ИИ-Навигатор</span>
              {apiKey.trim() ? (
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  Live {provider.toUpperCase()}
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                  Built-in
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className={`p-1 rounded transition-colors ${isSettingsOpen ? 'text-amber-400' : 'text-slate-400 hover:text-white'}`}
                title="Model Settings"
              >
                <span className="material-symbols-outlined text-sm">settings</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          </div>

          {/* Settings Drawer */}
          {isSettingsOpen && (
            <div className="p-4 bg-slate-950 border-b border-slate-800 text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200">⚙️ Live LLM Settings</span>
                <span className="text-[10px] text-slate-500">Free API Key</span>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Provider:</label>
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-2.5 py-1.5 focus:outline-none"
                >
                  <option value="groq">Groq Cloud (Llama 3.3 70B - Ultra Fast)</option>
                  <option value="gemini">Google Gemini (Gemini 2.5 Flash)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1">API Key:</label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder={provider === 'groq' ? 'gsk_...' : 'AIzaSy...'}
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-2.5 py-1.5 focus:outline-none"
                />
                <p className="text-[10px] text-slate-500 mt-1">
                  Get free key: {provider === 'groq' ? 'console.groq.com' : 'aistudio.google.com'}
                </p>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs">
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl max-w-[88%] whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-primary/20 text-slate-100 ml-auto border border-primary/30'
                    : 'bg-slate-800 text-slate-200 border border-slate-700'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="p-3 bg-slate-800/60 rounded-xl text-slate-400 text-xs italic animate-pulse">
                {lang === 'ru' ? 'ИИ-Навигатор формирует ответ...' : 'AI Navigator generating live answer...'}
              </div>
            )}
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
              placeholder={lang === 'ru' ? 'Спросить о сайте...' : 'Ask about the site...'}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-primary"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading}
              className="px-3 py-1.5 bg-primary text-white font-bold rounded-xl text-xs hover:bg-primary/80 transition-colors disabled:opacity-50"
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
