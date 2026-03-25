import { StaticImageData } from 'next/image';

// ── AIworkshopwithSAMAR (skip the two corrupted files without IMG_ prefix) ──
import samarImg1 from '@/images/AIworkshopwithSAMAR/IMG_20250720_130952.jpg';
import samarImg2 from '@/images/AIworkshopwithSAMAR/IMG_20250720_131004.jpg';
import samarImg3 from '@/images/AIworkshopwithSAMAR/IMG_20250720_131027.jpg';
import samarImg4 from '@/images/AIworkshopwithSAMAR/IMG_20250720_131043.jpg';
import samarImg5 from '@/images/AIworkshopwithSAMAR/IMG_20250720_131512.jpg';
import samarImg6 from '@/images/AIworkshopwithSAMAR/IMG_20250720_132427.jpg';
import samarImg7 from '@/images/AIworkshopwithSAMAR/IMG_20250720_132434.jpg';
import samarImg8 from '@/images/AIworkshopwithSAMAR/IMG_20250720_132603.jpg';
import samarImg9 from '@/images/AIworkshopwithSAMAR/IMG_20250720_132729.jpg';

// ── AI awareness webinar ──
import webinarImg1 from '@/images/AI awareness webinar/Copy of Copy of Brown Doodle Open Closed Landscape Poster (1).jpg';
import webinarImg2 from '@/images/AI awareness webinar/Image 2.jpg';
import webinarImg3 from '@/images/AI awareness webinar/Image 3.jpg';

// ── Smart Village ──
import svImg1 from '@/images/Smart Village/IMG-20240624-WA0020.jpg';
import svImg2 from '@/images/Smart Village/IMG-20240624-WA0021.jpg';
import svImg3 from '@/images/Smart Village/IMG-20240624-WA0022.jpg';
import svImg4 from '@/images/Smart Village/IMG-20240624-WA0023.jpg';
import svImg5 from '@/images/Smart Village/IMG-20240624-WA0024.jpg';
import svImg6 from '@/images/Smart Village/IMG-20240624-WA0025.jpg';
import svImg7 from '@/images/Smart Village/IMG-20240624-WA0026.jpg';
import svImg8 from '@/images/Smart Village/IMG-20240624-WA0027.jpg';
import svImg9 from '@/images/Smart Village/WhatsApp Image 2024-06-24 at 18.29.37_0c85f4eb.jpg';

// ── Bhagalpur Seminar ──
import bhagImg1 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.29.30.jpeg';
import bhagImg2 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.21.jpeg';
import bhagImg3 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.22.jpeg';
import bhagImg4 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.23.jpeg';
import bhagImg5 from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 19.34.35.jpeg';

// ── Cover images ──
import aiWebinarCover from '@/images/AI awareness webinar/Copy of Copy of Brown Doodle Open Closed Landscape Poster (1).jpg';
import smartVillageCover from '@/images/Smart Village/WhatsApp Image 2024-06-24 at 18.29.37_0c85f4eb.jpg';
import bhagalpurCover from '@/images/Bhagalpur_Seminar/WhatsApp Image 2024-10-18 at 18.31.22.jpeg';
import samarCover from '@/images/AIworkshopwithSAMAR/IMG_20250720_132603.jpg';

export type Article = {
  id: string;
  type: string;
  date: string;
  title: string;
  description: string;
  location: string;
  organizer: string;
  partner: string;
  coverImage: StaticImageData | null;
  localImages: StaticImageData[];
  isReport: boolean;
  reportLink?: string;
};

export const articles: Article[] = [
  {
    id: 'workshop-samar-patna',
    type: 'WEBINAR',
    date: 'August 2025',
    title: 'Workshop with SARMAR Charitable Trust, Patna',
    description: 'HAIFOS organized a workshop in Patna, Bihar, in collaboration with Samar Charitable Trust, engaging community mobilizers in a 3-hour interactive session. The workshop aimed to raise awareness among social practitioners about how artificial intelligence is shaping individuals\u2019 lives, highlighting both its opportunities and ethical challenges for society. The program was conducted in August 2025.',
    location: 'Patna, Bihar',
    organizer: 'HAIFOS',
    partner: 'Samar Charitable Trust',
    coverImage: samarCover,
    localImages: [samarImg1, samarImg2, samarImg3, samarImg4, samarImg5, samarImg6, samarImg7, samarImg8, samarImg9],
    isReport: false,
  },
  {
    id: 'ai-webinar-bihar',
    type: 'WEBINAR',
    date: '4 February 2024',
    title: 'AI Revolution Awareness Webinar in Bihar',
    description: 'On 4th February 2024, HAIFOS, in collaboration with the Bihar Youth Network Organization, conducted an online mentorship program to raise awareness about the ongoing AI revolution. The session featured two short documentary screenings that highlighted AI\u2019s transformative impact on society and various sectors. These visual stories offered participants a broader understanding of how AI is reshaping the world, sparking curiosity, meaningful discussions, and increased enthusiasm for exploring AI\u2019s role in the future.',
    location: 'Online / Bihar',
    organizer: 'HAIFOS',
    partner: 'Bihar Youth Network Organization',
    coverImage: aiWebinarCover,
    localImages: [webinarImg1, webinarImg2, webinarImg3],
    isReport: false,
  },
  {
    id: 'smart-village-study',
    type: 'RESEARCH',
    date: 'March 2024',
    title: 'Smart Village Study Program',
    description: 'The Suzuki Innovation Center launched a research initiative titled the Smart Village Study Program to examine rural challenges in India. HAIFOS served as a key partner in Bihar, conducting field research across rural areas. The team collected and analyzed primary data of Bihar. We had also analyzed the data collected by Suzuki in other states as well and produced a research paper titled \u201cRural Challenges of India: Learning from Japan.\u201d The program ran from March 2024 to 2025.',
    location: 'Bihar / India',
    organizer: 'HAIFOS',
    partner: 'Suzuki Innovation Center',
    coverImage: smartVillageCover,
    localImages: [svImg1, svImg2, svImg3, svImg4, svImg5, svImg6, svImg7, svImg8, svImg9],
    isReport: false,
  },
  {
    id: 'bhagalpur-seminar',
    type: 'EVENT',
    date: 'October 2024',
    title: 'One-Day Seminar with University of Bhagalpur, Bihar',
    description: 'HAIFOS, in collaboration with the University of Bhagalpur, organized a seminar on \u201cThe Idea of Gram Swaraj in the Digital Era: A Smart Village Concept.\u201d The event brought together professors, activists, development practitioners, journalists, and researchers to discuss the critical role of digital literacy, AI awareness, and rural empowerment. The seminar emphasized the need for inclusive digital development to realize the vision of Gram Swaraj in today\u2019s technological landscape. The program held on 2024.',
    location: 'Bhagalpur, Bihar',
    organizer: 'HAIFOS',
    partner: 'University of Bhagalpur',
    coverImage: bhagalpurCover,
    localImages: [bhagImg1, bhagImg2, bhagImg3, bhagImg4, bhagImg5],
    isReport: false,
  },
  {
    id: 'annual-report-2025',
    type: 'REPORT',
    date: '2025',
    title: 'Annual Report 2025',
    description: 'Overview of Workshop on the Social Impact of AI.',
    location: 'Global',
    organizer: 'HAIFOS',
    partner: 'N/A',
    coverImage: null,
    localImages: [],
    isReport: true,
    reportLink: '/reports/Workshop-Social-Impact-of-AI.pdf',
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getRecentArticles(excludeId?: string, limit = 3): Article[] {
  return articles.filter((a) => a.id !== excludeId).slice(0, limit);
}
