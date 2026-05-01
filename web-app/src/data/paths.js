export const pathsData = {
  beginner: {
    title: "Beginner Path",
    description: "Для тех, кто только начинает свой путь в ИИ.",
    steps: [
      { id: "b1", title: "База", items: ["Что такое LLM", "Как работают API", "Prompt engineering"] },
      { id: "b2", title: "Первый проект", items: ["Генератор текста", "Простой чат-бот"] }
    ]
  },
  developer: {
    title: "Developer Path",
    description: "Для разработчиков, желающих внедрить ИИ в свои проекты.",
    steps: [
      { id: "d1", title: "Быстрый вход", items: ["OpenAI / API", "LangChain / LangGraph"] },
      { id: "d2", title: "Сложный проект", items: ["AI Telegram Bot", "RAG система"] }
    ]
  },
  money: {
    title: "Money Path",
    description: "Для тех, кто хочет создавать и монетизировать ИИ-продукты.",
    steps: [
      { id: "m1", title: "Быстрый продукт", items: ["Поиск ниши", "MVP инструмента"] },
      { id: "m2", title: "Упаковка и Продажи", items: ["Лендинг", "Монетизация (SaaS)"] }
    ]
  }
};

export const coreStack = [
  { category: "🧠 AI", tools: ["LLM (OpenAI/Gemini)", "RAG", "Agents"] },
  { category: "⚙️ Backend", tools: ["Node.js", "Python", "API"] },
  { category: "🧩 Automation", tools: ["n8n", "Zapier"] },
  { category: "🎨 Frontend", tools: ["React", "Vite", "No-code"] }
];

export const requiredProjects = [
  { id: "p1", title: "AI Tool", description: "Мини-приложение с API", completed: false },
  { id: "p2", title: "Telegram Bot", description: "С памятью и логикой", completed: false },
  { id: "p3", title: "AI SaaS", description: "Простой сервис с UI", completed: false }
];
