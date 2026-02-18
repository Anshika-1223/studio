# **App Name**: MIH 4.0 Redesign

## Core Features:

- Navbar: Fixed top navigation bar with logo, smooth-scroll links, scroll-triggered background change, and hidden links on mobile.
- Hero Section: Full-screen section with animated title shimmer effect, tagline, event details, and a CTA button that scrolls to the contact section.
- About Section: Two content cards for 'Our Vision' and 'What is MIH?' with bullet lists.
- Organizers Section: Grid of organizer cards with logos and hover glow effects.
- Domains Section: Responsive grid of domain cards with emoji icons for various domains (AI/ML, Web3, etc.).
- Timeline Section: Alternating left-right timeline with events, a center spine line, and hover scale/glow effect.
- Data Management: Load data, team members, domains, timeline events, FAQ items, prizes, partners from /lib/data.ts into components

## Style Guidelines:

- Primary color: Dark background (#000000) to create a cyberpunk aesthetic.
- Accent color: Red (#DC2626) for highlights and interactive elements, providing contrast and energy.
- Text color: White (#FFFFFF) for readability against the dark background.
- Card Background: rgba(20,20,20,0.8) for a dark, translucent card with a backdrop blur effect.
- Card Border: rgba(220,38,38,0.3) with glow to #DC2626 on hover.
- Headline font: 'Orbitron', sans-serif, for headings and logo to convey a tech-focused feel.
- Body font: 'Rajdhani', sans-serif, for body text, offering a balance of readability and modern design.
- Hero Title: Implement a CSS shimmer gradient animation for the hero title, enhancing visual appeal.
- CTA Button: Apply a pulse box-shadow effect with a hover lift and shine sweep for the CTA button.
- Cards: Implement a fade-in animation on scroll using Framer Motion whileInView, with a translateY transformation from 30px to 0.