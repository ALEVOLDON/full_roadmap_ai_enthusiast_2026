# Project #2: Second Brain Telegram Bot + MCP Server

🇷🇺 [Русская версия](#русская-версия) | 🇺🇸 English version above

Build an autonomous Telegram Bot with RAG context search over your personal files, powered by a custom Model Context Protocol (MCP) server.

## Success Criteria

- Custom MCP server exposing local document reading and semantic search tools.
- Telegram Bot answering user queries strictly based on provided files (PDF/MD/TXT) without hallucinating.
- Clear reference citations in bot responses.

## Architecture

```
User Telegram Chat <--> Telegram Bot (FastAPI / python-telegram-bot)
                              |
                              +--> RAG Engine (Vector DB / Embeddings)
                              +--> MCP Server (Local File / Notion Access)
```

## Quick Start

```bash
cd projects/02-telegram-mcp
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
# Edit .env with your TELEGRAM_BOT_TOKEN and OPENAI_API_KEY
```

### 1. Run MCP Server
```bash
python mcp_server.py
```

### 2. Run Telegram Bot
```bash
python bot.py
```

---

## Русская версия

Создайте автономный Telegram-бот с RAG-поиском по личным файлам, подключенный к кастомному MCP-серверу (Model Context Protocol).

### Критерии успеха
- MCP-сервер предоставляет инструменты доступа к локальной файловой системе и поиску.
- Telegram-бот отвечает на вопросы строго по вашим документам (PDF/MD) без галлюцинаций.
- Ответы содержат ссылки на исходные документы.

### Быстрый старт
```bash
cd projects/02-telegram-mcp
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env   # настройте TELEGRAM_BOT_TOKEN и OPENAI_API_KEY
python mcp_server.py   # запуск MCP сервера
python bot.py          # запуск бота
```
