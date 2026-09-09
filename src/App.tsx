import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectDetails } from './components/ProjectDetails';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FEATURED_PROJECTS } from './data/portfolioData';
import { ProjectDetailData } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectDetailData | null>(null);

  // Sync with window hash for routing support (#/project/:id or #section)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const projectId = hash.replace('#/project/', '');
        const found = FEATURED_PROJECTS.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash && !hash.startsWith('#/project/')) {
        setSelectedProject(null);
        const sectionId = hash.replace('#', '');
        setActiveSection(sectionId);
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (!hash) {
        setSelectedProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // IntersectionObserver for tracking active navigation section when scrolling
  useEffect(() => {
    if (selectedProject) return;

    const sections = ['home', 'about', 'projects', 'skills', 'education', 'experience', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
              setActiveSection(id);
            }
          });
        },
        { threshold: [0.2, 0.5] }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [selectedProject]);

  const handleNavigate = (sectionId: string) => {
    if (selectedProject) {
      setSelectedProject(null);
      window.location.hash = `#${sectionId}`;
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.location.hash = `#${sectionId}`;
      const elem = document.getElementById(sectionId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (project: ProjectDetailData) => {
    setSelectedProject(project);
    window.location.hash = `#/project/${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    window.location.hash = '#projects';
    setTimeout(() => {
      const elem = document.getElementById('projects');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#F8F7FB] text-[#2B2A3D] font-sans selection:bg-[#4B4FCF]/15 selection:text-[#4B4FCF] relative overflow-x-hidden">
      {/* Calm Ambient Layer with soft indigo glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Indigo Top Orb */}
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-[#4B4FCF]/5 via-[#4B4FCF]/10 to-[#E88C5A]/5 rounded-full blur-3xl" />
        
        {/* Mid-Left Soft Indigo/Lavender Aura */}
        <div className="absolute top-[35%] -left-28 w-[600px] h-[600px] bg-gradient-to-tr from-[#4B4FCF]/5 via-[#4B4FCF]/8 to-transparent rounded-full blur-3xl" />

        {/* Mid-Right Subtle Aura */}
        <div className="absolute top-[60%] -right-28 w-[600px] h-[600px] bg-gradient-to-bl from-[#E88C5A]/5 via-[#4B4FCF]/6 to-transparent rounded-full blur-3xl" />

        {/* Delicate Micro Grid */}
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{
            backgroundImage: 'radial-gradient(#E2E1EC 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      {/* Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isProjectDetailActive={!!selectedProject}
        onBackToProjects={handleBackToProjects}
      />

      <main className="relative">
        {selectedProject ? (
          /* Project Details View */
          <ProjectDetails
            project={selectedProject}
            onBack={handleBackToProjects}
            onSelectOtherProject={handleSelectProject}
          />
        ) : (
          /* Single-Page Smooth Layout */
          <>
            <Hero
              onNavigateToProjects={() => handleNavigate('projects')}
              onNavigateToContact={() => handleNavigate('contact')}
            />

            <About />

            <ProjectGrid
              onSelectProject={handleSelectProject}
            />

            <SkillsSection />

            <EducationSection />

            <ExperienceSection />

            <ContactSection />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
