import React from 'react';
import { bioData } from '../data/bio';
import { skillsData } from '../data/skills';
import spiderwebSvg from '../assets/spiderweb.svg';
import { User, Shield, Terminal } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      {/* Hanging Spider Sticker Left (Unique Sticker #3) */}
      <div className="absolute top-0 left-12 z-20 pointer-events-none animate-swing hidden md:block">
        <img
          src="/stickers/hanging-spider.png"
          alt="Hanging Spider Sticker"
          className="w-20 md:w-28 opacity-90 drop-shadow-md"
        />
      </div>



      {/* Spiderweb Background Art */}
      <img
        src={spiderwebSvg}
        alt="Spiderweb background"
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[30rem] opacity-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-brand-red font-mono text-xs md:text-sm font-bold uppercase tracking-widest mb-3">
          <span className="w-3 h-1 bg-brand-red inline-block" />
          <span>BEHIND THE MASK</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Primary Tech Stack */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight text-brand-dark">
              {bioData.name}.
            </h2>

            <p className="font-body text-slate-700 text-lg md:text-xl leading-relaxed">
              {bioData.summary}
            </p>

            {/* Primary Tech Stack Badges */}
            <div className="space-y-4 pt-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                PRIMARY TECH STACK
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillsData.primaryStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2.5 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-brand-red/30 rounded-2xl font-mono text-xs font-bold text-slate-800 hover:text-brand-red transition-all shadow-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red group-hover:scale-125 transition-transform" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Circular Avatar Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Circular Ring with Animated Spider-Man Avatar */}
              <div className="w-72 h-72 md:w-88 md:h-88 rounded-full p-2.5 border-4 border-brand-red shadow-2xl bg-slate-950 relative flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-red-glow">
                
                {/* Ashwani Attached Profile Photo */}
                <img
                  src="/ashwani-profile.png?v=16"
                  alt="Ashwani Sharma Profile Photo"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
















                {/* Subtle Web Overlay */}
                <img
                  src={spiderwebSvg}
                  alt="Web background"
                  className="absolute inset-0 w-full h-full opacity-15 object-cover pointer-events-none"
                />

                {/* Gradient Info Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-center z-10">
                  <h4 className="font-display font-extrabold text-xl text-white tracking-tight">
                    ASHWANI SHARMA
                  </h4>
                  <p className="font-mono text-xs text-brand-red font-bold uppercase tracking-wider mt-0.5">
                    CSE • GEC Ajmer & CDAC Intern
                  </p>
                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute -bottom-2 -left-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2 z-20">
                <Shield className="w-4 h-4 text-brand-red" />
                <span className="font-mono text-xs font-bold text-slate-800">Full Stack & Cybersecurity</span>
              </div>

            </div>
          </div>


        </div>

      </div>
    </section>
  );
}
