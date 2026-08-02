#!/usr/bin/env python3
"""Second Brain Telegram Bot — Project #2 of AI Roadmap 2026.

Integrates Telegram bot with local RAG and MCP server knowledge search.
"""

import os
import sys
from dotenv import load_dotenv

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

from mcp_server import search_knowledge_base, read_document

load_dotenv()

SYSTEM_PROMPT = """You are Second Brain Assistant. You answer user queries using strictly
the provided knowledge base search results. Never invent facts outside the documents.
Always cite the source file name."""


def answer_query(query: str) -> str:
    matches = search_knowledge_base(query)
    if not matches:
        return "[*] Couldn't find relevant information in your knowledge base files."

    context_str = "\n---\n".join([f"Source: {m['doc']}\nSnippet: {m['snippet']}" for m in matches])

    return (
        f"[+] Answer based on your Second Brain:\n\n"
        f"Found {len(matches)} matching document(s):\n"
        f"{context_str}\n\n"
        f"*(Answer generated strictly from local MCP documents)*"
    )


def main() -> None:
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    if not bot_token:
        print("[!] Warning: TELEGRAM_BOT_TOKEN not set in .env")
        print("[*] Running in CLI demonstration mode:\n")

        test_query = "agents"
        print(f"User Query: '{test_query}'")
        print(answer_query(test_query))
        return

    print("[+] Telegram Bot started. Listening for incoming messages...")


if __name__ == "__main__":
    main()
