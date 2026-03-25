'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ─── 1. Digital Learning Centre ─── */
import dlc1 from '@/images/Community_Digital Learning Center/IMG-20260209-WA0002.jpg';
import dlc2 from '@/images/Community_Digital Learning Center/IMG-20260209-WA0003.jpg';
import dlc3 from '@/images/Community_Digital Learning Center/IMG-20260211-WA0005.jpg';
import dlc4 from '@/images/Community_Digital Learning Center/IMG-20260211-WA0007.jpg';
import dlc5 from '@/images/Community_Digital Learning Center/IMG-20260211-WA0008.jpg';
import dlc6 from '@/images/Community_Digital Learning Center/IMG_20260210_172734.jpg';
import dlc7 from '@/images/Community_Digital Learning Center/IMG_20260210_172738.jpg';

/* ─── 2. Community Workshops ─── */
// Digital Literacy Workshop
import dlit1 from '@/images/Digital literacy_Workshop/IMG_20250621_162252.jpg';
import dlit2 from '@/images/Digital literacy_Workshop/IMG_20250621_162706.jpg';
// AI Workshop with SAMAR
import aiSamar1 from '@/images/AIworkshopwithSAMAR/IMG_20250720_130952.jpg';
import aiSamar2 from '@/images/AIworkshopwithSAMAR/IMG_20250720_131004.jpg';
import aiSamar3 from '@/images/AIworkshopwithSAMAR/IMG_20250720_131027.jpg';
import aiSamar4 from '@/images/AIworkshopwithSAMAR/IMG_20250720_131043.jpg';
import aiSamar5 from '@/images/AIworkshopwithSAMAR/IMG_20250720_131512.jpg';
import aiSamar6 from '@/images/AIworkshopwithSAMAR/IMG_20250720_132427.jpg';
import aiSamar7 from '@/images/AIworkshopwithSAMAR/IMG_20250720_132434.jpg';
import aiSamar8 from '@/images/AIworkshopwithSAMAR/IMG_20250720_132603.jpg';
import aiSamar9 from '@/images/AIworkshopwithSAMAR/IMG_20250720_132729.jpg';

/* ─── 3. Field Visits ─── */
// Smart Village
import sv1 from '@/images/Smart Village/IMG-20240624-WA0020.jpg';
import sv2 from '@/images/Smart Village/IMG-20240624-WA0021.jpg';
import sv3 from '@/images/Smart Village/IMG-20240624-WA0022.jpg';
import sv4 from '@/images/Smart Village/IMG-20240624-WA0023.jpg';
import sv5 from '@/images/Smart Village/IMG-20240624-WA0024.jpg';
import sv6 from '@/images/Smart Village/IMG-20240624-WA0025.jpg';
import sv7 from '@/images/Smart Village/IMG-20240624-WA0026.jpg';
import sv8 from '@/images/Smart Village/IMG-20240624-WA0027.jpg';
import sv9 from '@/images/Smart Village/IMG-20240624-WA0028.jpg';
import sv10 from '@/images/Smart Village/IMG-20240624-WA0029.jpg';
import sv11 from '@/images/Smart Village/IMG-20240624-WA0030.jpg';
import sv12 from '@/images/Smart Village/WhatsApp Image 2024-06-24 at 18.29.37_0c85f4eb.jpg';
// ZPHS Yeddumailaram (School)
import school1 from '@/images/School/IMG-20240220-WA0059.jpg';
import school2 from '@/images/School/IMG_20231125_180155.jpg';
import school3 from '@/images/School/IMG_20231125_180604.jpg';
import school4 from '@/images/School/DSC_0093.jpg';
import school5 from '@/images/School/DSC_0121.jpg';
import school6 from '@/images/School/DSC_0147.jpg';
// Research and Advocacy
import res1 from '@/images/Research and Advocacy/IMG-20240312-WA0015.jpg';
import res2 from '@/images/Research and Advocacy/IMG-20231014-WA0039.jpg';
import res3 from '@/images/Research and Advocacy/IMG-20231014-WA0038.jpg';
import res4 from '@/images/Research and Advocacy/Copy of IMG-20231014-WA0016.jpg';
import res5 from '@/images/Research and Advocacy/Copy of IMG-20231014-WA0019.jpg';
// Entitlement
import ent1 from '@/images/Entitlement/IMG-20251221-WA0015.jpg';
import ent2 from '@/images/Entitlement/IMG-20251221-WA0014.jpg';
import ent3 from '@/images/Entitlement/IMG-20251220-WA0028.jpg';
import ent4 from '@/images/Entitlement/IMG-20251220-WA0045.jpg';

/* ─── 4. Events and Outreach ─── */
// Bhagalpur Seminar
import bhag1 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.29.30.jpeg';
import bhag2 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.21.jpeg';
import bhag3 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.22.jpeg';
import bhag4 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.23.jpeg';
import bhag5 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 19.34.35.jpeg';
// Stakeholders
import stake1 from '@/images/Stakeholders/Image 1.jpg';
import stake2 from '@/images/Stakeholders/Image 2.jpg';
// AI Webinar
import web1 from '@/images/AI awareness webinar/Copy of Copy of Brown Doodle Open Closed Landscape Poster (1).jpg';
import web2 from '@/images/AI awareness webinar/Image 2.jpg';
import web3 from '@/images/AI awareness webinar/Image 3.jpg';

