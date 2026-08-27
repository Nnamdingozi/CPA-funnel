// // "use client";

// // import React, { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { CheckCircle2, Download, Rocket, ShieldCheck, Zap } from "lucide-react";
// // import { saveLead } from "@/app/actions/save-lead";
// // import MetaPixel from "@/components/MetaPixel";

// // export default function CPAStorePage() {
// //   const [email, setEmail] = useState<string>("");
// //   const [isLoading, setIsLoading] = useState<boolean>(false);

// //   const CPAGRIP_URL = process.env.NEXT_PUBLIC_CPAGRIP_URL || "";

// //   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setIsLoading(true);

// //     // 1. Fire Meta Pixel Tracking (Lead)
// //     if (typeof window !== "undefined" && (window as any).fbq) {
// //       (window as any).fbq("track", "Lead", { 
// //         content_name: "SEO PDF Giveaway",
// //         content_category: "E-commerce Prompts"
// //       });
// //     }

// //     // 2. Save to Postgres via Server Action
// //     const result = await saveLead(email, "fb_ads_campaign_1");

// //     // 3. Redirect to Locker (even if DB fails, don't stop the user)
// //     setTimeout(() => {
// //       window.location.href = CPAGRIP_URL;
// //     }, 600);
// //   };

// //   return (
// //     <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
// //       <MetaPixel id={process.env.NEXT_PUBLIC_PIXEL_ID || ""} />

// //       {/* Header */}
// //       <header className="border-b border-slate-100 py-6">
// //         <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
// //           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase italic">
// //             <Rocket className="text-blue-600 h-7 w-7" />
// //             <span>SEO<span className="text-blue-600">PROMPTS</span></span>
// //           </div>
// //           <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
// //             <ShieldCheck className="h-4 w-4" /> Cloud Verified Secure
// //           </div>
// //         </div>
// //       </header>

// //       <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
// //           {/* Content Section */}
// //           <div className="space-y-10">
// //             <div className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-100">
// //               Limited Time: 100% Free Download
// //             </div>

// //             <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[0.9] uppercase italic">
// //               Stop Writing <br/>
// //               <span className="text-blue-600">Descriptions.</span> <br/>
// //               Start Selling.
// //             </h1>

// //             <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
// //               Get the exact AI prompts we use to generate high-ranking, 
// //               human-sounding descriptions for Shopify & Etsy stores.
// //             </p>

// //             <div className="space-y-4">
// //               {["Optimized for Page 1 Ranking", "Eliminate 'AI-sounding' text", "Copy/Paste Ready"].map((text) => (
// //                 <div key={text} className="flex items-center gap-3 font-bold text-sm uppercase tracking-tight">
// //                   <CheckCircle2 className="text-blue-600 h-5 w-5" /> {text}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Form Card */}
// //             <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-slate-900 text-white p-2">
// //               <CardContent className="p-8 space-y-6">
// //                 <form onSubmit={handleFormSubmit} className="space-y-4">
// //                   <div className="space-y-2">
// //                     <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
// //                       Target Delivery Email
// //                     </label>
// //                     <Input 
// //                       required
// //                       type="email"
// //                       placeholder="owner@yourstore.com"
// //                       value={email}
// //                       onChange={(e) => setEmail(e.target.value)}
// //                       className="h-16 bg-slate-800 border-0 focus:ring-2 focus:ring-blue-500 text-white text-lg rounded-2xl px-6"
// //                     />
// //                   </div>
// //                   <Button 
// //                     disabled={isLoading}
// //                     className="w-full h-16 text-xl font-black uppercase italic bg-blue-600 hover:bg-blue-500 text-white rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex gap-3"
// //                   >
// //                     {isLoading ? "Syncing..." : (
// //                       <>Unlock My Prompts <Zap className="h-5 w-5 fill-current" /></>
// //                     )}
// //                   </Button>
// //                 </form>
// //                 <p className="text-[9px] text-center font-bold uppercase tracking-widest text-slate-500">
// //                   PDF Format • Mobile Friendly • 2.4MB Download
// //                 </p>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Visual Section */}
// //           <div className="relative">
// //             <div className="absolute -inset-10 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
// //             <div className="relative aspect-[4/5] bg-slate-100 rounded-[3rem] border-[12px] border-white shadow-2xl flex flex-col items-center justify-center overflow-hidden">
// //                {/* Use your real image here */}
// //                <div className="text-center">
// //                   <Rocket className="h-24 w-24 text-slate-200 mx-auto mb-6" />
// //                   <div className="font-black text-3xl text-slate-200 uppercase leading-none italic">
// //                     Prompt<br/>Library
// //                   </div>
// //                </div>
               
