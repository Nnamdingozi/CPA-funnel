// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { OFFERS } from "@/lib/offers";
// import Header from "@/components/layout/header";
// import { Loader2, Lock } from "lucide-react";

// export default function ThankYouPage() {
//   const searchParams = useSearchParams();
//   const offerSlug = searchParams.get("offer");
//   const [status, setStatus] = useState("Verifying Session...");

//   useEffect(() => {
//     const offer = OFFERS.find(o => o.slug === offerSlug);
//     if (offer) {
//       setTimeout(() => {
//         setStatus("Redirecting to Secure Link...");
//         window.location.href = offer.lockerUrl;
//       }, 3000); // 3 second bot-protection delay
//     }
//   }, [offerSlug]);

//   return (
//     <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
//       <Header />
//       <main className="flex-grow flex flex-col items-center justify-center p-6 text-center space-y-6">
//         <div className="h-20 w-20 bg-white rounded-3xl shadow-xl flex items-center justify-center animate-bounce">
//           <Lock className="h-8 w-8 text-indigo-600" />
//         </div>
//         <h1 className="text-2xl font-black uppercase italic">{status}</h1>
//         <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
//           <Loader2 className="h-4 w-4 animate-spin" /> Do not close this window
//         </div>
//       </main>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { OFFERS } from "@/lib/offers";
// import { Loader2, Lock } from "lucide-react";

// /**
//  * THANK YOU CONTENT
//  * Logic: This sub-component handles the search params and the redirect.
//  * It must be wrapped in Suspense to allow Next.js to build successfully.
//  */
// function ThankYouContent() {
//   const searchParams = useSearchParams();
//   const offerSlug = searchParams.get("offer");
//   const [status, setStatus] = useState("Verifying Session...");

//   useEffect(() => {
//     // Find the specific offer based on the URL slug
//     const offer = OFFERS.find(o => o.slug === offerSlug);
    
//     if (offer) {
//       const timer = setTimeout(() => {
//         setStatus("Redirecting to Secure Link...");
//         window.location.href = offer.lockerUrl;
//       }, 3000); // 3 second bot-protection delay

//       return () => clearTimeout(timer);
//     } else {
//       setStatus("Invalid Session. Please return to the vault.");
//     }
//   }, [offerSlug]);

//   return (
//     <main className="flex-grow flex flex-col items-center justify-center p-6 text-center space-y-6">
//       <div className="h-20 w-20 bg-white rounded-3xl shadow-xl flex items-center justify-center animate-bounce">
//         <Lock className="h-8 w-8 text-indigo-600" />
//       </div>
      
//       <h1 className="text-2xl font-black uppercase italic text-slate-900">
//         {status}
//       </h1>

//       <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
//         <Loader2 className="h-4 w-4 animate-spin" /> 
//         Do not close this window
//       </div>
//     </main>
//   );
// }

// /**
//  * THANK YOU PAGE WRAPPER
//  * Logic: Provides the required Suspense boundary for useSearchParams().
//  */
// export default function ThankYouPage() {
//   return (
//     <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
//       <Suspense 
//         fallback={
//           <div className="flex-grow flex items-center justify-center">
//             <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
//           </div>
//         }
//       >
//         <ThankYouContent />
//       </Suspense>
//     </div>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Add this
// import { captureVaultLead } from "@/app/actions/leads";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, Lock } from "lucide-react";
// import type { CPAOffer } from "@/lib/offers";

// export default function VaultClient({ offer }: { offer: CPAOffer }) {
//   const [email, setEmail] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const router = useRouter(); // Initialize router

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // 1. Capture Lead to Neon DB
//       await captureVaultLead(email, `vault_${offer.slug}`);
      
