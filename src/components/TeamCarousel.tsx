
"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamCarouselProps {
  title: string;
  members: TeamMember[];
}

export function TeamCarousel({ title, members }: TeamCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline inline-block">
              {title}
            </h2>
            <p className="text-lg text-white/60 uppercase tracking-widest font-medium mt-4">
              Meet the visionaries behind the scenes.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="border-primary text-primary hover:bg-primary hover:text-white rounded-none transform skew-x-[-12deg]"
            >
              <ChevronLeft className="transform skew-x-[12deg]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="border-primary text-primary hover:bg-primary hover:text-white rounded-none transform skew-x-[-12deg]"
            >
              <ChevronRight className="transform skew-x-[12deg]" />
            </Button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {members.map((member, index) => {
              const isActive = index === selectedIndex;
              return (
                <div 
                  key={index} 
                  className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-4"
                >
                  <div className={cn(
                    "bg-card border-border border transition-all duration-500 transform overflow-hidden relative",
                    isActive ? "scale-105 border-primary shadow-[0_0_30px_rgba(220,38,38,0.2)] z-10" : "scale-90 opacity-40"
                  )}>
                    <div className="aspect-square relative grayscale hover:grayscale-0 transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        data-ai-hint="portrait"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-xl font-black tracking-widest uppercase text-white font-headline">{member.name}</h3>
                        <p className="text-primary font-bold tracking-widest uppercase text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
