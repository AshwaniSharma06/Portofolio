import React from 'react';
import { bioData } from '../data/bio';
import { Mail, Heart, Code2 } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const LeetcodeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a1.374 1.374 0 0 0-.016 1.916l.016.016 5.406 5.788a1.374 1.374 0 0 0 1.916.016l.016-.016 5.406-5.788a1.374 1.374 0 0 0 0-1.932l-5.406-5.788A1.374 1.374 0 0 0 13.483 0zm-7.61 7.234a1.374 1.374 0 0 0-1.932 0l-3.5 3.75a1.374 1.374 0 0 0 0 1.932l3.5 3.75a1.374 1.374 0 0 0 1.932-1.932L2.808 11.95l3.065-3.284a1.374 1.374 0 0 0 0-1.932zM12 14.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand logo & Tagline */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-red text-white flex items-center justify-center font-black text-lg">
              A
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-white">
              <span className="text-brand-red">A</span>SHWANI.
            </span>
          </div>
          <p className="font-mono text-xs text-slate-400">
            Your Friendly Neighborhood Developer • Ashwani Sharma
          </p>
        </div>

        {/* Center: Superhero Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 rounded-full border border-slate-700 text-xs font-mono text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Spider-Sense Active 🕸️</span>
        </div>

        {/* Right: Social Media Links */}
        <div className="flex items-center gap-3">
          <a
            href={bioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-brand-red text-slate-300 hover:text-white rounded-full transition-all"
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={bioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-brand-red text-slate-300 hover:text-white rounded-full transition-all"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          {bioData.socials.leetcode && (
            <a
              href={bioData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-brand-red text-slate-300 hover:text-white rounded-full transition-all"
              aria-label="LeetCode"
              title="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>
          )}
          <a
            href={`mailto:${bioData.socials.email}`}
            className="p-3 bg-slate-800 hover:bg-brand-red text-slate-300 hover:text-white rounded-full transition-all"
            aria-label="Email"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>


      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-slate-800/80 text-center font-mono text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Ashwani Sharma. Built with React, Vite, Tailwind CSS & GSAP.
        </div>
        <div className="flex items-center gap-1">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
          <span>for web security & AI excellence</span>
        </div>
      </div>
    </footer>
  );
}
