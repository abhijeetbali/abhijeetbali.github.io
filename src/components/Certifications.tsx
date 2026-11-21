import React from 'react';
import { BadgeCheck, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { profile } from '../data';

export const Certifications: React.FC = () => {
  if (profile.certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 tracking-tight">
              Certifications
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-neutral-500 mt-3 text-lg">Formal training behind the hands-on work.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.certifications.map((cert, i) => {
            const body = (
              <div className="group h-full flex items-start gap-4 bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BadgeCheck size={20} />
                </span>
                <div className="flex-1">
                  <div className="font-heading font-semibold text-neutral-900 leading-snug">{cert.name}</div>
                  {cert.issuer && <div className="text-sm text-neutral-500 mt-1">{cert.issuer}</div>}
                </div>
                {cert.url && (
                  <ArrowUpRight size={18} className="shrink-0 text-neutral-400 group-hover:text-blue-600 transition-colors" />
                )}
              </div>
            );
            return (
              <Reveal key={cert.name} delay={i * 0.05} width="100%" height="100%">
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {body}
                  </a>
                ) : (
                  body
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
