import React from 'react';
import { EXPERIENCE_DATA, CERTIFICATIONS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import {
  Briefcase,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';
import { NetworkGraphMotif } from './NetworkGraphMotif';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#F8F7FB] overflow-hidden">
      {/* Abstract Network Graph Watermark */}
      <NetworkGraphMotif variant="watermark" className="top-10 right-10 opacity-30" />
      <NetworkGraphMotif variant="watermark" className="bottom-10 left-8 opacity-25" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Geometric Accent Marks */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#E88C5A] shadow-[0_0_8px_rgba(232,140,90,0.6)]" />
            <div className="inline-flex items-center gap-2 text-[#4B4FCF] font-mono text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-white border border-[#E2E1EC] font-medium shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#4B4FCF]" />
              <span>Training & Credentials</span>
            </div>
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#4B4FCF]/40 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium tracking-tight text-[#2B2A3D] mb-4 leading-tight">
            Experience, Programs & <span className="italic underline decoration-[#E88C5A] decoration-2 underline-offset-6">Certifications</span>
          </h2>
          <p className="text-[#2B2A3D]/80 text-sm sm:text-base leading-relaxed font-technical font-normal">
            National talent programs, specialized machine learning tracks, and verified skill badges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Experience & Training Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-serif-display font-medium text-[#2B2A3D] flex items-center gap-2.5 mb-6 tracking-tight">
              <div className="w-8 h-8 rounded-xl bg-[#4B4FCF]/10 border border-[#4B4FCF]/20 flex items-center justify-center text-[#4B4FCF] shadow-2xs">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-xl">National Initiatives & Training Programs</span>
            </h3>

            <div className="space-y-7 relative before:absolute before:inset-0 before:left-4 before:w-[2px] before:bg-gradient-to-b before:from-[#4B4FCF]/60 via-[#4B4FCF]/20 before:to-[#E2E1EC]">
              {EXPERIENCE_DATA.map((item) => (
                <div key={item.id} className="relative flex items-start gap-4 sm:gap-5">
                  {/* Timeline Node */}
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-[#4B4FCF] flex items-center justify-center shrink-0 z-10 shadow-sm shadow-[#4B4FCF]/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E88C5A]"></span>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#4B4FCF]/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-[#4B4FCF]/10 text-[#4B4FCF] border border-[#4B4FCF]/25 font-medium shadow-2xs">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#2B2A3D]/70">
                        <Calendar className="w-3.5 h-3.5 text-[#E88C5A]" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-xl font-serif-display font-medium text-[#2B2A3D] tracking-tight mb-1">
                      {item.role}
                    </h4>

                    <div className="text-sm font-technical font-medium text-[#4B4FCF] mb-1">
                      {item.organization}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#2B2A3D]/65 mb-4 font-technical">
                      <MapPin className="w-3.5 h-3.5 text-[#2B2A3D]/50" />
                      <span>{item.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#2B2A3D]/75 leading-relaxed mb-5 font-technical font-normal">
                      {item.description}
                    </p>

                    {/* Key Learnings */}
                    <div className="space-y-2 pt-4 border-t border-[#E2E1EC]">
                      <span className="text-[11px] font-mono text-[#2B2A3D]/65 uppercase tracking-wider block mb-1.5 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#E88C5A]" />
                        <span>Key Learnings & Focus:</span>
                      </span>
                      {item.keyLearnings.map((learning, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#2B2A3D]/85 font-technical font-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4B4FCF] shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 mt-3 border-t border-[#E2E1EC]">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#F8F7FB] text-[#2B2A3D] border border-[#E2E1EC] font-normal shadow-2xs hover:bg-[#4B4FCF]/10 hover:text-[#4B4FCF] hover:border-[#4B4FCF]/30 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Degree */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-lg font-serif-display font-medium text-[#2B2A3D] flex items-center gap-2.5 mb-6 tracking-tight">
              <div className="w-8 h-8 rounded-xl bg-[#4B4FCF]/10 border border-[#4B4FCF]/20 flex items-center justify-center text-[#4B4FCF] shadow-2xs">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xl">Verified Certifications & Degree</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#4B4FCF]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#4B4FCF]/10 text-[#4B4FCF] border border-[#4B4FCF]/25 font-medium shadow-2xs">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-mono text-[#2B2A3D]/65 font-normal">
                      {cert.badgeType}
                    </span>
                  </div>

                  <h4 className="text-base font-serif-display font-medium text-[#2B2A3D] mb-1.5">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-[#2B2A3D]/70 leading-relaxed mb-3.5 font-technical font-normal">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E2E1EC]">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-0.5 rounded-full text-[10px] font-mono bg-[#F8F7FB] text-[#2B2A3D] border border-[#E2E1EC] font-normal shadow-2xs hover:bg-[#4B4FCF]/10 hover:text-[#4B4FCF] transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Education Degree Highlight Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white to-[#F1EFFA] border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#4B4FCF]/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#4B4FCF] font-medium">
                    <GraduationCap className="w-4 h-4 text-[#4B4FCF]" />
                    <span className="uppercase tracking-wider">Academic Degree</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#E88C5A]/10 text-[#2B2A3D] border border-[#E88C5A]/30 font-medium">
                    GPA {EDUCATION_DATA.gpa}
                  </span>
                </div>
                <h4 className="text-lg font-serif-display font-medium text-[#2B2A3D]">
                  {EDUCATION_DATA.degree}
                </h4>
                <div className="text-xs font-technical font-medium text-[#4B4FCF] mt-1">
                  {EDUCATION_DATA.institution}
                </div>
                <div className="text-xs font-mono text-[#2B2A3D]/70 mt-1 font-normal">
                  {EDUCATION_DATA.timeline} • {EDUCATION_DATA.location}
                </div>
                <p className="text-xs text-[#2B2A3D]/75 mt-3 leading-relaxed font-technical font-normal">
                  Core curriculum in algorithms, software architecture & design patterns, relational databases, compilers, automata, and applied machine learning.
                </p>
                <div className="mt-4 pt-3 border-t border-[#E2E1EC] flex items-center justify-between">
                  <a
                    href="#education"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#4B4FCF] hover:text-[#E88C5A] font-medium transition-colors"
                  >
                    <span>View Dedicated Education Section</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