//       // 2. Redirect to the USD Bridge (Thank You Page)
//       router.push(`/thank-you?offer=${offer.slug}`);
//     } catch (error) {
//       console.error("Submission failed", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-center">
//       <main className="max-w-2xl mx-auto px-6">
//         <div className="text-center space-y-6 mb-12">
//           <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-blue-100">
//             {offer.imageLabel}
//           </div>
//           <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] uppercase italic">
//             {offer.title}
//           </h1>
//           <p className="text-lg text-slate-500 font-medium max-w-md mx-auto">
//             Get your free AI tool kit delivered instantly to your inbox.
//           </p>
//         </div>

//         <Card className="border-0 shadow-2xl rounded-[2.5rem] bg-slate-900 text-white p-1">
//           <CardContent className="p-8">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <Input
//                 required
//                 type="email"
//                 placeholder="Enter your student email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="h-16 bg-slate-800 border-0 text-white rounded-2xl px-6 focus:ring-2 focus:ring-blue-600"
//               />
//               <Button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full h-16 text-lg font-black uppercase italic bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
//               >
//                 {isLoading ? "Unlocking..." : "Get Free Access"}
//                 {!isLoading && <ArrowRight className="h-5 w-5" />}
//               </Button>
//               <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
//                 <Lock className="h-3 w-3" /> Secure Download • No CC Required
//               </p>
//             </form>
//           </CardContent>
//         </Card>
//       </main>
//     </div>
//   );
// }



// "use client";

// import React, { useEffect, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { OFFERS } from "@/lib/offers";
// import { Loader2, Download, ExternalLink, Sparkles, Zap } from "lucide-react";
// import { Button } from "@/components/ui/button";

// function ThankYouContent() {
//   const searchParams = useSearchParams();
//   const offerSlug = searchParams.get("offer");
//   const [canDownload, setCanDownload] = useState(false);

//   const offer = OFFERS.find(o => o.slug === offerSlug);

//   useEffect(() => {
//     // 5-second timer to ensure they see your USD offers
//     const timer = setTimeout(() => setCanDownload(true), 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!offer) return <div className="p-20 text-center">Offer session expired.</div>;

//   return (
//     <main className="max-w-4xl mx-auto px-6 py-16 text-center space-y-12">
//       <div className="space-y-4">
//         <h1 className="text-4xl font-black uppercase italic text-slate-900 tracking-tighter">
//           Verification Successful!
//         </h1>
//         <p className="text-slate-500 font-medium uppercase text-xs tracking-widest">
//          Click Download Link Below 
//         </p>
//       </div>

//       {/* THE USD BRIDGE SECTION */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
//         {/* OFFER 1: YOUR SELAR BOOK (Highest Profit) */}
//         <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white text-left space-y-6 shadow-xl border-b-8 border-indigo-800">
//           <div className="flex items-center gap-2 bg-indigo-500 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//             <Sparkles className="h-3 w-3 fill-current text-yellow-300" /> My Premium Guide
//           </div>
//           <h2 className="text-2xl font-black uppercase italic leading-tight">
//             Master Ecommerce <br/> Automate Your Processes
//           </h2>
//           <p className="text-indigo-100 text-sm">
//             Learn the exact AI prompts I use to build automated stores.
//           </p>
//           <Button asChild className="w-full h-14 bg-white text-indigo-600 hover:bg-indigo-50 text-md font-black uppercase italic rounded-xl">
//             <a href={offer.selarUrl} target="_blank">Get The Guide <ExternalLink className="ml-2 h-4 w-4" /></a>
//           </Button>
//         </div>

//         {/* OFFER 2: AFFILIATE TOOL (Recurring USD) */}
//         <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 text-left space-y-6 shadow-lg">
//           <div className="flex items-center gap-2 bg-slate-100 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600">
//             <Zap className="h-3 w-3 fill-current text-indigo-600" /> Recommended Tool
//           </div>
//           <h2 className="text-2xl font-black uppercase italic leading-tight text-slate-900">
//             Top AI Study <br/> Assistant
//           </h2>
//           <p className="text-slate-500 text-sm">
//             The #1 tool recommended for university research and complex essay generation. Try it free.
//           </p>
//           <Button asChild variant="outline" className="w-full h-14 border-slate-200 text-slate-900 hover:bg-slate-50 text-md font-black uppercase italic rounded-xl">
//             <a href={offer.affiliateUrl} target="_blank">Try This Tool <ExternalLink className="ml-2 h-4 w-4" /></a>
//           </Button>
//         </div>

