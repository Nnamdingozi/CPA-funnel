export interface CPAOffer {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    buttonText: string;
    lockerUrl: string;
    imageLabel: string;
    category: string;
  }
  
  export const OFFERS: CPAOffer[] = [
    {
      slug: 'study-prompts',
      title: '50 AI Study Prompts',
      description: 'The ultimate semester survival kit for university students.',
      longDescription: 'Unlock 50 custom-engineered AI prompts designed to automate essay outlining, complex note summarization, and exam preparation. Optimized for ChatGPT, Claude, and Gemini.',
      buttonText: 'Unlock Study Pack',
      lockerUrl: process.env.NEXT_PUBLIC_STUDENT_LOCKER_URL || '',
      imageLabel: 'ACADEMIC',
      category: 'Education'
    },
    // Add more offers here in the future
  ];