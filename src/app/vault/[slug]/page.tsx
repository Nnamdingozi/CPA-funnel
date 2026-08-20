"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { OFFERS, CPAOffer } from "@/lib/offers";
import { captureVaultLead } from "@/app/actions/leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function OfferPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const offer: CPAOffer | undefined = OFFERS.find(o => o.slug === slug);

  if (!offer) return <div className="p-20 text-center font-black uppercase italic">Offer Not Found</div>;

  const handleRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await captureVaultLead(email, offer.slug);
    // Redirect to a generic thank you page that carries the slug
    router.push(`/thank-you?offer=${offer.slug}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase italic">
              {offer.title.split(' ').slice(0, -1).join(' ')} <br/>
              <span className="text-indigo-600">{offer.title.split(' ').pop()}</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium">{offer.longDescription}</p>
            
            <Card className="border-0 shadow-2xl rounded-[2.5rem] bg-slate-950 text-white p-1">
              <CardContent className="p-8">
                <form onSubmit={handleRequest} className="space-y-4">
                  <Input 
                    required type="email" placeholder="Delivery Email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-16 bg-slate-900 border-0 text-white rounded-2xl px-6"
                  />
                  <Button className="w-full h-16 text-lg font-black uppercase italic bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl">
                    {isLoading ? "Processing..." : offer.buttonText}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="hidden lg:flex justify-center">
             <div className="w-80 h-80 bg-indigo-50 rounded-[3rem] border-[16px] border-slate-50 flex items-center justify-center">
                <BrainCircuit className="h-32 w-32 text-indigo-200" />
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}