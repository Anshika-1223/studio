
import { PlaceHolderImages } from './placeholder-images';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Organizers', href: '#organizers' },
  { name: 'Domains', href: '#domains' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Prizes', href: '#prizes' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  title: 'MIND INSTALLERS HACKATHON 4.0',
  tagline: 'Unleash Your Innovation. Build the Future.',
  date: 'March 14-15, 2025',
  venue: 'IIMT Group of Institutions, Greater Noida',
  time: '10:00 AM Onwards',
};

export const ABOUT_DATA = [
  {
    title: 'Our Vision',
    content: [
      'Empowering the next generation of innovators to solve real-world problems.',
      'Fostering a culture of collaborative building and technical excellence.',
      'Bridging the gap between academic theory and industry application.'
    ],
  },
  {
    title: 'What is MIH?',
    content: [
      'MIH is a premier 24-hour hackathon bringing together bright minds from across the country.',
      'Participants work in teams to prototype innovative solutions within specific domains.',
      'Supported by industry leaders and academic experts.'
    ],
  }
];

export const ORGANIZERS = [
  { name: 'IIMT', logo: PlaceHolderImages.find(img => img.id === 'organizer-iimt')?.imageUrl || '' },
  { name: 'IIIT Delhi', logo: PlaceHolderImages.find(img => img.id === 'organizer-iiitd')?.imageUrl || '' },
  { name: 'IIMT LBF', logo: PlaceHolderImages.find(img => img.id === 'organizer-iimt')?.imageUrl || '' },
  { name: 'Botlab Dynamics', logo: PlaceHolderImages.find(img => img.id === 'organizer-botlab')?.imageUrl || '' },
];

export const DOMAINS = [
  { name: 'AI/ML', icon: '🤖' },
  { name: 'Web3', icon: '🌐' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Sustainability', icon: '🌿' },
  { name: 'EdTech', icon: '🎓' },
  { name: 'Cybersecurity', icon: '🛡️' },
  { name: 'IoT/Robotics', icon: '🔌' },
  { name: 'Web/Android', icon: '📱' },
  { name: 'Drone Tech', icon: '🚁' },
];

export const TIMELINE = [
  { date: 'Feb 15', event: 'Registration Starts', description: 'Early bird registrations open for teams.' },
  { date: 'Feb 28', event: 'Proposal Submission', description: 'Abstract submission deadline for project ideas.' },
  { date: 'March 5', event: 'Shortlisting', description: 'Announcement of teams selected for the final round.' },
  { date: 'March 14', event: 'Check-in & Kickoff', description: 'Arrival at venue and start of the 24-hour sprint.' },
  { date: 'March 15', event: 'Judging', description: 'Project demonstrations and evaluation by the jury.' },
  { date: 'March 15', event: 'Award Ceremony', description: 'Winner announcements and prize distribution.' },
];

export const PRIZES = [
  { rank: '1st Prize', amount: '₹1,00,000', perks: ['Gold Trophy', 'Swag Kits', 'Internship Opportunity'] },
  { rank: '2nd Prize', amount: '₹50,000', perks: ['Silver Trophy', 'Swag Kits', 'Cloud Credits'] },
  { rank: '3rd Prize', amount: '₹25,000', perks: ['Bronze Trophy', 'Swag Kits', 'Certificate of Merit'] },
];

export const PARTNERS = [
  { name: 'DigitalOcean', logo: PlaceHolderImages.find(img => img.id === 'partner-digitalocean')?.imageUrl || '' },
  { name: 'Vercel', logo: PlaceHolderImages.find(img => img.id === 'partner-vercel')?.imageUrl || '' },
  { name: 'Botlab', logo: PlaceHolderImages.find(img => img.id === 'organizer-botlab')?.imageUrl || '' },
  { name: 'IIMT BF', logo: PlaceHolderImages.find(img => img.id === 'organizer-iimt')?.imageUrl || '' },
];

export const TEAM_MEMBERS = [
  { name: 'Dr. Rahul Sharma', role: 'Chief Organizer', image: PlaceHolderImages.find(img => img.id === 'team-member-1')?.imageUrl || '' },
  { name: 'Ananya Gupta', role: 'Event Coordinator', image: PlaceHolderImages.find(img => img.id === 'team-member-2')?.imageUrl || '' },
  { name: 'Vikram Singh', role: 'Technical Lead', image: PlaceHolderImages.find(img => img.id === 'team-member-3')?.imageUrl || '' },
  { name: 'Sara Khan', role: 'Design Lead', image: PlaceHolderImages.find(img => img.id === 'team-member-1')?.imageUrl || '' },
];

export const FAQ_ITEMS = [
  { question: 'Who can participate?', answer: 'Anyone currently enrolled in an undergraduate or postgraduate program can participate.' },
  { question: 'What is the team size?', answer: 'Teams can have 2 to 4 members.' },
  { question: 'Is there a registration fee?', answer: 'No, participation in MIH 4.0 is completely free for shortlisted teams.' },
  { question: 'Will travel be reimbursed?', answer: 'Travel assistance is provided for teams traveling from outside the Delhi-NCR region up to a certain limit.' },
  { question: 'What should I bring?', answer: 'Your laptop, chargers, and any hardware you need for your project.' },
];

export const CONTACT_INFO = {
  email: 'contact@mih.iimt.ac.in',
  phone: '+91 98765 43210',
  address: 'IIMT Group of Institutions, Knowledge Park III, Greater Noida, UP',
  socials: {
    twitter: '#',
    instagram: '#',
    linkedin: '#',
    discord: '#',
  }
};
