export const paths = [
  {
    id: 'beginner',
    level: 'Level 01',
    title: 'Beginner',
    description: 'Fundamental concepts of LLMs, prompt engineering, and basic orchestration.',
    color: 'primary',
    progress: 0,
    steps: [
      { id: 'b1', label: 'Python Basics', completed: false, url: 'https://docs.python.org/3/tutorial/' },
      { id: 'b2', label: 'System Prompting', completed: false, url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts' },
      { id: 'b3', label: 'LLM Reasoning', completed: false, url: 'https://platform.openai.com/docs/guides/reasoning' },
    ]
  },
  {
    id: 'developer',
    level: 'Level 02',
    title: 'Developer',
    description: 'RAG pipelines, MCP servers, and agentic workflows integration.',
    color: 'secondary',
    progress: 0,
    active: true,
    steps: [
      { id: 'd1', label: 'API Setup', completed: false, url: 'https://github.com/openai/openai-node' },
      { id: 'd2', label: 'RAG Logic & pgvector', completed: false, url: 'https://supabase.com/docs/guides/database/extensions/pgvector' },
      { id: 'd3', label: 'MCP Server Development', completed: false, url: 'https://modelcontextprotocol.io' },
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
      { id: 'm1', label: 'Micro-SaaS Launch', completed: false, url: 'https://nextjs.org/docs' },
      { id: 'm2', label: 'Semantic Routing', completed: false, url: 'https://sdk.vercel.ai/docs/introduction' },
      { id: 'm3', label: 'Global Scaling', completed: false, url: 'https://stripe.com/docs' },
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
    completed: false,
    url: 'https://github.com/chroma-core/chroma'
  },
  {
    id: 2,
    title: 'Autonomous SDR Agent',
    description: 'Multi-agent system for lead gen and personalized outreach using LangGraph or PydanticAI.',
    xp: 500,
    completed: false,
    url: 'https://ai.pydantic.dev'
  },
  {
    id: 3,
    title: 'Micro-SaaS Dashboard',
    description: 'Deploy an AI-powered analytics suite to Vercel with Stripe/Clerk.',
    xp: 1000,
    completed: false,
    url: 'https://clerk.com'
  }
];
