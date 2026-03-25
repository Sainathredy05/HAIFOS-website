"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import heroImg from '@/images/Community_Digital Learning Center/IMG-20260209-WA0002.jpg';
import storyImg from '@/images/Digital literacy_Workshop/IMG_20250621_162706.jpg';
import schoolImg from '@/images/School/IMG_20231125_180155.jpg';
import communityImg from '@/images/Community_Digital Learning Center/IMG-20260211-WA0008.jpg';

import partner1 from '@/images/Partners/IITH.png';
import partner2 from '@/images/Partners/joyOfReading.png';
import partner3 from '@/images/Partners/ignis.png';
import partner4 from '@/images/Partners/mysamar-logo.png';

import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const fadeInUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } };
const stagger = { animate: { transition: { staggerChildren: 0.12 } } };
const allPartners = [partner1, partner2, partner3, partner4, partner1, partner2, partner3, partner4];

/* ── Asymmetric blob decoration ─────────────────── */
function BlobHero({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 500" className={`absolute pointer-events-none select-none ${className}`} aria-hidden>
      <path d="M412,87Q365,174,320,218Q275,262,214,309Q153,356,91,310Q29,264,47,185Q65,106,128,68Q191,30,266,14Q341,-2,394,43Q447,88,412,87Z" fill="currentColor" />
    </svg>
  );
}
function BlobStory({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={`absolute pointer-events-none select-none ${className}`} aria-hidden>
      <path d="M440,290Q408,380,325,415Q242,450,167,408Q92,366,62,280Q32,194,85,121Q138,48,224,36Q310,24,380,75Q450,126,440,290Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    async function fetchActivities() {
      const { data, error } = await supabase.from('activities').select('*').order('date', { ascending: false }).limit(3);
      if (!error && data) setActivities(data);
    }
    fetchActivities();
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-white overflow-hidden">
        
        {/* Figma-style wavy blobs */}
        <div className="absolute top-0 right-0 w-[60vw] h-full bg-[#EAF2EA]/50 rounded-bl-[100%] transition-all lg:rounded-bl-[80%]" />
        <BlobHero className="w-[45vw] max-w-2xl text-[#EAF2EA] top-10 -right-20 opacity-90" />
        <BlobHero className="w-[30vw] max-w-sm text-[#D9E2EC]/30 bottom-10 -left-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Content Area */}
            <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-xl">
              <motion.span variants={fadeInUp}
                className="inline-flex items-center gap-2 px-5 py-2 bg-primary/8 text-primary text-[10px] font-black rounded-full mb-8 uppercase tracking-[0.2em]">
                TECHNOLOGY FOR ALL
              </motion.span>
              <motion.h1 variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.02] mb-8">
                Building <span className="text-primary">Digital Ecosystem</span> in Rural India
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed font-medium">
                Building a digital ecosystem in rural India by empowering youth and children through digital education, information access, and awareness about emerging technologies.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/about" className="bg-primary text-white font-black px-12 py-4 rounded-full inline-flex items-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-primary/20 group">
                  Our Mission
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Asymmetric Image Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative pr-8 pb-8"
            >
              {/* Main Blob Image */}
              <div className="relative aspect-[5/4] rounded-tl-[10rem] rounded-br-[4rem] rounded-tr-[4rem] rounded-bl-[2rem] overflow-hidden shadow-2xl border-[10px] border-white z-20">
                <Image src={heroImg} alt="Community Learning Center" fill className="object-cover" priority />
              </div>

              {/* Floating Element: Top Left Blue Badge */}
              {/* Image Badges - Telangana (Top Left) */}
              <div className="absolute top-10 -left-6 z-30 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-lg border border-white/50">
                <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Telangana</span>
              </div>

              {/* Image Badges - Join the movement (Bottom Left) */}
              <Link href="/get-involved" className="absolute -bottom-8 -left-4 z-30 bg-white rounded-full px-6 py-4 shadow-premium border border-gray-50 flex items-center gap-3 group hover:scale-105 transition-all">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                   <div className="text-[11px] font-black text-gray-900 leading-none">Join the</div>
                   <div className="text-[11px] font-black text-gray-900 leading-none mt-1 uppercase tracking-tighter">movement</div>
                </div>
              </Link>

              {/* Image Badges - Bihar (Bottom Right) */}
              <div className="absolute bottom-12 -right-6 z-30 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-lg border border-white/50">
                <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Bihar</span>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ OUR STORY SECTION ━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#EAF2EA] py-24 md:py-32 overflow-hidden">
        {/* Blob decor */}
        <BlobStory className="w-[40vw] max-w-xl text-white/50 -bottom-20 -right-20" />
        <BlobStory className="w-[15vw] max-w-xs text-primary/5 top-0 left-0" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: Image with Shadow */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] z-10">
                <Image src={storyImg} alt="Digital Literacy Workshop" fill className="object-cover" />
              </div>
              {/* Backing shape */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/10 rounded-[2.5rem] z-0" />
            </motion.div>

            {/* Right: Text Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-black text-primary uppercase tracking-[0.25em] mb-4 block">Meet Our Mission</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
                Ensuring no community is left behind in the digital age.
              </h2>
              <p className="text-text-muted text-lg mb-10 leading-relaxed font-bold">
                HAIFOS Innovative Forum is a Section 8 non-profit organization founded by students from IIT Hyderabad dedicated to empowering rural youth and children. Through digital education, community learning centers, and awareness programs on emerging technologies like AI, we work to build an inclusive digital society where technology benefits everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/about" className="bg-white text-gray-900 font-black px-10 py-4 rounded-xl inline-flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-all">
                  Discover Our Story
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ WHAT WE DO ━━━━━━━━━━━━━━ */}
      <section className="relative bg-white pt-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4 block">Our Pillars</span>
              <h2 className="text-4xl font-black text-gray-900">What We Do</h2>
              <p className="text-text-muted mt-3 max-w-xl font-medium leading-relaxed">Three core pillars that guide our commitment to rural digital inclusion.</p>
            </div>
            <Link href="/programs" className="btn-secondary px-8 py-3 text-sm">Explore All Work</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
                title: "Digital Connectivity",
                desc: "Improving access to computers, internet connectivity, and digital learning resources in rural communities.",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
                title: "Digital Skills",
                desc: "Providing hands-on digital literacy training for youth and children to build practical technology skills.",
              },
              {
                icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                title: "Research & Advocacy",
                desc: "Conducting research and policy dialogue to address digital gaps and promote inclusive digital development.",
              }
            ].map((item, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                className="bg-[#F8FAF9] rounded-[2.5rem] p-10 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="w-16 h-16 bg-white text-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm">{item.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-text-muted leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ PROGRAMS THAT MATTER ━━━━━━━━━━━━━━ */}
      <section className="relative bg-white pt-10 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4 block">Our Impact</span>
              <h2 className="text-4xl font-black text-gray-900">Programs that Matter</h2>
              <p className="text-text-muted mt-3 font-medium">Real-world initiatives delivering tangible change in rural communities.</p>
            </div>
            <Link href="/programs" className="btn-secondary px-8 py-3 text-sm">View All Programs</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { img: schoolImg, tag: "Telangana", title: "School Library Initiative", desc: "Establishing learning libraries in government schools to provide students with foundational reading and learning resources." },
              { img: communityImg, tag: "Bihar", title: "Community Learning Centers", desc: "Equipping rural villages with computers and Wi-Fi hubs to provide essential digital literacy training." },
            ].map((prog, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-premium transition-all duration-500 group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={prog.img} alt={prog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-5 left-5 px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-black text-primary uppercase tracking-widest shadow-sm">{prog.tag}</div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{prog.title}</h3>
                  <p className="text-text-muted text-lg leading-relaxed mb-8 font-medium">{prog.desc}</p>
                  <Link href="/programs" className="text-primary font-black text-sm inline-flex items-center gap-2 group/btn">
                    Explore Program <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ PARTNERS ━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-[#F8FAF9] border-y border-gray-100 overflow-hidden">
        <div className="text-center mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted italic">Empowered by Global Partnerships</p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee gap-24 items-center whitespace-nowrap">
            {allPartners.map((p, i) => (
              <div key={`p1-${i}`} className="h-16 w-40 relative flex-shrink-0 transition-transform duration-500 hover:scale-110">
                <Image src={p} alt={`Partner ${i + 1}`} fill className="object-contain" />
              </div>
            ))}
            {/* Duplicated for loop */}
            {allPartners.map((p, i) => (
              <div key={`p2-${i}`} className="h-16 w-40 relative flex-shrink-0 transition-transform duration-500 hover:scale-110">
                <Image src={p} alt={`Partner Dupe ${i + 1}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━━━━━━━━━━━ TESTIMONIALS ━━━━━━━━━━━━━━ */}
      <section className="relative bg-white py-32 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4 block">Shared Success</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-16">What Our Community Says</h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ CTA ━━━━━━━━━━━━━━ */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="max-w-xl mx-auto relative z-10 px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Ready to make an impact?</h2>
          <p className="text-white/70 text-lg mb-12 font-medium">Join us in the mission to bring digital equity to every rural home in India.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/donate" className="bg-white text-primary font-black px-12 py-4 rounded-full shadow-xl hover:scale-105 transition-all">Support Our Work</Link>
            <Link href="/get-involved" className="bg-primary border-2 border-white/20 text-white font-black px-12 py-4 rounded-full hover:bg-white/10 transition-all">Volunteer Today</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
