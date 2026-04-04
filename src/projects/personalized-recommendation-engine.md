---
title: "Personalized Recommendation Engine"
category: "Machine Learning"
date: "2024-06-01"
description: "Built a production recommendation system for 20+ client portals serving 22 banks using 45 XGBoost propensity models, ALS collaborative filtering, and RFM segmentation."
imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
link: "#"
tags: ["XGBoost", "ALS", "RFM", "Collaborative Filtering", "Python"]
---

## Overview

Designed and deployed a full-stack recommendation engine serving 20+ client portals across 22 banks. The system combines multiple ML approaches to deliver personalized product recommendations at scale.

## Key Components

- **45 XGBoost propensity models** trained per product category with ntile-based RFM scoring
- **ALS collaborative filtering** for user-item interaction modeling
- **Maximal Marginal Relevance** for offer diversity and avoiding redundancy
- **CLCM segmentation** for customer lifecycle-based targeting
- **MID/TID brand mapping** across 2.15 billion transactions

## Impact

- 80–100% boost in customer engagement across portals
- 95% increase in product redemptions
- System handles millions of daily recommendation requests in production
