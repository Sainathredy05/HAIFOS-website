'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Very good initiative by HAIFOS team to train rural India.",
    name: "Subhash Singh",
    role: "Politician",
    initial: "S"
  },
  {
    quote: "Mission of HAIFOS to spread digital awareness specially in rural areas is very vital for success of Digital India",
    name: "Vivek Kumar",
    role: "IT industry",
    initial: "V"
  },
  {
    quote: "The organization is cultivating digital skills among rural children and youth with community-driven approach which is both timely and impactful",
    name: "Himabindu Allaka",
    role: "IITH",
    initial: "H"
  },
  {
    quote: "HAIFOS is building not just digital skills, but trust and long-term capacity in rural communities of India.",
    name: "Rahul Yaduka",
    role: "Researchers SOAS, London",
    initial: "R"
  },
  {
    quote: "The organization vision strongly aligns with advancing equitable and inclusive digital development in rural India.",
    name: "Binod Kumar",
    role: "Bihar State-Head, WellBing Foundation India",
    initial: "B"
  }
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  // Show 2 items starting from current index
  const getVisible = () => {
    const first = testimonials[current];
    const second = testimonials[(current + 1) % total];
    return [first, second];
  };

  const visible = getVisible();

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden pt-10 pb-6 px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {visible.map((t, idx) => (
              <motion.div
                key={`${current}-${idx}-${t.name}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white rounded-[2rem] shadow-premium p-10 text-left border border-gray-50 flex flex-col justify-between h-full min-h-[300px]"
              >
                <div>
                   <span className="text-7xl text-primary/10 font-serif leading-none select-none block -mt-4 mb-2">"</span>
                   <p className="text-gray-700 text-lg lg:text-xl font-bold italic leading-relaxed mb-8">
                     {t.quote}
                   </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black text-xl flex-shrink-0 shadow-sm">
                    {t.initial}
                  </div>
                  <div>
                    <h5 className="font-black text-gray-900 text-base">{t.name}</h5>
                    <p className="text-xs text-text-muted font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Buttons - Centered below */}
        <div className="flex justify-center items-center gap-6 mt-16">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-premium flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 transition-all active:scale-95"
            aria-label="Previous Testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-500 ${i === current ? 'w-10 h-2 bg-primary' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'}`}
                aria-label={`Show Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-premium flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 transition-all active:scale-95"
            aria-label="Next Testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
