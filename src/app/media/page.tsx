import Link from 'next/link';
import VisualJourneyGallery from '@/components/VisualJourneyGallery';
import RecentUpdatesCarousel from '@/components/RecentUpdatesCarousel';
import Image from 'next/image';

import heroImg from '@/images/School/IMG-20240220-WA0059.jpg';
import news1 from '@/images/Newspaper/WhatsApp-Image-2024-10-19-at-08.08.59.jpeg';
import news2 from '@/images/Newspaper/WhatsApp-Image-2024-10-19-at-10.32.08.jpeg';
import samarWorkshopImg from '@/images/AIworkshopwithSAMAR/IMG_20250720_132603.jpg';

export const revalidate = 60;

/* ── Asymmetric blob decoration ─────────────────── */
function BlobA({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 500" className={`absolute pointer-events-none select-none ${className}`} aria-hidden>
      <path d="M412,87Q365,174,320,218Q275,262,214,309Q153,356,91,310Q29,264,47,185Q65,106,128,68Q191,30,266,14Q341,-2,394,43Q447,88,412,87Z" fill="currentColor" />
    </svg>
  );
}

export default async function MediaPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* ━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━ */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg}
          alt="Media Center" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our <span className="text-pale-green">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/90 font-medium max-w-2xl mx-auto">
            Capturing the moments, milestones, and impact of our journey towards digital equity.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ VISUAL JOURNEY ━━━━━━━━━━━━━━ */}
      <section id="gallery" className="relative section-padding bg-white overflow-hidden">
        {/* Decorative Blob */}
        <BlobA className="w-[35vw] max-w-xl text-[#EAF2EA] -top-10 -right-20 opacity-70" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <VisualJourneyGallery />
        </div>
      </section>

      {/* Angled divider */}
      <div className="relative h-16 bg-soft-grey/40 overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <polygon points="0,0 1440,0 1440,64 0,16" fill="white" />
        </svg>
      </div>

      {/* ━━━━━━━━━━━━━━ PRESS COVERAGE ━━━━━━━━━━━━━━ */}
      <section id="press" className="section-padding bg-soft-grey/40 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black text-primary uppercase tracking-[0.25em] mb-4 block">In The News</span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Press Coverage</h2>
            <p className="text-lg text-text-muted">Featured in leading publications and local news outlets.</p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transition-transform duration-500 hover:-translate-y-2">
               <Image src={news1} className="w-full h-auto rounded-xl object-contain shadow-sm" alt="Press Clipping 1" />
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transition-transform duration-500 hover:-translate-y-2">
               <Image src={news2} className="w-full h-auto rounded-xl object-contain shadow-sm" alt="Press Clipping 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Angled divider */}
      <div className="relative h-16 bg-white overflow-hidden -mt-1">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <polygon points="0,0 1440,48 1440,64 0,64" fill="#F4F7F6" />
        </svg>
      </div>

      {/* ━━━━━━━━━━━━━━ NEWS & UPDATES ━━━━━━━━━━━━━━ */}
      <section id="news" className="section-padding bg-white relative overflow-hidden">
        {/* Decorative Blob */}
        <BlobA className="w-[25vw] max-w-sm text-[#EAF2EA] top-1/4 -left-10 opacity-60" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs font-black text-primary uppercase tracking-[0.25em] mb-4 block">The News Feed</span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">News &amp; Updates</h2>
            <p className="text-lg text-text-muted">The latest events and reports from the HAIFOS network.</p>
          </div>

          <div className="mb-24">
            {/* Featured Event Card - Asymmetric Layout */}
            <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-premium group">
              <div className="lg:w-1/2 min-h-[400px] relative">
                <Image src={samarWorkshopImg} alt="Workshop with SARMAR" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
              
              <div className="lg:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center bg-white">
                 <div className="flex items-center gap-4 mb-8">
                   <span className="px-4 py-1.5 bg-primary/8 text-primary text-[10px] uppercase font-black tracking-widest rounded-full">Interactive Workshop</span>
                   <span className="text-xs text-text-muted font-bold tracking-wide uppercase">August 2025</span>
                 </div>
                 <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight group-hover:text-primary transition-colors">
                   Workshop with SARMAR Charitable Trust, Patna
                 </h3>
                 <p className="text-lg text-text-muted mb-10 leading-relaxed font-medium">
                   HAIFOS organized an interactive workshop in Patna, Bihar, engaging community mobilizers to raise awareness about how artificial intelligence is shaping lives, exploring opportunities, and addressing ethical challenges for rural society.
                 </p>
                 <Link href="/media/workshop-samar-patna" className="bg-primary text-white font-black px-8 py-3.5 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition-all shadow-md w-fit">
                    Read the Story
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                 </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <RecentUpdatesCarousel />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ STAY CONNECTED ━━━━━━━━━━━━━━ */}
      <section className="section-padding bg-soft-grey border-t border-gray-100 text-center relative overflow-hidden">
        <BlobA className="w-[18vw] max-w-xs text-primary/5 bottom-0 right-0" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-black text-gray-900 mb-6">Stay Connected</h2>
          <p className="text-lg text-text-muted mb-12 leading-relaxed">
            Follow us on social media for real-time updates from our communities across India. Join the conversation and share our mission.
          </p>
          <div className="flex justify-center gap-5">
             <Link href="/contact" className="btn-primary px-10">Contact Media Team</Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