const imageDB: Record<string, { img: any, tag: string }[]> = {
  'Digital Learning Centre': [
    { img: dlc1, tag: 'Digital Learning Centre' },
    { img: dlc2, tag: 'Digital Learning Centre' },
    { img: dlc3, tag: 'Digital Learning Centre' },
    { img: dlc4, tag: 'Digital Learning Centre' },
    { img: dlc5, tag: 'Digital Learning Centre' },
    { img: dlc6, tag: 'Digital Learning Centre' },
    { img: dlc7, tag: 'Digital Learning Centre' },
  ],
  'Community Workshops': [
    { img: dlit1, tag: 'Digital Literacy Workshop' },
    { img: dlit2, tag: 'Digital Literacy Workshop' },
    { img: aiSamar1, tag: 'AI workshop with SAMAR' },
    { img: aiSamar2, tag: 'AI workshop with SAMAR' },
    { img: aiSamar3, tag: 'AI workshop with SAMAR' },
    { img: aiSamar4, tag: 'AI workshop with SAMAR' },
    { img: aiSamar5, tag: 'AI workshop with SAMAR' },
    { img: aiSamar6, tag: 'AI workshop with SAMAR' },
    { img: aiSamar7, tag: 'AI workshop with SAMAR' },
    { img: aiSamar8, tag: 'AI workshop with SAMAR' },
    { img: aiSamar9, tag: 'AI workshop with SAMAR' },
  ],
  'Field Visits': [
    { img: sv1, tag: 'Smart Village study Program with SIC' },
    { img: sv2, tag: 'Smart Village study Program with SIC' },
    { img: sv3, tag: 'Smart Village study Program with SIC' },
    { img: sv4, tag: 'Smart Village study Program with SIC' },
    { img: sv5, tag: 'Smart Village study Program with SIC' },
    { img: sv6, tag: 'Smart Village study Program with SIC' },
    { img: sv7, tag: 'Smart Village study Program with SIC' },
    { img: sv8, tag: 'Smart Village study Program with SIC' },
    { img: sv9, tag: 'Smart Village study Program with SIC' },
    { img: sv10, tag: 'Smart Village study Program with SIC' },
    { img: sv11, tag: 'Smart Village study Program with SIC' },
    { img: sv12, tag: 'Smart Village study Program with SIC' },
    { img: school1, tag: 'ZPHS Yeddumailaram' },
    { img: school2, tag: 'ZPHS Yeddumailaram' },
    { img: school3, tag: 'ZPHS Yeddumailaram' },
    { img: school4, tag: 'ZPHS Yeddumailaram' },
    { img: school5, tag: 'ZPHS Yeddumailaram' },
    { img: school6, tag: 'ZPHS Yeddumailaram' },
    { img: res1, tag: 'Research and Advocacy' },
    { img: res2, tag: 'Research and Advocacy' },
    { img: res3, tag: 'Research and Advocacy' },
    { img: res4, tag: 'Research and Advocacy' },
    { img: res5, tag: 'Research and Advocacy' },
    { img: ent1, tag: 'Entitlement' },
    { img: ent2, tag: 'Entitlement' },
    { img: ent3, tag: 'Entitlement' },
    { img: ent4, tag: 'Entitlement' },
  ],
  'Events and Outreach': [
    { img: bhag1, tag: 'Bhagalpur Seminar' },
    { img: bhag2, tag: 'Bhagalpur Seminar' },
    { img: bhag3, tag: 'Bhagalpur Seminar' },
    { img: bhag4, tag: 'Bhagalpur Seminar' },
    { img: bhag5, tag: 'Bhagalpur Seminar' },
    { img: stake1, tag: 'Meeting with Multi Stakeholders' },
    { img: stake2, tag: 'Meeting with Multi Stakeholders' },
    { img: web1, tag: 'AI awareness webinar' },
    { img: web2, tag: 'AI awareness webinar' },
    { img: web3, tag: 'AI awareness webinar' },
  ],
};

const CATEGORIES = ["Digital Learning Centre", "Community Workshops", "Field Visits", "Events and Outreach"];

export default function VisualJourneyGallery() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [visibleCount, setVisibleCount] = useState(6);

  const images = imageDB[activeCategory] || [];
  const displayedImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
        <div className="max-w-xl">
          <span className="text-primary font-black uppercase tracking-[0.25em] text-[10px] mb-3 block">Glimpses of Impact</span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Visual Journeys</h2>
          <p className="text-text-muted text-lg leading-relaxed">Capturing the real-world impact of our digital operations across rural India.</p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2.5">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-7 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border-2 ${
                activeCategory === cat 
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                  : 'bg-white text-gray-700 border-gray-100 hover:border-primary/30 hover:bg-soft-grey/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {displayedImages.map((item, idx) => (
          <div key={`${activeCategory}-${idx}`} className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer shadow-premium border border-gray-100">
            <Image 
              src={item.img} 
              alt={item.tag} 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Minimal overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-6 left-6 text-white text-sm font-bold tracking-wide z-20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 w-[calc(100%-3rem)]">
              <span className="px-3 py-1 bg-primary/90 rounded-lg shadow-xl backdrop-blur-sm inline-block">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Load More */}
      {hasMore && (
        <div className="text-center">
          <button 
            onClick={loadMore}
            className="btn-secondary px-10 py-4 group"
          >
            Load More Stories 
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
