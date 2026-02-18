
"use client";

import Image from 'next/image';
import { ORGANIZERS } from '@/lib/data';
import { Card } from './ui/card';

export function Organizers() {
  return (
    <section id="organizers" className="py-24 bg-black/50 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            Organizers
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            Powered by industry and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {ORGANIZERS.map((org) => (
            <Card 
              key={org.name}
              className="bg-card border-border backdrop-blur-md glow-hover p-8 flex flex-col items-center justify-center transition-all group"
            >
              <div className="relative w-32 h-32 mb-6  group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-110">
                <Image
                  src={org.logo}
                  alt={org.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold tracking-widest uppercase text-white/80 group-hover:text-white group-hover:text-primary transition-colors">
                {org.name}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
