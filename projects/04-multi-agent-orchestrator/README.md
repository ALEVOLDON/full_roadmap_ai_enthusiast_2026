# Project #4: Multi-Agent Orchestrator (Planner + Executor + Reviewer)

🇷🇺 [Русская версия](#русская-версия) | 🇺🇸 English version above

Build a autonomous multi-agent orchestration loop where 3 specialized LLM agents collaborate to break down, execute, and verify complex technical tasks.

## Success Criteria

- **Planner Agent:** Decomposes user goal into clear step-by-step sub-tasks.
- **Executor Agent:** Executes sub-tasks and produces draft output/code.
- **Reviewer Agent:** Validates output against safety & quality criteria, requesting revisions if necessary.
- Autonomous feedback loop until quality threshold is met.

## Architecture

```
User Task ---> [ Planner Agent ]
                     |
                     v
             [ Executor Agent ] <---+
                     |              | (Revisions)
                     v              |
             [ Reviewer Agent ] ----+
                     | (Passed)
                     v
             Final Verified Output
```

## Quick Start

```bash
cd projects/04-multi-agent-orchestrator
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env

python orchestrator.py "Build a production RAG pipeline architecture for legal document processing"
```

---

## Русская версия

Создайте автономную мультиагентную систему оркестрации, где 3 специализированных ИИ-агента (**Планировщик**, **Исполнитель**, **Ревьюер**) взаимодействуют в цикле для решения сложных инженерных задач.

### Критерии успеха
- **Планировщик:** Разбивает глобальную задачу на подзадачи.
- **Исполнитель:** Генерирует варианты решений и код.
- **Ревьюер:** Проверяет качество и отправляет на доработку при ошибках.
- Автономный цикл обратной связи до прохождения рецензии.

### Быстрый старт
```bash
cd projects/04-multi-agent-orchestrator
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python orchestrator.py "Спроектировать RAG-конвейер для юристов"
```
