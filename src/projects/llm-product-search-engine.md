---
title: "LLM-Powered Product Search Engine"
category: "GenAI / LLMs"
date: "2024-01-01"
description: "Migrated from Elasticsearch keyword search to a semantic LLM-powered search engine using Sentence Transformers and FAISS — improving query understanding by 40%."
imageUrl: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=800&auto=format&fit=crop"
link: "#"
tags: ["Sentence Transformers", "FAISS", "LLM", "Elasticsearch", "Python"]
---

## Overview

Led the full migration of a product search system from Elasticsearch keyword matching to a semantic search engine powered by LLMs and dense vector retrieval — covering 5,000+ products across loyalty reward catalogs.

## What Changed

- Replaced BM25 keyword matching with **Sentence Transformer** embeddings
- Built **FAISS** vector index for millisecond-latency nearest-neighbor search
- LLM layer for query understanding and intent parsing
- Hybrid retrieval fallback for edge cases

## Impact

- 40% improvement in query understanding accuracy
- 25% higher search satisfaction scores
- Eliminated the need for manual keyword synonym maintenance