// //                {/* Floating Discount Tag */}
// //                <div className="absolute top-12 right-12 bg-green-500 text-white p-6 rounded-full shadow-2xl transform rotate-12 flex flex-col items-center justify-center w-24 h-24">
// //                   <span className="text-xs font-bold line-through opacity-60">$47</span>
// //                   <span className="text-2xl font-black leading-none">$0</span>
// //                </div>
// //             </div>
// //           </div>

// //         </div>
// //       </main>
// //     </div>
// //   );
// // }


// // "use client";

// // import React, { useState } from "react";
// // import { captureLead } from "@/app/actions/leads";
// // import MetaPixel from "@/components/MetaPixel";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { 
// //   Rocket, 
// //   CheckCircle2, 
// //   ShieldCheck, 
// //   Zap, 
// //   ArrowRight,
// //   Sparkles,
// //   ShoppingBag,
// //   Star
// // } from "lucide-react";

// // export default function HybridCPAStore() {
// //   const [email, setEmail] = useState<string>("");
// //   const [isLoading, setIsLoading] = useState<boolean>(false);

// //   const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID || "";
// //   const LOCKER_URL = process.env.NEXT_PUBLIC_CPAGRIP_URL || "";
// //   const SELAR_PAID_URL = "https://selar.co/your-paid-product-link"; // 👈 Your Paid Link

// //   const handleFreeDownload = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     if (typeof window !== "undefined" && (window as any).fbq) {
// //       (window as any).fbq("track", "Lead", { content_name: "Free SEO Sample" });
// //     }
// //     await captureLead(email, "hybrid_funnel_v1");
// //     setTimeout(() => { window.location.href = LOCKER_URL; }, 500);
// //   };

// //   return (
// //     <div className="min-h-screen bg-white text-slate-900">
// //       <MetaPixel id={PIXEL_ID} />

// //       {/* Navigation */}
// //       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
// //         <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
// //           <div className="flex items-center gap-2 font-black text-xl tracking-tighter uppercase italic">
// //             <Sparkles className="text-blue-600 h-5 w-5 fill-current" />
// //             <span>SEO<span className="text-blue-600">PROMPTS</span></span>
// //           </div>
// //           <Button 
// //             onClick={() => window.open(SELAR_PAID_URL, '_blank')}
// //             variant="outline" 
// //             className="border-2 border-blue-600 text-blue-600 font-bold rounded-xl hidden sm:flex gap-2"
// //           >
// //             <ShoppingBag className="h-4 w-4" /> Get Full Library
// //           </Button>
// //         </div>
// //       </nav>

// //       <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-slate-100 pb-20">
// //           {/* Left: Free Lead Magnet */}
// //           <div className="space-y-8">
// //             <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-blue-100">
// //               Free Sample Pack
// //             </div>
// //             <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase italic">
// //               Rank #1 With <br/>
// //               <span className="text-blue-600">AI Prompts.</span>
// //             </h1>
// //             <p className="text-lg text-slate-500 font-medium">
// //               Download 10 high-performing prompts for free. Complete a quick verification to access the PDF.
// //             </p>
            
