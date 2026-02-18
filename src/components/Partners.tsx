
"use client";

import Image from 'next/image';
import { PARTNERS } from '@/lib/data';

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-black overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            Partners
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            Building innovation together.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          {PARTNERS.map((partner) => (
            <div 
              key={partner.name}
              className="relative w-40 h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                data-ai-hint="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
