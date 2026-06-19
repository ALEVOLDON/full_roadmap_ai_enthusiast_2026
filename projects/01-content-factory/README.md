# Project #1: Smart Content Factory

🇷🇺 [Русская версия](#русская-версия) | 🇺🇸 English version above

Turn one idea into five publish-ready content formats using the OpenAI API.

## Success Criteria

- Input: a single topic or idea (CLI argument or prompt)
- Output: 5 formats saved to `output/` — no manual editing required
  1. **Summary** — 2–3 paragraph overview
  2. **Twitter thread** — 5–7 tweets
  3. **LinkedIn post** — professional tone, 150–300 words
  4. **Newsletter** — email-ready with subject line
  5. **Video script** — 60-second hook + talking points

## Quick Start

```bash
cd projects/01-content-factory
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
# Add your OPENAI_API_KEY to .env

python content_factory.py "AI agents will replace SaaS dashboards by 2027"
```

Results appear in `output/`.

## How It Works

1. `content_factory.py` sends your idea to GPT with a system prompt tuned for multi-format output.
2. Each format has its own generation pass with format-specific instructions.
3. Files are written as Markdown for easy copy-paste to social platforms.

## Next Steps

- [ ] Add a simple web UI (Gradio or Next.js)
- [ ] Support Claude / Gemini via env switch
- [ ] Add tone presets (casual, corporate, technical)
- [ ] Schedule auto-posting via Buffer or Typefully API

## Track Progress

Mark this project complete in the [Interactive Dashboard](https://alevoldon.github.io/full_roadmap_ai_enthusiast_2026/#projects).

---

## Русская версия

Превратите одну идею в пять готовых форматов контента с помощью OpenAI API.

### Критерий успеха

- Вход: одна тема или идея
- Выход: 5 форматов в папке `output/` без ручной правки

### Быстрый старт

```bash
cd projects/01-content-factory
python -m venv .venv
.venv\Scripts\activate        # Windows
pip install -r requirements.txt
cp .env.example .env          # добавьте OPENAI_API_KEY
python content_factory.py "ИИ-агенты заменят SaaS-дашборды к 2027"
```

### Дальше

- [ ] Добавить веб-интерфейс
- [ ] Поддержка Claude / Gemini
- [ ] Пресеты тона (casual, corporate, technical)