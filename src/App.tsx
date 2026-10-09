import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SplashScreen } from './components/SplashScreen';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Insights } from './pages/Insights';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Apple-style smooth momentum scroll with refined speed control
function SmoothScroll({ isPaused }: { isPaused: boolean }) {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // Luxuriously smooth, cinematic decelerating curve
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.75, // Controls & reduces scrolling speed for that deliberate Apple feel
      touchMultiplier: 1.2,
      infinite: false,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);
    (window as any).__lenis = lenis;

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  // Handle pause / resume when modals or mobile drawers are open
  React.useEffect(() => {
    const lenis = (window as any).__lenis;
    if (!lenis) return;
    if (isPaused) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isPaused]);

  // Scroll to top on route navigation
  React.useEffect(() => {
    if (!hash) {
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
}

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <SplashScreen />
      <SmoothScroll isPaused={mobileMenuOpen || consultationModalOpen} />
      <div className="app-container">
        {/* Floating Liquid Glass Navbar */}
        <Navbar 
          onOpenConsultation={() => setConsultationModalOpen(true)}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Mobile Navigation Drawer */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onOpenConsultation={() => setConsultationModalOpen(true)}
        />

        {/* Quick Consultation Request Modal */}
        <ConsultationModal
          isOpen={consultationModalOpen}
          onClose={() => setConsultationModalOpen(false)}
        />

        {/* Main Content Area */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={() => setConsultationModalOpen(true)} />} />
            <Route path="/about" element={<About onOpenConsultation={() => setConsultationModalOpen(true)} />} />
            <Route path="/services" element={<Services onOpenConsultation={() => setConsultationModalOpen(true)} />} />
            <Route path="/industries" element={<Industries onOpenConsultation={() => setConsultationModalOpen(true)} />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Catch-all fallback route */}
            <Route path="*" element={<Home onOpenConsultation={() => setConsultationModalOpen(true)} />} />
          </Routes>
        </main>

        {/* iPhone Liquid Glass Bottom Dock (.tabViewBottom) */}
        <MobileBottomBar />

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
