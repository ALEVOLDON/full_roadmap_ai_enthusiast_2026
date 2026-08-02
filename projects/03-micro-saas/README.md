# Project #3: Micro-SaaS for Business (AI Contract Generator)

🇷🇺 [Русская версия](#русская-версия) | 🇺🇸 English version above

Build a full-featured B2B Micro-SaaS web application with semantic request caching, payment webhooks, and AI document generation.

## Success Criteria

- Clean Next.js 15 / FastAPI web architecture.
- Semantic request caching layer to eliminate duplicate LLM API calls.
- Stripe billing integration mock / webhook handler.
- Production-ready authentication integration (Clerk).

## Architecture

```
User Browser <--> Next.js Frontend (Tailwind v4 / Vercel AI SDK)
                         |
                         +--> FastAPI Backend
                                  |-- Semantic Cache (Redis / Memory)
                                  |-- LLM Orchestration (OpenAI / Claude)
                                  |-- Stripe Webhook Listener
```

## Quick Start

```bash
cd projects/03-micro-saas
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env

# Run FastAPI backend server
python -m uvicorn app.main:app --reload --port 8000
```

Open `http://localhost:8000/docs` to test Swagger UI API endpoints.

---

## Русская версия

Полнофункциональный B2B Микро-SaaS для бизнеса (генератор ИИ-договоров) с семантическим кэшированием запросов и платежами через Stripe.

### Критерии успеха
- Архитектура Next.js + FastAPI.
- Семантическое кэширование повторных запросов для экономии расходов на API.
- Обработчик вебхуков Stripe для автоматической подписки.

### Быстрый старт
```bash
cd projects/03-micro-saas
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python -m uvicorn app.main:app --reload --port 8000
```
Тестируйте эндпоинты в `http://localhost:8000/docs`.
