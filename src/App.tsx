import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { InternshipExperiencePage } from './pages/InternshipExperiencePage';
import { InternshipLearningsPage } from './pages/InternshipLearningsPage';
import { ProjectsOverviewPage } from './pages/ProjectsOverviewPage';
import { ProjectMarketingPage } from './pages/ProjectMarketingPage';
import { ProjectVisualMerchandisingPage } from './pages/ProjectVisualMerchandisingPage';
import { ProjectThreePage } from './pages/ProjectThreePage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { ambientSound } from './utils/ambientAudio';
import { hasSanity, hydrateFromSanity, isSectionVisible } from './lib/sanity';

function HiddenSection() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <p className="font-serif-display italic text-lg text-[var(--c-ink)]/60">This section is hidden in Site Settings.</p>
    </div>
  );
}

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [isAmbientActive, setIsAmbientActive] = useState(false);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    if (hasSanity) {
      hydrateFromSanity().finally(() => forceUpdate((n) => n + 1));
    }
  }, []);

  const handleToggleAmbient = () => {
    const active = ambientSound.toggle();
    setIsAmbientActive(active);
  };

  useEffect(() => {
    return () => {
      ambientSound.stop();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-ink)] flex flex-col selection:bg-[var(--c-highlight)] selection:text-[var(--c-ink)]">
        {/* Editorial Header */}
        <Header
          onOpenWaitlist={() => setWaitlistOpen(true)}
          ambientSound={isAmbientActive}
          onToggleAmbient={handleToggleAmbient}
        />

        {/* Multi-Page Route Outlet */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={() => setWaitlistOpen(true)} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/internship/experience" element={<InternshipExperiencePage />} />
            <Route path="/internship/learnings" element={<InternshipLearningsPage />} />
            <Route path="/projects" element={<ProjectsOverviewPage />} />
            <Route path="/projects/marketing" element={isSectionVisible('project.marketing') ? <ProjectMarketingPage /> : <HiddenSection />} />
            <Route path="/projects/visual-merchandising" element={isSectionVisible('project.vm') ? <ProjectVisualMerchandisingPage /> : <HiddenSection />} />
            <Route path="/projects/project-3" element={isSectionVisible('project.three') ? <ProjectThreePage /> : <HiddenSection />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Editorial Footer */}
        <Footer />

        {/* Studio Inquiry / Dossier Modal */}
        <WaitlistModal
          isOpen={waitlistOpen}
          onClose={() => setWaitlistOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
