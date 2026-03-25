"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImg from '@/images/Research and Advocacy/Copy of IMG-20240715-WA0042.jpg';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Something went wrong');
      setSuccess(true);
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">

      {/* ━━━ HERO ━━━ */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src={heroImg} alt="Contact Us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/65" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.h1 {...fadeIn} className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl text-white/80 font-medium leading-relaxed">
            We would love to hear from you. Reach out for <span className="text-pale-green font-bold">collaborations</span> or queries.
          </motion.p>
        </div>
      </section>

      {/* ━━━ INTRO ━━━ */}
      <section className="section-padding bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Let's spark a conversation</h2>
          <p className="text-text-muted text-lg">Human-centric solutions start with a simple hello. Reach out and let's build something beautiful together.</p>
        </div>
      </section>

      {/* ━━━ CONTACT CARDS ━━━ */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              label: 'Email Us',
              value: 'info@haifos.org',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              label: 'Call Us',
              value: '+91 7739962314',
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              label: 'Visit Us',
              value: 'C/O Jitendra Mandal, H.No - 157, Near IIT Park, Basudeopur, Munger, Bihar (IN)',
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card-style p-8 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary/8 text-primary rounded-full flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h4 className="font-black text-gray-900 mb-2">{card.label}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{card.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ━━━ FEEDBACK FORM ━━━ */}
      <section className="section-padding bg-soft-grey/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-premium border border-gray-100">

            {/* Left blue panel */}
            <div className="lg:col-span-2 bg-primary p-10 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-black mb-4">Share Your <span className="text-pale-green">Feedback</span></h3>
              <p className="text-white/75 text-sm leading-relaxed mb-8">
                Your feedback helps us improve our programs and better serve our communities. Tell us how your thoughts, suggestions, or experiences with HAIFOS.
              </p>
              <div className="space-y-5">
                {[
                  'Community-driven Improvement',
                  'Your ideas help us strengthen our initiatives',
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form panel */}
            <div className="lg:col-span-3 bg-white p-10">
              {success ? (
                <div className="h-full flex flex-col justify-center text-center py-12">
                  <div className="w-16 h-16 bg-[#EAF2EA] text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-text-muted text-sm">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">{error}</div>}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Full Name</label>
                      <input name="full_name" required placeholder="John Doe"
                        className="w-full bg-soft-grey px-4 py-3 rounded-lg border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Email Address</label>
                      <input name="email" type="email" required placeholder="john@example.com"
                        className="w-full bg-soft-grey px-4 py-3 rounded-lg border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Subject</label>
                    <input name="subject" required placeholder="How can we help?"
                      className="w-full bg-soft-grey px-4 py-3 rounded-lg border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Your Message</label>
                    <textarea name="message" required rows={4} placeholder="Tell us how we can help..."
                      className="w-full bg-soft-grey px-4 py-3 rounded-lg border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all text-sm resize-none" />
                  </div>
                  <button disabled={loading}
                    className="btn-primary w-full py-3.5 justify-center text-sm font-bold">
                    {loading ? 'Sending...' : 'Submit Feedback'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ OUR PRESENCE ━━━ */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Our Presence</h2>
            <p className="text-text-muted">Headquartered in Bihar, serving rural India.</p>
          </div>
          <div className="w-full h-72 lg:h-[450px] rounded-3xl overflow-hidden shadow-premium border border-gray-100 relative group">
            <a 
              href="https://www.google.com/maps/search/Basudeopur,+Munger,+Bihar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 cursor-pointer"
              title="Open in Google Maps"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.921350616997!2d86.46782297116668!3d25.355152331575824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f21f669db6e511%3A0xc6657c79294565c6!2sBasudeopur%2C%20Munger%2C%20Bihar!5e0!3m2!1sen!2sin!4v1711276000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}
