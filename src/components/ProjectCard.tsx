import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';
import { ProjectCover } from './ProjectCover';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/works/${project.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <ProjectCover project={project} />
      </div>
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-neutral-500 leading-relaxed mb-6 line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="flex items-end justify-between gap-4 mt-auto">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-[11px] font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <span className="shrink-0 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white transition-colors">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
};
