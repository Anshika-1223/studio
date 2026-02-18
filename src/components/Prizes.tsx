
"use client";

import { PRIZES } from '@/lib/data';
import { Card } from './ui/card';
import { Trophy, Star, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Prizes() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Trophy className="w-16 h-16 text-yellow-500" />;
      case 1: return <Star className="w-16 h-16 text-gray-400" />;
      case 2: return <Award className="w-16 h-16 text-amber-700" />;
      default: return null;
    }
  };

  return (
    <section id="prizes" className="py-16 mx-auto overflow-hidden flex flex-col justify-center items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
          Awards & <span className="text-primary">Prizes</span>
        </h2>
        <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
          Win big and build a legacy.
        </p>
      </div>

      <div className="flex justify-center">

        <div className="bg-card border glow-hover items-center p-16 rounded-xl transition-all duration-500 overflow-hidden">
          <h1 className="text-4xl font-bold flex flex-col justify-center items-center gap-4">PRICE POOL UPTO <span className='text-8xl'>10,0000 Rs</span></h1>
        </div>
      </div>
    </section>
  );
}
