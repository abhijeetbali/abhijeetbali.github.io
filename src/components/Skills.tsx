import React from 'react';
import { Bot, Sparkles, BrainCircuit, Database, Rocket, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';

interface SkillGroup {
  title: string;
  blurb: string;
  Icon: LucideIcon;
  /** Tailwind classes for the icon tile, top accent bar and chip hover */
  iconTile: string;
  accentBar: string;
  chip: string;
  skills: string[];
  featured?: boolean;
}

const groups: SkillGroup[] = [
  {
    title: 'Agentic AI',
    blurb: 'Stateful agents that plan, call tools, remember context and hand off to humans when it matters.',
    Icon: Bot,
    iconTile: 'bg-gradient-to-br from-blue-600 to-violet-600 text-white',
    accentBar: 'from-blue-600 to-violet-600',
    chip: 'hover:border-violet-300 hover:text-violet-700',
    featured: true,
    skills: [
      'LangGraph Agents',
      'Multi-Agent Orchestration',
      'Tool & Function Calling',
      'ReAct & Planning Patterns',
      'Agent Memory & State',
      'Human-in-the-Loop',
      'Agent Tracing (LangSmith)',
      'Agent Evaluation',
    ],
  },
  {
    title: 'GenAI & LLMs',
    blurb: 'RAG systems grounded in real data — retrieved well, prompted carefully, and measured, not vibe-checked.',
    Icon: Sparkles,
    iconTile: 'bg-fuchsia-50 text-fuchsia-600',
    accentBar: 'from-fuchsia-500 to-pink-500',
    chip: 'hover:border-fuchsia-300 hover:text-fuchsia-700',
    skills: [
      'RAG Pipelines',
      'LangChain',
      'LlamaIndex',
      'LLM Evaluation',
      'LLM-as-a-Judge',
      'Prompt Engineering',
      'LoRA / QLoRA Fine-tuning',
      'Embeddings & Semantic Search',
      'Llama 3.1 · Mistral',
      'Qdrant · FAISS',
    ],
  },
  {
    title: 'Machine Learning',
    blurb: 'Models judged by the business metric they move — engagement, retention, redemptions.',
    Icon: BrainCircuit,
    iconTile: 'bg-blue-50 text-blue-600',
    accentBar: 'from-blue-500 to-sky-500',
    chip: 'hover:border-blue-300 hover:text-blue-700',
    skills: [
      'Recommender Systems',
      'Propensity Modeling',
      'XGBoost & Ensembles',
      'Deep Learning (CNN · RNN · Transformers)',
      'NLP',
      'Anomaly Detection',
      'Feature Engineering',
      'A/B Testing & Statistics',
    ],
  },
  {
    title: 'Data Engineering',
    blurb: 'Pipelines and marts that feed models reliably — billions of rows, monitored and quality-checked.',
    Icon: Database,
    iconTile: 'bg-emerald-50 text-emerald-600',
    accentBar: 'from-emerald-500 to-teal-500',
    chip: 'hover:border-emerald-300 hover:text-emerald-700',
    skills: [
      'Apache Airflow',
      'PySpark',
      'Greenplum',
      'ETL / ELT',
      'Data Warehousing',
      'Data Quality & Validation',
      'PostgreSQL · MySQL · MongoDB',
    ],
  },
  {
    title: 'MLOps & Cloud',
    blurb: 'Shipping, serving and watching models after go-live — where most ML projects quietly fail.',
    Icon: Rocket,
    iconTile: 'bg-orange-50 text-orange-600',
    accentBar: 'from-orange-500 to-amber-500',
    chip: 'hover:border-orange-300 hover:text-orange-700',
    skills: [
      'AWS · SageMaker',
      'Vertex AI',
      'Docker',
      'Kubernetes',
      'FastAPI · Flask',
      'MLflow',
      'Model Monitoring',
      'LLMOps',
    ],
  },
  {
    title: 'Languages & BI',
    blurb: 'The everyday toolkit — and dashboards that make results land with stakeholders.',
    Icon: Code2,
    iconTile: 'bg-neutral-100 text-neutral-700',
    accentBar: 'from-neutral-400 to-neutral-600',
    chip: 'hover:border-neutral-400 hover:text-neutral-900',
    skills: ['Python', 'SQL', 'Bash', 'Git', 'Power BI', 'Tableau', 'Metabase'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-neutral-50 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <Reveal>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
              What I work with
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 tracking-tight">
              From agents to infrastructure.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-neutral-500 mt-3 text-lg">
              The full stack behind a production AI system — the reasoning layer, the models, the data that feeds them,
              and the platform that keeps them running.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06} width="100%" height="100%">
              <div
                className={`group relative h-full overflow-hidden rounded-2xl bg-white border p-6 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  g.featured ? 'border-violet-200 ring-1 ring-violet-100' : 'border-neutral-200'
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${g.accentBar}`} />
                {g.featured && (
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-violet-400/15 blur-3xl" />
                )}

                <div className="relative flex items-center gap-3 mb-4">
                  <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${g.iconTile}`}>
                    <g.Icon size={22} />
                  </span>
                  <h3 className="font-heading font-bold text-lg text-neutral-900">{g.title}</h3>
                  {g.featured && (
                    <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-violet-700 bg-violet-50 border border-violet-200 px-2 py-1 rounded-full">
                      Current focus
                    </span>
                  )}
                </div>

                <p className="relative text-neutral-500 text-sm leading-relaxed mb-5">{g.blurb}</p>

                <div className="relative flex flex-wrap gap-2">
                  {g.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-700 font-medium transition-colors ${g.chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