//       </div>

//       {/* FINAL DOWNLOAD AREA */}
//       <div className="pt-8 border-t border-slate-100">
//         {canDownload ? (
//           <Button 
//             asChild
//             className="h-16 px-10 bg-slate-900 hover:bg-slate-800 text-white font-black uppercase italic rounded-2xl shadow-2xl transition-all active:scale-95"
//           >
//             <a href={offer.pdfUrl} download>
//               <Download className="mr-2 h-5 w-5" /> Download My {offer.title}
//             </a>
//           </Button>
//         ) : (
//           <div className="flex flex-col items-center gap-4">
//             <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
//             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
//               Securing Your PDF Link...
//             </p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// export default function ThankYouPage() {
//   return (
//     <div className="min-h-screen bg-[#F8F9FF]">
//       <Suspense fallback={<div className="flex justify-center pt-20"><Loader2 className="h-10 w-10 animate-spin" /></div>}>
//         <ThankYouContent />
//       </Suspense>
//     </div>
//   );
// }

// "use client";

// import React, { useEffect, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { OFFERS } from "@/lib/offers";
// import { Loader2, Download, ExternalLink, Sparkles, Zap, CheckCircle2 } from "lucide-react";
// import { Button } from "@/components/ui/button";

// function ThankYouContent() {
//   const searchParams = useSearchParams();
//   const offerSlug = searchParams.get("offer");
//   const [canDownload, setCanDownload] = useState(false);

//   const offer = OFFERS.find(o => o.slug === offerSlug);

//   useEffect(() => {
//     // 3-second pulse before the button becomes fully active
//     const timer = setTimeout(() => setCanDownload(true), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!offer) return <div className="p-20 text-center font-black uppercase italic">Session expired. Please return to vault.</div>;

//   return (
//     <main className="max-w-4xl mx-auto px-6 py-12 text-center space-y-10">
      
//       {/* PRIMARY SECTION: THE DOWNLOAD (TOP PRIORITY) */}
//       <div className="bg-white border-4 border-indigo-600 rounded-[3rem] p-10 shadow-2xl space-y-6 relative overflow-hidden">
//         <div className="absolute top-0 right-0 p-4 opacity-10">
//             <Download className="h-32 w-32" />
//         </div>
        
//         <div className="flex flex-col items-center gap-3">
//             <div className="bg-green-100 p-2 rounded-full">
//                 <CheckCircle2 className="h-8 w-8 text-green-600" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-black uppercase italic text-slate-900 tracking-tighter">
//                 Access Granted
//             </h1>
//             <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">
//                 Your {offer.title} is ready
//             </p>
//         </div>

//         <div className="flex justify-center pt-4">
//             {canDownload ? (
//               <Button 
//                 asChild
//                 className="h-20 px-12 bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-black uppercase italic rounded-2xl shadow-[0_20px_50px_rgba(79,_70,_229,_0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
//               >
//                 <a href={offer.pdfUrl} download>
//                   <Download className="h-6 w-6" /> Download Now
//                 </a>
//               </Button>
//             ) : (
//               <div className="flex flex-col items-center gap-4">
//                 <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
//                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
//                   Authenticating Secure Link...
//                 </p>
//               </div>
//             )}
//         </div>
//       </div>

