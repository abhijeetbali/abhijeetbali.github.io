import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin, Mail, MessageSquareText, Search, Gift, Headset, Bot, LineChart, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { profile } from '../data';

export const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Text rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % profile.hero.rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Canvas Particle & Neural Impulse Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    type Particle = { x: number; y: number; vx: number; vy: number; size: number };
    type Impulse = {
      source: Particle;
      target: Particle;
      progress: number;
      speed: number;
    };

    let particles: Particle[] = [];
    let impulses: Impulse[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      impulses = [];

      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 80);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- BACKGROUND NETWORK ---
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#f3f4f6';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#9ca3af';
        ctx.fill();

        // Draw Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 20000;

          if (distSq < maxDist) {
            ctx.beginPath();
            ctx.globalAlpha = (1 - Math.sqrt(distSq) / Math.sqrt(maxDist)) * 0.2;
            ctx.strokeStyle = '#9ca3af';
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1.0;

            // Chance to spawn an electric impulse
            if (Math.random() < 0.0005) {
              impulses.push({
                source: p,
                target: p2,
                progress: 0,
                speed: 0.005 + Math.random() * 0.01
              });
            }
          }
        }
      });

      // --- ELECTRIC IMPULSES ---
      // Optimized Loop: remove filter() allocation to reduce GC
      ctx.globalCompositeOperation = 'lighter';

      let writeIdx = 0; // In-place array compaction
      for (let i = 0; i < impulses.length; i++) {
        const imp = impulses[i];
        imp.progress += imp.speed;

        if (imp.progress < 1) {
          const dx = imp.target.x - imp.source.x;
          const dy = imp.target.y - imp.source.y;
          const distSq = dx * dx + dy * dy;

          // Only keep if connection valid
          if (distSq < 25000) {
            const currX = imp.source.x + dx * imp.progress;
            const currY = imp.source.y + dy * imp.progress;

            ctx.beginPath();
            ctx.arc(currX, currY, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#3b82f6'; // Blue-500
            ctx.shadowColor = '#2563eb';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;

            // Keep in array
            impulses[writeIdx++] = imp;
          }
        }
      }
      impulses.length = writeIdx; // Truncate array

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const HeroContent = () => (
    <div className="flex flex-col items-center text-center max-w-6xl mx-auto px-6 pt-28 pb-12 md:pt-32 md:pb-16">
      {profile.current && (
        <div className="inline-flex items-center gap-2.5 mb-8 md:mb-10 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-neutral-200 shadow-sm text-sm text-neutral-600">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>
            {profile.current.title} @ <span className="font-semibold text-neutral-900">{profile.current.company}</span>
          </span>
        </div>
      )}

      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black text-neutral-900 leading-[0.9] mb-8 md:mb-10 tracking-tighter text-center uppercase">
        {profile.hero.heading} <br />
        <span className="block mt-3 md:mt-4 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] leading-[1.05] min-h-[2.1em] sm:min-h-[1.05em]">
          <span
            key={textIndex}
            className="inline-block animate-fade-in-up sm:whitespace-nowrap bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent pb-1"
          >
            {profile.hero.rotatingTexts[textIndex]}
          </span>
        </span>
      </h1>

      <p className="text-base md:text-xl text-neutral-500 max-w-3xl leading-relaxed mb-3 font-semibold text-center mx-auto uppercase tracking-[0.2em]">
        {profile.hero.subheading}
      </p>
      <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10 text-center mx-auto">
        {profile.experienceLine || `${profile.name} — ${profile.role} who takes models from notebook to production.`}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <a
          href="#works"
          onClick={handleScroll}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold hover:bg-blue-600 transition-all hover:shadow-xl hover:shadow-blue-600/20 text-sm tracking-wide pointer-events-auto"
        >
          See my work
          <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
        </a>
        {profile.resume && (
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur text-neutral-900 rounded-full font-semibold border border-neutral-300 hover:border-neutral-900 transition-all text-sm tracking-wide pointer-events-auto"
          >
            <FileText size={18} />
            Download résumé
          </a>
        )}
      </div>

      <div className="flex items-center gap-5 mt-8 text-neutral-400">
        {profile.social.github && (
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-neutral-900 transition-colors">
            <Github size={22} />
          </a>
        )}
        {profile.social.linkedin && (
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-neutral-900 transition-colors">
            <Linkedin size={22} />
          </a>
        )}
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-neutral-900 transition-colors">
          <Mail size={22} />
        </a>
      </div>
    </div>
  );

  const useCaseIcons: Record<string, { Icon: LucideIcon; tile: string }> = {
    chat: { Icon: MessageSquareText, tile: 'bg-violet-50 text-violet-600' },
    search: { Icon: Search, tile: 'bg-fuchsia-50 text-fuchsia-600' },
    gift: { Icon: Gift, tile: 'bg-blue-50 text-blue-600' },
    headset: { Icon: Headset, tile: 'bg-emerald-50 text-emerald-600' },
    bot: { Icon: Bot, tile: 'bg-indigo-50 text-indigo-600' },
    chart: { Icon: LineChart, tile: 'bg-orange-50 text-orange-600' },
  };

  const UseCases = () =>
    profile.useCases.length > 0 ? (
      <div className="w-full max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        <div className="flex items-center justify-center gap-3 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          <span className="h-px w-8 bg-neutral-300" />
          <Sparkles size={14} className="text-blue-600" />
          AI I've put into production
          <span className="h-px w-8 bg-neutral-300" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {profile.useCases.map((uc) => {
            const { Icon, tile } = useCaseIcons[uc.icon || ''] || { Icon: Sparkles, tile: 'bg-neutral-100 text-neutral-700' };
            const inner = (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${tile}`}>
                    <Icon size={22} />
                  </span>
                  {uc.project && (
                    <ArrowUpRight size={18} className="text-neutral-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </div>
                <h3 className="font-heading font-bold text-neutral-900 mb-1.5 group-hover:text-blue-600 transition-colors">{uc.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{uc.description}</p>
              </>
            );
            const cls = 'group block h-full rounded-2xl border border-neutral-200 bg-white/90 backdrop-blur p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 pointer-events-auto';
            return uc.project ? (
              <Link key={uc.title} to={`/works/${uc.project}`} className={cls}>{inner}</Link>
            ) : (
              <div key={uc.title} className={cls}>{inner}</div>
            );
          })}
        </div>
      </div>
    ) : null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Main Content */}
      <Reveal width="100%">
        <div className="relative w-full z-10 flex flex-col items-center justify-center">
          <HeroContent />
          <UseCases />
        </div>
      </Reveal>
    </section>
  );
};
