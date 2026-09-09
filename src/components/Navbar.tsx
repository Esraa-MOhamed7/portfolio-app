import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isProjectDetailActive?: boolean;
  onBackToProjects?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isProjectDetailActive = false,
  onBackToProjects,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (isProjectDetailActive && onBackToProjects) {
      onBackToProjects();
      setTimeout(() => {
        onNavigate(id);
      }, 80);
    } else {
      onNavigate(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#E2E1EC] shadow-[0_4px_20px_-4px_rgba(43,42,61,0.04)] py-3'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Typographic Identity */}
        <button
          onClick={() => handleLinkClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
        >
          <div className="w-2.5 h-2.5 rotate-45 bg-[#E88C5A] shadow-[0_0_8px_rgba(232,140,90,0.6)] group-hover:scale-125 transition-transform duration-300" />
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-[#2B2A3D] tracking-tight text-base group-hover:text-[#4B4FCF] transition-colors font-technical">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-xs font-mono text-[#2B2A3D]/60 font-normal">
              / ML & AI Engineer
            </span>
          </div>
        </button>

        {/* Desktop Nav - Frosted Capsule with Indigo Active Pills */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E2E1EC] shadow-2xs">
          {navLinks.map((link) => {
            const isActive = !isProjectDetailActive && activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-all duration-200 text-xs font-mono px-3.5 py-1 rounded-full cursor-pointer ${
                  isActive
                    ? 'text-[#4B4FCF] bg-[#4B4FCF]/10 border border-[#4B4FCF]/25 font-medium shadow-2xs'
                    : 'text-[#2B2A3D]/70 hover:text-[#4B4FCF] hover:bg-[#E2E1EC]/30 font-normal'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.socials.email}
            className="px-4 py-2 bg-white hover:bg-[#4B4FCF]/5 text-[#2B2A3D] hover:text-[#4B4FCF] border border-[#E2E1EC] hover:border-[#4B4FCF]/40 text-xs font-mono rounded-full transition-all duration-200 shadow-2xs hover:shadow-sm hover:-translate-y-0.5 flex items-center gap-1.5 font-medium cursor-pointer"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E88C5A]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#2B2A3D] hover:bg-white/80 focus:outline-none transition-colors border border-[#E2E1EC]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#E2E1EC] px-4 pt-3 pb-5 shadow-xl">
          <div className="flex flex-col gap-1.5 max-w-6xl mx-auto">
            {navLinks.map((link) => {
              const isActive = !isProjectDetailActive && activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#4B4FCF]/10 text-[#4B4FCF] font-medium border border-[#4B4FCF]/25 shadow-2xs'
                      : 'text-[#2B2A3D]/80 hover:bg-[#E2E1EC]/40 font-normal'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rotate-45 bg-[#E88C5A]"></span>}
                </button>
              );
            })}
            <div className="pt-2 mt-2 border-t border-[#E2E1EC]">
              <a
                href={PERSONAL_INFO.socials.email}
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-mono bg-[#4B4FCF]/10 text-[#4B4FCF] border border-[#4B4FCF]/25 font-medium"
              >
                <span>{PERSONAL_INFO.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E88C5A]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
