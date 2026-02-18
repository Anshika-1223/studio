
"use client";

import { CONTACT_INFO } from '@/lib/data';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';

export function Contact() {
  const socialIcons = [
    { icon: <Twitter />, href: CONTACT_INFO.socials.twitter },
    { icon: <Instagram />, href: CONTACT_INFO.socials.instagram },
    { icon: <Linkedin />, href: CONTACT_INFO.socials.linkedin },
    { icon: <MessageSquare />, href: CONTACT_INFO.socials.discord },
  ];

  return (
    <section id="contact" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-white/60 uppercase tracking-widest font-medium">
            We're here to help you innovate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <Card className="lg:col-span-2 bg-card border-border p-12 glow-hover flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black tracking-widest uppercase text-primary mb-1">Email Us</p>
                  <p className="text-xl font-bold tracking-widest uppercase text-white/80">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black tracking-widest uppercase text-primary mb-1">Call Us</p>
                  <p className="text-xl font-bold tracking-widest uppercase text-white/80">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-32 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black tracking-widest uppercase text-primary mb-1">Visit Us</p>
                  <p className="text-lg font-bold tracking-widest uppercase text-white/80 leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="md:w-px bg-white/10 hidden md:block" />

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-2xl font-black tracking-widest uppercase mb-8 font-headline">Follow Us</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {socialIcons.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href}
                    className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* Secondary Registration Link Card */}
          <Card className="bg-primary/5 border border-primary/30 p-12 flex flex-col justify-center items-center text-center group">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 font-headline">Ready to Hack?</h3>
            <p className="text-white/60 text-lg uppercase tracking-widest font-medium mb-10">
              Join hundreds of innovators and build something amazing.
            </p>
            <a 
              href="#"
              className="bg-primary hover:bg-white hover:text-primary transition-all duration-300 text-white font-black tracking-widest uppercase px-12 py-5 text-xl transform skew-x-[-12deg]"
            >
              <span className="transform skew-x-[12deg] inline-block">Secure Your Spot</span>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
