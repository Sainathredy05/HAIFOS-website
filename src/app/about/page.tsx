"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import heroImg from '@/images/Research and Advocacy/Copy of IMG-20231014-WA0017.jpg';
import storyImg from '@/images/Research and Advocacy/Copy of IMG-20231014-WA0034.jpg';

import team1 from '@/images/Team picture/Arvind.jpg';
import team2 from '@/images/Team picture/Naresh.jpeg';
import team3 from '@/images/Team picture/Atharva New.jpg';
import team4 from '@/images/Team picture/Aarti.jpeg';
import team5 from '@/images/Team picture/Amisha.jpg';
import team6 from '@/images/Team picture/Vishnu Priya.jpg';
import team7 from '@/images/Team picture/Abhishek.jpg';
import team8 from '@/images/Team picture/Sainath.jpeg';
import team9 from '@/images/Team picture/Abhinaya.jpg';

const fadeIn = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, ease: "easeOut" as const } };

const teamMembers = [
  { name: 'Arvind Kumar', role: 'Founder and CEO', img: team1, linkedin: 'https://www.linkedin.com/in/arvind-kumar-y-2b0993164/' },
  { name: 'Naresh Rathod', role: 'Chief Operating Officer', img: team2, linkedin: 'https://www.linkedin.com/in/naresh-rathod-6007171a7/' },
  { name: 'Atharva Patil', role: 'Director', img: team3, linkedin: 'https://www.linkedin.com/in/atharva-patil-40a4571b6' },
  { name: 'Aarti Tamang', role: 'Director', img: team4, linkedin: 'https://www.linkedin.com/in/arti-tamang-08b291254' },
  { name: 'Amisha', role: 'Managing Director', img: team5, linkedin: 'https://www.linkedin.com/in/amisha-mishra-81ba54217' },
  { name: 'Vishnupriya', role: 'R & D Head', img: team6, linkedin: 'https://www.linkedin.com/in/priyavishnutamada' },
  { name: 'Abhishek Kumar', role: 'Regional Manager', img: team7, linkedin: 'https://www.linkedin.com/in/abhikr7277/' },
  { name: 'Sainath Reddy Akkala', role: 'Lead Security Researcher', img: team8, linkedin: 'https://www.linkedin.com/in/sainathreddyakkala/' },
  { name: 'Abhinaya Chowdary', role: 'Web and Media Associate', img: team9, linkedin: 'https://www.linkedin.com/in/takkelapati-abhinaya-chowdary/' },
];

