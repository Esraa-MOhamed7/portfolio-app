import React from 'react';
import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  FileCode,
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroIllustration } from './HeroIllustration';
import { NetworkGraphMotif } from './NetworkGraphMotif';

interface HeroProps {
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToProjects,
  onNavigateToContact,
}) => {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-to-br from-[#2A2762] via-[#4B4FCF] to-[#6259E8] text-white">
      {/* Corner Glow Shapes (Soft Blurred Apricot and White) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E88C5A]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-28 w-[480px] h-[480px] bg-white/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-[#E88C5A]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Abstract Network Graph Watermarks */}
      <NetworkGraphMotif variant="watermark" className="top-10 left-12 opacity-40" />
      <NetworkGraphMotif variant="watermark" className="bottom-12 right-16 opacity-30 rotate-180" />

      {/* Subtle Micro Coordinate Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Personal Title, Headline with Serif Contrast & Clickable Actions */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status Pill with Diamond Marker */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-white/90 shadow-sm">
              <span className="w-2 h-2 rotate-45 bg-[#E88C5A] shadow-[0_0_8px_rgba(232,140,90,0.8)]" />
              <span className="font-medium tracking-wide">Software Engineering Student • Aspiring ML & AI Engineer</span>
            </div>

            {/* Hero Title with Distinctive Serif Contrast */}
            <div className="space-y-3.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium tracking-tight text-white leading-[1.12]">
                Hi, I'm <span className="italic font-normal underline decoration-[#E88C5A] decoration-2 underline-offset-8">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-technical font-medium text-white/95 tracking-tight flex items-center gap-2.5">
                <span className="inline-block w-3 h-[2px] bg-[#E88C5A]" />
                <span>{PERSONAL_INFO.title}</span>
              </p>
              <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed font-technical font-normal pt-1">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Student Highlights Bar */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-mono">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/15 shadow-2xs hover:border-[#E88C5A]/60 hover:bg-white/15 transition-all duration-200">
                <GraduationCap className="w-3.5 h-3.5 text-[#E88C5A]" />
                <span>Graduation: 2027</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E88C5A]/20 backdrop-blur-md text-white border border-[#E88C5A]/40 shadow-2xs hover:bg-[#E88C5A]/25 transition-all duration-200">
                <MapPin className="w-3.5 h-3.5 text-[#E88C5A]" />
                <span>Egypt • Remote & Global</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/15 shadow-2xs font-medium hover:border-white/40 transition-all duration-200">
                <Briefcase className="w-3.5 h-3.5 text-white/80" />
                <span>Available for ML Internships & Roles</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onNavigateToProjects}
                className="px-6 py-3 rounded-full bg-white text-[#2A2762] hover:bg-[#F8F7FB] text-xs sm:text-sm font-mono transition-all duration-200 font-semibold flex items-center gap-2 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer group"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#4B4FCF] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onNavigateToContact}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-sm font-mono transition-all duration-200 font-medium hover:border-white/40 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Verified Profiles Bar */}
            <div className="pt-6 border-t border-white/15">
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/70 mb-3 font-medium flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#E88C5A]" />
                <span>Verified Profiles & Direct Contact</span>
                <span className="inline-block w-8 h-[1px] bg-white/20" />
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {/* Email */}
                <a
                  href={PERSONAL_INFO.socials.email}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-[#E88C5A]/50 text-xs font-mono transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E88C5A]" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-white/40 text-xs font-mono transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-white/90" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-white/40 text-xs font-mono transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
                >
                  <Github className="w-3.5 h-3.5 text-white/90" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                </a>

                {/* Kaggle */}
                <a
                  href={PERSONAL_INFO.socials.kaggle}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-[#E88C5A]/50 text-xs font-mono transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
                >
                  <FileCode className="w-3.5 h-3.5 text-[#E88C5A]" />
                  <span>Kaggle</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Pipeline Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
