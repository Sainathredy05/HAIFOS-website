"use client";

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heroImg from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.22.jpeg';

const volunteerRoles = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Community Trainer',
    desc: 'Teach basic computer skills and digital literacy to rural youth and community members.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Field Volunteer',
    desc: 'Travel to underserved areas to conduct awareness programs and support center operations.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Research Volunteer',
    desc: 'Assist in field research on digital challenges, helping create evidence-based programs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Digital Support',
    desc: 'Provide remote technical assistance and contribute skills to our digital infrastructure.',
  },
];

const partnerTypes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'CSR Partners',
    desc: 'Companies looking to contribute through CSR-funded digital inclusion projects.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: 'Academic Institutions',
    desc: 'Research universities and colleges for joint studies and student volunteer programs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'NGO Collaboration',
    desc: 'Civil society organizations to co-deliver programs and expand rural reach.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: 'Government Bodies',
    desc: 'State and local government for policy advocacy and digital infrastructure support.',
  },
];

const partnershipEnables = [
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>, label: 'Digital Access' },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, label: 'Skills Training' },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, label: 'Research' },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, label: 'Scalable Impact' },
];

const whyVolunteer = [
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, title: 'Skill Development', desc: 'Gain hands-on experience working on real-world digital inclusion projects.' },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Global Networking', desc: 'Connect with mission-driven leaders across education, tech, and civil society.' },
  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Global Perspective', desc: 'Understand the challenges and solutions shaping digital equity worldwide.' },
];

export default function GetInvolvedPage() {
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', role: '', message: '' });
  const [volunteerStatus, setVolunteerStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleVolunteer = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVolunteerStatus('loading');
    
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: volunteerForm.name,
          email: volunteerForm.email,
          interest_area: volunteerForm.role,
          message: volunteerForm.message
        }),
      });

      if (!res.ok) throw new Error('Failed to submit application');
      
      setVolunteerStatus('success');
      setVolunteerForm({ name: '', email: '', role: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Error submitting application. Please try again.');
      setVolunteerStatus('idle');
    }
  }, [volunteerForm]);

  return (
    <div className="bg-white">

      {/* ━━━ HERO ━━━ */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src={heroImg} alt="Get Involved Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/65" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight">
            Get Involved
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl text-white/80 font-medium leading-relaxed">
            Join us in closing the digital gap in rural India through innovation and community-driven action.
          </motion.p>
        </div>
      </section>

      {/* ━━━ VOLUNTEER WITH US ━━━ */}
      <section id="volunteer" className="section-padding bg-soft-grey">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Volunteer With Us</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Share your skills, time, and passion. Join our community of change-makers bridging the digital divide.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {volunteerRoles.map((role, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} viewport={{ once: true }}
                className="card-style p-7 flex flex-col items-center text-center bg-white">
                <div className="w-12 h-12 bg-primary/8 text-primary rounded-xl flex items-center justify-center mb-4">{role.icon}</div>
                <h3 className="font-black text-gray-900 text-sm mb-2">{role.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Why Volunteer?</h3>
              <div className="space-y-5">
                {whyVolunteer.map((point, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary flex-shrink-0">{point.icon}</div>
                    <div>
                      <h4 className="font-black text-gray-900 text-sm mb-1">{point.title}</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-black text-gray-900 mb-6">Volunteer Application</h3>
              {volunteerStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-[#EAF2EA] text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="font-black text-gray-900">Application submitted!</p>
                  <p className="text-text-muted text-sm mt-1">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleVolunteer} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Name</label>
                      <input required placeholder="John Doe" value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                        className="w-full bg-soft-grey px-4 py-2.5 rounded-lg text-sm border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Email</label>
                      <input type="email" required placeholder="john@example.com" value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                        className="w-full bg-soft-grey px-4 py-2.5 rounded-lg text-sm border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Preferred Role</label>
                    <select value={volunteerForm.role} onChange={(e) => setVolunteerForm({ ...volunteerForm, role: e.target.value })}
                      className="w-full bg-soft-grey px-4 py-2.5 rounded-lg text-sm border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all">
                      <option value="">Select a role...</option>
                      {volunteerRoles.map((r) => <option key={r.title} value={r.title}>{r.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Your Message</label>
                    <textarea required rows={3} placeholder="Tell us about your skills and why you'd like to volunteer..."
                      value={volunteerForm.message} onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                      className="w-full bg-soft-grey px-4 py-2.5 rounded-lg text-sm border border-transparent focus:border-primary/30 focus:bg-white focus:outline-none transition-all resize-none" />
                  </div>
                  <button type="submit" disabled={volunteerStatus === 'loading'} className="btn-primary w-full py-3 justify-center text-sm">
                    {volunteerStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ PARTNER WITH HAIFOS ━━━ */}
      <section id="partner" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Partner With HAIFOS</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Collaboration is at the heart of our mission. Join us to accelerate and scale lasting change.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {partnerTypes.map((type, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} viewport={{ once: true }}
                className="card-style p-6 text-center">
                <div className="w-12 h-12 bg-primary/8 text-primary rounded-xl flex items-center justify-center mx-auto mb-3">{type.icon}</div>
                <h4 className="font-black text-gray-900 text-sm mb-2">{type.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary rounded-2xl p-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-black text-white mb-1">What Partnership Enables</h3>
              <p className="text-white/70 text-sm">Together we achieve more through resource sharing and expert collaboration.</p>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              {partnershipEnables.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center text-white">{item.icon}</div>
                  <span className="text-white/80 text-xs font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary inline-flex px-12 py-3.5">Become a Partner</Link>
          </div>
        </div>
      </section>

      {/* ━━━ CAREERS ━━━ */}
      <section id="career" className="section-padding bg-soft-grey">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Careers at HAIFOS</h2>
            <p className="text-text-muted text-lg">Join a team that's making a difference in rural India.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 bg-soft-grey rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">No current openings</h3>
            <p className="text-text-muted text-sm max-w-md mx-auto mb-8 leading-relaxed">
              We don't have any open positions right now, but we'd love to hear from talented and passionate individuals who want to help us grow.
            </p>
            <div className="flex flex-col items-center">
              <a 
                href="mailto:info@haifos.org?subject=Resume Submission - [Your Name]"
                className="btn-primary inline-flex px-12 py-4 shadow-xl hover:scale-105 transition-all text-sm font-black"
              >
                Send your Resume via Email
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