//       {/* SECONDARY SECTION: THE USD UPSELLS (BELOW DOWNLOAD) */}
//       <div className="space-y-6">
//         <div className="flex items-center justify-center gap-4">
//             <div className="h-px bg-slate-200 flex-grow" />
//             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Wait! Exclusive Student Offers</h2>
//             <div className="h-px bg-slate-200 flex-grow" />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* SELAR USD OFFER (OWN PRODUCT) */}
//             <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white text-left space-y-6 shadow-xl relative group">
//                 <div className="flex items-center gap-2 bg-indigo-600 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//                     <Sparkles className="h-3 w-3 fill-current text-yellow-300" /> Recommended Side-Hustle
//                 </div>
//                 <h3 className="text-2xl font-black uppercase italic leading-tight">
//                     Earn in USD <br/> with Ecommerce
//                 </h3>
//                 <p className="text-slate-400 text-sm">
//                     Master the AI prompts I use to build automated stores that generate real USD income.
//                 </p>
//                 <Button asChild className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-black uppercase italic rounded-xl">
//                     <a href={offer.selarUrl} target="_blank">View Premium Guide <ExternalLink className="ml-2 h-4 w-4" /></a>
//                 </Button>
//             </div>

//             {/* AFFILIATE TOOL (EXTERNAL RECURRING) */}
//             <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 text-left space-y-6 shadow-lg hover:border-indigo-100 transition-colors">
//                 <div className="flex items-center gap-2 bg-slate-100 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600">
//                     <Zap className="h-3 w-3 fill-current text-indigo-600" /> Essential Tool
//                 </div>
//                 <h3 className="text-2xl font-black uppercase italic leading-tight text-slate-900">
//                     Top AI Research <br/> Assistant
//                 </h3>
//                 <p className="text-slate-500 text-sm">
//                     The #1 rated tool for university students. Summarize, cite, and write faster.
//                 </p>
//                 <Button asChild variant="outline" className="w-full h-14 border-slate-200 text-slate-900 hover:bg-slate-50 text-sm font-black uppercase italic rounded-xl">
//                     <a href={offer.affiliateUrl} target="_blank">Get Free Trial <ExternalLink className="ml-2 h-4 w-4" /></a>
//                 </Button>
//             </div>
//         </div>
//       </div>

//       <footer className="pt-10 opacity-30 text-[9px] font-black uppercase tracking-[0.5em] text-slate-500">
//         &copy; {new Date().getFullYear()} CITADELY GLOBAL EDUCATION
//       </footer>
//     </main>
//   );
// }

// export default function ThankYouPage() {
//   return (
//     <div className="min-h-screen bg-[#F8F9FF] flex flex-col justify-center">
//       <Suspense fallback={<div className="flex justify-center"><Loader2 className="h-10 w-10 animate-spin text-indigo-600" /></div>}>
//         <ThankYouContent />
//       </Suspense>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { OFFERS } from "@/lib/offers";
// import { Loader2, Download, ExternalLink, Sparkles, Zap, CheckCircle2 } from "lucide-react";
// import { Button } from "@/components/ui/button";

// function ThankYouContent() {
//   const searchParams = useSearchParams();
//   const offerSlug = searchParams.get("offer");
//   const [canDownload, setCanDownload] = useState(false);

//   const offer = OFFERS.find(o => o.slug === offerSlug);

//   useEffect(() => {
//     // Quick 2-second authentication for better UX flow
//     const timer = setTimeout(() => setCanDownload(true), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!offer) return <div className="p-20 text-center font-black uppercase italic">Session expired.</div>;

//   return (
//     <main className="max-w-5xl mx-auto px-6 py-8 md:py-12 space-y-8">
      
//       {/* COMPACT HERO ROW (THE DOWNLOAD BAR) */}
//       <div className="bg-white border-2 border-indigo-600 rounded-3xl p-4 md:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
//         <div className="flex items-center gap-4">
//             <div className="bg-green-100 p-2 rounded-full hidden sm:block">
//                 <CheckCircle2 className="h-6 w-6 text-green-600" />
//             </div>
//             <div className="text-left">
//                 <h1 className="text-2xl md:text-3xl font-black uppercase italic text-slate-900 leading-none">
//                     Success! Access Granted
//                 </h1>
//                 <p className="text-slate-400 font-bold uppercase text-[9px] tracking-widest mt-1">
//                     Your {offer.title} is verified
//                 </p>
//             </div>
//         </div>

