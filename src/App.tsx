import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { InternshipExperiencePage } from './pages/InternshipExperiencePage';
import { InternshipLearningsPage } from './pages/InternshipLearningsPage';
import { ProjectsOverviewPage } from './pages/ProjectsOverviewPage';
import { ProjectMarketingPage } from './pages/ProjectMarketingPage';
import { ProjectVisualMerchandisingPage } from './pages/ProjectVisualMerchandisingPage';
import { ProjectThreePage } from './pages/ProjectThreePage';
import { hasSanity, hydrateFromSanity, isSectionVisible } from './lib/sanity';
import { portfolioData } from './data/portfolioData';

function HiddenSection() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <p className="font-serif-display italic text-lg text-[var(--c-ink)]/60">{portfolioData.ui.site.hiddenSectionText}</p>
    </div>
  );
}

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    if (hasSanity) {
      hydrateFromSanity().finally(() => forceUpdate((n) => n + 1));
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-ink)] flex flex-col selection:bg-[var(--c-highlight)] selection:text-[var(--c-ink)]">
        {/* Multi-Page Route Outlet */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={() => setWaitlistOpen(true)} />} />
            <Route path="/internship/experience" element={<InternshipExperiencePage />} />
            <Route path="/internship/learnings" element={<InternshipLearningsPage />} />
            <Route path="/projects" element={isSectionVisible('home.projects') ? <ProjectsOverviewPage /> : <HiddenSection />} />
            <Route path="/projects/marketing" element={isSectionVisible('project.marketing') ? <ProjectMarketingPage /> : <HiddenSection />} />
            <Route path="/projects/visual-merchandising" element={isSectionVisible('project.vm') ? <ProjectVisualMerchandisingPage /> : <HiddenSection />} />
            <Route path="/projects/project-3" element={isSectionVisible('project.three') ? <ProjectThreePage /> : <HiddenSection />} />
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
