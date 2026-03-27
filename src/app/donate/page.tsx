import Image from 'next/image';
import Link from 'next/link';
import heroImg from '@/images/School/IMG-20240220-WA0039.jpg';

export default function DonatePage() {
  return (
    <div className="bg-white">

      {/* ━━━ HERO ━━━ */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src={heroImg} alt="Donate" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/65" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight">Donate Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your contribution helps bridge the digital divide for youth and childern by providing access, education, and opportunity.
          </p>
        </div>
      </section>

      {/* ━━━ WHY DONATE ━━━ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Why Your Donation Matters</h2>
            <p className="text-text-muted text-lg">Every contribution directly supports our grassroots digital initiatives.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Digital Learning Centers',
                desc: 'Establishing hubs for technology access and high-speed internet in remote rural areas.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Digital Skills Training',
                desc: 'Equipping youth with coding, software, and vocational tools for the modern economy.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Community Awareness',
                desc: 'Educating families on the benefits of digital connectivity and safe internet practices.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5m14 1h-2a2 2 0 00-2 2v6M4 10h5v10H4V10zm11 0h5v10h-5V10z" />
                  </svg>
                ),
                title: 'Research & Advocacy',
                desc: 'Driving policy change through data-backed evidence and grassroots implementation.',
              },
            ].map((item, idx) => (
              <div key={idx} className="card-style p-7 flex flex-col items-start">
                <div className="w-12 h-12 bg-primary/8 text-primary rounded-xl flex items-center justify-center mb-5">{item.icon}</div>
                <h4 className="font-black text-gray-900 text-sm mb-2">{item.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ BANK TRANSFER ━━━ */}
      <section className="section-padding bg-soft-grey/30 border-y border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-premium overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-primary p-10 text-center text-white">
              <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-1">Donate via Bank Transfer</h3>
              <p className="text-white/70 text-sm">Your direct contribution fuels our grassroots efforts.</p>
            </div>

            {/* Details */}
            <div className="p-10">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-text-muted block mb-1">Account Name</span>
                  <p className="font-black text-gray-900">HAIFOS INNOVATIVE FORUM</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-text-muted block mb-1">IFSC Code</span>
                  <p className="font-black text-gray-900 tracking-wider">HDFC0000477</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-text-muted block mb-1">Account Number</span>
                  <p className="text-2xl font-black text-primary tracking-tight">50200093798180</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-text-muted block mb-1">Bank & Branch</span>
                  <p className="font-black text-gray-900">HDFC Bank, Main Road Branch</p>
                </div>
              </div>

              <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-xl flex gap-3 items-start mb-6">
                <div className="text-primary mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  After making the transfer, please share the transaction details or screenshot at{' '}
                  <a href="mailto:info@haifos.org" className="font-bold text-primary hover:underline">info@haifos.org</a>{' '}
                  so we can send your donation receipt.
                </p>
              </div>

              <div className="text-center">
                <Link href="/contact" className="btn-secondary inline-flex px-8 py-3">
                  Contact Us for Queries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ TRUST & TRANSPARENCY ━━━ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Trust and Transparency</h2>
            <p className="text-text-muted text-lg">We are committed to full accountability and real impact reporting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Transparent Use of Funds',
                desc: 'Annual audits and quarterly impact reports are shared with all our donors.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Community Impact',
                desc: 'We empower communities with local stakeholders at every level to ensure relevance and impact for the targeted goal.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Grassroots Programs',
                desc: 'Locally led initiatives that focus on sustainable downstream action for their target community.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-soft-grey text-primary rounded-full flex items-center justify-center mb-5 border border-gray-100">
                  {item.icon}
                </div>
                <h4 className="font-black text-gray-900 text-lg mb-3">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
