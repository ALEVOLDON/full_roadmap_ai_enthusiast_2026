const REPO_BASE = 'https://github.com/ALEVOLDON/full_roadmap_ai_enthusiast_2026';

export const paths = [
  {
    id: 'beginner',
    level: { en: 'Level 01', ru: 'Уровень 01' },
    title: { en: 'Beginner', ru: 'Новичок' },
    description: {
      en: 'Understand LLM capabilities and orchestrate them without writing complex code.',
      ru: 'Понять возможности LLM и научиться оркестровать их без написания сложного кода.',
    },
    color: 'primary',
    progress: 0,
    steps: [
      {
        id: 'b1',
        label: { en: 'LLM Basics', ru: 'База LLM' },
        completed: false,
        url: 'https://platform.openai.com/docs/guides/text-generation',
      },
      {
        id: 'b2',
        label: { en: 'System Prompting', ru: 'Системные промпты' },
        completed: false,
        url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts',
      },
      {
        id: 'b3',
        label: { en: 'Prompt Engineering & Tools', ru: 'Промпт-инжиниринг и инструменты' },
        completed: false,
        url: 'https://platform.openai.com/docs/guides/reasoning',
      },
    ],
  },
  {
    id: 'developer',
    level: { en: 'Level 02', ru: 'Уровень 02' },
    title: { en: 'Developer', ru: 'Разработчик' },
    description: {
      en: 'RAG pipelines, MCP servers, and agentic workflows integration.',
      ru: 'RAG-конвейеры, MCP-серверы и интеграция агентных рабочих процессов.',
    },
    color: 'secondary',
    progress: 0,
    active: true,
    steps: [
      {
        id: 'd1',
        label: { en: 'API Setup', ru: 'Настройка API' },
        completed: false,
        url: 'https://github.com/openai/openai-node',
      },
      {
        id: 'd2',
        label: { en: 'RAG Logic & pgvector', ru: 'Логика RAG и pgvector' },
        completed: false,
        url: 'https://supabase.com/docs/guides/database/extensions/pgvector',
      },
      {
        id: 'd3',
        label: { en: 'MCP Server Development', ru: 'Разработка MCP-сервера' },
        completed: false,
        url: 'https://modelcontextprotocol.io',
      },
    ],
  },
  {
    id: 'money',
    level: { en: 'Level 03', ru: 'Уровень 03' },
    title: { en: 'Money', ru: 'Монетизация' },
    description: {
      en: 'Deploying micro-SaaS, cost optimization, and routing strategies.',
      ru: 'Деплой микро-SaaS, оптимизация затрат и стратегии маршрутизации.',
    },
    color: 'tertiary',
    progress: 0,
    steps: [
      {
        id: 'm1',
        label: { en: 'Micro-SaaS Launch', ru: 'Запуск микро-SaaS' },
        completed: false,
        url: 'https://nextjs.org/docs',
      },
      {
        id: 'm2',
        label: { en: 'Semantic Routing', ru: 'Семантическая маршрутизация' },
        completed: false,
        url: 'https://sdk.vercel.ai/docs/introduction',
      },
      {
        id: 'm3',
        label: { en: 'Payments & Auth', ru: 'Платежи и авторизация' },
        completed: false,
        url: 'https://stripe.com/docs',
      },
    ],
  },
];

export const coreStack = [
  {
    category: { en: 'AI Core', ru: 'Ядро ИИ' },
    tools: ['Claude Fable 5 / Opus 4.8', 'Claude Sonnet 4.6 / Haiku 4.5', 'GPT-5.5 / o3-mini', 'Gemini 3.5 Pro / Flash', 'DeepSeek-V4 Pro', 'Llama 4'],
  },
  {
    category: { en: 'Backend & Data', ru: 'Бэкенд и Данные' },
    tools: ['Python 3.12 / Node', 'FastAPI', 'pgvector (Supabase)'],
  },
  {
    category: { en: 'Orchestration', ru: 'Оркестрация' },
    tools: ['MCP', 'LangGraph', 'PydanticAI'],
  },
  {
    category: { en: 'Frontend', ru: 'Фронтенд' },
    tools: ['Next.js 15+', 'Tailwind v4', 'Vercel AI SDK'],
  },
];

