export const SITE = {
  name: "Mathi's Nest Ladies Hostel Trichy",
  shortName: "Mathi's Nest",
  tagline: 'Safe & Comfortable Ladies Hostel in Trichy',
  url: 'https://www.mathisnestladieshostel.in',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'contact@mathisnestladieshostel.in',
  emailHref: 'mailto:contact@mathisnestladieshostel.in',
  address: {
    street: 'PRS Complex, Race Course Road, Lourdh Swamy Colony',
    city: 'Trichy',
    state: 'Tamil Nadu',
    country: 'India',
    postalCode: '620020',
    full: "Mathi's Nest Ladies Hostel, PRS Complex, Race Course Road, Lourdh Swamy Colony, Trichy, Tamil Nadu, India",
  },
  geo: {
    latitude: 10.7905,
    longitude: 78.7047,
  },
  mapsUrl: 'https://maps.google.com/?q=Mathi%27s+Nest+Ladies+Hostel+Trichy+Race+Course+Road',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d78.7047!3d10.7905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzI1LjgiTiA3OMKwNDInMTYuOSJF!5e0!3m2!1sen!2sin!4v1700000000000',
  hours: {
    weekdays: 'Open 24 Hours',
    description: 'Reception available 6:00 AM – 10:00 PM daily',
  },
  social: {
    facebook: 'https://facebook.com/mathisnestladieshostel',
    instagram: 'https://instagram.com/mathisnestladieshostel',
    whatsapp: 'https://wa.me/919876543210',
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
