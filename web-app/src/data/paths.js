export const paths = [
  {
    id: 'beginner',
    level: 'Level 01',
    title: 'Beginner',
    description: 'Fundamental concepts of LLMs, prompt engineering, and basic orchestration.',
    color: 'primary',
    progress: 66,
    steps: [
      { id: 'b1', label: 'Python Basics', completed: true },
      { id: 'b2', label: 'System Prompting', started: true },
      { id: 'b3', label: 'LLM Reasoning', locked: true },
    ]
  },
  {
    id: 'developer',
    level: 'Level 02',
    title: 'Developer',
    description: 'RAG pipelines, MCP servers, and agentic workflows integration.',
    color: 'secondary',
    progress: 33,
    active: true,
    steps: [
      { id: 'd1', label: 'API Setup', completed: true },
      { id: 'd2', label: 'RAG Logic & pgvector', inProgress: true },
      { id: 'd3', label: 'MCP Server Development', locked: true },
    ]
  },
  {
    id: 'money',
    level: 'Level 03',
    title: 'Money',
    description: 'Deploying micro-SaaS, cost optimization, and routing strategies.',
    color: 'tertiary',
    progress: 0,
    steps: [
      { id: 'm1', label: 'Micro-SaaS Launch', locked: true },
      { id: 'm2', label: 'Semantic Routing', locked: true },
      { id: 'm3', label: 'Global Scaling', locked: true },
    ]
  }
];

export const coreStack = [
  {
    category: 'AI Core',
    tools: ['Claude 3.7 Sonnet', 'DeepSeek-R1', 'OpenAI o1/o3-mini']
  },
  {
    category: 'Backend & Data',
    tools: ['Python 3.12 / Node', 'FastAPI', 'pgvector (Supabase)']
  },
  {
    category: 'Orchestration',
    tools: ['MCP', 'LangGraph', 'PydanticAI']
  },
  {
    category: 'Frontend',
    tools: ['Next.js 15', 'Tailwind v4', 'Vercel AI SDK']
  }
];

export const initialProjects = [
  {
    id: 1,
    title: 'Semantic Search Engine',
    description: 'Build a local PDF analyzer using RAG and ChromaDB.',
    xp: 300,
    completed: true
  },
  {
    id: 2,
    title: 'Autonomous SDR Agent',
    description: 'Multi-agent system for lead gen and personalized outreach.',
    xp: 500,
    completed: false
  },
  {
    id: 3,
    title: 'Micro-SaaS Dashboard',
    description: 'Deploy an AI-powered analytics suite to Vercel.',
    xp: 1000,
    completed: false
  }
];
