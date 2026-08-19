import React, { useEffect, useRef } from 'react';
import { skillsData } from '../data/skills';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeRibbons() {
  const ribbon1Ref = useRef(null);
  const ribbon2Ref = useRef(null);

  useEffect(() => {
    // ScrollTrigger parallax speed effect on the banners
    if (ribbon1Ref.current && ribbon2Ref.current) {
      gsap.to(ribbon1Ref.current, {
        xPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: ribbon1Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(ribbon2Ref.current, {
        xPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: ribbon2Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, []);

  // Repeat array items for seamless infinite scroll
  const upperItems = [...skillsData.tickerItemsUpper, ...skillsData.tickerItemsUpper, ...skillsData.tickerItemsUpper];
  const lowerItems = [...skillsData.tickerItemsLower, ...skillsData.tickerItemsLower, ...skillsData.tickerItemsLower];

  return (
    <section id="skills" className="relative py-24 bg-brand-bg overflow-hidden select-none">
      <div className="relative py-12 flex flex-col items-center justify-center gap-4">
        
        {/* Upper Ribbon (Red Background, White Text, Angled at -2.5 deg) */}
        <div className="w-[120%] -rotate-[2.5deg] bg-brand-red text-white py-4 shadow-xl overflow-hidden z-20">
          <div ref={ribbon1Ref} className="flex whitespace-nowrap gap-8 items-center font-display font-black text-xl md:text-2xl tracking-widest uppercase">
            {upperItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-white/60 font-mono text-sm">🕷️</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Ribbon (Black Background, Red Text, Angled at +2.5 deg) */}
        <div className="w-[120%] rotate-[2.5deg] bg-brand-dark text-brand-red py-4 shadow-2xl overflow-hidden z-10 -mt-8">
          <div ref={ribbon2Ref} className="flex whitespace-nowrap gap-8 items-center font-display font-black text-xl md:text-2xl tracking-widest uppercase">
            {lowerItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-brand-red/60 font-mono text-sm">🕸️</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
