"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

import HeroImg from '@/images/Entitlement/IMG-20251221-WA0014.jpg';
import researchImg from '@/images/Research and Advocacy/Copy of IMG-20231014-WA0039.jpg';
import digitalImg from '@/images/Research and Advocacy/Copy of IMG-20240312-WA0015 (1).jpg';
import communityImg from '@/images/Community_Digital Learning Center/IMG-20260211-WA0008.jpg';
import schoolImg from '@/images/School/IMG_20231125_180155.jpg';
import aiImg from '@/images/AIworkshopwithSAMAR/IMG_20250720_130952.jpg';
import workshopImg from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.22.jpeg';

/* ── Asymmetric blob decoration ─────────────────── */
function BlobA({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 500" className={`absolute pointer-events-none select-none ${className}`} aria-hidden>
      <path d="M412,87Q365,174,320,218Q275,262,214,309Q153,356,91,310Q29,264,47,185Q65,106,128,68Q191,30,266,14Q341,-2,394,43Q447,88,412,87Z" fill="currentColor" />
    </svg>
  );
}
function BlobC({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={`absolute pointer-events-none select-none ${className}`} aria-hidden>
      <path d="M300,60Q380,120,420,210Q460,300,400,380Q340,460,240,450Q140,440,80,360Q20,280,50,180Q80,80,170,44Q260,8,300,60Z" fill="currentColor" />
    </svg>
  );
}

const biharPrograms = [
  {
    title: "Digital Skill Development Program",
    desc: "A program designed to provide digital literacy and practical technology skills based on the needs of rural communities.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    box1Title: "WHO IT HELPS",
    box1Desc: "Rural youth and children who lack exposure to computers and digital learning opportunities.",
    box2Title: "HOW IT WORKS",
    box2Desc: "Training sessions introduce participants to basic computer use, internet navigation, and essential digital tools.",
    bottomTitle: "OUTCOMES",
    objectives: [
      "Improved digital literacy among rural youth",
      "Increased confidence in using technology",
      "Better access to digital opportunities"
    ],
    img: digitalImg,
    align: "left"
  },
  {
    title: "Community Digital Learning Centers",
    desc: "Community-based Digital Learning Hubs equipped with computers and Wi-Fi that provide foundational computer literacy and life skills.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    box1Title: "WHO IT HELPS",
    box1Desc: "Children and youth in rural communities who have limited access to computers or internet connectivity.",
    box2Title: "HOW IT WORKS",
    box2Desc: "Centers offer guided computer training and supervised digital learning sessions in a community environment.",
    bottomTitle: "OUTCOMES",
    objectives: [
      "Increased access to technology in rural areas",
      "Foundational computer literacy for children",
      "Development of essential digital skills"
    ],
    img: communityImg,
    align: "right"
  },
  {
    title: "Digital Skills Workshops & Seminars",
    desc: "One-day workshops and seminars designed to build digital awareness and Policy Advocacy.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    box1Title: "WHO IT HELPS",
    box1Desc: "Students and young learners interested in understanding digital tools and online opportunities.",
    box2Title: "HOW IT WORKS",
    box2Desc: "Interactive sessions provide guidance on citizen services, online safety, and digital career opportunities.",
    bottomTitle: "OUTCOMES",
    objectives: [
      "Improved awareness of digital tools",
      "Safer use of online platforms",
      "Greater confidence in digital learning"
    ],
    img: workshopImg,
    align: "left"
  },
  {
    title: "AI Awareness Campaign",
    desc: "A community campaign designed to educate people about Artificial Intelligence and its potential impact.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    box1Title: "WHO IT HELPS",
    box1Desc: "Students, youth, and rural communities interested in understanding emerging technologies.",
    box2Title: "HOW IT WORKS",
    box2Desc: "Awareness sessions explain the benefits and risks of AI in agriculture, education, and daily life.",
    bottomTitle: "OUTCOMES",
    objectives: [
      "Increased awareness about AI technologies",
      "Better understanding of digital transformation",
      "Preparedness for future technological change"
    ],
    img: aiImg,
    align: "right"
  },
  {
    title: "Research and Development",
    desc: "Collaborative research initiatives that study digital challenges faced by rural communities.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5m14 1h-2a2 2 0 00-2 2v6M4 10h5v10H4V10zm11 0h5v10h-5V10z" /></svg>,
    box1Title: "WHO IT HELPS",
    box1Desc: "Communities, policymakers, and organizations working toward digital inclusion.",
    box2Title: "HOW IT WORKS",
    box2Desc: "Seminars and round-table discussions bring together academia, civil society, and government stakeholders.",
    bottomTitle: "OUTCOMES",
    objectives: [
      "Identification of grassroots digital challenges",
      "Evidence-based policy recommendations",
      "Stronger collaboration across sectors"
    ],
    img: researchImg,
    align: "left"
  }
];

