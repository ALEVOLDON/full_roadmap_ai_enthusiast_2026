#!/usr/bin/env python3
"""Smart Content Factory — Project #1 of AI Roadmap 2026."""

import os
import sys
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

OUTPUT_DIR = Path(__file__).parent / "output"

FORMATS = {
    "01_summary.md": (
        "Write a 2–3 paragraph summary of the idea. Clear, engaging, no fluff.",
        "Summary",
    ),
    "02_twitter_thread.md": (
        "Write a Twitter/X thread of 5–7 tweets. Number each tweet. "
        "Hook in tweet 1, CTA in the last tweet. Max 280 chars per tweet.",
        "Twitter Thread",
    ),
    "03_linkedin_post.md": (
        "Write a LinkedIn post (150–300 words). Professional but conversational. "
        "Include a hook line and 2–3 line breaks for readability.",
        "LinkedIn Post",
    ),
    "04_newsletter.md": (
        "Write an email newsletter section. Include a subject line on the first line "
        "as 'Subject: ...'. Body should be scannable with short paragraphs.",
        "Newsletter",
    ),
    "05_video_script.md": (
        "Write a 60-second video script. Start with a hook (first 5 seconds), "
        "then 3–4 talking points with [VISUAL] cues.",
        "Video Script",
    ),
}

SYSTEM_PROMPT = """You are a senior content strategist. You transform ideas into
publish-ready content. Write in the language of the user's idea. Be specific,
avoid generic filler, and make every piece ready to copy-paste without editing."""


def generate(client: OpenAI, idea: str, instruction: str) -> str:
    response = client.chat.completions.create(
        model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {
                "role": "user",
                "content": f"Idea: {idea}\n\nTask: {instruction}",
            },
        ],
        temperature=0.7,
    )
    return response.choices[0].message.content or ""


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: python content_factory.py \"Your content idea here\"")
        sys.exit(1)

    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("Error: set OPENAI_API_KEY in .env (see .env.example)")
        sys.exit(1)

    idea = " ".join(sys.argv[1:])
    client = OpenAI(api_key=api_key)
    OUTPUT_DIR.mkdir(exist_ok=True)

    print(f"\n🏭 Content Factory — generating 5 formats for:\n   \"{idea}\"\n")

    for filename, (instruction, label) in FORMATS.items():
        print(f"  → {label}...")
        content = generate(client, idea, instruction)
        filepath = OUTPUT_DIR / filename
        filepath.write_text(f"# {label}\n\n{content}\n", encoding="utf-8")
        print(f"    ✓ {filepath}")

    print(f"\n✅ Done! Check {OUTPUT_DIR}/\n")


if __name__ == "__main__":
    main()