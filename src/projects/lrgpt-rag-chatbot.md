---
title: "LRGPT — RAG Chatbot"
category: "GenAI / LLMs"
date: "2024-03-01"
description: "Production RAG chatbot built with LangChain, Llama 3.1, and Qdrant vector database — reducing lead response time by 50% and boosting engagement by 35%."
metric: "−50%"
metricLabel: "lead response time"
tags: ["LangChain", "Llama 3.1", "Qdrant", "RAG", "FastAPI"]
---

## Overview

Built a production-grade RAG chatbot for a loyalty rewards platform, enabling customers and agents to query product knowledge, FAQs, and offers through natural language.

## Architecture

- **LangChain** orchestration with custom retrieval chains
- **Llama 3.1** via Ollama for on-premise LLM inference
- **Qdrant** vector database for semantic document retrieval
- **FastAPI** backend with streaming response support
- Prompt engineering to eliminate hallucination from context bleed

## Impact

- 50% reduction in lead response time
- 35% boost in customer engagement
- Replaced a rule-based FAQ system that required constant manual updates
