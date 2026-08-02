#!/usr/bin/env python3
"""Micro-SaaS Contract Generator API — Project #3 of AI Roadmap 2026."""

import os
import time
from typing import Dict, Any
from fastapi import FastAPI, HTTPException, Request, Header
from pydantic import BaseModel

app = FastAPI(
    title="Micro-SaaS AI Contract Generator",
    version="1.0.0",
    description="B2B AI Contract Generator backend with semantic caching and Stripe webhook handler.",
)

# In-memory semantic request cache: {prompt_key: response_text}
SEMANTIC_CACHE: Dict[str, str] = {}


class ContractRequest(BaseModel):
    contract_type: str  # e.g., "NDA", "SLA", "Software License"
    parties: str        # e.g., "Company A and Client B"
    jurisdiction: str   # e.g., "Delaware, USA"


class ContractResponse(BaseModel):
    contract_text: str
    cached: bool
    processing_time_ms: float


@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "Micro-SaaS Contract Generator",
        "cached_entries": len(SEMANTIC_CACHE),
    }


@app.post("/api/generate-contract", response_model=ContractResponse)
def generate_contract(req: ContractRequest):
    start_time = time.time()
    cache_key = f"{req.contract_type.strip().lower()}:{req.parties.strip().lower()}:{req.jurisdiction.strip().lower()}"

    # 1. Semantic Cache check
    if cache_key in SEMANTIC_CACHE:
        elapsed = (time.time() - start_time) * 1000
        return ContractResponse(
            contract_text=SEMANTIC_CACHE[cache_key],
            cached=True,
            processing_time_ms=round(elapsed, 2),
        )

    # 2. Mock Contract Generation
    generated_text = (
        f"MASTER {req.contract_type.upper()} AGREEMENT\n\n"
        f"This agreement is entered into between {req.parties} under the jurisdiction of {req.jurisdiction}.\n\n"
        f"1. SCOPE OF SERVICES: The parties agree to the terms defined herein.\n"
        f"2. CONFIDENTIALITY: Proprietary information shall remain confidential.\n"
        f"3. GOVERNING LAW: Governed by laws of {req.jurisdiction}.\n\n"
        f"[EXECUTED ON {time.strftime('%Y-%m-%d')}]"
    )

    # Store in semantic cache
    SEMANTIC_CACHE[cache_key] = generated_text
    elapsed = (time.time() - start_time) * 1000

    return ContractResponse(
        contract_text=generated_text,
        cached=False,
        processing_time_ms=round(elapsed, 2),
    )


@app.post("/api/webhooks/stripe")
async def stripe_webhook(request: Request, stripe_signature: str = Header(None)):
    """Mock Stripe Webhook endpoint for receiving payment events."""
    payload = await request.json()
    event_type = payload.get("type", "unknown")

    if event_type == "checkout.session.completed":
        session = payload.get("data", {}).get("object", {})
        customer_email = session.get("customer_details", {}).get("email")
        print(f"💰 Payment received! Activated subscription for: {customer_email}")
        return {"status": "success", "processed_event": event_type}

    return {"status": "ignored", "event_type": event_type}