// //             <Card className="border-0 shadow-2xl rounded-[2.5rem] bg-slate-900 text-white p-1">
// //               <CardContent className="p-8">
// //                 <form onSubmit={handleFreeDownload} className="space-y-4">
// //                   <Input 
// //                     required type="email" placeholder="Business Email" value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     className="h-16 bg-slate-800 border-0 text-white rounded-2xl px-6"
// //                   />
// //                   <Button className="w-full h-16 text-lg font-black uppercase italic bg-blue-600 hover:bg-blue-500 text-white rounded-2xl">
// //                     {isLoading ? "Syncing..." : "Download Free Sample"}
// //                   </Button>
// //                 </form>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Right: Paid Upsell Visual */}
// //           <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 relative group">
// //             <div className="space-y-6">
// //               <div className="flex gap-1">
// //                 {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
// //               </div>
// //               <h3 className="text-2xl font-black uppercase italic">Want the Full Library?</h3>
// //               <p className="text-slate-500 font-medium italic">
// //                 Get the master collection of 150+ E-commerce prompts for product descriptions, SEO, email marketing, and social media ads.
// //               </p>
// //               <ul className="space-y-3">
// //                 {["150+ Master Prompts", "Lifetime Updates", "Bonus: Meta Ad Copy Guide"].map(t => (
// //                   <li key={t} className="flex items-center gap-2 text-sm font-bold uppercase"><CheckCircle2 className="h-4 w-4 text-green-500" /> {t}</li>
// //                 ))}
// //               </ul>
// //               <Button 
// //                 onClick={() => window.open(SELAR_PAID_URL, '_blank')}
// //                 className="w-full h-14 bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-100 font-black uppercase italic rounded-2xl"
// //               >
// //                 Buy Full Version — $47
// //               </Button>
// //             </div>
// //             {/* Discount Badge */}
// //             <div className="absolute -top-5 -right-5 bg-green-500 text-white px-4 py-2 rounded-xl font-black rotate-12 shadow-xl">
// //               BEST VALUE
// //             </div>
// //           </div>
// //         </div>
// //       </main>

// //       <footer className="py-10 text-center opacity-40 text-[10px] font-bold uppercase tracking-widest">
// //         <div className="flex justify-center items-center gap-4 mb-4">
// //           <ShieldCheck className="h-4 w-4" /> Secure Payment via Selar
// //         </div>
// //         &copy; {new Date().getFullYear()} SEO ENGINE LABS
// //       </footer>
// //     </div>
// //   );
// // }


// // "use client";

// // import React, { useState } from "react";
// // import { captureLead } from "@/app/actions/leads";
// // import MetaPixel from "@/components/MetaPixel";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { 
// //   Rocket, 
// //   CheckCircle2, 
// //   ShieldCheck, 
// //   Zap, 
// //   ArrowRight,
// //   Sparkles,
// //   ShoppingBag,
// //   Star
// // } from "lucide-react";

// // export default function HybridCPAStore() {
// //   const [email, setEmail] = useState<string>("");
// //   const [isLoading, setIsLoading] = useState<boolean>(false);

// //   const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID || "";
// //   const LOCKER_URL = process.env.NEXT_PUBLIC_CPAGRIP_URL || "";
// //   const SELAR_PAID_URL = "https://selar.com/461rj1p3by"; // 👈 Your Paid Link

// //   const handleFreeDownload = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     if (typeof window !== "undefined" && (window as any).fbq) {
// //       (window as any).fbq("track", "Lead", { content_name: "Free SEO Sample" });
// //     }
// //     await captureLead(email, "hybrid_funnel_v1");
// //     setTimeout(() => { window.location.href = LOCKER_URL; }, 500);
// //   };

// //   return (
// //     <div className="min-h-screen bg-white text-slate-900">
// //       <MetaPixel id={PIXEL_ID} />

