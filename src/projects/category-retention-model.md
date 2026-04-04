---
title: "Category Retention Propensity Model"
category: "Machine Learning"
date: "2023-05-01"
description: "XGBoost propensity model achieving 84% AUC to predict customer churn at category level — driving a 12% increase in category retention through targeted interventions."
imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop"
link: "#"
tags: ["XGBoost", "Propensity Modelling", "CRM Analytics", "Python"]
---

## Overview

Built a category-level churn propensity model to identify customers at risk of disengaging from specific product categories — enabling proactive retention campaigns before churn occurs.

## Model Details

- **XGBoost** with extensive hyperparameter tuning via Bayesian optimization
- **84% AUC** on held-out test set
- 300+ behavioral and transactional features engineered from 18-month history
- SHAP-based explainability for campaign team interpretation

## Impact

- 12% increase in category-level customer retention
- Propensity scores integrated into CRM targeting workflow
- Model scores refreshed monthly on full customer base
