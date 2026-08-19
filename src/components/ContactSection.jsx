import React, { useState } from 'react';
import { bioData } from '../data/bio';
import { Send, Mail, MapPin, CheckCircle, Phone } from 'lucide-react';
import spiderwebSvg from '../assets/spiderweb.svg';


export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-white overflow-hidden">



      {/* Centered Large Spiderweb Watermark */}
      <img
        src={spiderwebSvg}
        alt="Spiderweb background"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] opacity-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-brand-red font-mono text-xs font-bold uppercase tracking-widest">
            <span className="w-3 h-1 bg-brand-red inline-block" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-6xl text-brand-dark tracking-tight">
            CONTACT<span className="text-brand-red">.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-2 rounded-full" />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Form Card (Center - 8 cols) */}
          <div className="lg:col-span-8 lg:col-start-3">
            <div className="bg-slate-50/90 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
              
              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 font-mono text-xs font-bold">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Message sent successfully! Ashwani will get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* YOUR NAME */}
                  <div className="space-y-2">
                    <label className="block font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Peter Parker"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-slate-800 font-body placeholder:text-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                    />
                  </div>

                  {/* YOUR EMAIL */}
                  <div className="space-y-2">
                    <label className="block font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="peterg@dailybugle.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-slate-800 font-body placeholder:text-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Let's build something amazing together..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-slate-800 font-body placeholder:text-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-red hover:bg-brand-redDark text-white font-mono font-bold text-sm tracking-widest uppercase rounded-full shadow-red-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>

              {/* Direct Info */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-red" />
                  <a href={`mailto:${bioData.socials.email}`} className="hover:text-brand-red font-bold">
                    {bioData.socials.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-red" />
                  <a href={`tel:${bioData.phone}`} className="hover:text-brand-red font-bold">
                    {bioData.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  <span className="font-bold">{bioData.location}</span>
                </div>
              </div>


            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
