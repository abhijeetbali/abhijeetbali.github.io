---
title: "Campaign Analytics Data Mart"
category: "Data Engineering"
date: "2023-08-01"
description: "Designed a 500+ feature campaign analytics mart on Airflow and Greenplum, serving real-time insights across 22 banks and modernized legacy pipelines with DQM layers."
metric: "500+"
metricLabel: "features engineered"
tags: ["Greenplum", "Airflow", "ETL", "Feature Engineering", "Docker"]
---

## Overview

Built and maintained a large-scale campaign analytics data mart that powers reporting, segmentation, and ML feature generation for a loyalty platform serving 22 banks.

## What Was Built

- **500+ engineered features** for campaign performance, customer behavior, and product affinity
- **Airflow DAGs** orchestrating daily, weekly, and monthly data pipelines
- **Docker-based** pipeline modernization replacing legacy cron jobs
- **DQM layer** catching data quality issues before they hit downstream ML models
- Mapped and reconciled **2.15 billion transactions** across disparate source systems

## Impact

- 56% reduction in Greenplum vacuum time through partition optimization
- Clean, reliable feature data for all downstream ML models
- Eliminated manual data firefighting that previously consumed 2–3 days per week