export default function ProgramsPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* ━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━ */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src={HeroImg} alt="Our Programs" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/65" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-white/80 font-medium leading-relaxed"
          >
            Transforming lives through structured capacity building and information access.
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ INTRODUCTION ━━━━━━━━━━━━━━ */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Decorative Blob */}
        <BlobA className="w-[40vw] max-w-2xl text-[#EAF2EA] -top-20 -right-20 opacity-70" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-black text-primary uppercase tracking-[0.25em] mb-4 block">Our Mission In Action</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            Empowering Communities Through Digital Access
          </h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mx-auto italic">
            "Our programs focus on promoting digital literacy, addressing information poverty, and raising awareness about emerging technologies."
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ TELANGANA CHAPTER ━━━━━━━━━━━━━━ */}
      <section className="py-20 px-6 bg-soft-grey relative overflow-hidden">
         {/* Decorative Blob */}
         <BlobC className="w-[20vw] max-w-xs text-primary/5 -bottom-10 -left-10" />

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center mb-16 text-center">
              <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-4">Telangana Chapter</h3>
              <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
                Strengthening educational access and creating learning environments that encourage curiosity among students.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[3rem] rounded-tl-[6rem] overflow-hidden shadow-2xl">
                     <Image src={schoolImg} className="object-cover" alt="Telangana School" fill />
                  </div>
               </motion.div>
               
               <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                 <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/8 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="text-3xl font-black text-gray-900 leading-tight">School Library Initiative</h4>
                 </div>

                 <p className="text-text-muted text-lg mb-8 leading-relaxed">
                   HAIFOS is establishing learning libraries in government schools to provide students with access to books and educational resources.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-5 mb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                       <h5 className="text-[10px] font-black text-primary uppercase mb-2 tracking-widest">WHO IT HELPS</h5>
                       <p className="text-sm font-medium text-gray-700 leading-snug">Students in government schools with limited resources.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                       <h5 className="text-[10px] font-black text-primary uppercase mb-2 tracking-widest">HOW IT WORKS</h5>
                       <p className="text-sm font-medium text-gray-700 leading-snug">Collaborating with schools to create engaging reading spaces.</p>
                    </div>
                 </div>

                 <div className="bg-[#EAF2EA] rounded-2xl p-8 border border-pale-green">
                   <h5 className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">KEY OUTCOMES</h5>
                   <ul className="space-y-3">
                      {[
                        "Improved learning engagement among students",
                        "Increased access to educational resources",
                        "Stronger foundation for digital awareness"
                      ].map((ok, i) => (
                        <li key={i} className="flex gap-3 text-sm font-bold text-gray-800">
                          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{ok}</span>
                        </li>
                      ))}
                   </ul>
                 </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Polygon divider */}
      <div className="relative h-16 bg-white overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <polygon points="0,0 1440,0 1440,64 0,16" fill="#F4F7F6" />
        </svg>
      </div>

      {/* ━━━━━━━━━━━━━━ BIHAR CHAPTER ━━━━━━━━━━━━━━ */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Decorative Blobs */}
        <BlobA className="w-[30vw] max-w-sm text-[#EAF2EA] top-10 right-0 opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-24 text-center">
             <div className="w-14 h-14 bg-soft-grey text-primary rounded-2xl flex items-center justify-center mb-6 border border-gray-100 italic font-black text-xl shadow-sm">
                B
             </div>
            <h3 className="text-4xl font-black text-gray-900 mb-4">Bihar Chapter</h3>
            <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
              Addressing information poverty through digital literacy and building awareness about emerging technologies like Artificial Intelligence.
            </p>
          </div>

          <div className="space-y-40">
            {biharPrograms.map((prog, idx) => (
               <div key={idx} className={`flex flex-col ${prog.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                  
                  {/* Image Content */}
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full md:w-[45%]">
                    <div className={`relative w-full aspect-[5/4] shadow-2xl rounded-[3rem] overflow-hidden ${prog.align === 'left' ? 'rounded-br-[7rem]' : 'rounded-tl-[7rem]'}`}>
                      <Image src={prog.img} fill className="object-cover" alt={prog.title} />
                      <div className="absolute inset-0 bg-primary/5" />
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full md:w-[50%] flex flex-col justify-center">
                     
                     <div className="flex items-start gap-4 mb-6">
                       <div className="w-14 h-14 bg-primary/8 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                         {prog.icon}
                       </div>
                       <h4 className="text-3xl font-black text-gray-900 leading-tight">{prog.title}</h4>
                     </div>

                     <p className="text-text-muted text-lg mb-10 leading-relaxed font-medium">
                       {prog.desc}
                     </p>
                     
                     <div className="grid grid-cols-2 gap-5 mb-10">
                       <div className="bg-soft-grey p-6 rounded-2xl border border-gray-100">
                          <h5 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">{prog.box1Title}</h5>
                          <p className="text-sm font-bold text-gray-800 leading-snug">{prog.box1Desc}</p>
                       </div>
                       <div className="bg-soft-grey p-6 rounded-2xl border border-gray-100">
                          <h5 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">{prog.box2Title}</h5>
                          <p className="text-sm font-bold text-gray-800 leading-snug">{prog.box2Desc}</p>
                       </div>
                     </div>

                     <div className="bg-soft-grey rounded-2xl p-8 border-l-[6px] border-primary">
                       <h5 className="text-[10px] font-black text-primary uppercase tracking-widest mb-5">{prog.bottomTitle}</h5>
                       <ul className="space-y-3">
                         {prog.objectives.map((obj, oIdx) => (
                           <li key={oIdx} className="flex gap-3 text-sm font-bold text-gray-800">
                             <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                             </svg>
                             <span className="leading-snug">{obj}</span>
                           </li>
                         ))}
                       </ul>
                     </div>

                  </motion.div>
               </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