const coreValues = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    title: 'Community Empowerment', desc: 'We work with local communities and build solutions together based on their real needs.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={2}/></svg>,
    title: 'Innovation for Good', desc: 'We use technology to improve lives and reduce the digital gap.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth={2}/></svg>,
    title: 'Transparency and Accountability', desc: 'We ensure openness, responsible actions, and digital safety for everyone we serve.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2}/></svg>,
    title: 'Equity and Inclusion', desc: 'We create equal access to digital tools and knowledge for marginalized communities.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" strokeWidth={2}/></svg>,
    title: 'Collaboration and Partnership', desc: 'We work with partners across sectors to create lasting and meaningful impact.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white overflow-x-hidden">

      {/* ━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━ */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image src={heroImg} alt="About HAIFOS Team" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight">
            About <span className="text-pale-green">HAIFOS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed">
            HAIFOS (Humanity in AI for Social Innovative Forum for Social Impact) is a non-profit organization dedicated to bringing digital equity to rural India.
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ BORN AT IIT SECTION ━━━━━━━━━━━━━━ */}
      <section id="history" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-10 text-center lg:text-left">
                Born at IIT Hyderabad, Built for Rural India.
              </h2>
              <div className="space-y-6 text-text-muted text-sm md:text-base leading-relaxed font-bold">
                <p>HAIFOS Innovative Forum was founded in <span className="text-primary">2023 by a group of students from IIT Hyderabad</span> who were exploring the <span className="text-primary">social impact of artificial intelligence and emerging technologies.</span></p>
                <p>During our research, we realized that discussions around <span className="text-primary">AI and advanced technologies</span> often had little meaning in rural areas where <span className="text-primary">basic digital access and digital literacy were still limited.</span> This realization led to the creation of HAIFOS with a mission to <span className="text-primary">bridge the growing digital divide in rural India.</span></p>
                <p>HAIFOS is registered as a <span className="text-primary">non-profit organization under Section 8 of the Companies Act, 2013.</span> The organization focuses on <span className="text-primary">digitally empowering rural youth and children</span> by providing <span className="text-primary">digital education, need-based information, and awareness about emerging technologies.</span></p>
                <p>Grassroot work began in <span className="text-primary">Bihar, particularly in the Munger district</span>, where many rural communities still have <span className="text-primary">limited access to digital tools and learning opportunities.</span></p>
                <p>To address this need, HAIFOS established its first <span className="text-primary">Community Digital Learning Center in Shankarpur village, Bihar.</span> Equipped with <span className="text-primary">computers and Wi-Fi</span>, the center provides <span className="text-primary">digital literacy training and learning opportunities for rural children and youth</span>, creating a foundation for future technology adoption.</p>
                <p>Since then, HAIFOS has continued to <span className="text-primary">grow steadily through grassroots engagement, community trust, and field-based research.</span> By working closely with communities, the organization aims to build an <span className="text-primary">inclusive digital ecosystem where rural populations can confidently access technology, information, and opportunities for growth.</span></p>
              </div>
              
              <div className="mt-12 flex gap-4">
                 <div className="bg-soft-grey/40 px-6 py-3 rounded-xl border border-gray-100 flex flex-col">
                    <span className="text-xl font-black text-primary leading-none">2023</span>
                    <span className="text-[10px] uppercase font-black opacity-60">Founded</span>
                 </div>
                 <div className="bg-soft-grey/40 px-6 py-3 rounded-xl border border-gray-100 flex flex-col">
                    <span className="text-xl font-black text-primary leading-none">2 States</span>
                    <span className="text-[10px] uppercase font-black opacity-60">Active Impact</span>
                 </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative pr-8 pb-8 lg:sticky lg:top-32">
               <div className="relative aspect-[4/5] rounded-[3rem] rounded-tr-[10rem] overflow-hidden shadow-2xl z-20">
                 <Image src={storyImg} alt="Impact in Rural India" fill className="object-cover" />
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0" />
               {/* Figma Yellow Badge */}
               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-[#FCD34D] text-gray-900 px-8 py-4 rounded-xl font-black text-sm shadow-xl z-30 transition-transform hover:scale-105">
                 IIT Hyderabad<br/><span className="text-[10px] uppercase opacity-70">Incubation Center</span>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ MISSION & VISION ━━━━━━━━━━━━━━ */}
      <section id="mission" className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[#0F2540] rounded-[2.5rem] p-12 text-white relative h-full">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-3xl font-black mb-8">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-lg font-medium">To provide digital education, need-based information, and awareness about emerging technologies like AI, ensuring that everyone—especially underserved communities—benefits from technology equally and responsibly.</p>
              {/* Corner decor */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[#BFD8C0] rounded-[2.5rem] p-12 text-gray-900 relative h-full">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <svg className="w-7 h-7 text-[#0F2540]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-3xl font-black mb-8">Our Vision</h3>
              <p className="text-gray-900/70 leading-relaxed text-lg font-medium">Building inclusive digital society where youth and children can use technology confidently, safely and creatively improve their lives.</p>
              {/* Corner decor */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0F2540]/5 rounded-tl-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ CORE VALUES ━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-soft-grey/30 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0F2540]">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((v, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl text-center shadow-[0_12px_24px_-8px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">{v.icon}</div>
                <h4 className="font-black text-gray-900 text-sm mb-4 leading-tight">{v.title}</h4>
                <p className="text-text-muted text-[11px] leading-relaxed font-bold">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ OUR TEAM ━━━━━━━━━━━━━━ */}
      <section id="team" className="section-padding bg-[#EAF2EA]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-black text-primary uppercase tracking-[0.25em] mb-4 block">Our Team</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F2540]">The Visionaries Behind HAIFOS</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {teamMembers.map((member, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="flex flex-col items-center text-center group">
                <div className="relative w-40 h-40 lg:w-44 lg:h-44 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-500 group-hover:border-primary">
                    <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                <h4 className="text-lg font-black text-gray-900">{member.name}</h4>
                <p className="text-[11px] text-text-muted mt-1 font-black uppercase tracking-widest opacity-60 leading-tight">{member.role}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 text-[#0077b5] hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </motion.div>
            ))}
            
            {/* Join Us Placeholder */}
            <div className="flex flex-col items-center justify-center p-8 bg-white/40 rounded-2xl border-2 border-dashed border-gray-100 aspect-square text-center shadow-sm hover:bg-white hover:border-primary/20 transition-all cursor-pointer group">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
               </div>
               <h4 className="text-sm font-black text-gray-900">Join the Mission</h4>
               <p className="text-[10px] text-text-muted mt-2 font-bold leading-relaxed px-4">We're always looking for passionate innovators.</p>
               <span className="text-[10px] text-primary font-black uppercase mt-4 underline decoration-2 underline-offset-4">View Openings</span>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ DIGITAL DIVIDE SECTION ━━━━━━━━━━━━━━ */}
      <section id="work" className="section-padding bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-24">
            <span className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4 block">Our Work</span>
            <h2 className="text-4xl lg:text-6xl font-black text-[#0F2540] mb-10 leading-[1.1]">Bridging the Digital Divide in Rural Communities</h2>
            <p className="text-text-muted text-sm md:text-base max-w-4xl mx-auto font-bold leading-[1.8]">
              Our work focuses on addressing the digital divide in flood-prone rural Bihar through connectivity, skills, and inclusive digital policies. We at HAIFOS focus on addressing the digital challenges faced by rural communities by promoting digital literacy, improving access to information, and creating awareness about emerging technologies such as Artificial Intelligence. Through community-driven programs, we empower rural youth and children with the skills and knowledge needed to participate confidently in the digital age.
            </p>
          </div>

          <div className="mb-32">
            <h3 className="text-3xl font-black text-[#0F2540] mb-12 text-center">The Digital Divide</h3>
            <p className="text-text-muted text-center mb-16 font-bold -mt-8 opacity-60">Identifying the core barriers that prevent rural communities from participating in the digital economy.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { t: "Digital Infrastructure", d: "Lack of reliable internet and hardware access in remote locations.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg> },
                { t: "Digital Literacy", d: "Limited skills required to navigate and utilize digital tools safely.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> },
                { t: "Information Poverty", d: "Restricted access to essential, life-improving online information.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg> },
                { t: "Awareness Gap", d: "Limited knowledge about emerging tech like AI and its implications.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> },
                { t: "Policy Gap", d: "Absence of inclusive digital governance and representation.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg> },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-premium transition-all">
                   <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
                   <h4 className="text-xs font-black text-gray-900 mb-4">{item.t}</h4>
                   <p className="text-[10px] text-text-muted leading-relaxed font-bold">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-black text-[#0F2540] mb-12 text-center">Why This Matters</h3>
            <p className="text-text-muted text-center mb-16 font-bold -mt-8 opacity-60">The digital divide isn't just about computers; it's about life outcomes and equitable opportunity.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { t: "Economic Exclusion", d: "Rural workers miss out on high-growth digital jobs and remote work opportunities.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeWidth={2.5}/></svg> },
                 { t: "Educational Barriers", d: "Students lack access to the vast educational resources available on the web.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth={2.5}/></svg> },
                 { t: "Technology Inequality", d: "Urban-rural disparities widen as technology advances at exponential rates.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2" strokeWidth={2.5}/></svg> },
                 { t: "Digital Safety Risks", d: "Lack of awareness leads to vulnerability against cyber threats and misinformation.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944" strokeWidth={2.5}/></svg> },
                 { t: "Policy Invisibility", d: "Rural voices are often excluded from conversations shaping future digital laws.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2.5}/></svg> },
               ].map((item, idx) => (
                 <div key={idx} className="bg-soft-grey/40 p-10 rounded-[2.5rem] border border-transparent hover:border-primary/20 transition-all">
                    <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm">{item.icon}</div>
                    <h4 className="text-xl font-black text-gray-900 mb-4">{item.t}</h4>
                    <p className="text-text-muted text-sm font-bold leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ HOW WE CREATE CHANGE SECTION ━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F2540] mb-8">How HAIFOS Is Creating Change</h2>
            <p className="text-text-muted font-bold opacity-60">We implement holistic programs that address every level of the digital ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl mx-auto mb-32">
            {[
              { t: "Digital Learning Centers", d: "Building physical spaces in rural hubs equipped with high-speed internet and modern hardware.", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" strokeWidth={2}/></svg> },
              { t: "Digital Skill Development", d: "Empowering individuals with fundamental coding, productivity, and web navigation skills.", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth={2}/></svg> },
              { t: "Research & Advocacy", d: "Conducting grassroots research that converts lived experiences into data points to influence inclusive regional digital policies.", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeWidth={2}/></svg> },
              { t: "AI Awareness Campaigns", d: "Demystifying artificial intelligence through community-based education and ethics workshops.", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeWidth={2}/></svg> },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-[#0F2540] text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                   <h4 className="text-2xl font-black text-gray-900 mb-3">{item.t}</h4>
                   <p className="text-text-muted text-sm leading-relaxed font-bold">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-premium">
             <div className="text-center mb-24 relative z-10">
               <h3 className="text-3xl lg:text-4xl font-black text-[#0F2540]">The HAIFOS Impact Lifecycle</h3>
             </div>
             
             <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
               {/* Connector Line */}
               <div className="absolute top-10 left-[12%] right-[12%] h-[2px] bg-soft-grey/40 hidden md:block" />
               
               {[
                 { n: "01", t: "ACCESS", d: "Providing the hardware and connectivity foundation." },
                 { n: "02", t: "DIGITAL SKILLS", d: "Teaching the tools to use the technology effectively." },
                 { n: "03", t: "AI AWARENESS", d: "Fostering critical understanding of future tech." },
                 { n: "04", t: "INCLUSIVE POLICY", d: "Engaging communities in digital governance." },
               ].map((step, idx) => (
                 <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-[#BFD8C0]/40 text-primary rounded-full flex items-center justify-center mb-10 border-4 border-white shadow-lg font-black group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                      {step.n}
                    </div>
                    <h4 className="text-base font-black text-gray-900 mb-4 tracking-tight">{step.t}</h4>
                    <p className="text-[11px] text-text-muted leading-relaxed font-bold max-w-[160px]">{step.d}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ FINAL CTA ━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tighter">Ready to help us bridge the gap?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
               <Link href="/get-involved" className="btn-primary px-12 py-4 shadow-xl">Volunteer with Us</Link>
               <Link href="/donate" className="btn-secondary px-12 py-4">Support Our Impact</Link>
            </div>
         </div>
      </section>

    </div>
  );
}
