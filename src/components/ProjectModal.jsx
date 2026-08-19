import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Cpu, CheckCircle2, Server, Calendar } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { details } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Close Button */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-xs font-bold text-brand-red uppercase tracking-widest">
                {project.category}
              </span>
              {project.date && (
                <span className="font-mono text-xs font-bold text-slate-500 flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-brand-red" />
                  <span>Completed: {project.date}</span>
                </span>
              )}
            </div>
            <h3 className="font-display font-black text-2xl md:text-3xl text-brand-dark tracking-tight">
              {project.title}
            </h3>
          </div>


          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-brand-red bg-slate-100 hover:bg-red-50 rounded-full transition-all"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Key Metric Badge */}
        {details?.keyMetric && (
          <div className="p-4 bg-red-50/80 border border-brand-red/20 rounded-2xl flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-brand-red flex-shrink-0" />
            <div>
              <div className="font-mono text-[10px] uppercase font-bold text-slate-400">KEY METRIC / RESULT</div>
              <div className="font-display font-extrabold text-base md:text-lg text-brand-dark">
                {details.keyMetric}
              </div>
            </div>
          </div>
        )}

        {/* Architecture Overview */}
        {details?.architecture && (
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <Server className="w-4 h-4 text-brand-red" />
              <span>SYSTEM ARCHITECTURE</span>
            </h4>
            <p className="font-body text-slate-700 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {details.architecture}
            </p>
          </div>
        )}

        {/* Key Features List */}
        {details?.features && (
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red" />
              <span>CORE CAPABILITIES</span>
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="p-3 bg-white border border-slate-200 rounded-xl text-xs font-body text-slate-700 flex items-start gap-2.5 shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical Stack Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {details?.frontendStack && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <div className="font-mono text-[10px] uppercase font-bold text-slate-400">FRONTEND STACK</div>
              <div className="font-mono text-xs font-bold text-brand-dark">{details.frontendStack}</div>
            </div>
          )}
          {details?.backendStack && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <div className="font-mono text-[10px] uppercase font-bold text-slate-400">BACKEND STACK</div>
              <div className="font-mono text-xs font-bold text-brand-dark">{details.backendStack}</div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-redDark text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full shadow-red-glow transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>OPEN LIVE VERCEL DEMO</span>
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>VIEW SOURCE CODE</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold uppercase tracking-wider rounded-full transition-all"
          >
            CLOSE
          </button>
        </div>


      </div>
    </div>
  );
}
