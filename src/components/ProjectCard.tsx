import React from 'react';
import { ProjectDetailData } from '../types';
import { Github, ExternalLink, ArrowRight, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectDetailData;
  index?: number;
  onSelectProject: (project: ProjectDetailData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
  onSelectProject,
}) => {
  // Determine category badge tint based on domain
  const getCategoryBadgeClass = (category: string) => {
    if (category.toLowerCase().includes('agent') || category.toLowerCase().includes('automation')) {
      return 'text-[#E88C5A] bg-[#E88C5A]/10 border-[#E88C5A]/30';
    }
    return 'text-[#4B4FCF] bg-[#4B4FCF]/10 border-[#4B4FCF]/25';
  };

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="group relative rounded-3xl bg-white border border-[#E2E1EC] hover:border-[#4B4FCF]/50 shadow-[0_2px_16px_rgba(43,42,61,0.03)] hover:shadow-[0_12px_32px_-4px_rgba(75,79,207,0.09)] transition-all duration-300 p-6 sm:p-8 lg:p-9 hover:-translate-y-1 overflow-hidden">
      {/* Subtle Top-Left Accent Bar on Hover */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#4B4FCF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Index Number & Meta Badges */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl sm:text-3xl font-light text-[#4B4FCF]/50 group-hover:text-[#4B4FCF] transition-colors">
              /{formattedIndex}
            </span>
            <span className="w-6 h-[1px] bg-[#E2E1EC]" />
          </div>

          <div className="flex flex-wrap lg:flex-col gap-2">
            <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-medium border ${getCategoryBadgeClass(project.category)} shadow-2xs w-fit`}>
              {project.category}
            </span>
            {project.type && (
              <span className="text-[11px] font-mono text-[#2B2A3D]/70 bg-[#F8F7FB] px-3 py-1 rounded-full border border-[#E2E1EC] font-normal w-fit">
                {project.type}
              </span>
            )}
          </div>
        </div>

        {/* Center Column: Title & Full Description */}
        <div className="lg:col-span-6 space-y-3">
          <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#2B2A3D] leading-snug group-hover:text-[#4B4FCF] transition-colors tracking-tight">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#2B2A3D]/75 leading-relaxed font-technical font-normal">
            {project.shortDescription}
          </p>

          {/* Tech Badges - Monospace Soft Rounded-Full Pill Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#F8F7FB] text-[#2B2A3D] border border-[#E2E1EC] font-normal hover:bg-[#4B4FCF]/10 hover:text-[#4B4FCF] hover:border-[#4B4FCF]/30 hover:-translate-y-0.5 transition-all duration-200 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Actions & Architecture Link */}
        <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E2E1EC] lg:pl-6">
          <div className="flex flex-wrap lg:flex-col gap-2 w-full">
            {/* GitHub Code Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 lg:w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono text-[#2B2A3D] hover:text-[#4B4FCF] bg-[#F8F7FB] hover:bg-white border border-[#E2E1EC] hover:border-[#4B4FCF]/40 shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer font-medium hover:-translate-y-0.5"
            >
              <Github className="w-3.5 h-3.5 text-[#2B2A3D]" />
              <span>Source Code</span>
            </a>

            {/* Live Demo Link */}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 lg:w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono text-[#4B4FCF] hover:text-white bg-[#4B4FCF]/10 hover:bg-[#4B4FCF] border border-[#4B4FCF]/25 hover:border-[#4B4FCF] shadow-2xs font-medium transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {/* Architecture Details Link */}
            {project.workflowSteps && (
              <button
                onClick={() => onSelectProject(project)}
                className="flex-1 lg:w-full flex items-center justify-center gap-2 text-xs font-mono font-medium text-[#2B2A3D] hover:text-[#E88C5A] bg-white hover:bg-[#E88C5A]/10 border border-[#E2E1EC] hover:border-[#E88C5A]/40 py-2.5 px-4 rounded-full transition-all duration-200 cursor-pointer hover:-translate-y-0.5 shadow-2xs"
              >
                <Layers className="w-3.5 h-3.5 text-[#E88C5A]" />
                <span>System Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E88C5A] group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
