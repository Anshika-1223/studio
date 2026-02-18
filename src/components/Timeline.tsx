
"use client";

import { TIMELINE } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-black/50 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            Event <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            Stay on schedule for innovation.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {TIMELINE.map((item, idx) => (
              <div 
                key={item.event} 
                className={cn(
                  "relative flex items-center justify-center md:justify-between group",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content Box */}
                <div className={cn(
                  "w-full md:w-[45%] bg-card border border-border p-8 rounded-none transform skew-x-[-12deg] transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(220,38,38,0.2)]",
                  idx % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <div className="transform skew-x-[12deg]">
                    <span className="text-primary font-black tracking-widest text-2xl mb-2 block uppercase">{item.date}</span>
                    <h3 className="text-2xl font-black tracking-tighter uppercase mb-2 font-headline">{item.event}</h3>
                    <p className="text-white/60 text-lg uppercase tracking-wide font-medium">{item.description}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(220,38,38,1)] hidden md:block z-10" />

                {/* Empty Spacer for desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