//         <div className="w-full md:w-auto">
//             {canDownload ? (
//               <Button 
//                 asChild
//                 className="w-full md:w-auto h-14 px-10 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-black uppercase italic rounded-2xl shadow-lg transition-all hover:scale-105 flex items-center gap-2"
//               >
//                 <a href={offer.pdfUrl} download>
//                   <Download className="h-4 w-4" /> Download Now
//                 </a>
//               </Button>
//             ) : (
//               <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
//                 <Loader2 className="h-5 w-5 animate-spin text-indigo-600" />
//                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
//                   Authenticating...
//                 </span>
//               </div>
//             )}
//         </div>
//       </div>

//       {/* THE UPSELLS (PARTIALLY VISIBLE ABOVE THE FOLD) */}
//       <div className="space-y-6">
//         <div className="flex items-center gap-4">
//             <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">
//                 Student Growth Hub
//             </h2>
//             <div className="h-px bg-slate-100 flex-grow" />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* SELAR USD OFFER (LEFT) */}
//             <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white text-left space-y-6 shadow-xl flex flex-col justify-between hover:translate-y-[-4px] transition-transform">
//                 <div className="space-y-4">
//                     <div className="flex items-center gap-2 bg-indigo-600 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
//                         <Sparkles className="h-3 w-3 fill-current text-yellow-300" /> Recommended Side-Hustle
//                     </div>
//                     <h3 className="text-2xl font-black uppercase italic leading-tight">
//                         Earn USD with <br/> AI Ecommerce
//                     </h3>
//                     <p className="text-slate-400 text-sm leading-relaxed">
//                         Copy the exact prompts I use to build automated stores that generate USD income from Nigeria.
//                     </p>
//                 </div>
//                 <Button asChild className="w-full h-14 bg-white text-slate-900 hover:bg-slate-100 text-xs font-black uppercase italic rounded-xl mt-4">
//                     <a href={offer.selarUrl} target="_blank">View Premium Guide <ExternalLink className="ml-2 h-4 w-4" /></a>
//                 </Button>
//             </div>

//             {/* AFFILIATE TOOL (RIGHT) */}
//             <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 text-left space-y-6 shadow-sm flex flex-col justify-between hover:border-indigo-200 transition-all">
//                 <div className="space-y-4">
//                     <div className="flex items-center gap-2 bg-indigo-50 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600">
//                         <Zap className="h-3 w-3 fill-current text-indigo-600" /> Essential Tool
//                     </div>
//                     <h3 className="text-2xl font-black uppercase italic leading-tight text-slate-900">
//                         Top AI Research <br/> Assistant
//                     </h3>
//                     <p className="text-slate-500 text-sm leading-relaxed">
//                         The #1 student-recommended tool for thesis research and essay automation. Try it free.
//                     </p>
//                 </div>
//                 <Button asChild variant="outline" className="w-full h-14 border-slate-200 text-slate-900 hover:bg-slate-50 text-xs font-black uppercase italic rounded-xl mt-4">
//                     <a href={offer.affiliateUrl} target="_blank">Get Free Trial <ExternalLink className="ml-2 h-4 w-4" /></a>
//                 </Button>
//             </div>
//         </div>
//       </div>

//       <footer className="pt-8 opacity-20 text-[8px] font-black uppercase tracking-[0.5em] text-center">
//         &copy; {new Date().getFullYear()} CITADELY GLOBAL EDUCATION
//       </footer>
//     </main>
//   );
// }

// export default function ThankYouPage() {
//   return (
//     <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
//       <Suspense fallback={<div className="flex justify-center pt-20"><Loader2 className="h-10 w-10 animate-spin text-indigo-600" /></div>}>
//         <ThankYouContent />
//       </Suspense>
//     </div>
//   );
// }



