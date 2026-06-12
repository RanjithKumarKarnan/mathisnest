import {
  IndianRupee,
  Mic,
  UtensilsCrossed,
  Gamepad2,
  Wind,
  Flame,
  Shield,
  Star,
  Users,
  MapPin
} from 'lucide-react'

export const SITE = {
  name: "Mathi's Nest Ladies Hostel Trichy",
  shortName: "Mathi's Nest",
  tagline: 'Safe & Comfortable Ladies Hostel in Trichy',
  url: 'https://www.mathisnestladieshostel.in',
  phone: '+91 74013 10001',
  phoneHref: 'tel:+917401310001',
  email: 'yourinfo@mathisnest.com',
  emailHref: 'mailto:yourinfo@mathisnest.com',
  address: {
    street: 'PRS Complex, Race Course Road, Lourdh Swamy Colony',
    city: 'Trichy',
    state: 'Tamil Nadu',
    country: 'India',
    postalCode: '620020',
    full: "Mathi's Nest Ladies Hostel, Race Course Road, Lourdh Swamy Colony, Khaja Nagar, Tiruchirappalli, Tamil Nadu 620020",
  },
  geo: {
    latitude: 10.7905,
    longitude: 78.7047,
  },
  mapsUrl: 'https://maps.google.com/?q=Mathi%27s+Nest+Ladies+Hostel+Trichy+Race+Course+Road',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d78.7047!3d10.7905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzI1LjgiTiA3OMKwNDInMTYuOSJF!5e0!3m2!1sen!2sin!4v1700000000000',
  hours: {
    weekdays: 'Open 24 Hours',
    description: 'Reception available 6:00 AM – 10:00 PM daily',
  },
  social: {
    facebook: 'https://facebook.com/mathisnestladieshostel',
    instagram: 'https://instagram.com/mathisnestladieshostel',
    whatsapp: 'https://wa.me/917401310001',
  },
  copyright: "© 2026 Mathi's Nest Ladies Hostel Trichy. All Rights Reserved.",
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_SLIDES = [
  {
    image: "/images/hero/1.jpg",
    title: "A Safe, Comfortable Home for Women",
    subtitle: "Mathi's Nest offers well-maintained rooms, 24/7 CCTV security, and a peaceful environment.",
  },
  {
    image: "/images/hero/2.jpg",
    title: "Homely Food & Custom Menu",
    subtitle: "Nutritious, delicious, and hygienic meals prepared with care to make you feel at home.",
  },
  {
    image: "/images/hero/3.jpg",
    title: "Premium Custom Facilities",
    subtitle: "Custom AC/Non-AC rooms, high-speed WiFi, geysers, and affordable tariffs.",
  },
  {
    image: "/images/hero/4.jpg",
    title: "Vibrant Community Life",
    subtitle: "Enjoy open mic nights, TV, hostel days, and traditional festival celebrations.",
  },
]

export const HERO_FACILITIES = [
  { label: "Affordable Tariff", icon: IndianRupee },
  { label: "Entertainment & Events", icon: Mic },
  { label: "Homely Custom Food", icon: UtensilsCrossed },
  { label: "Indoor Play Area", icon: Gamepad2 },
  { label: "Custom AC & Non-AC", icon: Wind },
  { label: "Geyser & Heater", icon: Flame },
]

export const TRUST_INDICATORS = [
  {
    icon: Shield,
    value: '24/7',
    label: 'Security & CCTV',
    description: 'Round-the-clock protection',
  },
  {
    icon: Star,
    value: '4.5★',
    label: 'Resident Rating',
    description: 'From 39+ verified reviews',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Happy Residents',
    description: 'Students & working women',
  },
  {
    icon: MapPin,
    value: '0.5 km',
    label: 'Prime Location',
    description: 'Race Course Road, Trichy',
  },
] as const