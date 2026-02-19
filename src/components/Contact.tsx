
"use client";

import { CONTACT_INFO } from '@/lib/data';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function Contact() {
  const socialIcons = [
    { icon: <Twitter />, href: CONTACT_INFO.socials.twitter },
    { icon: <Instagram />, href: CONTACT_INFO.socials.instagram },
    { icon: <Linkedin />, href: CONTACT_INFO.socials.linkedin },
    { icon: <MessageSquare />, href: CONTACT_INFO.socials.discord },
  ];

  return (
    <section id="contact" className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
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
          <Card className="lg:col-span-1 bg-card border-border p-8 md:p-12 glow-hover flex flex-col gap-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest uppercase text-primary mb-1">Email Us</p>
                <p className="text-lg font-bold tracking-wide uppercase text-white/80">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest uppercase text-primary mb-1">Call Us</p>
                <p className="text-lg font-bold tracking-wide uppercase text-white/80">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest uppercase text-primary mb-1">Visit Us</p>
                <p className="text-base font-bold tracking-wide uppercase text-white/80 leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 mt-4">
              <h3 className="text-xl font-black tracking-widest uppercase mb-6 font-headline text-center">Follow Us</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialIcons.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* Contact Form Card */}
          <Card className="lg:col-span-2 bg-primary/5 border border-primary/30 p-8 md:p-12">
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-8 font-headline">Send a Message</h3>
            <form className="space-y-6">
              <div className="transform skew-x-[-12deg] w-full">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-2 border-primary/50 text-white placeholder:text-white/60 px-6 py-4 text-lg rounded-none focus:bg-primary/10 focus:border-primary transition-all duration-300 transform skew-x-[12deg]"
                />
              </div>
              <div className="transform skew-x-[-12deg] w-full">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-2 border-primary/50 text-white placeholder:text-white/60 px-6 py-4 text-lg rounded-none focus:bg-primary/10 focus:border-primary transition-all duration-300 transform skew-x-[12deg]"
                />
              </div>
              <div className="transform skew-x-[-12deg] w-full">
                <Textarea
                  placeholder="Your Message"
                  className="bg-transparent border-2 border-primary/50 text-white placeholder:text-white/60 px-6 py-4 text-lg rounded-none h-36 resize-none focus:bg-primary/10 focus:border-primary transition-all duration-300 transform skew-x-[12deg]"
                />
              </div>
              <Button
                size="lg"
                className="w-full cta-pulse bg-primary hover:bg-primary/90 text-white font-black tracking-widest uppercase px-12 py-8 text-xl rounded-none transform skew-x-[-12deg]"
              >
                <span className="transform skew-x-[12deg]">Send Message</span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
