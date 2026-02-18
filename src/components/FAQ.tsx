
"use client";

import { FAQ_ITEMS } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-black/50 overflow-hidden px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            Common <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            Everything you need to know.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`}
              className="bg-card border border-border transition-all duration-300 hover:border-primary/50"
            >
              <AccordionTrigger className="px-8 py-6 text-xl font-bold tracking-widest uppercase text-left hover:no-underline hover:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-lg text-white/60 leading-relaxed uppercase tracking-wider">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