export const initialProjects = [
  {
    id: 1,
    title: { en: 'Smart Content Factory', ru: 'Умная фабрика контента' },
    description: {
      en: 'Turn a single idea into 5 publish-ready formats: summary, Twitter thread, LinkedIn post, newsletter, and video script.',
      ru: 'Превратите одну идею в 5 готовых форматов: резюме, тред в Twitter, пост в LinkedIn, рассылку и сценарий видео.',
    },
    xp: 300,
    completed: false,
    url: `${REPO_BASE}/tree/main/projects/01-content-factory`,
  },
  {
    id: 2,
    title: { en: 'Second Brain Telegram Bot + MCP', ru: "Telegram-бот 'Второй мозг' + MCP" },
    description: {
      en: 'RAG-powered Telegram bot that answers strictly from your PDFs and links, connected via a custom MCP server.',
      ru: 'Telegram-бот с RAG, отвечающий строго по вашим PDF и ссылкам, подключённый через кастомный MCP-сервер.',
    },
    xp: 500,
    completed: false,
    url: 'https://modelcontextprotocol.io',
  },
  {
    id: 3,
    title: { en: 'Micro-SaaS for Business', ru: 'Микро-SaaS для бизнеса' },
    description: {
      en: 'Full B2B web app with auth, semantic request caching, and Stripe payments (e.g. AI contract generator).',
      ru: 'Полноценное B2B веб-приложение с авторизацией, семантическим кэшированием и оплатой через Stripe.',
    },
    xp: 1000,
    completed: false,
    url: 'https://clerk.com/docs',
  },
];

export const timelineStages = [
  {
    id: 'q1',
    title: { en: 'Q1: Reasoning & Agents', ru: 'Q1: Рассуждения и Агенты' },
    description: {
      en: 'Master GPT-5.5 and Claude Fable 5 / Opus 4.8 reasoning patterns, MCP, and autonomous tool-use loops.',
      ru: 'Освойте паттерны рассуждения GPT-5.5 и Claude Fable 5 / Opus 4.8, MCP и автономные циклы работы с инструментами.',
    },
    color: 'primary',
    active: true,
    tasks: [
      {
        id: 'q1-1',
        label: { en: 'Study reasoning models (GPT-5.5, Opus 4.8)', ru: 'Изучить рассуждающие модели (GPT-5.5, Opus 4.8)' },
        completed: false,
      },
      {
        id: 'q1-2',
        label: { en: 'Understand System 1 vs System 2 thinking', ru: 'Понять разницу System 1 vs System 2' },
        completed: false,
      },
      {
        id: 'q1-3',
        label: { en: 'Build first MCP tool-use loop', ru: 'Собрать первый цикл MCP + инструменты' },
        completed: false,
        url: 'https://modelcontextprotocol.io',
      },
    ],
  },
  {
    id: 'q2',
    title: { en: 'Q2: Local AI & NPU', ru: 'Q2: Локальный ИИ и NPU' },
    description: {
      en: 'Run Llama 4 and Phi-4 on edge NPU hardware. Set up local MCP servers and offline RAG with Ollama and Exo.',
      ru: 'Запустите Llama 4 и Phi-4 на edge NPU. Настройте локальные MCP-серверы и офлайн RAG через Ollama и Exo.',
    },
    color: 'secondary',
    active: true,
    tasks: [
      {
        id: 'q2-1',
        label: { en: 'Install Ollama + OpenWebUI', ru: 'Установить Ollama + OpenWebUI' },
        completed: false,
        url: 'https://ollama.com',
      },
      {
        id: 'q2-2',
        label: { en: 'Set up personal RAG pipeline', ru: 'Настроить персональный RAG-конвейер' },
        completed: false,
      },
      {
        id: 'q2-3',
        label: { en: 'Quantize SLMs for local inference', ru: 'Квантовать SLM для локального инференса' },
        completed: false,
      },
    ],
  },
  {
    id: 'q3',
    title: { en: 'Q3: AI-Native Engineering', ru: 'Q3: AI-Native разработка' },
    description: {
      en: 'Deep agentic workflows with PydanticAI, LangGraph, and Vercel AI SDK. Ship production code with Claude Code.',
      ru: 'Глубокие агентные воркфлоу на PydanticAI, LangGraph и Vercel AI SDK. Продакшен-код с Claude Code.',
    },
    color: 'tertiary',
    active: false,
    dimmed: true,
    tasks: [
      {
        id: 'q3-1',
        label: { en: 'Master agentic coding tools', ru: 'Освоить агентные инструменты кодинга' },
        completed: false,
      },
      {
        id: 'q3-2',
        label: { en: 'Build multi-agent orchestration', ru: 'Собрать мультиагентную оркестрацию' },
        completed: false,
        url: 'https://ai.pydantic.dev',
      },
      {
        id: 'q3-3',
        label: { en: 'Deploy first production agent', ru: 'Задеплоить первого продакшен-агента' },
        completed: false,
      },
    ],
  },
  {
    id: 'q4',
    title: { en: 'Q4: Cost-Efficient Scaling', ru: 'Q4: Эффективное масштабирование' },
    description: {
      en: 'Launch multi-agent micro-SaaS with semantic routing, prompt caching, and Llama Guard safety rails.',
      ru: 'Запустите мультиагентный микро-SaaS с семантической маршрутизацией, кэшированием промптов и Llama Guard.',
    },
    color: 'outline',
    active: false,
    dimmed: true,
    tasks: [
      {
        id: 'q4-1',
        label: { en: 'Launch product with monitoring', ru: 'Запустить продукт с мониторингом' },
        completed: false,
      },
      {
        id: 'q4-2',
        label: { en: 'Implement semantic routing & caching', ru: 'Внедрить семантическую маршрутизацию и кэш' },
        completed: false,
      },
      {
        id: 'q4-3',
        label: { en: 'Contribute to open source', ru: 'Внести вклад в open source' },
        completed: false,
        url: REPO_BASE,
      },
    ],
  },
];

