import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getArticleById, getRecentArticles } from '@/data/articles';

export const revalidate = 60;

const typeColor: Record<string, string> = {
  WEBINAR: 'bg-[#e9f1f7] text-[#1A5487]',
  RESEARCH: 'bg-[#e8f4ec] text-[#2a6b3c]',
  EVENT: 'bg-[#fef3e2] text-[#c2780a]',
  REPORT: 'bg-[#f0eded] text-[#6b4040]',
};

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) return notFound();

  const related = getRecentArticles(id, 3);

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A5487] to-[#0d3454]" />
        )}
        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back link */}
        <Link
          href="/media"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Media
        </Link>

        {/* Title block */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16 pb-10">
          <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-3 ${typeColor[article.type] ?? 'bg-gray-200 text-gray-700'}`}>
            {article.type}
          </span>
          <h1 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-3xl drop-shadow-xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 mt-3 text-white/70 text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {article.date}
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">

          {/* LEFT: About + Gallery */}
          <div>
            <h2 className="text-[22px] font-black text-[#111827] mb-4">About the Activity</h2>
            <div className="text-[#4b5563] text-[15px] leading-relaxed space-y-4">
              {article.description.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Event Gallery */}
            {article.localImages && article.localImages.length > 0 && (
              <div className="mt-12">
                <h2 className="text-[22px] font-black text-[#111827] mb-5">Event Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {article.localImages.map((src, i) => (
                    <div key={i} className="relative h-[160px] rounded-xl overflow-hidden bg-gray-100 group cursor-pointer shadow-sm">
                      <Image
                        src={src}
                        alt={`Gallery image ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PDF Report Preview */}
            {article.isReport && article.reportLink && (
              <div className="mt-10">
                <h2 className="text-[22px] font-black text-[#111827] mb-5">Report Preview</h2>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm w-full" style={{ height: '650px' }}>
                  <iframe
                    src={article.reportLink}
                    className="w-full h-full"
                    title="Annual Report 2025"
                  />
                </div>
                <a
                  href={article.reportLink}
                  download="Workshop-Social-Impact-of-AI.pdf"
                  className="mt-5 inline-flex items-center gap-2 px-7 py-3 bg-[#1A5487] hover:bg-[#12416b] text-white font-bold text-[13px] rounded-full shadow-md transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            )}
          </div>

          {/* RIGHT: Quick Info Sidebar */}
          <aside className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 space-y-5 sticky top-8">
            <h3 className="font-black text-[16px] text-[#111827] mb-1">Quick Information</h3>

            <InfoRow icon="location">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide block">Location</span>
              <span className="text-[13px] font-bold text-gray-800">{article.location}</span>
            </InfoRow>

            <InfoRow icon="category">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide block">Category</span>
              <span className="text-[13px] font-bold text-gray-800">{article.type}</span>
            </InfoRow>

            <InfoRow icon="organizer">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide block">Organizer</span>
              <span className="text-[13px] font-bold text-gray-800">{article.organizer}</span>
            </InfoRow>

            {article.partner && article.partner !== 'N/A' && (
              <InfoRow icon="partner">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide block">Partner</span>
                <span className="text-[13px] font-bold text-gray-800">{article.partner}</span>
              </InfoRow>
            )}

            <a
              href="mailto:infos@haifos.org"
              className="mt-4 block w-full text-center bg-[#1A5487] hover:bg-[#12416b] text-white font-bold text-[13px] rounded-full px-6 py-3 transition-all shadow-md"
            >
              Contact for Inquiry
            </a>
          </aside>
        </div>
      </section>

      {/* ── RELATED ACTIVITIES ── */}
      {related.length > 0 && (
        <section className="bg-[#f6f9f8] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[26px] font-black text-[#111827] mb-1">Related Activities</h2>
            <p className="text-gray-500 text-[13px] font-medium mb-8">Explore other initiatives taken by HAIFOS</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/media/${item.id}`}
                  className={`rounded-[24px] overflow-hidden shadow-sm hover:shadow-md border transition-all group flex flex-col cursor-pointer ${item.isReport ? 'bg-[#b4d1b8] border-[#a6c1a9]' : 'bg-white border-gray-100'}`}
                >
                  <div className="h-[170px] w-full relative">
                    {item.coverImage ? (
                      <Image src={item.coverImage} alt={item.title} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-b from-[#96b89a] to-[#b4d1b8] flex items-center justify-center">
                        <svg className="w-10 h-10 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[9px] font-black tracking-widest text-[#1A5487] shadow-sm z-10">
                      {item.type}
                    </div>
                  </div>
                  <div className={`p-5 flex-grow flex flex-col ${item.isReport ? 'bg-white rounded-t-3xl -mt-[1px]' : ''}`}>
                    <div className="text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-wide">{item.date}</div>
                    <h4 className="text-[16px] font-black text-gray-900 mb-2 leading-[1.2] group-hover:text-[#1A5487] line-clamp-2">{item.title}</h4>
                    <p className="text-gray-500 text-[12px] font-medium line-clamp-2 leading-relaxed">{item.description}</p>
                    <div className="mt-auto pt-3 text-[#1A5487] font-bold text-[11px] uppercase tracking-[0.1em] flex items-center gap-1">
                      {item.isReport ? 'Download Report' : 'Learn More'} <span>&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

/* ── Sidebar row helper ── */
function InfoRow({ icon, children }: { icon: string; children: React.ReactNode }) {
  const icons: Record<string, React.ReactElement> = {
    location: (
      <svg className="w-4 h-4 text-[#1A5487]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    category: (
      <svg className="w-4 h-4 text-[#1A5487]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
    organizer: (
      <svg className="w-4 h-4 text-[#1A5487]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    partner: (
      <svg className="w-4 h-4 text-[#1A5487]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };

  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-xl bg-[#e9f1f7] flex items-center justify-center flex-shrink-0 mt-0.5">
        {icons[icon]}
      </div>
      <div>{children}</div>
    </div>
  );
}
