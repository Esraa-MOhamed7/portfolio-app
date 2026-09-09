import React from 'react';
import {
  Cpu,
  Network,
  Sparkles,
  Workflow,
  Server,
  BarChart3,
  GraduationCap,
  BookOpen,
  Code,
} from 'lucide-react';
import { NetworkGraphMotif } from './NetworkGraphMotif';

export const About: React.FC = () => {
  const domains = [
    {
      title: 'Machine Learning & Predictive Modeling',
      description: 'Supervised classification, regression, time-series energy forecasting, and customer segmentation using Scikit-Learn, Pandas, and XGBoost.',
      icon: <Cpu className="w-5 h-5 text-[#4B4FCF]" />,
      tag: 'Scikit-Learn • XGBoost',
      tagColor: 'bg-white text-[#2B2A3D] border-[#E2E1EC]',
      iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20',
    },
    {
      title: 'Deep Learning & Biomedical NLP',
      description: 'PyTorch deep neural networks, transformer fine-tuning, sequence labeling, clinical Named Entity Recognition (BERT), and emotion classification.',
      icon: <Network className="w-5 h-5 text-[#4B4FCF]" />,
      tag: 'PyTorch • Transformers',
      tagColor: 'bg-white text-[#2B2A3D] border-[#E2E1EC]',
      iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20',
    },
    {
      title: 'Production RAG & Guardrails',
      description: 'Retrieval-Augmented Generation systems with recursive semantic chunking, ChromaDB dense vector indexing, query re-writing, and hallucination guardrails.',
      icon: <Sparkles className="w-5 h-5 text-[#4B4FCF]" />,
      tag: 'LangChain • ChromaDB',
      tagColor: 'bg-white text-[#2B2A3D] border-[#E2E1EC]',
      iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20',
    },
    {
      title: 'AI Automation & Stateful Agents',
      description: 'Multi-branch LangGraph agent graphs with double human-in-the-loop checkpoints and webhook-driven event automation with n8n.',
      icon: <Workflow className="w-5 h-5 text-[#E88C5A]" />,
      tag: 'LangGraph • n8n',
      tagColor: 'bg-[#E88C5A]/10 text-[#2B2A3D] border-[#E88C5A]/30',
      iconBg: 'bg-[#E88C5A]/10 border-[#E88C5A]/25',
    },
    {
      title: 'Data Analysis & BI Dashboards',
      description: 'Exploratory data analysis, statistical tests, relational SQL queries, and interactive business intelligence reporting in Power BI, Tableau, and Excel.',
      icon: <BarChart3 className="w-5 h-5 text-[#4B4FCF]" />,
      tag: 'Power BI • Tableau • SQL',
      tagColor: 'bg-white text-[#2B2A3D] border-[#E2E1EC]',
      iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20',
    },
    {
      title: 'Backend APIs & Containerization',
      description: 'High-throughput async API endpoints built with FastAPI and Flask, fully containerized with Docker for reproducible inference.',
      icon: <Server className="w-5 h-5 text-[#4B4FCF]" />,
      tag: 'FastAPI • Docker',
      tagColor: 'bg-white text-[#2B2A3D] border-[#E2E1EC]',
      iconBg: 'bg-[#4B4FCF]/10 border-[#4B4FCF]/20',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#F1EFFA] border-y border-[#E2E1EC] overflow-hidden">
      {/* Abstract Network Graph Watermark in Background */}
      <NetworkGraphMotif variant="watermark" className="-top-6 right-10 opacity-30" />
      <NetworkGraphMotif variant="watermark" className="bottom-4 left-6 opacity-25 -scale-x-100" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Geometric Accent Marks */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#E88C5A] shadow-[0_0_8px_rgba(232,140,90,0.6)]" />
            <div className="inline-flex items-center gap-2 text-[#4B4FCF] font-mono text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-white border border-[#E2E1EC] font-medium shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#4B4FCF]" />
              <span>Student Story & Specialization</span>
            </div>
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#4B4FCF]/40 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium tracking-tight text-[#2B2A3D] mb-5 leading-tight">
            Building Practical AI Systems from <span className="italic underline decoration-[#E88C5A] decoration-2 underline-offset-6">First Principles</span>
          </h2>
          <div className="space-y-3.5 text-[#2B2A3D]/80 text-sm sm:text-base leading-relaxed font-technical font-normal max-w-3xl">
            <p>
              I am a Software Engineering student at Assiut University (Faculty of Computers & Artificial Intelligence) specializing in Machine Learning Engineering, Natural Language Processing (NLP), Retrieval-Augmented Generation (RAG), and AI Automation.
            </p>
            <p>
              My focus spans the full lifecycle of AI applications—from training and fine-tuning domain-specific models (like BERT for MedNER) to architecting containerized deployment pipelines with FastAPI, Docker, and LangChain. I am passionate about engineering robust LLM workflows, automated data agents (n8n), and scalable software solutions.
            </p>
          </div>
        </div>

        {/* Highlight Student Story Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E1EC] shadow-[0_4px_24px_-4px_rgba(43,42,61,0.04)] hover:shadow-[0_12px_32px_-6px_rgba(75,79,207,0.08)] hover:-translate-y-0.5 transition-all duration-300 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#2B2A3D] text-xs sm:text-sm">
            <div className="space-y-2.5 p-5 rounded-2xl bg-[#F8F7FB] border border-[#E2E1EC] shadow-2xs hover:border-[#4B4FCF]/30 hover:bg-white transition-all duration-200">
              <div className="font-medium text-[#2B2A3D] flex items-center gap-2 text-sm font-technical">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#E2E1EC] flex items-center justify-center text-[#4B4FCF] shadow-2xs">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span>Academic Rigor</span>
              </div>
              <p className="text-[#2B2A3D]/70 leading-relaxed font-normal text-xs sm:text-[13px] font-technical">
                Grounded in solid software engineering principles, discrete mathematics, and database management systems.
              </p>
            </div>

            <div className="space-y-2.5 p-5 rounded-2xl bg-[#F8F7FB] border border-[#E2E1EC] shadow-2xs hover:border-[#4B4FCF]/30 hover:bg-white transition-all duration-200">
              <div className="font-medium text-[#2B2A3D] flex items-center gap-2 text-sm font-technical">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#E2E1EC] flex items-center justify-center text-[#4B4FCF] shadow-2xs">
                  <Code className="w-4 h-4" />
                </div>
                <span>Hands-on Engineering</span>
              </div>
              <p className="text-[#2B2A3D]/70 leading-relaxed font-normal text-xs sm:text-[13px] font-technical">
                Every project is fully functional — containerized with Docker, wired to live APIs, or tested on real benchmark datasets.
              </p>
            </div>

            <div className="space-y-2.5 p-5 rounded-2xl bg-[#F8F7FB] border border-[#E2E1EC] shadow-2xs hover:border-[#E88C5A]/40 hover:bg-white transition-all duration-200">
              <div className="font-medium text-[#2B2A3D] flex items-center gap-2 text-sm font-technical">
                <div className="w-8 h-8 rounded-xl bg-white border border-[#E2E1EC] flex items-center justify-center text-[#E88C5A] shadow-2xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>Continuous Growth</span>
              </div>
              <p className="text-[#2B2A3D]/70 leading-relaxed font-normal text-xs sm:text-[13px] font-technical">
                Active in national initiatives like DEPI (ML & AI Track) and NTI, mastering MLOps and state-of-the-art architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Domain Cards Grid with Distinctive Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="p-6 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#4B4FCF]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`w-11 h-11 rounded-2xl ${domain.iconBg} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    {domain.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium border ${domain.tagColor} shadow-2xs`}>
                    {domain.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#2B2A3D] mb-2 group-hover:text-[#4B4FCF] transition-colors tracking-tight font-technical">
                  {domain.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2B2A3D]/70 leading-relaxed font-normal font-technical">
                  {domain.description}
                </p>
              </div>

              {/* Card Footer Micro-accent */}
              <div className="mt-5 pt-3 border-t border-[#E2E1EC]/60 flex items-center justify-between text-[11px] font-mono text-[#2B2A3D]/50">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B4FCF]/60 group-hover:bg-[#E88C5A] transition-colors" />
                  <span>Production Ready</span>
                </span>
                <span className="group-hover:translate-x-1 transition-transform text-[#4B4FCF]">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