// //       {/* Navigation */}
// //       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
// //         <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
// //           <div className="flex items-center gap-2 font-black text-xl tracking-tighter uppercase italic">
// //             <Sparkles className="text-blue-600 h-5 w-5 fill-current" />
// //             <span>SEO<span className="text-blue-600">PROMPTS</span></span>
// //           </div>
// //           <Button 
// //             onClick={() => window.open(SELAR_PAID_URL, '_blank')}
// //             variant="outline" 
// //             className="border-2 border-blue-600 text-blue-600 font-bold rounded-xl hidden sm:flex gap-2"
// //           >
// //             <ShoppingBag className="h-4 w-4" /> Get Full Library
// //           </Button>
// //         </div>
// //       </nav>

// //       <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-slate-100 pb-20">
// //           {/* Left: Free Lead Magnet */}
// //           <div className="space-y-8">
// //             <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-blue-100">
// //               Free Sample Pack
// //             </div>
// //             <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase italic">
// //               Rank #1 With <br/>
// //               <span className="text-blue-600">AI Prompts.</span>
// //             </h1>
// //             <p className="text-lg text-slate-500 font-medium">
// //               Download 10 high-performing prompts for free. Complete a quick verification to access the PDF.
// //             </p>
            
// //             <Card className="border-0 shadow-2xl rounded-[2.5rem] bg-slate-900 text-white p-1">
// //               <CardContent className="p-8">
// //                 <form onSubmit={handleFreeDownload} className="space-y-4">
// //                   <Input 
// //                     required type="email" placeholder="Business Email" value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     className="h-16 bg-slate-800 border-0 text-white rounded-2xl px-6"
// //                   />
// //                   <Button className="w-full h-16 text-lg font-black uppercase italic bg-blue-600 hover:bg-blue-500 text-white rounded-2xl">
// //                     {isLoading ? "Syncing..." : "Download Free Sample"}
// //                   </Button>
// //                 </form>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Right: Paid Upsell Visual */}
// //           <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 relative group">
// //             <div className="space-y-6">
// //               <div className="flex gap-1">
// //                 {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
// //               </div>
// //               <h3 className="text-2xl font-black uppercase italic">Want the Full Library?</h3>
// //               <p className="text-slate-500 font-medium italic">
// //                 Get the master collection of 150+ E-commerce prompts for product descriptions, SEO, email marketing, and social media ads.
// //               </p>
// //               <ul className="space-y-3">
// //                 {["150+ Master Prompts", "Lifetime Updates", "Bonus: Meta Ad Copy Guide"].map(t => (
// //                   <li key={t} className="flex items-center gap-2 text-sm font-bold uppercase"><CheckCircle2 className="h-4 w-4 text-green-500" /> {t}</li>
// //                 ))}
// //               </ul>
// //               <Button 
// //                 onClick={() => window.open(SELAR_PAID_URL, '_blank')}
// //                 className="w-full h-14 bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-100 font-black uppercase italic rounded-2xl"
// //               >
// //                 Buy Full Version — $27
// //               </Button>
// //             </div>
// //             {/* Discount Badge */}
// //             <div className="absolute -top-5 -right-5 bg-green-500 text-white px-4 py-2 rounded-xl font-black rotate-12 shadow-xl">
// //               BEST VALUE
// //             </div>
// //           </div>
// //         </div>
// //       </main>

// //       <footer className="py-10 text-center opacity-40 text-[10px] font-bold uppercase tracking-widest">
// //         <div className="flex justify-center items-center gap-4 mb-4">
// //           <ShieldCheck className="h-4 w-4" /> Secure Payment via Selar
// //         </div>
// //         &copy; {new Date().getFullYear()} SEO ENGINE LABS
// //       </footer>
// //     </div>
// //   );
// // }



// // "use client";

// // import React, { useState } from "react";
// // import { captureLead } from "@/app/actions/leads";
// // import MetaPixel from "@/components/MetaPixel";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Card, CardContent } from "@/components/ui/card";
// // import {
// //   ShieldCheck,
// //   ArrowRight,
// //   Sparkles,
// //   Lock,
// //   Unlock,
// // } from "lucide-react";

