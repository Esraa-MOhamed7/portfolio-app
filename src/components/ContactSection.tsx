import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MapPin,
  FileCode,
  ArrowUpRight,
} from 'lucide-react';
import { NetworkGraphMotif } from './NetworkGraphMotif';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormStatus('submitted');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#F1EFFA] border-y border-[#E2E1EC] overflow-hidden">
      {/* Abstract Network Graph Watermark */}
      <NetworkGraphMotif variant="watermark" className="-top-6 right-8 opacity-30" />
      <NetworkGraphMotif variant="watermark" className="bottom-4 left-6 opacity-25" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Geometric Accent Marks */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3.5">
            <span className="w-2 h-2 rotate-45 bg-[#E88C5A] shadow-[0_0_8px_rgba(232,140,90,0.6)]" />
            <div className="inline-flex items-center gap-2 text-[#4B4FCF] font-mono text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-white border border-[#E2E1EC] font-medium shadow-2xs">
              <Mail className="w-3.5 h-3.5 text-[#4B4FCF]" />
              <span>Connect & Inquire</span>
            </div>
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#4B4FCF]/40 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-medium tracking-tight text-[#2B2A3D] mb-4 leading-tight">
            Let's Discuss <span className="italic underline decoration-[#E88C5A] decoration-2 underline-offset-6">Opportunities</span> & Ideas
          </h2>
          <p className="text-[#2B2A3D]/80 text-sm sm:text-base leading-relaxed font-technical font-normal">
            Interested in discussing machine learning models, RAG pipelines, AI agent workflows, or entry-level ML engineering roles? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contacts & Quick Links */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#4B4FCF]/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4B4FCF]/10 border border-[#4B4FCF]/20 flex items-center justify-center text-[#4B4FCF] shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase px-3.5 py-1 rounded-full bg-[#4B4FCF]/10 text-[#4B4FCF] border border-[#4B4FCF]/25 font-medium shadow-2xs">
                  Direct Inbox
                </span>
              </div>

              <div className="text-xs font-mono text-[#2B2A3D]/65 mb-1 font-normal">Email Address</div>
              <a
                href={PERSONAL_INFO.socials.email}
                className="text-lg sm:text-xl font-serif-display font-medium text-[#2B2A3D] hover:text-[#4B4FCF] transition-colors break-all tracking-tight"
              >
                {PERSONAL_INFO.email}
              </a>

              <div className="mt-6 pt-5 border-t border-[#E2E1EC] flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-full text-xs font-mono bg-white hover:bg-[#F8F7FB] text-[#2B2A3D] hover:text-[#4B4FCF] border border-[#E2E1EC] hover:border-[#4B4FCF]/40 shadow-2xs hover:shadow-md transition-all duration-200 font-medium cursor-pointer hover:-translate-y-0.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4B4FCF]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#2B2A3D]/60" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={PERSONAL_INFO.socials.email}
                  className="px-6 py-3 rounded-full text-xs font-mono font-medium bg-[#4B4FCF] hover:bg-[#3D40B8] text-white shadow-sm hover:shadow-md hover:shadow-[#4B4FCF]/25 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Send Mail
                </a>
              </div>
            </div>

            {/* Quick Profile Links with Custom Micro-Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#4B4FCF]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#4B4FCF]/10 border border-[#4B4FCF]/20 flex items-center justify-center text-[#4B4FCF]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2B2A3D]/40 group-hover:text-[#4B4FCF] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#2B2A3D] font-technical">LinkedIn</div>
                  <span className="text-[10px] font-mono text-[#2B2A3D]/60">Connect</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#4B4FCF]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F7FB] border border-[#E2E1EC] flex items-center justify-center text-[#2B2A3D]">
                    <Github className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2B2A3D]/40 group-hover:text-[#2B2A3D] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#2B2A3D] font-technical">GitHub</div>
                  <span className="text-[10px] font-mono text-[#2B2A3D]/60">Repositories</span>
                </div>
              </a>

              {/* Kaggle */}
              <a
                href={PERSONAL_INFO.socials.kaggle}
                target="_blank"
                rel="noreferrer"
                className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#E88C5A]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E88C5A]/10 border border-[#E88C5A]/25 flex items-center justify-center text-[#E88C5A]">
                    <FileCode className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2B2A3D]/40 group-hover:text-[#E88C5A] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#2B2A3D] font-technical">Kaggle</div>
                  <span className="text-[10px] font-mono text-[#2B2A3D]/60">Notebooks</span>
                </div>
              </a>
            </div>

            {/* Location Note */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#4B4FCF]/10 text-[#4B4FCF] border border-[#4B4FCF]/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs font-mono text-[#2B2A3D]/80 font-normal">
                Based in <span className="font-semibold text-[#2B2A3D]">Egypt</span> • Open to Global & Remote Opportunities
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E1EC] shadow-2xs hover:shadow-xl hover:border-[#4B4FCF]/40 transition-all duration-300">
              <h3 className="text-xl font-serif-display font-medium text-[#2B2A3D] mb-1 tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#2B2A3D]/65 mb-6 font-technical font-normal">
                Drop a quick note below and I will respond to your email promptly.
              </p>

              {formStatus === 'submitted' ? (
                <div className="p-8 rounded-3xl bg-[#4B4FCF]/5 border border-[#4B4FCF]/20 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#4B4FCF] mx-auto" />
                  <h4 className="text-base font-serif-display font-medium text-[#2B2A3D]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-[#2B2A3D]/75 max-w-sm mx-auto font-technical font-normal">
                    Thank you for reaching out, {formState.name}. You can also email me directly at{' '}
                    <span className="font-semibold text-[#4B4FCF]">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-3 text-xs font-mono font-medium text-[#4B4FCF] hover:text-[#3D40B8] underline underline-offset-4 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#2B2A3D] mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2E1EC] text-xs focus:outline-none focus:border-[#4B4FCF] focus:ring-2 focus:ring-[#4B4FCF]/20 bg-[#F8F7FB] text-[#2B2A3D] placeholder:text-[#2B2A3D]/40 shadow-2xs transition-all font-technical"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#2B2A3D] mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2E1EC] text-xs focus:outline-none focus:border-[#4B4FCF] focus:ring-2 focus:ring-[#4B4FCF]/20 bg-[#F8F7FB] text-[#2B2A3D] placeholder:text-[#2B2A3D]/40 shadow-2xs transition-all font-technical"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#2B2A3D] mb-1.5 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. ML Engineering Role / Project Inquiry"
                      className="w-full px-4 py-3 rounded-2xl border border-[#E2E1EC] text-xs focus:outline-none focus:border-[#4B4FCF] focus:ring-2 focus:ring-[#4B4FCF]/20 bg-[#F8F7FB] text-[#2B2A3D] placeholder:text-[#2B2A3D]/40 shadow-2xs transition-all font-technical"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#2B2A3D] mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your project, team, or opportunity..."
                      className="w-full px-4 py-3 rounded-2xl border border-[#E2E1EC] text-xs focus:outline-none focus:border-[#4B4FCF] focus:ring-2 focus:ring-[#4B4FCF]/20 bg-[#F8F7FB] text-[#2B2A3D] placeholder:text-[#2B2A3D]/40 shadow-2xs resize-none transition-all font-technical"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#4B4FCF] text-white hover:bg-[#3D40B8] text-xs font-mono uppercase tracking-wider font-semibold shadow-sm hover:shadow-md hover:shadow-[#4B4FCF]/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] hover:-translate-y-0.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
