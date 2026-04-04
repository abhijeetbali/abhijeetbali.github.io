import React from 'react';
import { Reveal } from './Reveal';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Data Scientist II",
    company: "Loylty Rewardz Pvt Ltd",
    location: "Mumbai",
    duration: "Jan 2023 – Present",
    highlights: [
      "Designed Recommendation Engine for 20+ client portals using 45 XGBoost models → 80–100% boost in customer engagement, 95% increase in product redemptions",
      "Built production RAG Chatbot (LangChain + Llama 3.1 + Qdrant) → 50% reduction in lead response time, 35% boost in engagement",
      "Led Elasticsearch → LLM-powered search engine migration → 40% better query understanding, 25% higher satisfaction across 5,000+ products",
      "Built Campaign Analytics Mart with 500+ features on Airflow pipelines across 22 banks",
      "Built Lookalike Modelling solution (KMeans++, FAISS, PCA) for audience expansion",
      "XGBoost Propensity Model (~84% AUC) → 12% increase in category retention",
      "Automated CRM insight extraction from 100k+ tickets using Mistral-7B → 70% reduction in manual effort",
      "Managed Greenplum Data Mart, mapped 2.15B transactions and modernized pipelines with Docker-based Airflow + DQM layer",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Challenger Sweepers Pvt Ltd",
    location: "Pune",
    duration: "May 2021 – May 2022",
    highlights: [
      "RFM-based Customer Segmentation → 16% increase in provider engagement",
      "NLP keyword optimization for campaign ROI improvement",
      "Sentiment analysis on app reviews and call centre feedback",
      "LDA topic modeling on portal reviews for product insights",
      "Flask REST APIs integrated with Google AdWords API",
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-end justify-between mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 tracking-tight">
              Experience
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-neutral-200" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1} width="100%">
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-3.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white" />
                  <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-neutral-900">{exp.role}</h3>
                        <p className="text-blue-600 text-sm font-medium flex items-center gap-1.5 mt-1">
                          <Briefcase size={13} /> {exp.company} — {exp.location}
                        </p>
                      </div>
                      <span className="text-xs text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full font-medium w-fit whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-sm text-neutral-600 flex gap-2.5 leading-relaxed">
                          <span className="text-blue-500 mt-1.5 shrink-0 text-xs">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