// // // ---- CONFIG: fill these in for whatever this locker's resource actually is ----
// // const SITE_NAME = "QUICKUNLOCK"; // pick a name unrelated to your prompt-pack brand
// // const RESOURCE_HEADLINE = "Get Your Free 50 AI Study Prompts For Students"; // describe the actual locked content honestly
// // const RESOURCE_SUBHEAD = "Enter your email, then complete one quick offer below to unlock your download.";

// // export default function CPALandingPage() {
// //   const [email, setEmail] = useState<string>("");
// //   const [isLoading, setIsLoading] = useState<boolean>(false);
// //   const [unlocked, setUnlocked] = useState<boolean>(false);

// //   const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID || "";
// //   const LOCKER_URL = process.env.NEXT_PUBLIC_CPAGRIP_URL || "";
// // // Define types for better registry logic
// // interface LeadResponse {
// //   success: boolean;
// //   error?: string;
// // }

// // const handleStudentSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
// //   e.preventDefault();
// //   setIsLoading(true);

// //   try {
// //       // 1. Capture Lead
// //       const result: LeadResponse = await captureLead(email, "local_test_v1");
      
// //       if (result.success) {
// //           console.log("Registry Sync: Success");
// //       }

// //       // 2. Redirect to CPA
// //       // Use your locker link from CPAGrip here
// //       const LOCKER_URL: string = process.env.NEXT_PUBLIC_STUDENT_LOCKER_URL || "";
// //       window.location.href = LOCKER_URL;

// //   } catch (err: unknown) {
// //       console.error("Critical Fault:", err);
// //       // Ensure user is never stuck
// //       window.location.href = process.env.NEXT_PUBLIC_STUDENT_LOCKER_URL || "";
// //   }
// // };

// //   return (
// //     <div className="min-h-screen bg-white text-slate-900">
// //       <MetaPixel id={PIXEL_ID} />

// //       {/* Navigation */}
// //       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
// //         <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
// //           <div className="flex items-center gap-2 font-black text-xl tracking-tighter uppercase italic">
// //             <Sparkles className="text-blue-600 h-5 w-5 fill-current" />
// //             <span>{SITE_NAME}</span>
// //           </div>
// //         </div>
// //       </nav>

// //       <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
// //         <div className="text-center space-y-6 mb-12">
// //           <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-blue-100">
// //             Free Access
// //           </div>
// //           <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] uppercase italic">
// //             {RESOURCE_HEADLINE}
// //           </h1>
// //           <p className="text-lg text-slate-500 font-medium max-w-md mx-auto">
// //             {RESOURCE_SUBHEAD}
// //           </p>
// //         </div>

// //         <Card className="border-0 shadow-2xl rounded-[2.5rem] bg-slate-900 text-white p-1">
// //           <CardContent className="p-8">
// //             {!unlocked ? (
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 <Input
// //                   required
// //                   type="email"
// //                   placeholder="Your Email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   className="h-16 bg-slate-800 border-0 text-white rounded-2xl px-6"
// //                 />
// //                 <Button
// //                   type="submit"
// //                   disabled={isLoading}
// //                   className="w-full h-16 text-lg font-black uppercase italic bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center gap-2"
// //                 >
// //                   {isLoading ? "Submitting..." : "Continue"}
// //                   {!isLoading && <ArrowRight className="h-5 w-5" />}
// //                 </Button>
// //                 <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
// //                   <Lock className="h-3 w-3" /> One free offer required to unlock
// //                 </p>
// //               </form>
// //             ) : (
// //               <div className="text-center space-y-5 py-4">
// //                 <Unlock className="h-10 w-10 mx-auto text-green-400" />
// //                 <h3 className="text-xl font-black uppercase italic">
// //                   Almost there
// //                 </h3>
// //                 <p className="text-slate-300 text-sm">
// //                   Complete the offer below to finish unlocking your download.
// //                 </p>
// //                 <Button
// //                   onClick={() => window.open(LOCKER_URL, "_blank")}
// //                   className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase italic rounded-2xl"
// //                 >
// //                   View Offer
// //                 </Button>
// //               </div>
// //             )}
// //           </CardContent>
// //         </Card>
// //       </main>

