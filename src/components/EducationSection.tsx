import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { NetworkGraphMotif } from './NetworkGraphMotif';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#F8F7FB] overflow-hidden">
      {/* Abstract Network Graph Watermark */}
      <NetworkGraphMotif variant="watermark" className="top-8 right-12 opacity-30" />
      <NetworkGraphMotif variant="watermark" className="bottom-8 left-8 opacity-25 -scale-x-100" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Geometric Accent Marks */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#E88C5A] shadow-[0_0_8px_rgba(232,140,90,0.6)]" />
            <div className="inline-flex items-center gap-2 text-[#4B4FCF] font-mono text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-white border border-[#E2E1EC] font-medium shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#4B4FCF]" />
              <span>Academic Foundation</span>
            </div>
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#4B4FCF]/40 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium tracking-tight text-[#2B2A3D] mb-4 leading-tight">
            Formal Education & <span className="italic underline decoration-[#E88C5A] decoration-2 underline-offset-6">Academic Excellence</span>
          </h2>
          <p className="text-[#2B2A3D]/80 text-sm sm:text-base leading-relaxed font-technical font-normal">
            Rigorous software engineering curriculum combining theoretical computer science, algorithms, systems architecture, and modern machine learning.
          </p>
        </div>

        {/* Sleek Glassmorphic Education Card */}
        <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-[#E2E1EC] shadow-[0_4px_30px_-4px_rgba(43,42,61,0.05)] hover:shadow-[0_16px_40px_-6px_rgba(75,79,207,0.09)] transition-all duration-300 p-6 sm:p-9 lg:p-10 overflow-hidden group">
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#4B4FCF]/50 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Degree, University & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-[#4B4FCF]/10 text-[#4B4FCF] border border-[#4B4FCF]/25 font-medium shadow-2xs flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#4B4FCF]" />
                  <span>Bachelor of Science</span>
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#E88C5A]/10 text-[#2B2A3D] border border-[#E88C5A]/30 font-medium shadow-2xs flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#E88C5A]" />
                  <span>GPA: {EDUCATION_DATA.gpa}</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#2B2A3D] tracking-tight leading-snug group-hover:text-[#4B4FCF] transition-colors">
                  {EDUCATION_DATA.degree}
                </h3>
                <div className="text-base sm:text-lg text-[#2B2A3D]/85 font-technical font-medium mt-2">
                  {EDUCATION_DATA.institution}
                </div>
              </div>

              {/* Meta details (Timeline, Location, Standing) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#F8F7FB] border border-[#E2E1EC] shadow-2xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#E2E1EC] flex items-center justify-center text-[#E88C5A] shadow-2xs">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#2B2A3D]/50 font-normal">Timeline</div>
                    <div className="text-xs font-mono font-medium text-[#2B2A3D]">{EDUCATION_DATA.timeline}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8F7FB] border border-[#E2E1EC] shadow-2xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#E2E1EC] flex items-center justify-center text-[#4B4FCF] shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#2B2A3D]/50 font-normal">Location</div>
                    <div className="text-xs font-mono font-medium text-[#2B2A3D]">{EDUCATION_DATA.location || 'Assiut, Egypt'}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#4B4FCF]/5 via-white to-[#E88C5A]/5 border border-[#E2E1EC] shadow-2xs text-xs text-[#2B2A3D]/75 leading-relaxed font-technical font-normal">
                <div className="flex items-center gap-2 font-medium text-[#2B2A3D] mb-1 font-technical text-[13px]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E88C5A]" />
                  <span>Academic Honors & Standing</span>
                </div>
                Maintaining a academic cumulative GPA of <span className="font-semibold text-[#4B4FCF]">{EDUCATION_DATA.gpa}</span> with distinction in algorithm analysis, computational theory, and applied machine learning projects.
              </div>
            </div>

            {/* Right Column: Highlights / Core Coursework */}
            <div className="lg:col-span-6 space-y-4 lg:border-l lg:border-[#E2E1EC] lg:pl-10 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E2E1EC]">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#4B4FCF]/10 border border-[#4B4FCF]/20 flex items-center justify-center text-[#4B4FCF] shadow-2xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-serif-display font-medium text-[#2B2A3D]">
                    Highlights & Core Coursework
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-[#2B2A3D]/50 font-normal">
                  {EDUCATION_DATA.coursework.length} Subjects
                </span>
              </div>

              <p className="text-xs text-[#2B2A3D]/70 font-technical font-normal leading-relaxed">
                Key undergraduate subjects providing rigorous foundation across computational logic, system architecture, and machine learning:
              </p>

              {/* Coursework Cards/Pills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <div
                    key={course}
                    className="p-3 rounded-2xl bg-[#F8F7FB] hover:bg-white border border-[#E2E1EC] hover:border-[#4B4FCF]/35 shadow-2xs hover:shadow-sm transition-all duration-200 flex items-center gap-2.5 group/item hover:-translate-y-0.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#4B4FCF] shrink-0 group-hover/item:text-[#E88C5A] transition-colors" />
                    <span className="text-xs font-mono text-[#2B2A3D] font-normal leading-tight">
                      {course}
                    </span>
                  </div>
                ))}
              </div>

              {/* Practical Alignment Note */}
              <div className="pt-3 border-t border-[#E2E1EC]/60 flex items-center justify-between text-[11px] font-mono text-[#2B2A3D]/55">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E88C5A]" />
                  <span>Software Engineering Specialization</span>
                </span>
                <span className="font-semibold text-[#4B4FCF]">Accredited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
