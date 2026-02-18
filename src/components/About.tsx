
"use client";

import { ABOUT_DATA } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
          About MIH <span className="text-primary">4.0</span>
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto uppercase tracking-widest font-medium">
          A movement to empower innovation and technological growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {ABOUT_DATA.map((item, idx) => (
          <Card 
            key={item.title} 
            className="bg-card border-border backdrop-blur-md glow-hover transition-transform hover:-translate-y-2 p-4 md:p-8"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-black tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white">
                  {idx + 1}
                </span>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {item.content.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-4 items-start group">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-lg leading-relaxed text-white/80 group-hover:text-white transition-colors">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
