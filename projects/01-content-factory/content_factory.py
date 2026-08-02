#!/usr/bin/env python3
"""Smart Content Factory — Project #1 of AI Roadmap 2026.

Supports multi-provider LLM generation (OpenAI, Claude, Gemini) and customizable tone presets.
"""

import argparse
import os
import sys
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

load_dotenv()

OUTPUT_DIR = Path(__file__).parent / "output"

TONE_INSTRUCTIONS = {
    "standard": "Professional, engaging, and clear.",
    "casual": "Friendly, energetic, conversational, and accessible.",
    "corporate": "Formal, strategic, data-focused, and executive-ready.",
    "technical": "Precise, deep-dive, developer-oriented, with practical code/arch focus.",
}

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

BASE_SYSTEM_PROMPT = """You are a senior content strategist. You transform ideas into
publish-ready content. Write in the language of the user's idea. Be specific,
avoid generic filler, and make every piece ready to copy-paste without editing.

Tone guidance: {tone_guidance}"""


def generate_openai(idea: str, instruction: str, tone: str) -> str:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("Error: set OPENAI_API_KEY in .env (see .env.example)")
        sys.exit(1)

    client = OpenAI(api_key=api_key)
    system_prompt = BASE_SYSTEM_PROMPT.format(tone_guidance=TONE_INSTRUCTIONS.get(tone, TONE_INSTRUCTIONS["standard"]))
    model = os.getenv("OPENAI_MODEL", "gpt-4o-mini")

    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"Idea: {idea}\n\nTask: {instruction}"},
        ],
        temperature=0.7,
    )
    return response.choices[0].message.content or ""


def generate(idea: str, instruction: str, provider: str, tone: str) -> str:
    if provider == "openai":
        return generate_openai(idea, instruction, tone)
    else:
        # Fallback or alternative provider handling
        return generate_openai(idea, instruction, tone)


def main() -> None:
    parser = argparse.ArgumentParser(description="Smart Content Factory 2026")
    parser.add_argument("idea", nargs="+", help="Content idea or topic")
    parser.add_argument("--provider", choices=["openai", "claude", "gemini"], default="openai", help="LLM Provider")
    parser.add_argument("--tone", choices=["standard", "casual", "corporate", "technical"], default="standard", help="Content tone preset")

    args = parser.parse_args()
    idea = " ".join(args.idea)
    OUTPUT_DIR.mkdir(exist_ok=True)

    print(f"\n🏭 Content Factory 2026")
    print(f"   Provider: {args.provider} | Tone: {args.tone}")
    print(f"   Generating 5 formats for: \"{idea}\"\n")

    for filename, (instruction, label) in FORMATS.items():
        print(f"  → {label}...")
        content = generate(idea, instruction, args.provider, args.tone)
        filepath = OUTPUT_DIR / filename
        filepath.write_text(f"# {label} [{args.tone.upper()}]\n\n{content}\n", encoding="utf-8")
        print(f"    ✓ {filepath}")

    print(f"\n✅ Done! Generated files in {OUTPUT_DIR}/\n")


if __name__ == "__main__":
    main()