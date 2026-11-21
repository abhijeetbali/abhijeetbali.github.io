---
title: "Multi-Label Product Category Classifier"
category: "Machine Learning"
date: "2022-10-01"
description: "Built a multi-label XGBoost system predicting customer purchasing behaviour across 48 product categories using compact per-category feature signals."
metric: "48"
metricLabel: "product categories"
tags: ["XGBoost", "Multi-label", "Feature Engineering", "Python"]
---

## Overview

Designed a multi-label classification system to predict the likelihood of a customer purchasing from each of 48 product categories — enabling hyper-targeted cross-sell and upsell campaigns.

## Approach

- Reduced features from 800+ raw signals to ~257 compact per-category features
- Separate XGBoost models per category with shared feature pipeline
- Class imbalance handled via stratified sampling and class weights
- Batch inference pipeline producing daily scores for entire customer base

## Impact

- Enabled simultaneous prediction across all 48 categories per customer
- Directly fed into recommendation engine for cross-category offer ranking
- Reduced feature computation time by 60% vs original 800+ feature approach
