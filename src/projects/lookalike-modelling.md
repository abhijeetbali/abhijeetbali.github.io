---
title: "Lookalike Modelling"
category: "Machine Learning"
date: "2023-11-01"
description: "Built a lookalike audience expansion system using KMeans++, FAISS, and PCA to identify high-value customer segments and improve targeting efficiency."
tags: ["KMeans++", "FAISS", "PCA", "Silhouette Score", "Python"]
---

## Overview

Developed a lookalike modelling system that identifies customers similar to a target seed audience — enabling more precise campaign targeting and audience expansion without cold-start problems.

## Approach

- **KMeans++** clustering with silhouette score optimization for segment quality
- **PCA** dimensionality reduction for high-cardinality behavioral features
- **FAISS** approximate nearest-neighbor search for real-time similarity lookup
- Seed audience definition from high-converting customer profiles

## Impact

- Improved targeting efficiency by reducing wasted impressions
- Enabled audience expansion into previously untargeted segments
- System integrated directly into campaign planning workflow
