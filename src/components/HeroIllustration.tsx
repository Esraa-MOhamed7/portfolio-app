import React from 'react';
import { Database, Cpu, Zap, ShieldCheck } from 'lucide-react';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Ambient Glows */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#E88C5A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glass Container */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.12] backdrop-blur-xl border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.25)] hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/15">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E88C5A]"></span>
            <span className="ml-2 text-[11px] font-mono text-white/70 tracking-wider">ml_pipeline_runtime.py</span>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-white/15 text-white border border-white/25 text-[10px] font-mono font-medium flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E88C5A] animate-pulse"></span>
            active runtime
          </span>
        </div>

        {/* Vector Node Pipeline with Cards */}
        <div className="space-y-3.5 font-mono text-xs">
          {/* Node 1: Ingestion & Vector Index */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-2xs hover:border-[#E88C5A]/40 hover:bg-white/[0.14] transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0">
              <Database className="w-4 h-4 text-[#E88C5A]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-medium text-white text-xs">Data & Document Store</span>
                <span className="text-[10px] text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 font-mono">ChromaDB / SQL</span>
              </div>
              <p className="text-[11px] text-white/70 truncate font-sans font-normal pt-0.5">Recursive chunking & dense embeddings</p>
            </div>
          </div>

          {/* Connector Line with node dot */}
          <div className="flex items-center justify-center -my-1">
            <div className="w-[1.5px] h-3.5 bg-white/30 relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#E88C5A]" />
            </div>
          </div>

          {/* Node 2: Core ML / Transformers / LLM */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-2xs hover:border-white/40 hover:bg-white/[0.14] transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-medium text-white text-xs">Model & Agent Inference</span>
                <span className="text-[10px] text-[#E88C5A] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 font-mono">BERT / LLaMA-3 / LangGraph</span>
              </div>
              <p className="text-[11px] text-white/70 truncate font-sans font-normal pt-0.5">Named Entity Recognition & Agent State</p>
            </div>
          </div>

          {/* Connector Line with node dot */}
          <div className="flex items-center justify-center -my-1">
            <div className="w-[1.5px] h-3.5 bg-white/30 relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#E88C5A]" />
            </div>
          </div>

          {/* Node 3: Guardrails & Webhook Automation */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-2xs hover:border-[#E88C5A]/40 hover:bg-white/[0.14] transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#E88C5A]/20 border border-[#E88C5A]/40 flex items-center justify-center text-[#E88C5A] shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-medium text-white text-xs">Automated Actions & API</span>
                <span className="text-[10px] text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15 font-mono">FastAPI / n8n / Webhooks</span>
              </div>
              <p className="text-[11px] text-white/70 truncate font-sans font-normal pt-0.5">Strict guardrails & Telegram/Sheets sync</p>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Pill strip */}
        <div className="mt-5 pt-3.5 border-t border-white/15 flex items-center justify-between text-[11px] text-white/80 font-mono">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E88C5A]" />
            <span className="font-medium text-white">Zero-hallucination Guard</span>
          </div>
          <span className="text-white/75 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">Dockerized • Async</span>
        </div>
      </div>
    </div>
  );
};
