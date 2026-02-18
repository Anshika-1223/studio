
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Organizers } from '@/components/Organizers';
import { Domains } from '@/components/Domains';
import { Timeline } from '@/components/Timeline';
import { Prizes } from '@/components/Prizes';
import { Partners } from '@/components/Partners';
import { TeamCarousel } from '@/components/TeamCarousel';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { TEAM_MEMBERS } from '@/lib/data';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Organizers />
      <Domains />
      <Timeline />
      <Prizes />
      <div id="team">
        <TeamCarousel title="Organizing Team" members={TEAM_MEMBERS} />
      </div>
      <Partners />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
