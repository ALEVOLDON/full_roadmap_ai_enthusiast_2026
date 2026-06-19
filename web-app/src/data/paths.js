export const paths = [
  {
    id: 'beginner',
    level: { en: 'Level 01', ru: 'Уровень 01' },
    title: { en: 'Beginner', ru: 'Новичок' },
    description: {
      en: 'Fundamental concepts of LLMs, prompt engineering, and basic orchestration.',
      ru: 'Базовые концепции LLM, промпт-инжиниринг и основы оркестрации.'
    },
    color: 'primary',
    progress: 0,
    steps: [
      { id: 'b1', label: { en: 'Python Basics', ru: 'Основы Python' }, completed: false, url: 'https://docs.python.org/3/tutorial/' },
      { id: 'b2', label: { en: 'System Prompting', ru: 'Системные промпты' }, completed: false, url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts' },
      { id: 'b3', label: { en: 'LLM Reasoning', ru: 'Рассуждения LLM' }, completed: false, url: 'https://platform.openai.com/docs/guides/reasoning' },
    ]
  },
  {
    id: 'developer',
    level: { en: 'Level 02', ru: 'Уровень 02' },
    title: { en: 'Developer', ru: 'Разработчик' },
    description: {
      en: 'RAG pipelines, MCP servers, and agentic workflows integration.',
      ru: 'RAG-конвейеры, MCP-серверы и интеграция агентных рабочих процессов.'
    },
    color: 'secondary',
    progress: 0,
    active: true,
    steps: [
      { id: 'd1', label: { en: 'API Setup', ru: 'Настройка API' }, completed: false, url: 'https://github.com/openai/openai-node' },
      { id: 'd2', label: { en: 'RAG Logic & pgvector', ru: 'Логика RAG и pgvector' }, completed: false, url: 'https://supabase.com/docs/guides/database/extensions/pgvector' },
      { id: 'd3', label: { en: 'MCP Server Development', ru: 'Разработка MCP-сервера' }, completed: false, url: 'https://modelcontextprotocol.io' },
    ]
  },
  {
    id: 'money',
    level: { en: 'Level 03', ru: 'Уровень 03' },
    title: { en: 'Money', ru: 'Монетизация' },
    description: {
      en: 'Deploying micro-SaaS, cost optimization, and routing strategies.',
      ru: 'Деплой микро-SaaS, оптимизация затрат и стратегии маршрутизации.'
    },
    color: 'tertiary',
    progress: 0,
    steps: [
      { id: 'm1', label: { en: 'Micro-SaaS Launch', ru: 'Запуск микро-SaaS' }, completed: false, url: 'https://nextjs.org/docs' },
      { id: 'm2', label: { en: 'Semantic Routing', ru: 'Семантическая маршрутизация' }, completed: false, url: 'https://sdk.vercel.ai/docs/introduction' },
      { id: 'm3', label: { en: 'Global Scaling', ru: 'Глобальное масштабирование' }, completed: false, url: 'https://stripe.com/docs' },
    ]
  }
];

export const coreStack = [
  {
    category: { en: 'AI Core', ru: 'Ядро ИИ' },
    tools: ['Claude Fable 5 / Opus 4.8', 'Claude Sonnet 4.6 / Haiku 4.5', 'GPT-5.5 / o3-mini', 'Gemini 3.5 Pro / Flash', 'DeepSeek-V4 Pro']
  },
  {
    category: { en: 'Backend & Data', ru: 'Бэкенд и Данные' },
    tools: ['Python 3.12 / Node', 'FastAPI', 'pgvector (Supabase)']
  },
  {
    category: { en: 'Orchestration', ru: 'Оркестрация' },
    tools: ['MCP', 'LangGraph', 'PydanticAI']
  },
  {
    category: { en: 'Frontend', ru: 'Фронтенд' },
    tools: ['Next.js 15+', 'Tailwind v4', 'Vercel AI SDK']
  }
];

export const initialProjects = [
  {
    id: 1,
    title: { en: 'Semantic Search Engine', ru: 'Семантический поисковик' },
    description: {
      en: 'Build a local PDF analyzer using RAG and ChromaDB.',
      ru: 'Создайте локальный анализатор PDF-файлов с использованием RAG и ChromaDB.'
    },
    xp: 300,
    completed: false,
    url: 'https://github.com/chroma-core/chroma'
  },
  {
    id: 2,
    title: { en: 'Autonomous SDR Agent', ru: 'Автономный SDR-агент' },
    description: {
      en: 'Multi-agent system for lead gen and personalized outreach using LangGraph or PydanticAI.',
      ru: 'Мультиагентная система лидогенерации и персонализированных писем на базе LangGraph или PydanticAI.'
    },
    xp: 500,
    completed: false,
    url: 'https://ai.pydantic.dev'
  },
  {
    id: 3,
    title: { en: 'Micro-SaaS Dashboard', ru: 'Панель управления микро-SaaS' },
    description: {
      en: 'Deploy an AI-powered analytics suite to Vercel with Stripe/Clerk.',
      ru: 'Деплой панели аналитики на базе ИИ на Vercel с интеграцией Stripe/Clerk.'
    },
    xp: 1000,
    completed: false,
    url: 'https://clerk.com'
  }
];
