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
        ? 'Привет! Я ваш ИИ-Навигатор по сайту Дорожная карта ИИ 2026. Задайте любой вопрос по трекам, проектам #1–#4, стеку или функциям дашборда.'
        : 'Hello! I am your AI Navigator for the 2026 AI Roadmap site. Ask me anything about our paths, projects #1–#4, tech stack, or dashboard tools.'
    }
  ]);

  const presetQuestions = lang === 'ru'
    ? [
        'Какие проекты входят в карту?',
        'Что изучать на треке Разработчика?',
        'Как устроена Шпаргалка 2026?'
      ]
    : [
        'Which starter projects are included?',
        'What to study in Developer Path?',
        'How does Cheat Sheet 2026 work?'
      ];

  const getSiteSpecificAnswer = (query) => {
    const q = query.toLowerCase();

    // 1. Projects
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

    // 2. Paths
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

    // 3. Site features
    if (q.includes('тест') || q.includes('quiz') || q.includes('поиск') || q.includes('search') || q.includes('шпаргалк') || q.includes('cheat') || q.includes('экспорт') || q.includes('export') || q.includes('ачив') || q.includes('достижен')) {
      if (q.includes('тест') || q.includes('quiz')) {
        return lang === 'ru'
          ? 'Экспресс-тест (кнопка 🧩 Пройти тест) задает 4 вопроса о вашем опыте и целях, затем высчитывает и подсвечивает наиболее подходящий трек.'
          : 'The diagnostic quiz (🧩 Quiz button) asks 4 questions about your skills & goals, then highlights your recommended starting path.';
      }
      if (q.includes('шпаргалк') || q.includes('cheat')) {
        return lang === 'ru'
          ? 'Шпаргалка 2026 (кнопка 💡 в шапке) содержит готовые шаблоны кода и паттерны для MCP Protocol, промптинга рассуждающих моделей и семантического кэша.'
          : 'Cheat Sheet 2026 (💡 button) provides code snippets for MCP Protocol, reasoning system prompting, and semantic routing.';
      }
      if (q.includes('ачив') || q.includes('достижен') || q.includes('badge')) {
        return lang === 'ru'
          ? 'Раздел Достижений автоматически разблокирует награды (MCP Explorer, Agent Architect, SaaS Monetizer, 2026 AI Master) по мере выполнения задач карты.'
          : 'The Achievements section automatically unlocks badges (MCP Explorer, Agent Architect, SaaS Monetizer, 2026 AI Master) as your progress grows.';
      }
      return lang === 'ru'
        ? 'На сайте доступны интерактивные функции: Поисковая строка, Экспресс-тест (🧩), Шпаргалка 2026 (💡), Экспорт прогресса в Markdown/JSON (📤) и Система достижений (🏆).'
        : 'Interactive site tools include: Real-time Search, Path Diagnostic Quiz (🧩), Cheat Sheet 2026 (💡), Progress Exporter (📤), and Achievements (🏆).';
    }

    // 4. Core Stack
    if (q.includes('стек') || q.includes('stack') || q.includes('mcp') || q.includes('gpt') || q.includes('claude') || q.includes('rag') || q.includes('langgraph') || q.includes('pydantic')) {
      return lang === 'ru'
        ? 'Стек 2026 на сайте включает: Модели (GPT-5.5, o3-mini, Claude Fable 5 / Opus 4.8 / Sonnet 4.6, Gemini 3.5), Протоколы (MCP), Оркестрацию (LangGraph, PydanticAI, Vercel AI SDK), Фронтенд (Next.js 15, Tailwind v4) и Базы данных (Supabase pgvector, Pinecone).'
        : 'The 2026 Core Stack features: Models (GPT-5.5, o3-mini, Claude Opus 4.8/Fable 5, Gemini 3.5), Protocols (MCP), Orchestration (LangGraph, PydanticAI, Vercel AI SDK), Frontend (Next.js 15, Tailwind v4), and Databases (Supabase pgvector).';
    }

    // Strict Out-of-Scope Fallback (focusing strictly on the site)
    return lang === 'ru'
      ? `Я ИИ-Навигатор по этому сайту. Я отвечаю строго по материалам Дорожной карты ИИ 2026: трекам (Beginner/Developer/Money), стартовым проектам #1–#4, стеку (MCP, RAG, GPT-5.5, Opus 4.8) и функциям дашборда. Задайте вопрос по материалам сайта!`
      : `I am the AI Navigator for this 2026 AI Roadmap website. I strictly answer questions about our paths (Beginner/Developer/Money), starter projects #1–#4, tech stack (MCP, RAG, GPT-5.5, Opus 4.8), and dashboard tools. Ask me anything about the site!`;
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMessage = { sender: 'user', text: query };
    const answer = getSiteSpecificAnswer(query);
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
          <span className="hidden sm:inline text-sm">ИИ-Навигатор</span>
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl w-80 sm:w-96 shadow-2xl overflow-hidden flex flex-col max-h-[500px]">
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">smart_toy</span>
              <span className="font-bold text-white text-sm">ИИ-Навигатор по сайту</span>
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
                className={`p-3 rounded-xl max-w-[88%] whitespace-pre-line ${
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
              placeholder={lang === 'ru' ? 'Спросить о сайте...' : 'Ask about the site...'}
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
