import React from 'react';
import { ProjectDetailData } from '../types';
import { CORE_PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles } from 'lucide-react';
import { NetworkGraphMotif } from './NetworkGraphMotif';

interface ProjectGridProps {
  onSelectProject: (project: ProjectDetailData) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 relative bg-[#F8F7FB] overflow-hidden">
      {/* Background Soft Ambient Watermark & Motifs */}
      <NetworkGraphMotif variant="watermark" className="top-12 left-8 opacity-35" />
      <NetworkGraphMotif variant="watermark" className="bottom-16 right-10 opacity-30 -scale-y-100" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Geometric Accent Marks */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#E88C5A] shadow-[0_0_8px_rgba(232,140,90,0.6)]" />
            <div className="inline-flex items-center gap-2 text-[#4B4FCF] font-mono text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-white border border-[#E2E1EC] font-medium shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#4B4FCF]" />
              <span>Featured Engineering Work</span>
            </div>
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#4B4FCF]/40 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium tracking-tight text-[#2B2A3D] mb-4 leading-tight">
            Machine Learning, RAG & <span className="italic underline decoration-[#E88C5A] decoration-2 underline-offset-6">Automation Projects</span>
          </h2>
          <p className="text-[#2B2A3D]/80 text-sm sm:text-base leading-relaxed font-technical font-normal">
            Real-world end-to-end models, contextual retrieval systems, biomedical NLP pipelines, and autonomous agent workflows.
          </p>
        </div>

        {/* Edited Editorial Project List with Hairline Dividers */}
        <div className="space-y-6">
          {CORE_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
