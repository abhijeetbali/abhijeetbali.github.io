import React from 'react';
import { Reveal } from './Reveal';

const stack = [
  {
    layer: "GenAI & LLMs",
    color: "bg-purple-50 border-purple-200",
    labelColor: "text-purple-700",
    skills: ["Llama 3.1", "GPT", "Mistral", "BERT/T5", "LangChain", "LlamaIndex", "RAG", "Sentence Transformers", "FAISS", "Qdrant", "Chroma", "LoRA/QLoRA Fine-tuning"],
  },
  {
    layer: "ML & Modeling",
    color: "bg-blue-50 border-blue-200",
    labelColor: "text-blue-700",
    skills: ["XGBoost", "Supervised / Unsupervised Learning", "Deep Learning (CNN, RNN, LSTM, Transformers)", "Recommender Systems", "NLP", "Feature Engineering", "Propensity Modeling"],
  },
  {
    layer: "Data Engineering",
    color: "bg-teal-50 border-teal-200",
    labelColor: "text-teal-700",
    skills: ["Airflow", "Greenplum", "ETL / ELT", "Data Warehousing", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    layer: "MLOps & Deployment",
    color: "bg-orange-50 border-orange-200",
    labelColor: "text-orange-700",
    skills: ["Docker", "Kubernetes", "MLflow", "FastAPI", "Flask", "AWS SageMaker", "Vertex AI"],
  },
  {
    layer: "Programming & Tools",
    color: "bg-neutral-50 border-neutral-200",
    labelColor: "text-neutral-600",
    skills: ["Python", "SQL", "Bash", "Git", "Power BI", "Tableau", "Metabase", "Matplotlib", "Seaborn"],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-neutral-50 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 tracking-tight">
              Technical Stack
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-neutral-500 mt-3 text-lg">Organized by layer — from model to production.</p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {stack.map((layer, i) => (
            <Reveal key={i} delay={i * 0.08} width="100%">
              <div className={`rounded-2xl border ${layer.color} p-5 md:p-6`}>
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-48 shrink-0">
                    <span className={`text-sm font-bold uppercase tracking-wider ${layer.labelColor}`}>
                      {layer.layer}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
