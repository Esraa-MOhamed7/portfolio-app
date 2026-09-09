import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code2,
  Cpu,
  Network,
  Sparkles,
  Workflow,
  Layers,
} from 'lucide-react';
import { NetworkGraphMotif } from './NetworkGraphMotif';

const categoryMeta: Record<string, { icon: React.ReactNode; iconBg: string; tagBg: string }> = {
  'ML & Data Science': {
    icon: <Cpu className="w-5 h-5 text-[#4B4FCF]" />,
    iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20 shadow-2xs',
    tagBg: 'bg-[#F8F7FB] text-[#2B2A3D] border-[#E2E1EC] hover:bg-[#4B4FCF]/10 hover:text-[#4B4FCF] hover:border-[#4B4FCF]/35',
  },
  'Deep Learning & NLP': {
    icon: <Network className="w-5 h-5 text-[#4B4FCF]" />,
    iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20 shadow-2xs',
    tagBg: 'bg-[#F8F7FB] text-[#2B2A3D] border-[#E2E1EC] hover:bg-[#4B4FCF]/10 hover:text-[#4B4FCF] hover:border-[#4B4FCF]/35',
  },
  'GenAI, Agents & MLOps': {
    icon: <Sparkles className="w-5 h-5 text-[#4B4FCF]" />,
    iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20 shadow-2xs',
    tagBg: 'bg-[#F8F7FB] text-[#2B2A3D] border-[#E2E1EC] hover:bg-[#4B4FCF]/10 hover:text-[#4B4FCF] hover:border-[#4B4FCF]/35',
  },
  'Automation & APIs': {
    icon: <Workflow className="w-5 h-5 text-[#E88C5A]" />,
    iconBg: 'bg-[#E88C5A]/10 border-[#E88C5A]/25 shadow-2xs',
    tagBg: 'bg-[#F8F7FB] text-[#2B2A3D] border-[#E2E1EC] hover:bg-[#E88C5A]/10 hover:text-[#E88C5A] hover:border-[#E88C5A]/35',
  },
  'Languages, Visualization & Tools': {
    icon: <Code2 className="w-5 h-5 text-[#4B4FCF]" />,
    iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20 shadow-2xs',
    tagBg: 'bg-[#F8F7FB] text-[#2B2A3D] border-[#E2E1EC] hover:bg-[#4B4FCF]/10 hover:text-[#4B4FCF] hover:border-[#4B4FCF]/35',
  },
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#F1EFFA] border-y border-[#E2E1EC] overflow-hidden">
      {/* Abstract Network Graph Watermark */}
      <NetworkGraphMotif variant="watermark" className="-top-8 right-12 opacity-30" />
      <NetworkGraphMotif variant="watermark" className="bottom-6 left-10 opacity-25" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Geometric Accent Marks */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#E88C5A] shadow-[0_0_8px_rgba(232,140,90,0.6)]" />
            <div className="inline-flex items-center gap-2 text-[#4B4FCF] font-mono text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-white border border-[#E2E1EC] font-medium shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#4B4FCF]" />
              <span>Technical Toolkit</span>
            </div>
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#4B4FCF]/40 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium tracking-tight text-[#2B2A3D] mb-4 leading-tight">
            Core Competencies & <span className="italic underline decoration-[#E88C5A] decoration-2 underline-offset-6">Tooling</span>
          </h2>
          <p className="text-[#2B2A3D]/80 text-sm sm:text-base leading-relaxed font-technical font-normal">
            A comprehensive overview of libraries, frameworks, and visualization tools I use across ML modeling, NLP, data analysis, and automation.
          </p>
        </div>

        {/* 5 Skills Cards Grid with Deliberate Craft */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const meta = categoryMeta[category.name] || {
              icon: <Layers className="w-5 h-5 text-[#4B4FCF]" />,
              iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20 shadow-2xs',
              tagBg: 'bg-[#F8F7FB] text-[#2B2A3D] border-[#E2E1EC] hover:bg-[#4B4FCF]/10 hover:text-[#4B4FCF]',
            };
            return (
              <div
                key={category.name}
                className="rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#4B4FCF]/40 hover:-translate-y-1.5 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className={`w-11 h-11 rounded-2xl ${meta.iconBg} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#2B2A3D] font-technical group-hover:text-[#4B4FCF] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-[#2B2A3D]/65 font-normal leading-tight mt-0.5 font-technical">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Badges with Micro-Interaction */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1 rounded-full text-xs font-mono border font-normal transition-all duration-200 shadow-2xs hover:-translate-y-0.5 cursor-default ${meta.tagBg}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Bottom Accent Marker */}
                <div className="mt-6 pt-3 border-t border-[#E2E1EC]/60 flex items-center justify-between text-[10px] font-mono text-[#2B2A3D]/50">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E88C5A]" />
                    <span>{category.skills.length} core tools</span>
                  </span>
                  <span className="font-semibold text-[#4B4FCF]/80">Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
