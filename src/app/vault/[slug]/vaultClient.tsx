"use client";

import React, { useState } from "react";
import Script from "next/script";
import { captureVaultLead } from "@/app/actions/leads";
import MetaPixel from "@/components/metaPixel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, ArrowRight, Sparkles, Lock, Unlock } from "lucide-react";
import type { CPAOffer } from "@/lib/offers";

const SITE_NAME = "CITADELY";
const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID || "";

export default function VaultClient({ offer }: { offer: CPAOffer }) {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [unlocked, setUnlocked] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await captureVaultLead(email, `vault_${offer.slug}`);

    setUnlocked(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <MetaPixel id={PIXEL_ID} />

      {/* <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter uppercase italic">
            <Sparkles className="text-blue-600 h-5 w-5 fill-current" />
            <span>{SITE_NAME}</span>
          </div>
        </div>
      </nav> */}

      <main className="max-w-2xl mx-auto px-6">
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-blue-100">
            {offer.imageLabel}
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] uppercase italic">
            {offer.title}
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-md mx-auto">
            {offer.longDescription}
          </p>
        </div>

        <Card className="border-0 shadow-2xl rounded-[2.5rem] bg-slate-900 text-white p-1">
          <CardContent className="p-8">
            {!unlocked ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  required
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-16 bg-slate-800 border-0 text-white rounded-2xl px-6"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-16 text-lg font-black uppercase italic bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center gap-2"
                >
                  {isLoading ? "Submitting..." : offer.buttonText}
                  {!isLoading && <ArrowRight className="h-5 w-5" />}
                </Button>
                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                  <Lock className="h-3 w-3" /> One free offer required to unlock
                </p>
              </form>
            ) : (
              <div className="text-center space-y-5 py-4">
                <Unlock className="h-10 w-10 mx-auto text-green-400" />
                <h3 className="text-xl font-black uppercase italic">Almost there</h3>
                <p className="text-slate-300 text-sm">
                  Complete the offer below to finish unlocking your download.
                </p>
                {offer.lockerUrl && (
                  <Script src={offer.lockerUrl} strategy="afterInteractive" />
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <footer className="py-10 text-center opacity-40 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex justify-center items-center gap-4 mb-4">
          <ShieldCheck className="h-4 w-4" /> Your email is never shared
        </div>
        &copy; {new Date().getFullYear()} {SITE_NAME}
      </footer>
    </div>
  );
}
