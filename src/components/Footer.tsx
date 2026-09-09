import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowUp,
  Mail,
  Linkedin,
  Github,
  FileCode,
  ArrowUpRight,
} from 'lucide-react';
import { NetworkGraphMotif } from './NetworkGraphMotif';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F7FB] border-t border-[#E2E1EC] pt-16 pb-12 text-[#2B2A3D]/75 text-xs relative overflow-hidden">
      <NetworkGraphMotif variant="watermark" className="-bottom-10 right-4 opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E2E1EC]">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4B4FCF] shadow-[0_0_8px_rgba(75,79,207,0.5)]" />
              <span className="font-semibold text-[#2B2A3D] tracking-tight text-sm uppercase italic font-technical">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E88C5A]" />
            </div>

            <p className="text-[#2B2A3D]/70 text-xs leading-relaxed max-w-sm font-normal font-technical">
              Software Engineering student building practical ML models, NLP pipelines, RAG systems, and AI automation workflows.
            </p>

            <div className="pt-1 text-[#2B2A3D]/60 font-mono text-[11px] font-normal">
              Location: {PERSONAL_INFO.location} • Graduation: {PERSONAL_INFO.graduationYear}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono font-medium uppercase tracking-wider text-[#2B2A3D] mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E88C5A]" />
              <span>Navigation</span>
            </div>
            <ul className="space-y-2 font-mono text-xs">
              {['about', 'projects', 'skills', 'education', 'experience', 'contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="capitalize text-[#2B2A3D]/70 hover:text-[#4B4FCF] hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Profile Links */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs font-mono font-medium uppercase tracking-wider text-[#2B2A3D] mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#4B4FCF]" />
              <span>Verified Profiles</span>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs">
              <a
                href={PERSONAL_INFO.socials.email}
                className="flex items-center gap-2 text-[#2B2A3D]/70 hover:text-[#4B4FCF] hover:translate-x-0.5 transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#4B4FCF]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#2B2A3D]/70 hover:text-[#4B4FCF] hover:translate-x-0.5 transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#4B4FCF]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#2B2A3D]/40" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#2B2A3D]/70 hover:text-[#2B2A3D] hover:translate-x-0.5 transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-[#2B2A3D]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#2B2A3D]/40" />
              </a>

              <a
                href={PERSONAL_INFO.socials.kaggle}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#2B2A3D]/70 hover:text-[#E88C5A] hover:translate-x-0.5 transition-all duration-200"
              >
                <FileCode className="w-3.5 h-3.5 text-[#E88C5A]" />
                <span>Kaggle</span>
                <ArrowUpRight className="w-3 h-3 text-[#2B2A3D]/40" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#2B2A3D]/60">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All project data, code repositories & achievements verified.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F1EFFA] border border-[#E2E1EC] text-[#2B2A3D] hover:text-[#4B4FCF] transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer hover:-translate-y-0.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
