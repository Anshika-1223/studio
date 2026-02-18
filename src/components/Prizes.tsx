
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
    <section id="prizes" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
          Awards & <span className="text-primary">Prizes</span>
        </h2>
        <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
          Win big and build a legacy.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 items-end">
        {PRIZES.map((prize, idx) => (
          <Card 
            key={prize.rank}
            className={cn(
              "bg-card border-border glow-hover flex flex-col items-center p-12 transition-all duration-500 relative group overflow-hidden",
              idx === 0 ? "md:scale-110 md:z-10 border-primary/60 shadow-[0_0_40px_rgba(220,38,38,0.15)]" : "md:scale-95 opacity-80 hover:opacity-100"
            )}
          >
            {idx === 0 && (
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-black px-4 py-1 uppercase tracking-widest transform rotate-45 translate-x-[25px] translate-y-[15px] z-10">
                Champion
              </div>
            )}
            
            <div className="mb-8 transform transition-transform group-hover:scale-110 duration-500">
              {getIcon(idx)}
            </div>
            
            <h3 className="text-2xl font-black tracking-widest uppercase mb-2 text-white/80 group-hover:text-white font-headline">{prize.rank}</h3>
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-8">{prize.amount}</span>
            
            <div className="w-full space-y-3 pt-8 border-t border-white/10">
              {prize.perks.map((perk, pIdx) => (
                <div key={pIdx} className="flex items-center gap-3 justify-center text-white/70 font-bold uppercase tracking-widest text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {perk}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
