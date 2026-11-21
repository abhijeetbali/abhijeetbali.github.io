import React from 'react';
import { Sparkles, BrainCircuit, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Project } from '../types';

interface Theme {
  gradient: string;
  glow: string;
  accent: string;
  Icon: LucideIcon;
}

const themeFor = (category: string): Theme => {
  const c = category.toLowerCase();
  if (c.includes('genai') || c.includes('llm')) {
    return {
      gradient: 'from-indigo-950 via-violet-900 to-fuchsia-800',
      glow: 'bg-fuchsia-400/30',
      accent: 'text-fuchsia-200',
      Icon: Sparkles,
    };
  }
  if (c.includes('data')) {
    return {
      gradient: 'from-slate-950 via-teal-900 to-emerald-700',
      glow: 'bg-emerald-400/30',
      accent: 'text-emerald-200',
      Icon: Database,
    };
  }
  return {
    gradient: 'from-slate-950 via-blue-900 to-sky-700',
    glow: 'bg-sky-400/30',
    accent: 'text-sky-200',
    Icon: BrainCircuit,
  };
};

interface ProjectCoverProps {
  project: Project;
  size?: 'card' | 'hero';
}

/**
 * A generated cover for a project: category-coloured gradient, subtle grid,
 * and the project's headline metric. Used instead of stock photography.
 * If a project sets `imageUrl` in its front-matter, that image is shown instead.
 */
export const ProjectCover: React.FC<ProjectCoverProps> = ({ project, size = 'card' }) => {
  if (project.imageUrl) {
    return (
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  const { gradient, glow, accent, Icon } = themeFor(project.category);
  const isHero = size === 'hero';

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} overflow-hidden`}>
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: isHero ? '48px 48px' : '32px 32px',
        }}
      />
      {/* glow */}
      <div
        className={`absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full blur-3xl ${glow} transition-transform duration-700 group-hover:scale-125`}
      />
      {/* big faint icon */}
      <Icon
        className="absolute -bottom-6 -right-6 text-white/10 transition-transform duration-700 group-hover:rotate-6"
        size={isHero ? 260 : 150}
        strokeWidth={1}
      />

      <div className={`relative h-full flex flex-col justify-between ${isHero ? 'p-10 md:p-14' : 'p-7'}`}>
        <div className={`inline-flex items-center gap-2 ${accent} text-xs font-semibold uppercase tracking-[0.2em]`}>
          <Icon size={14} />
          {project.category}
        </div>

        {project.metric ? (
          <div>
            <div
              className={`font-heading font-extrabold text-white tracking-tight leading-none ${
                isHero ? 'text-7xl md:text-8xl' : 'text-5xl md:text-6xl'
              }`}
            >
              {project.metric}
            </div>
            <div className={`mt-2 ${accent} font-medium ${isHero ? 'text-lg' : 'text-sm'}`}>
              {project.metricLabel}
            </div>
          </div>
        ) : (
          <div className={`font-heading font-bold text-white/90 leading-tight ${isHero ? 'text-4xl' : 'text-2xl'}`}>
            {project.tags?.slice(0, 2).join(' · ')}
          </div>
        )}
      </div>
    </div>
  );
};
