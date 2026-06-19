# Contributing to AI Roadmap 2026

🇷🇺 [Русская версия](#как-внести-вклад-ru) | 🇺🇸 English version

Thank you for helping improve this roadmap. We welcome focused, practical contributions.

## What to Contribute

| Area | File(s) | Examples |
|------|---------|----------|
| Roadmap data | `web-app/src/data/content.js` | New steps, updated model names, project descriptions |
| Translations | `web-app/src/data/translations.js` | UI strings in EN/RU |
| Starter projects | `projects/` | Templates, READMEs, working code |
| Documentation | `README.md`, `README.ru.md` | Clarifications, links, success criteria |

**Single source of truth:** All roadmap content lives in `content.js`. Update it first, then sync README if needed.

## How to Contribute

1. **Fork** the repository
2. **Create a branch:** `git checkout -b fix/update-mcp-links`
3. **Make changes** — keep PRs small and focused
4. **Verify locally:**
   ```bash
   cd web-app
   npm ci
   npm run lint
   npm run build
   ```
5. **Open a Pull Request** with a clear description of what changed and why

## Guidelines

- **Build > Learn** — prefer actionable content over theory
- **Bilingual** — update both EN and RU when changing user-facing text
- **No drive-by refactors** — one concern per PR
- **Model names** — keep the 2026 stack consistent across `content.js`, README, and FAQ
- **Links** — verify external URLs before submitting

## Project Templates

When adding a starter template under `projects/`:

```
projects/XX-project-name/
  README.md          # EN + RU, success criteria, quick start
  .env.example       # Required env vars
  .gitignore         # .env, output/, node_modules/, .venv/
  [source files]     # Minimal working code
```

## Reporting Issues

Open a GitHub Issue for:

- Broken links
- Outdated model or tool names
- Unclear project success criteria
- Dashboard bugs

## Code of Conduct

Be respectful. This is a learning resource for builders at every level.

---

## Как внести вклад (RU)

Спасибо, что помогаете улучшать дорожную карту. Мы принимаем небольшие практичные PR.

### Что можно улучшать

| Область | Файл(ы) | Примеры |
|---------|---------|---------|
| Данные карты | `web-app/src/data/content.js` | Шаги, модели, описания проектов |
| Переводы | `web-app/src/data/translations.js` | Строки UI на EN/RU |
| Стартовые проекты | `projects/` | Шаблоны, README, рабочий код |
| Документация | `README.md`, `README.ru.md` | Уточнения, ссылки, критерии успеха |

**Единый источник правды:** весь контент карты — в `content.js`. Сначала правьте его, затем README.

### Как отправить PR

1. Сделайте **fork**
2. Создайте ветку: `git checkout -b fix/update-mcp-links`
3. Внесите изменения — один PR = одна задача
4. Проверьте локально:
   ```bash
   cd web-app
   npm ci
   npm run lint
   npm run build
   ```
5. Откройте **Pull Request** с описанием что и зачем изменили

### Правила

- **Сначала собирайте** — практика важнее теории
- **Два языка** — обновляйте EN и RU для пользовательского текста
- **Без лишних рефакторингов** — одна тема на PR
- **Модели** — держите стек 2026 согласованным в `content.js`, README и FAQ