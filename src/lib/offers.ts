// export interface CPAOffer {
//     slug: string;
//     title: string;
//     description: string;
//     longDescription: string;
//     buttonText: string;
//     lockerUrl: string;
//     imageLabel: string;
//     category: string;
//   }
  
//   export const OFFERS: CPAOffer[] = [
//     {
//       slug: 'study-prompts',
//       title: '50 AI Study Prompts',
//       description: 'The ultimate semester survival kit for students.',
//       longDescription: "Unlock 50 free AI prompts to help you outline essays, summarize notes, and prep for exams faster. Works with ChatGPT, Claude, Gemini, and more.",
//       buttonText: 'Unlock Study Pack',
//       lockerUrl: process.env.NEXT_PUBLIC_STUDENT_LOCKER_URL || '',
//       imageLabel: 'ACADEMIC',
//       category: 'Education'
//     },
//     // Add more offers here in the future
//   ];



// export interface CPAOffer {
//   slug: string;
//   title: string;
//   description: string;
//   longDescription: string;
//   buttonText: string;
//   lockerUrl: string;
//   imageLabel: string;
//   category: string;
//   ogImage?: string;
//   pdfUrl: string; 
//   selarUrl: string;   // Your Selar Ecommerce Book Link (USD)
//   affiliateUrl: string; // optional — path under /public, e.g. "/og/study-prompts.png"
// }

// const DEFAULT_OG_IMAGE = "/og/default.png";

// export const OFFERS: CPAOffer[] = [
//   {
//     slug: 'study-prompts',
//     title: '50 AI Study Prompts',
//     description: 'The ultimate semester survival kit for students.',
//     longDescription: "Unlock 50 free AI prompts to help you outline essays, summarize notes, and prep for exams faster. Works with ChatGPT, Claude, Gemini, and more.",
//     buttonText: 'Unlock Study Pack',
//     lockerUrl: process.env.NEXT_PUBLIC_STUDENT_LOCKER_URL || '',
//     imageLabel: 'ACADEMIC',
//     category: 'Education',
//     ogImage: '/og/study-prompts.png',
//     pdfUrl: '/50_AI_Prompts_for_Students.pdf', // Add this!
//     selarUrl:'https://selar.com/461rj1p3by',
//     affiliateUrl:'AFFILIATE URL LINK GOES HERE'
//   },
//   // Add more offers here in the future.
//   // If you forget to add ogImage on a new one, getOgImage() below
//   // falls back to DEFAULT_OG_IMAGE automatically — nothing breaks.
// ];

// export function getOfferBySlug(slug: string): CPAOffer | undefined {
//   return OFFERS.find((o) => o.slug === slug);
// }

// export function getOgImage(offer: CPAOffer): string {
//   return offer.ogImage || DEFAULT_OG_IMAGE;
// }



export type CPAOffer = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageLabel: string;
  buttonText: string;
  pdfUrl: string;
  selarUrl: string;
  affiliateUrl: string;
  ogImage: string;
};

export const OFFERS: CPAOffer[] = [
  {
    slug: "ai-study-prompts",
    title: "50 AI Prompts for Students",
    description: "Master your subjects with professional-grade prompts.",
    longDescription: "The ultimate prompt library for research, essay outlining, and exam prep. Designed for high-performance students.",
    imageLabel: "Free PDF Download",
    buttonText: "Get Free Access",
    ogImage: "/og/study-prompts.png",
    pdfUrl: "/50_AI_Prompts_for_Students.pdf", 
    selarUrl: 'https://selar.com/461rj1p3by',
    affiliateUrl: "https://impact.com/your-link", // Update with your Impact/Stakecut link
  }
];