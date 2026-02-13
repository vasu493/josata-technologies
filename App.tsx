
import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { AboutSection } from './components/home/AboutSection';
import { DigitalSection } from './components/home/DigitalSection';
import { BainGraphic } from './components/visuals/BainGraphic';
import { RetailBankingPage } from './components/industry/RetailBankingPage';
import { AssetWealthPage } from './components/industry/AssetWealthPage';
import { CardsPaymentsPage } from './components/industry/CardsPaymentsPage';
import { RiskCompliancePage } from './components/industry/RiskCompliancePage';
import { AIServicesPage } from './components/services/AIServicesPage';
import { IntelligentAutomationPage } from './components/services/IntelligentAutomationPage';
import { AirlinesPage } from './components/industry/AirlinesPage';
import { AirportsPage } from './components/industry/AirportsPage';
import { TravelTechPage } from './components/industry/TravelTechPage';
import { OTAPage } from './components/industry/OTAPage';
import { RetailPage } from './components/industry/RetailPage';
import { CPGPage } from './components/industry/CPGPage';
import { OurStoryPage } from './components/about/OurStoryPage';
import { DataEngineeringPage } from './components/services/DataEngineeringPage';
import { ContactPage } from './components/contact/ContactPage';

function App() {
  const [activeVibe, setActiveVibe] = useState<string>('home');
  const [view, setView] = useState<{ 
    type: 'home' | 'retail-banking' | 'asset-wealth' | 'cards-payments' | 'risk-compliance' | 'ai-services' | 'intelligent-automation' | 'airlines' | 'airports' | 'travel-tech' | 'ota' | 'retail' | 'cpg' | 'our-story' | 'data-engineering' | 'contact' | 'other', 
    data?: any 
  }>({ type: 'home' });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleVibeChange = (vibe: string) => {
    setActiveVibe(vibe);
    if (vibe === 'home') {
      setView({ type: 'home' });
      return;
    }

    if (vibe === 'contact') {
      setView({ type: 'contact' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const v = vibe.toLowerCase();
    
    // Routing Logic for specialized pages
    if (v.includes('retail & corporate banking')) {
      setView({ type: 'retail-banking' });
    } else if (v.includes('asset & wealth management')) {
      setView({ type: 'asset-wealth' });
    } else if (v.includes('cards & payments')) {
      setView({ type: 'cards-payments' });
    } else if (v.includes('risk & compliance')) {
      setView({ type: 'risk-compliance' });
    } else if (v.includes('ai services')) {
      setView({ type: 'ai-services' });
    } else if (v.includes('intelligent automation')) {
      setView({ type: 'intelligent-automation' });
    } else if (v.includes('airlines')) {
      setView({ type: 'airlines' });
    } else if (v.includes('airports')) {
      setView({ type: 'airports' });
    } else if (v.includes('travel tech')) {
      setView({ type: 'travel-tech' });
    } else if (v.includes('online travel agencies')) {
      setView({ type: 'ota' });
    } else if (v.includes('retail') && !v.includes('banking') && !v.includes('consumer packaged goods')) {
      setView({ type: 'retail' });
    } else if (v.includes('consumer packaged goods') || v.includes('(cpg)')) {
      setView({ type: 'cpg' });
    } else if (v.includes('our story')) {
      setView({ type: 'our-story' });
    } else if (v.includes('data engineering')) {
      setView({ type: 'data-engineering' });
    } else {
      setView({ type: 'home' }); 
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#05070a]">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[60]" style={{ scaleX }} />
      <Navbar onVibeChange={handleVibeChange} />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          {view.type === 'home' && (
            <motion.div key="home-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <BainGraphic vibe={activeVibe} />
              <Hero />
              <AboutSection />
              <DigitalSection />
              <Services />
              <Footer />
            </motion.div>
          )}

          {view.type === 'retail-banking' && (
            <RetailBankingPage key="retail-banking" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'asset-wealth' && (
            <AssetWealthPage key="asset-wealth" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'cards-payments' && (
            <CardsPaymentsPage key="cards-payments" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'risk-compliance' && (
            <RiskCompliancePage key="risk-compliance" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'ai-services' && (
            <AIServicesPage key="ai-services" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'intelligent-automation' && (
            <IntelligentAutomationPage key="intelligent-automation" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'airlines' && (
            <AirlinesPage key="airlines" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'airports' && (
            <AirportsPage key="airports" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'travel-tech' && (
            <TravelTechPage key="travel-tech" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'ota' && (
            <OTAPage key="ota" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'retail' && (
            <RetailPage key="retail" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'cpg' && (
            <CPGPage key="cpg" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'our-story' && (
            <OurStoryPage key="our-story" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'data-engineering' && (
            <DataEngineeringPage key="data-engineering" onBack={() => setView({ type: 'home' })} />
          )}

          {view.type === 'contact' && (
            <ContactPage key="contact" onBack={() => setView({ type: 'home' })} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
