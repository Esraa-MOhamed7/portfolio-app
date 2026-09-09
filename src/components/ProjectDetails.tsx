import React, { useEffect, useState } from 'react';
import { ProjectDetailData } from '../types';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Workflow,
  Share2,
  Check,
} from 'lucide-react';
import { WorkflowVisualizer } from './WorkflowVisualizer';
import { NetworkGraphMotif } from './NetworkGraphMotif';

interface ProjectDetailsProps {
  project: ProjectDetailData;
  onBack: () => void;
  onSelectOtherProject?: (p: ProjectDetailData) => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  onBack,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 text-[#2B2A3D] bg-[#F8F7FB] relative overflow-hidden animate-in fade-in duration-300">
      {/* Background Watermarks */}
      <NetworkGraphMotif variant="watermark" className="top-16 right-8 opacity-30" />
      <NetworkGraphMotif variant="watermark" className="bottom-20 left-8 opacity-25" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#F8F7FB] border border-[#E2E1EC] text-xs font-mono text-[#2B2A3D] hover:text-[#4B4FCF] transition-all duration-200 cursor-pointer font-medium shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-[#2B2A3D]/60 group-hover:text-[#4B4FCF]" />
            <span>Back to all projects</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#F8F7FB] border border-[#E2E1EC] text-xs font-mono text-[#2B2A3D] hover:text-[#4B4FCF] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-sm hover:-translate-y-0.5 font-medium"
              title="Copy URL link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#4B4FCF]" /> : <Share2 className="w-3.5 h-3.5 text-[#2B2A3D]/60" />}
              <span>{copied ? 'Link copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Hero Header Card */}
        <div className="rounded-3xl bg-white border border-[#E2E1EC] p-6 sm:p-9 shadow-[0_4px_24px_-4px_rgba(43,42,61,0.04)] hover:shadow-lg transition-all duration-300 mb-8 relative">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3.5">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-[#4B4FCF]/10 text-[#4B4FCF] border border-[#4B4FCF]/25 shadow-2xs">
              {project.category}
            </span>

            {project.type && (
              <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-[#F8F7FB] text-[#2B2A3D]/70 border border-[#E2E1EC] font-normal">
                {project.type}
              </span>
            )}
          </div>

          {/* Title with Serif Display Styling */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-display font-medium text-[#2B2A3D] tracking-tight mb-3.5 leading-tight">
            {project.title}
          </h1>

          {/* Short Lead Description */}
          <p className="text-sm sm:text-base text-[#2B2A3D]/80 leading-relaxed mb-6 font-technical font-normal">
            {project.overview || project.shortDescription}
          </p>

          {/* Technologies Badges */}
          <div className="flex flex-wrap items-center gap-1.5 mb-7">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-[#F8F7FB] border border-[#E2E1EC] text-[#2B2A3D] font-normal shadow-2xs hover:bg-[#4B4FCF]/10 hover:text-[#4B4FCF] hover:border-[#4B4FCF]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#E2E1EC]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4B4FCF] hover:bg-[#3D40B8] text-white text-xs font-mono font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#4B4FCF]/20 hover:-translate-y-0.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View on GitHub</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4B4FCF]/10 hover:bg-[#4B4FCF]/15 border border-[#4B4FCF]/25 text-[#4B4FCF] text-xs font-mono font-medium transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#4B4FCF]" />
                <span>Live Demo / Post</span>
              </a>
            )}
          </div>
        </div>

        {/* Workflow / Architecture Pipeline Visualizer */}
        {project.workflowSteps && project.workflowSteps.length > 0 && (
          <div className="mb-8 rounded-3xl bg-white border border-[#E2E1EC] p-6 sm:p-8 shadow-[0_4px_24px_-4px_rgba(43,42,61,0.04)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#4B4FCF]/10 border border-[#4B4FCF]/25 flex items-center justify-center text-[#4B4FCF]">
                <Workflow className="w-4 h-4" />
              </div>
              <h2 className="text-base font-serif-display font-medium text-[#2B2A3D] text-lg">
                System Workflow Architecture
              </h2>
            </div>
            <WorkflowVisualizer steps={project.workflowSteps} type={project.workflowType} />
          </div>
        )}

        {/* Problem & Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.problem && (
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-lg hover:border-[#4B4FCF]/40 hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-sm font-semibold text-[#2B2A3D] mb-2.5 flex items-center gap-2 font-technical">
                <span className="w-2 h-2 rounded-full bg-[#4B4FCF]" />
                <span>Problem Statement</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#2B2A3D]/75 leading-relaxed font-technical font-normal">
                {project.problem}
              </p>
            </div>
          )}

          {project.approach && (
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-lg hover:border-[#E88C5A]/40 hover:-translate-y-0.5 transition-all duration-300">
              <h3 className="text-sm font-semibold text-[#2B2A3D] mb-2.5 flex items-center gap-2 font-technical">
                <span className="w-2 h-2 rounded-full bg-[#E88C5A]" />
                <span>Technical Approach</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#2B2A3D]/75 leading-relaxed font-technical font-normal">
                {project.approach}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
