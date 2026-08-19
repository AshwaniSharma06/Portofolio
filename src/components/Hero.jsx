import React from 'react';
import { bioData } from '../data/bio';
import { Download, ArrowRight, Shield, Terminal, UserCheck, Code, Sparkles } from 'lucide-react';
import spiderwebSvg from '../assets/spiderweb.svg';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-spiderweb overflow-hidden">
      {/* Top-Right Corner Spiderweb Sticker (Unique Sticker #1) */}
      <img
        src="/stickers/corner-spiderweb.png"
        alt="Corner Spiderweb Sticker"
        className="absolute top-0 right-0 w-64 md:w-88 opacity-85 pointer-events-none z-0"
      />

      {/* Spiderweb Background Art Top-Left */}
      <img
        src={spiderwebSvg}
        alt="Spiderweb vector"
        className="absolute -top-12 -left-12 w-96 h-96 opacity-20 pointer-events-none select-none"
      />
      {/* Spiderweb Background Art Bottom-Right */}
      <img
        src={spiderwebSvg}
        alt="Spiderweb vector"
        className="absolute -bottom-16 -right-16 w-[32rem] h-[32rem] opacity-20 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column: Hero Typography & Actions */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-brand-red/20 rounded-full text-brand-red font-mono text-xs md:text-sm font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            {bioData.tagline}
          </div>

          {/* Main Title with superhero 3D offset typography effect */}
          <div className="relative">
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-brand-dark leading-[0.95] text-offset-shadow">
              {bioData.name}.
            </h1>
          </div>

          {/* Bio Headline */}
          <p className="font-body text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed font-normal">
            Full Stack & Android Engineer bridging scalable web architecture, mobile apps, and AI-driven cybersecurity.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red hover:bg-brand-redDark text-white font-mono font-bold text-sm tracking-wider uppercase rounded-full shadow-red-glow hover:scale-105 transition-all duration-200 group"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={bioData.resumeUrl}
              download="Ashwani_Sharma_Resume.pdf"
              className="inline-flex items-center gap-3 px-7 py-4 bg-brand-dark hover:bg-slate-800 text-white font-mono font-bold text-sm tracking-wider uppercase rounded-full shadow-md hover:scale-105 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>SDE_RESUME.PDF</span>
            </a>
          </div>

          {/* Quick Metrics / Highlights */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 max-w-xl">
            <div>
              <div className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark">CDAC</div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mt-1">Cyber Intern</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl md:text-3xl text-brand-red">FULL STACK</div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mt-1">Architecture</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark">B.TECH</div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mt-1">CSE • GEC Ajmer</div>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Visual Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Floating Webshooter Sticker (Unique Sticker #2) */}
          <div className="absolute -top-6 -right-4 md:-right-8 z-40 animate-float-slow hidden sm:block">
            <img
              src="/stickers/hand-webshooter.png"
              alt="Spider-Man Webshooter Sticker"
              className="w-28 md:w-36 -rotate-12 hover:rotate-0 hover:scale-115 transition-all duration-300 sticker-shadow cursor-pointer pointer-events-auto"
              title="Thwip! 🕸️"
            />
          </div>

          {/* Static Hero Developer Card (No flip interaction) */}
          <div className="relative w-full max-w-sm p-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-dark bg-slate-900 text-white space-y-6">
            <img
              src={spiderwebSvg}
              alt="Web Graphic"
              className="absolute inset-0 w-full h-full opacity-20 object-cover pointer-events-none"
            />

            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/20 border border-brand-red rounded-full font-mono text-[10px] uppercase font-bold tracking-widest text-brand-red">
                <UserCheck className="w-3.5 h-3.5" />
                <span>FULL STACK & CYBERSECURITY</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="relative z-10 space-y-4 text-center">

              <div className="w-24 h-24 rounded-full bg-slate-950 overflow-hidden border-4 border-brand-red shadow-xl mx-auto flex items-center justify-center">
                <img
                  src="/ashwani-profile.png?v=16"
                  alt="Ashwani Sharma Profile Photo"
                  className="w-full h-full object-cover"
                />















              </div>



              <div>
                <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                  ASHWANI SHARMA
                </h3>
                <div className="font-mono text-xs text-brand-red font-bold uppercase tracking-wider mt-1">
                  CDAC Noida Cyber Security Intern
                </div>
              </div>

              <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700 text-left font-mono text-[11px] text-slate-300 space-y-2 shadow-inner">
                <div className="flex items-center gap-2 text-white font-bold pb-1 border-b border-slate-700">
                  <Terminal className="w-4 h-4 text-brand-red" />
                  <span>Developer Qualifications:</span>
                </div>
                <div>• B.Tech CSE @ GEC Ajmer (CGPA: 7.26)</div>
                <div>• Ethical Hacking & Malware Analysis</div>
                <div>• Android (Java/Kotlin) & Firebase Apps</div>
                <div>• React.js, Node.js, Python, SQL</div>
              </div>
            </div>

            <div className="relative z-10 pt-2 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-white bg-brand-red border border-white px-4 py-2 rounded-full font-bold tracking-widest shadow-lg">
                <Shield className="w-3.5 h-3.5" />
                <span>ACTIVE DEVELOPER 🕸️</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


