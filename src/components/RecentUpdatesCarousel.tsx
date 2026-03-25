'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import aiWebinarImg from '@/images/AI awareness webinar/Copy of Copy of Brown Doodle Open Closed Landscape Poster (1).jpg';
import smartVillageImg from '@/images/Smart Village/WhatsApp Image 2024-06-24 at 18.29.37_0c85f4eb.jpg';
import bhagalpurImg from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.22.jpeg';

const updates = [
  {
    id: 'ai-webinar-bihar',
    type: 'WEBINAR',
    date: '4 February 2024',
    title: 'AI Revolution Awareness Webinar in Bihar',
    description: "Conducted an online mentorship program highlighting AI's transformative impact on rural society.",
    image: aiWebinarImg,
    isReport: false,
  },
  {
    id: 'smart-village-study',
    type: 'RESEARCH',
    date: 'March 2024',
    title: 'Smart Village Study Program',
    description: 'The Suzuki Innovation Center research initiative to examine rural challenges. HAIFOS served as a key partner.',
    image: smartVillageImg,
    isReport: false,
  },
  {
    id: 'bhagalpur-seminar',
    type: 'EVENT',
    date: 'October 2024',
    title: 'Gram Swaraj in the Digital Era',
    description: 'Organized a seminar with the University of Bhagalpur, emphasizing inclusive digital development.',
    image: bhagalpurImg,
    isReport: false,
  },
  {
    id: 'annual-report-2025',
    type: 'REPORT',
    date: '2025',
    title: 'Annual Impact Report 2025',
    description: 'A detailed overview of our workshops and social impact initiatives regarding AI awareness.',
    image: null,
    isReport: true,
    reportLink: '/reports/Workshop-Social-Impact-of-AI.pdf',
  },
];

export default function RecentUpdatesCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, updates.length - itemsPerPage);

  const handleNext = () => setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));

  const visibleUpdates = updates.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-primary font-black uppercase tracking-[0.25em] text-[10px] mb-3 block">Our Progress</span>
          <h3 className="text-4xl font-black text-gray-900 leading-tight">Recent Updates</h3>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all ${
              startIndex === 0 ? 'text-gray-300 cursor-not-allowed opacity-40' : 'text-primary hover:border-primary hover:bg-primary/5 cursor-pointer'
            }`}
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex === maxIndex}
            className={`w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center transition-all ${
              startIndex === maxIndex ? 'text-gray-300 cursor-not-allowed opacity-40' : 'text-primary hover:border-primary hover:bg-primary/5 cursor-pointer'
            }`}
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleUpdates.map((item) => {
          if (item.isReport) {
            return (
              <a
                key={item.id}
                href={item.reportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-10 bg-[#EAF2EA]/40 border-2 border-transparent hover:border-primary/20 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="w-20 h-20 rounded-2xl bg-white text-primary flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3 block">{item.type} • {item.date}</span>
                  <h4 className="text-xl font-black text-gray-900 mb-4">{item.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-2">{item.description}</p>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center justify-center gap-2">
                    Download PDF <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </span>
                </div>
              </a>
            );
          }

          return (
            <Link
              key={item.id}
              href={`/media/${item.id}`}
              className="group overflow-hidden flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500"
            >
              <div className="h-52 w-full relative">
                {item.image && (
                  <Image 
                    src={item.image} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    alt={item.title} 
                    fill 
                  />
                )}
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-[9px] font-bold tracking-widest text-primary shadow-sm backdrop-blur-sm">{item.type}</div>
              </div>
              <div className="p-8 pb-10 flex-grow flex flex-col">
                <span className="text-[10px] font-black text-text-muted mb-3 uppercase tracking-[0.2em]">{item.date}</span>
                <h4 className="text-xl font-black text-gray-900 mb-5 group-hover:text-primary transition-colors leading-tight">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-2">{item.description}</p>
                <div className="mt-auto text-primary font-bold text-xs uppercase tracking-widest flex items-center group-hover:gap-2 transition-all">
                  Read More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