// //       <footer className="py-10 text-center opacity-40 text-[10px] font-bold uppercase tracking-widest">
// //         <div className="flex justify-center items-center gap-4 mb-4">
// //           <ShieldCheck className="h-4 w-4" /> Your email is never shared
// //         </div>
// //         &copy; {new Date().getFullYear()} {SITE_NAME}
// //       </footer>
// //     </div>
// //   );
// // }



// "use client";

// import React, { useState } from "react";
// import { captureLead } from "@/app/actions/leads";
// import MetaPixel from "@/components/metaPixel";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { 
//   CheckCircle2, 
//   ShieldCheck, 
//   Zap, 
//   ArrowRight,
//   BrainCircuit,
//   Sparkles,
//   GraduationCap
// } from "lucide-react";

// export default function StudentAIStore() {
//   const [email, setEmail] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   // --- REGISTRY CONFIGURATION ---
//   const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID || "";
//   const STUDENT_LOCKER_URL = process.env.NEXT_PUBLIC_STUDENT_LOCKER_URL || "";

//   const handleAccessRequest = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // 1. Fire Meta Pixel 'Lead' event for tracking
//       if (typeof window !== "undefined" && (window as any).fbq) {
//         (window as any).fbq("track", "Lead", { 
//             content_name: "50 AI Study Prompts",
//             content_category: "Education" 
//         });
//       }

//       // 2. Capture Identity in Neon/Cockroach DB
//       // We pass the category 'student' to your server action
//       await captureLead(email, "student_v1_campaign");

//       // 3. Hand-off to CPA Verification Locker
//       // Note: The PDF filename is handled inside the CPAGrip dashboard settings
//       window.location.href = STUDENT_LOCKER_URL;

//     } catch (err: unknown) {
//       // Emergency Fallback: Ensure user is never stuck
//       window.location.href = STUDENT_LOCKER_URL;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#FDFDFF] text-slate-900 selection:bg-indigo-600 selection:text-white">
//       <MetaPixel id={PIXEL_ID} />

//       <main className="max-w-6xl mx-auto px-6 py-12 md:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-indigo-100">
//               <Sparkles className="h-3 w-3 fill-current" /> Instant Academic Boost
//             </div>

//             <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] text-slate-900 uppercase">
//               The AI <span className="text-indigo-600 italic">Survival</span> <br/> Toolkit.
//             </h1>

//             <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
//               Unlock 50 custom-engineered AI prompts designed to automate Essay & Writing, complex note summarization, and exam preparation.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
//               {["Exam Prep Frameworks", "Essay Logic Generators", "Note-to-Study Guides", "24/7 Academic Support"].map((item) => (
//                 <div key={item} className="flex items-center gap-2 font-bold text-[11px] uppercase tracking-tight text-slate-600">
//                   <CheckCircle2 className="text-indigo-500 h-4 w-4" /> {item}
//                 </div>
//               ))}
//             </div>

