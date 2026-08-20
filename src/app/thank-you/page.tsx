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


"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { OFFERS } from "@/lib/offers";
import { Loader2, Lock } from "lucide-react";

/**
 * THANK YOU CONTENT
 * Logic: This sub-component handles the search params and the redirect.
 * It must be wrapped in Suspense to allow Next.js to build successfully.
 */
function ThankYouContent() {
  const searchParams = useSearchParams();
  const offerSlug = searchParams.get("offer");
  const [status, setStatus] = useState("Verifying Session...");

  useEffect(() => {
    // Find the specific offer based on the URL slug
    const offer = OFFERS.find(o => o.slug === offerSlug);
    
    if (offer) {
      const timer = setTimeout(() => {
        setStatus("Redirecting to Secure Link...");
        window.location.href = offer.lockerUrl;
      }, 3000); // 3 second bot-protection delay

      return () => clearTimeout(timer);
    } else {
      setStatus("Invalid Session. Please return to the vault.");
    }
  }, [offerSlug]);

  return (
    <main className="flex-grow flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="h-20 w-20 bg-white rounded-3xl shadow-xl flex items-center justify-center animate-bounce">
        <Lock className="h-8 w-8 text-indigo-600" />
      </div>
      
      <h1 className="text-2xl font-black uppercase italic text-slate-900">
        {status}
      </h1>

      <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
        <Loader2 className="h-4 w-4 animate-spin" /> 
        Do not close this window
      </div>
    </main>
  );
}

/**
 * THANK YOU PAGE WRAPPER
 * Logic: Provides the required Suspense boundary for useSearchParams().
 */
export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col">
      <Suspense 
        fallback={
          <div className="flex-grow flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
          </div>
        }
      >
        <ThankYouContent />
      </Suspense>
    </div>
  );
}