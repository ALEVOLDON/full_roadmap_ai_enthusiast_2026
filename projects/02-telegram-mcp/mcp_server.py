#!/usr/bin/env python3
"""Second Brain MCP Server — Project #2 of AI Roadmap 2026.

Exposes local knowledge base documents via Model Context Protocol (MCP) tools.
"""

import json
import os
from pathlib import Path

DOCS_DIR = Path(__file__).parent / "knowledge_base"


def list_documents() -> list[dict]:
    """Tool: List all documents available in the knowledge base."""
    if not DOCS_DIR.exists():
        DOCS_DIR.mkdir(exist_ok=True)
        # Create sample document
        sample = DOCS_DIR / "ai_agents_guide.md"
        sample.write_text(
            "# AI Agents Guide 2026\n\nAgents combine reasoning models, tools (MCP), and memory.",
            encoding="utf-8",
        )

    results = []
    for file in DOCS_DIR.glob("**/*.*"):
        if file.is_file():
            results.append({"name": file.name, "path": str(file.relative_to(DOCS_DIR)), "size_bytes": file.stat().st_size})
    return results


def read_document(relative_path: str) -> str:
    """Tool: Read contents of a specific document from the knowledge base."""
    target = DOCS_DIR / relative_path
    if not target.exists() or not target.is_file():
        return f"Error: document '{relative_path}' not found."
    return target.read_text(encoding="utf-8")


def search_knowledge_base(query: str) -> list[dict]:
    """Tool: Semantic keyword search across knowledge base files."""
    matches = []
    query_lower = query.lower()

    for doc in list_documents():
        content = read_document(doc["path"])
        if query_lower in content.lower():
            # Extract relevant snippet
            idx = content.lower().find(query_lower)
            snippet = content[max(0, idx - 50) : min(len(content), idx + 150)]
            matches.append({"doc": doc["name"], "path": doc["path"], "snippet": snippet.strip()})

    return matches


def main() -> None:
    print("🧠 Second Brain MCP Server running (Stdio Mode)")
    print(f"📁 Knowledge Base Directory: {DOCS_DIR}")
    docs = list_documents()
    print(f"📄 Loaded {len(docs)} document(s): {[d['name'] for d in docs]}")


if __name__ == "__main__":
    main()
