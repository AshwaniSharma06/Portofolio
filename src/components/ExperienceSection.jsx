import React, { useState } from 'react';
import { experienceData, educationData, certificatesData } from '../data/experience';
import spiderwebSvg from '../assets/spiderweb.svg';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="relative py-28 bg-white overflow-hidden">
      {/* Red Spider Logo Sticker Top-Right (Unique Sticker #4) */}
      <div className="absolute top-8 right-12 z-20 pointer-events-none hidden md:block">
        <img
          src="/stickers/red-spider-logo.png"
          alt="Red Spider Emblem Sticker"
          className="w-20 md:w-28 opacity-85 hover:opacity-100 transition-opacity"
        />
      </div>



      {/* Background Watermark */}
      <img
        src={spiderwebSvg}
        alt="Spiderweb vector"
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[35rem] h-[35rem] opacity-10 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-brand-red font-mono text-xs font-bold uppercase tracking-widest">
            <span className="w-3 h-1 bg-brand-red inline-block" />
            <span>BACKGROUND & CREDENTIALS</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-brand-dark tracking-tight">
            EXPERIENCE & EDUCATION<span className="text-brand-red">.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-2 rounded-full" />
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-full border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-brand-red text-white shadow-md'
                  : 'text-slate-600 hover:text-brand-red'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>WORK EXPERIENCE</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-brand-red text-white shadow-md'
                  : 'text-slate-600 hover:text-brand-red'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'certificates'
                  ? 'bg-brand-red text-white shadow-md'
                  : 'text-slate-600 hover:text-brand-red'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>CERTIFICATES</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto">
          
          {/* TAB 1: WORK EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-8 animate-fadeIn">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-card-soft hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Decorative Left Accent Bar */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-brand-red font-mono text-[11px] font-bold uppercase tracking-wider rounded-full border border-brand-red/20 mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="font-display font-extrabold text-2xl text-brand-dark">
                        {exp.role}
                      </h3>
                      <div className="font-mono text-sm font-bold text-brand-red">
                        {exp.company}
                      </div>
                    </div>

                    <div className="space-y-1 md:text-right font-mono text-xs text-slate-500">
                      <div className="flex items-center md:justify-end gap-1.5 text-slate-700 font-bold">
                        <Calendar className="w-3.5 h-3.5 text-brand-red" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center md:justify-end gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-slate-700 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                      KEY RESPONSIBILITIES & LEARNINGS
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 font-body text-slate-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white border border-slate-200 rounded-md font-mono text-[10px] font-bold text-slate-800 uppercase tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* TAB 2: EDUCATION */}
          {activeTab === 'education' && (
            <div className="space-y-8 animate-fadeIn">
              {educationData.map((edu, idx) => (
                <div
                  key={edu.id}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-card-soft hover:shadow-xl transition-all duration-300 relative"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      {edu.status && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-full mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                          <span>{edu.status}</span>
                        </div>
                      )}
                      <h3 className="font-display font-extrabold text-xl md:text-2xl text-brand-dark">
                        {edu.degree}
                      </h3>
                      <div className="font-mono text-sm font-bold text-slate-700">
                        {edu.institution}
                      </div>
                    </div>

                    <div className="space-y-1 md:text-right font-mono text-xs">
                      <div className="flex items-center md:justify-end gap-1.5 text-brand-red font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center md:justify-end gap-1.5 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-2xl font-mono text-xs font-bold text-slate-800 mb-4 shadow-sm">
                    <span className="text-slate-400 uppercase">{edu.scoreLabel}:</span>
                    <span className="text-brand-red text-sm font-extrabold">{edu.score}</span>
                  </div>

                  {edu.highlights && (
                    <ul className="space-y-1.5 pt-2 border-t border-slate-200">
                      {edu.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 font-body text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              ))}
            </div>
          )}

          {/* TAB 3: CERTIFICATES */}
          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-card-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-red-50 border border-brand-red/20 font-mono text-[10px] font-bold text-brand-red uppercase tracking-wider rounded-full">
                        {cert.category}
                      </span>
                      <div className="font-mono text-xs font-bold text-slate-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-red" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-extrabold text-lg text-brand-dark leading-snug">
                      {cert.title}
                    </h3>

                    <div className="font-mono text-xs font-bold text-slate-700">
                      Issued by: <span className="text-brand-red">{cert.issuer}</span>
                    </div>

                    <p className="font-body text-slate-600 text-xs leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between font-mono text-[11px] font-bold text-slate-700">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verified Qualification</span>
                    </div>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-brand-red hover:bg-brand-red hover:text-white rounded-md border border-brand-red/20 transition-all duration-300"
                      >
                        <span>Verify Badge</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>


                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
