import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ExternalLink, ShieldAlert, ShoppingBag, CheckSquare, Smartphone, Info, Calendar } from 'lucide-react';
import spiderwebSvg from '../assets/spiderweb.svg';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'shopsphere':
        return <ShoppingBag className="w-5 h-5 text-brand-red" />;
      case 'taskforge':
        return <CheckSquare className="w-5 h-5 text-brand-red" />;
      case 'cabshare-android':
        return <Smartphone className="w-5 h-5 text-brand-red" />;
      case 'qrshield-ai':
        return <ShieldAlert className="w-5 h-5 text-brand-red" />;
      default:
        return <ExternalLink className="w-5 h-5 text-brand-red" />;
    }
  };


  return (
    <section id="projects" className="relative py-28 bg-spiderweb overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 text-brand-red font-mono text-xs font-bold uppercase tracking-widest">
            <span className="w-3 h-1 bg-brand-red inline-block" />
            <span>FEATURED WORKS</span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-6xl text-brand-dark tracking-tight">
            PROJECTS<span className="text-brand-red">.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-2 rounded-full" />
        </div>

        {/* Main Grid + Side Superhero Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Character Visual Anchor */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center space-y-6 pt-8">
            <div className="w-full bg-slate-900 rounded-3xl p-6 text-white border border-slate-800 shadow-xl relative overflow-hidden text-center">
              <img
                src={spiderwebSvg}
                alt="Web graphic"
                className="absolute inset-0 w-full h-full opacity-20 object-cover pointer-events-none"
              />
              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-red/20 border-2 border-brand-red flex items-center justify-center mx-auto">
                  <ShieldAlert className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-white">
                  FEATURED CODE
                </h3>
                <p className="font-mono text-xs text-slate-300 leading-relaxed">
                  Click any project card to view architecture breakdown, system metrics, and completion timelines.
                </p>
                <div className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                  CLICK FOR DETAILS 🔍
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Project Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white hover:bg-slate-50/80 rounded-3xl p-8 border border-slate-200 hover:border-brand-red/40 shadow-card-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Category + Date Badge + Actions */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      {getProjectIcon(project.id)}
                      <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {project.category}
                      </span>
                      {project.date && (
                        <span className="font-mono text-[10px] font-bold text-brand-red bg-red-50 border border-brand-red/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-brand-red" />
                          <span>{project.date}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1.5 bg-brand-red hover:bg-brand-redDark text-white rounded-full transition-all flex items-center gap-1.5 text-[11px] font-mono font-bold shadow-sm hover:scale-105"
                          title="Open Live Vercel Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="p-2 text-brand-red bg-red-50 hover:bg-brand-red hover:text-white rounded-full transition-colors flex items-center gap-1 text-[11px] font-mono font-bold px-3"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-slate-400 hover:text-brand-dark transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>

                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-brand-dark group-hover:text-brand-red transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills at Bottom */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 font-mono text-[10px] font-bold text-slate-700 tracking-wider rounded-md uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