export const faqs = {
  en: [
    {
      question: 'Is this roadmap updated for the latest GPT-5.5 and Claude Fable 5 / Opus 4.8 releases?',
      answer: 'Yes. The GPT-5.5, Claude Fable 5, and Claude Opus 4.8 orchestration modules are reflected in Level 02 (Developer) and Level 03 (Money).',
    },
    {
      question: 'Do I need a GPU to complete Level 02?',
      answer: 'Most exercises use cloud APIs (OpenAI/Anthropic). For local LLM work in Q2, Ollama runs on CPU — a discrete GPU helps but is not required to start.',
    },
    {
      question: 'Can I monetize my Level 03 project immediately?',
      answer: 'The Money track is designed to help you launch a production-ready SaaS. It covers Stripe integration, token metering, and go-to-market basics for rapid growth.',
    },
  ],
  ru: [
    {
      question: 'Обновлена ли эта дорожная карта под последние релизы GPT-5.5 и Claude Fable 5 / Opus 4.8?',
      answer: 'Да. Модули оркестрации под GPT-5.5, Claude Fable 5 и Claude Opus 4.8 отражены на уровне Разработчика (Level 02) и Монетизации (Level 03).',
    },
    {
      question: 'Нужен ли мне GPU для прохождения Уровня 02?',
      answer: 'Большинство упражнений используют облачные API (OpenAI/Anthropic). Для локальных LLM в Q2 Ollama работает на CPU — дискретная видеокарта помогает, но для старта не обязательна.',
    },
    {
      question: 'Могу ли я сразу монетизировать проект из Уровня 03?',
      answer: 'Трек монетизации разработан для запуска готового к продакшену SaaS: интеграция Stripe, учёт токенов и основы выхода на рынок.',
    },
  ],
};

export const LIVE_DASHBOARD_URL = 'https://alevoldon.github.io/full_roadmap_ai_enthusiast_2026/';