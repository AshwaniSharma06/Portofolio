import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeRibbons from './components/MarqueeRibbons';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <MarqueeRibbons />
        <ProjectsGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