"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { OFFERS } from "@/lib/offers";
import { Loader2, Download, ExternalLink, Sparkles, Youtube, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const offerSlug = searchParams.get("offer");
  const [canDownload, setCanDownload] = useState(false);

  const offer = OFFERS.find(o => o.slug === offerSlug);

  useEffect(() => {
    // 2-second authentication delay
    const timer = setTimeout(() => setCanDownload(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!offer) return <div className="p-20 text-center font-black uppercase italic">Session expired.</div>;

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 md:py-12 space-y-8">
      
      {/* COMPACT HERO ROW (THE DOWNLOAD BAR) */}
      <div className="bg-white border-2 border-indigo-600 rounded-3xl p-4 md:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-full hidden sm:block">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-left">
                <h1 className="text-2xl md:text-3xl font-black uppercase italic text-slate-900 leading-none">
                    Success! Access Granted
                </h1>
                <p className="text-slate-400 font-bold uppercase text-[9px] tracking-widest mt-1">
                    Your {offer.title} is verified
                </p>
            </div>
        </div>

        <div className="w-full md:w-auto">
            {canDownload ? (
              <Button 
                asChild
                className="w-full md:w-auto h-14 px-10 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-black uppercase italic rounded-2xl shadow-lg transition-all hover:scale-105 flex items-center gap-2"
              >
                <a href={offer.pdfUrl} download>
                  <Download className="h-4 w-4" /> Download Now
                </a>
              </Button>
            ) : (
              <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                <Loader2 className="h-5 w-5 animate-spin text-indigo-600" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Authenticating...
                </span>
              </div>
            )}
        </div>
      </div>

      {/* THE UPSELLS (VISIBLE ABOVE THE FOLD) */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">
                Student Growth Hub
            </h2>
            <div className="h-px bg-slate-100 flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* SELAR USD OFFER (LEFT) - YOUR ECOMMERCE BOOK */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white text-left space-y-6 shadow-xl flex flex-col justify-between hover:translate-y-[-4px] transition-transform">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 bg-indigo-600 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                        <Sparkles className="h-3 w-3 fill-current text-yellow-300" /> Recommended Side-Hustle
                    </div>
                    <h3 className="text-2xl font-black uppercase italic leading-tight">
                        Earn USD with <br/> AI Ecommerce
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Copy the exact prompts I use to build automated stores that generate USD income from Nigeria.
                    </p>
                </div>
                <Button asChild className="w-full h-14 bg-white text-slate-900 hover:bg-slate-100 text-xs font-black uppercase italic rounded-xl mt-4">
                    <a href={offer.selarUrl} target="_blank">View Premium Guide <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
            </div>

            {/* STAKECUT AFFILIATE OFFER (RIGHT) - YOUTUBE INCOME GENERATOR */}
            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 text-left space-y-6 shadow-sm flex flex-col justify-between hover:border-red-100 transition-all">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 bg-red-50 w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 border border-red-100">
                        <Youtube className="h-3 w-3 fill-current" /> Free Video Training
                    </div>
                    <h3 className="text-2xl font-black uppercase italic leading-tight text-slate-900">
                        Passive USD via <br/> Faceless YouTube
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Discover how to use AI to build a YouTube channel that earns in Dollars without showing your face.
                    </p>
                </div>
                <Button asChild variant="outline" className="w-full h-14 border-red-200 text-red-600 hover:bg-red-50 text-xs font-black uppercase italic rounded-xl mt-4">
                    <a href={offer.affiliateUrl} target="_blank">Watch Free Webinar <ExternalLink className="ml-2 h-4 w-4" /></a>
                </Button>
            </div>

        </div>
      </div>

      <footer className="pt-8 opacity-20 text-[8px] font-black uppercase tracking-[0.5em] text-center">
        &copy; {new Date().getFullYear()} CITADELY GLOBAL EDUCATION
      </footer>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
      <Suspense fallback={<div className="flex justify-center pt-20"><Loader2 className="h-10 w-10 animate-spin text-indigo-600" /></div>}>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}