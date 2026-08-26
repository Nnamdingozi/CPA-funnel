// "use client";

// import React, { useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { OFFERS, CPAOffer } from "@/lib/offers";
// import { captureVaultLead } from "@/app/actions/leads";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { BrainCircuit, Zap } from "lucide-react";

// export default function OfferPage() {
//   const { slug } = useParams();
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const offer: CPAOffer | undefined = OFFERS.find(o => o.slug === slug);

//   if (!offer) return <div className="p-20 text-center font-black uppercase italic">Offer Not Found</div>;

//   const handleRequest = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     await captureVaultLead(email, offer.slug);
//     // Redirect to a generic thank you page that carries the slug
//     router.push(`/thank-you?offer=${offer.slug}`);
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col">

//       <main className="flex-grow max-w-6xl mx-auto px-6 py-12 md:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase italic">
//               {offer.title.split(' ').slice(0, -1).join(' ')} <br/>
//               <span className="text-indigo-600">{offer.title.split(' ').pop()}</span>
//             </h1>
//             <p className="text-lg text-slate-500 font-medium">{offer.longDescription}</p>
   
// {/* --- TEASER PROMPT SECTION --- */}
// <div className="bg-indigo-50/50 border border-indigo-100 rounded-3xl p-6 mb-8">
//   <div className="flex items-center gap-2 mb-3">
//     <Zap className="h-4 w-4 text-indigo-600 fill-current" />
//     <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Free Sample Prompt</span>
//   </div>
//   <div className="space-y-2">
//     <p className="text-xs font-bold text-slate-400 uppercase">The "Complex Topic" Simplifier:</p>
//     <div className="bg-white border border-slate-100 rounded-xl p-4 text-sm text-slate-600 italic font-mono">
//       "Break down [topic] into a step-by-step study guide with the 5 most important points."
//     </div>
//   </div>
// </div>
            
//             <Card className="border-0 shadow-2xl rounded-[2.5rem] bg-slate-950 text-white p-1">
//               <CardContent className="p-8">
//                 <form onSubmit={handleRequest} className="space-y-4">
//                   <Input 
//                     required type="email" placeholder="Delivery Email" value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="h-16 bg-slate-900 border-0 text-white rounded-2xl px-6"
//                   />
//                   <Button className="w-full h-16 text-lg font-black uppercase italic bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl">
//                     {isLoading ? "Processing..." : offer.buttonText}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="hidden lg:flex justify-center">
//              <div className="w-80 h-80 bg-indigo-50 rounded-[3rem] border-[16px] border-slate-50 flex items-center justify-center">
//                 <BrainCircuit className="h-32 w-32 text-indigo-200" />
//              </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { getOfferBySlug, getOgImage } from "@/lib/offers";
// import VaultClient from "./vaultClient";

// const SITE_URL = "https://www.citadely.net";

// type Props = {
//   params: { slug: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const offer = getOfferBySlug(params.slug);

//   if (!offer) {
//     return {
//       title: "Citadely",
//       description: "Free resources and guides.",
//     };
//   }

//   const url = `${SITE_URL}/vault/${offer.slug}`;
//   const ogImageUrl = `${SITE_URL}${getOgImage(offer)}`;

//   return {
//     title: `${offer.title} | Citadely`,
//     description: offer.longDescription,
//     openGraph: {
//       title: offer.title,
//       description: offer.description,
//       url,
//       siteName: "Citadely",
//       images: [
//         {
//           url: ogImageUrl,
//           width: 1200,
//           height: 630,
//           alt: offer.title,
//         },
//       ],
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: offer.title,
//       description: offer.description,
//       images: [ogImageUrl],
//     },
//   };
// }

// export default function VaultPage({ params }: Props) {
//   const offer = getOfferBySlug(params.slug);

//   if (!offer) {
//     notFound();
//   }

//   return <VaultClient offer={offer} />;
// }


// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import { OFFERS } from "@/lib/offers";
// import VaultClient from "./vaultClient";

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;
//   const offer = OFFERS.find((o) => o.slug === slug);

//   if (!offer) {
//     return { title: "Citadely", description: "Free resources and guides." };
//   }

//   const url = `https://www.citadely.net/vault/${offer.slug}`;
//   const ogImage = `https://www.citadely.net${offer.ogImage || "/og/default.png"}`;

//   return {
//     title: `${offer.title} | Citadely`,
//     description: offer.longDescription,
//     openGraph: {
//       title: offer.title,
//       description: offer.description,
//       url,
//       siteName: "Citadely",
//       images: [{ url: ogImage, width: 1200, height: 630, alt: offer.title }],
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: offer.title,
//       description: offer.description,
//       images: [ogImage],
//     },
//   };
// }

// export default async function VaultPage({ params }: Props) {
//   const { slug } = await params;
//   const offer = OFFERS.find((o) => o.slug === slug);
//   if (!offer) notFound();

//   return <VaultClient offer={offer} />;
// }



import { notFound } from "next/navigation";
import { OFFERS } from "@/lib/offers";
import VaultClient from "./vaultClient";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = OFFERS.find((o) => o.slug === slug);
  if (!offer) return { title: "Not Found | Citadely" };

  return {
    title: `${offer.title} | Citadely`,
    description: offer.description,
  };
}

export default async function VaultPage({ params }: Props) {
  const { slug } = await params;
  const offer = OFFERS.find((o) => o.slug === slug);

  if (!offer) {
    notFound();
  }

  return <VaultClient offer={offer} />;
}