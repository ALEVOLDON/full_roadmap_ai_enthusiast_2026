export const roadmapData = [
  {
    id: 1,
    title: "Эра Агентов и Рассуждений",
    period: "Январь — Март",
    goal: "Перейти от простых чатов к пониманию того, как ИИ \"думает\" и выполняет сложные задачи.",
    tasks: [
      { id: "1-1", text: "Reasoning Models: Изучение архитектур моделей с \"рассуждением\" (OpenAI o1, Claude 3.7, DeepSeek-R).", completed: false },
      { id: "1-2", text: "System 1 vs System 2: Понимание разницы между быстрым и медленным мышлением ИИ.", completed: false },
      { id: "1-3", text: "Agentic Workflows: Основы автономных систем и обучение ИИ пользоваться инструментами (браузер, терминал, API).", completed: false },
      { id: "1-4", text: "Ресурсы: Прохождение курса \"AI Agents in Practice\".", completed: false }
    ],
    icon: "Brain"
  },
  {
    id: 2,
    title: "Локальный ИИ и Приватность",
    period: "Апрель — Июнь",
    goal: "Запустить мощные модели на своем железе и создать персональную \"суверенную\" базу знаний.",
    tasks: [
      { id: "2-1", text: "Local Infrastructure: Установка Ollama и LM Studio на системы с NPU.", completed: false },
      { id: "2-2", text: "OpenWebUI: Настройка личного хаба для всех локальных моделей.", completed: false },
      { id: "2-3", text: "Personal RAG: Интеграция систем типа MemGPT или AnythingLLM для поиска по личным данным.", completed: false },
      { id: "2-4", text: "Small Language Models: Оптимизация и квантование моделей для мобильных устройств.", completed: false }
    ],
    icon: "Shield"
  },
  {
    id: 3,
    title: "AI-Native Разработка и Дизайн",
    period: "Июль — Сентябрь",
    goal: "Создавать полноценные продукты со скоростью мысли, делегируя написание кода и дизайн ИИ-агентам.",
    tasks: [
      { id: "3-1", text: "Autonomous Coding: Погружение в Cursor, Windsurf и использование Devin/OpenDevin.", completed: false },
      { id: "3-2", text: "Multimodal Creation: Генерация консистентного медиа-контента через Sora и Runway Gen-3/4.", completed: false },
      { id: "3-3", text: "Оркестрация: Изучение LangGraph, CrewAI и PydanticAI для сложных систем.", completed: false }
    ],
    icon: "Code"
  },
  {
    id: 4,
    title: "Свой продукт и Масштабирование",
    period: "Октябрь — Декабрь",
    goal: "Запуск и вывод своего AI-агента или сервиса на реальный рынок.",
    tasks: [
      { id: "4-1", text: "Product Launch: Деплой мультиагентной системы и настройка мониторинга.", completed: false },
      { id: "4-2", text: "AI Safety & Ethics: Защита от инъекций и этическая фильтрация контента.", completed: false },
      { id: "4-3", text: "Community: Участие в Open Source и коллаборации в AI-хабах.", completed: false }
    ],
    icon: "Rocket"
  }
];