//             <Card className="border-0 shadow-[0_32px_64px_-12px_rgba(79,70,229,0.15)] rounded-[2.5rem] bg-slate-950 text-white p-1">
//               <CardContent className="p-8">
//                 <form onSubmit={handleAccessRequest} className="space-y-4">
//                   <div className="space-y-2">
//                     <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">
//                       Academic Delivery Node (Email)
//                     </label>
//                     <Input 
//                       required
//                       type="email"
//                       placeholder="name@university.edu"
//                       value={email}
//                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//                       className="h-16 bg-slate-900 border-0 focus:ring-2 focus:ring-indigo-500 text-white text-base rounded-2xl px-6"
//                     />
//                   </div>
//                   <Button 
//                     disabled={isLoading}
//                     className="w-full h-16 text-lg font-black uppercase italic bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl transition-all flex gap-3 shadow-xl shadow-indigo-900/20"
//                   >
//                     {isLoading ? "Verifying..." : (
//                       <>Unlock Study Pack <BrainCircuit className="h-5 w-5" /></>
//                     )}
//                   </Button>
//                 </form>
//                 <p className="text-[9px] text-center font-bold uppercase tracking-widest text-slate-600 mt-6 flex items-center justify-center gap-2">
//                   <ShieldCheck className="h-3 w-3" /> Secure PDF Access Locked to Session
//                 </p>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Visual UI Component */}
//           <div className="relative hidden lg:block">
//             <div className="absolute -inset-20 bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
//             <div className="relative aspect-square bg-white rounded-[4rem] border-[16px] border-slate-50 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
//                <GraduationCap className="h-32 w-32 text-indigo-50" />
//                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
//                   <div className="bg-indigo-600 text-white p-10 rounded-full shadow-2xl flex flex-col items-center justify-center w-48 h-48 border-8 border-white">
//                     <p className="text-5xl font-black italic leading-none">50</p>
//                     <p className="text-[10px] font-black uppercase tracking-tighter">AI Prompts</p>
//                   </div>
//                </div>
//             </div>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }



// "use client";

// import React from "react";
// import Link from "next/link";
// import { OFFERS, CPAOffer } from "@/lib/offers";
// import { Card, CardContent } from "@/components/ui/card";
// import {  ArrowRight, Zap } from "lucide-react";

// export default function VaultGallery() {
//   return (
//     <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
//       <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
//         <div className="text-center space-y-4 mb-16">
//           <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-indigo-100">
//             <Zap className="h-3 w-3 fill-current" /> Open Access Vault
//           </div>
//           <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter">
//             Free AI <span className="text-indigo-600">Toolkits.</span>
//           </h1>
//           <p className="text-slate-500 font-medium max-w-lg mx-auto">
//             Professional-grade AI prompt libraries and digital assets for students and educators. 100% Free.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {OFFERS.map((offer: CPAOffer) => (
//             <Link key={offer.slug} href={`/vault/${offer.slug}`}>
//               <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all rounded-[2rem] overflow-hidden bg-white cursor-pointer">
//                 <div className="aspect-video bg-slate-900 flex items-center justify-center relative">
//                 <img
//     src={offer.ogImage || "/og/default.png"}
//     alt={offer.title}
//     className="absolute inset-0 w-full h-full object-cover"
//   />
//                   <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[8px] font-black px-2 py-1 rounded-md uppercase">Free</div>
//                 </div>
//                 <CardContent className="p-8 space-y-4">
//                   <h3 className="text-xl font-black uppercase italic">{offer.title}</h3>
//                   <p className="text-slate-500 text-sm line-clamp-2">{offer.description}</p>
//                   <div className="flex items-center text-indigo-600 font-bold text-xs uppercase tracking-widest gap-2">
//                     View Details <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import { OFFERS, CPAOffer } from "@/lib/offers";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap } from "lucide-react";

export default function VaultGallery() {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
      <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-indigo-100">
            <Zap className="h-3 w-3 fill-current" /> Open Access Vault
          </div>
          <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter">
            Free AI <span className="text-indigo-600">Toolkits.</span>
          </h1>
       <h2>Impact-Site-Verification: 1129bb38-97d8-4600-8b61-6b131f5cca6d</h2>
          <p className="text-slate-500 font-medium max-w-lg mx-auto">
            Professional-grade AI prompt libraries for students and educators. 100% Free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <Link key={offer.slug} href={`/vault/${offer.slug}`}>
              <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all rounded-[2rem] overflow-hidden bg-white cursor-pointer">
                <div className="aspect-video bg-slate-900 flex items-center justify-center relative">
                  <img
                    src={offer.ogImage}
                    alt={offer.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[8px] font-black px-2 py-1 rounded-md uppercase">
                    {offer.imageLabel}
                  </div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-black uppercase italic text-slate-900">{offer.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2">{offer.description}</p>
                  <div className="flex items-center text-indigo-600 font-bold text-xs uppercase tracking-widest gap-2">
                    View Details <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}