import type { LucideIcon } from 'lucide-react'
import {
  Shield,
  MapPin,
  IndianRupee,
  Sparkles,
  HeartHandshake,
  Leaf,
  Camera,
  Wifi,
  Shirt,
  UtensilsCrossed,
  SprayCan,
  Zap,
  Droplets,
  BookOpen,
  Archive,
  Car,
  BedDouble,
  Sun,
  Wind,
} from 'lucide-react'

export const HERO_TRUST_ITEMS = [
  '24/7 Security',
  'CCTV Surveillance',
  'Free WiFi',
  'Homely Food',
  'Laundry Service',
  'Prime Location',
] as const

export const ABOUT_CONTENT = {
  title: "About Mathi's Nest Ladies Hostel",
  paragraphs: [
    "At Mathi's Nest Ladies Hostel, we don't just offer accommodation. We create a home where college students, working women, nurses, IT professionals, and government exam aspirants can thrive safely in Tiruchirappalli. Situated on Race Course Road in Lourdh Swamy Colony, Khaja Nagar, our hostel has become the go-to choice for women seeking a secure, comfortable, and affordable living space in Trichy.",
    "When you're looking for 'ladies hostel near me' in Trichy, your safety shouldn't be an afterthought. That's why Mathi's Nest puts security first. Our 24/7 security team,comprehensive CCTV surveillance, and dedicated management team work tirelessly to ensure every resident feels protected and cared for. We're not just another girls hostel in Trichy. We're a community built on trust, where your well-being is our top priority.",
    "Living at Mathi's Nest means cutting down commute time and expanding your opportunities. Our Race Course Road location puts you minutes away from Trichy's top colleges, hospitals, IT parks, and government offices. Whether you're heading to class at 8 AM or finishing a shift at 6 PM, our prime spot makes your daily journey smooth and convenient.",
    "As a specialized working women's hostel in Trichy, we understand what professional women need. After long workdays, you deserve a peaceful sanctuary where you can rest, recharge, and feel secure. Our quiet environment, flexible timings, and respectful community make Mathi's Nest the ideal home for women balancing careers and personal growth. We believe every woman should have access to safe, comfortable accommodation. Our transparent, affordable pricing ensures you get premium facilities without breaking your budget. No hidden charges, no compromises on safety, just honest value for your money.",
    "With a 4.5-star rating from 39+ satisfied residents, Mathi's Nest has become Trichy's most trusted ladies hostel. Women who choose us value safety, cleanliness, and a warm atmosphere and they're not alone. Join hundreds of residents who've found their perfect home with us."
  ],
} as const

export interface WhyChooseCard {
  icon: LucideIcon
  title: string
  description: string
}

export const WHY_CHOOSE_US: WhyChooseCard[] = [
  {
    icon: MapPin,
    title: 'Prime Location',
    description:
      "Located on Race Course Road in Lourdh Swamy Colony, Mathi's Nest puts you at the heart of Trichy. Whether you're heading to college, a hospital shift, an IT office, or catching transport, everything is within easy reach. For students and working professionals, this is the perfect ladies hostel in Trichy that saves you time and commute stress.",
  },
  {
    icon: Shield,
    title: 'Safe for Women',
    description:
      "Your safety isn't just important, it's everything to us. We protect you with 24/7 security staff, full CCTV coverage, locked entry systems, and a women-only environment. When you choose Mathi's Nest, you're choosing a trusted, safe girls hostel in Trichy where peace of mind comes guaranteed.",
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description:
      "Quality living shouldn't cost a fortune. At Mathi's Nest, we offer premium facilities at honest, competitive prices. No hidden fees, no surprises, just transparent, affordable rates that make us one of the most budget-friendly ladies hostels in Trichy, without sacrificing comfort or safety.",
  },
  {
    icon: Sparkles,
    title: 'Modern Amenities',
    description:
      "We've equipped every corner of Mathi's Nest to support your success. Enjoy fast WiFi for online classes and work, uninterrupted power backup, pure RO water, convenient laundry service, and a quiet study zone. Whether you're a student or professional, our amenities keep your daily life smooth and stress-free.",
  },
  {
    icon: HeartHandshake,
    title: 'Friendly Management',
    description:
      "Meet a management team that actually cares. We're approachable, quick to respond, and always ready to help whether you need room changes, have questions, or just want someone to listen. At Mathi's Nest, every resident matters. You'll feel valued, heard, and genuinely supported every day.",
  },
  {
    icon: Leaf,
    title: 'Clean Environment',
    description:
      "Cleanliness here is non-negotiable. Our team handles daily housekeeping, weekly deep cleaning, and keeps all common areas spotless and fresh. A hygienic, welcoming home isn't something we do occasionally; it's the standard we follow every single day at Mathi's Nest, the cleanest ladies hostel in Trichy.",
  },
]

export interface FacilityItem {
  icon: LucideIcon
  title: string
  quote: string
  description: string
}

export const FACILITIES: FacilityItem[] = [
  {
    icon: Shield,
    title: '24/7 Security',
    quote: 'The Night Is Dark, But the Hostel Is Safe.',
    description:
      "Round-the-clock security personnel stand guard at Mathi's Nest, ensuring a protected environment for every resident. Our dedicated security team works day and night, giving you and your family complete peace of mind at all times. No matter what hour it is, safety is always on duty.",
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    quote: 'Watchful Eyes, Always on Guard.',
    description:
      "Strategic CCTV cameras cover all common areas, entry points, and walkways throughout our secure girls hostel in Trichy. This extra layer of electronic surveillance complements our human security team, creating a comprehensive safety system that monitors and protects 24/7. You're always watched over, always cared for.",
  },
  {
    icon: Wifi,
    title: 'Free WiFi',
    quote: 'Stay Connected, Stay in the Loop.',
    description:
       "High-speed internet connectivity is available throughout Mathi's Nest, supporting your online classes, remote work, government exam preparation, and video calls with family. Whether you're attending virtual lectures, submitting work assignments, or catching up with loved ones, our reliable WiFi keeps you connected without interruption.",
  },
  {
    icon: Shirt,
    title: 'Laundry Service',
    quote: 'No Dirty Clothes, No Drama.',
    description:
      "Convenient laundry facilities at Mathi's Nest take the chore off your plate. Save precious time and energy on daily washing so you can focus on what matters your studies, career growth, and exam prep. Leave the laundry stress behind and enjoy a hassle-free living experience.",
  },
  {
    icon: UtensilsCrossed,
    title: 'Homely Food',
    quote: 'Feels Like Home, Tastes Like Home.',
    description:
      'Nutritious, home-style meals prepared daily with fresh, quality ingredients bring the warmth of home to your plate. Our carefully crafted menu provides balanced nutrition for students and working professionals, delivering the comfort of home-cooked food every single day. Eat well, feel good, thrive here.',
  },
  {
    icon: SprayCan,
    title: 'Housekeeping',
    quote: 'A Clean Room, A Clear Mind.',
    description:
      "Professional daily cleaning of rooms and common areas maintains Mathi's Nest as a spotless, hygienic living environment. Our dedicated housekeeping team ensures every corner stays fresh and sanitary, creating a peaceful space where your mind can focus on success. Clean surroundings, clear thinking, better results.",
  },
  {
    icon: Zap,
    title: 'Power Backup',
    quote: 'Even When the Lights Go Out, Life Goes On.',
    description:
      "Uninterrupted power supply through reliable backup generators ensures your study sessions, work calls, and daily routines never face disruptions. When the main power fails, our backup system kicks in instantly, keeping lights on, fans running, and WiFi working. Your productivity stays protected, 24/7.",
  },
  {
    icon: Droplets,
    title: 'RO Drinking Water',
    quote: 'Pure, Fresh, and Always Ready.',
    description:
      "Clean, purified RO water is available throughout Mathi's Nest premises, promoting health and well-being for every resident. Our advanced filtration system ensures every drop is safe, fresh, and refreshingly pure. Hydration without concerns pure water, pure health, peace of mind.",
  },
  {
    icon: BookOpen,
    title: 'Study Area',
    quote: 'Where Focus Finds Its Home.',
    description:
      "A quiet, well-lit dedicated study zone provides the perfect atmosphere for focused exam preparation, academic work, and professional development.Designed for concentration and peace, our study area helps government exam aspirants, college students, and professionals achieve academic excellence. Here, focus meets opportunity.",
  },
  {
    icon: Car,
    title: 'Parking',
    quote: 'Park Easy, Live Easy.',
    description:
      "Secure parking space is available for residents with two-wheelers, adding convenience for working professionals and students who commute daily. Your vehicle stays protected in our designated parking area, giving you easy access whenever you need it. Safe parking, stress-free commutes, smooth living.",
  },
]

export interface RoomType {
  title: string
  subtitle: string
  popular?: boolean
  features: string[]
}

const SHARED_ROOM_FEATURES = [
  'Comfortable Beds',
  'Spacious Storage Space',
  'Good Ventilation',
  'Daily Cleaning Service',
  'Natural Lighting',
  'High-Speed WiFi',
  'Power Backup',
]

export const ROOM_TYPES: RoomType[] = [
  {
    title: 'Double Sharing',
    subtitle: 'The perfect balance of privacy and companionship',
    popular: true,
    features: SHARED_ROOM_FEATURES,
  },
  {
    title: 'Four Sharing',
    subtitle: 'Budget-friendly living with a friendly community',
    features: SHARED_ROOM_FEATURES,
  },
]

export const ROOM_FEATURE_ICONS: Record<string, LucideIcon> = {
  'Comfortable Beds': BedDouble,
  'Spacious Storage Space': Archive,
  'Good Ventilation': Wind,
  'Daily Cleaning Service': SprayCan,
  'Natural Lighting': Sun,
  'High-Speed WiFi': Wifi,
  'Power Backup': Zap,
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Suvetha E',
    role: 'Resident',
    content:
      "I've been staying at Mathi's Nest for several months and it has been an amazing experience. The owner is friendly, approachable, and always ready to help whenever needed. The warden ensures everyone is comfortable and cared for while maintaining discipline. The hostel is clean, comfortable, and conveniently located with spacious rooms and well-maintained facilities. I highly recommend Mathi's Nest to anyone looking for a safe and welcoming place to stay.",
    rating: 5,
  },
  {
    name: 'E. Parkavi',
    role: 'Resident for 1.5 Years',
    content:
      "I had a wonderful experience staying at Mathi's Nest for over one and a half years. The cleanliness, atmosphere, food quality, and caring management make this hostel truly special. The rooms are well-maintained and equipped with all essential amenities. The owners always support residents whenever needed, creating a secure and comfortable living environment.",
    rating: 5,
  },
  {
    name: 'Swathi Suji',
    role: 'Student Resident',
    content:
      "The facilities are well-maintained and the warden is courteous, responsive, and supportive. The owner genuinely cares about the well-being of every resident and prioritises safety and comfort. The hostel's convenient location near educational institutions and local amenities makes daily life easier. I would definitely recommend Mathi's Nest to students and working women.",
    rating: 5,
  },
  {
    name: 'Gayathri Gayu',
    role: 'Student Resident',
    content:
      "Mathi's Nest provides a homely environment with strong security arrangements and responsive management. The hostel is comfortable, safe, and well-suited for students. The management team quickly addresses concerns and ensures residents have a pleasant living experience.",
    rating: 5,
  },
  {
    name: 'Sangavi Sugi',
    role: 'Resident',
    content:
      "Mathi's Nest Ladies Hostel offers a clean, safe, and comfortable environment. The facilities are well-maintained, and the management team is attentive to residents' needs. The warden is supportive and cooperative, creating a truly homely atmosphere for everyone staying here.",
    rating: 5,
  },
  {
    name: 'Archana Abi',
    role: 'Working Professional',
    content:
      "Mathi's Nest provides a peaceful and homely atmosphere. The hostel is exceptionally clean and well-maintained. The owner and warden are friendly and always willing to help. Free WiFi, reliable water supply, and a secure environment make it an excellent choice for students and working women.",
    rating: 5,
  },
  {
    name: 'Abi Honeybee',
    role: 'Former Resident',
    content:
      "I always felt safe and at home during my stay at Mathi's Nest. The warden is caring and supportive, and the staff make residents feel welcomed. The rooms are clean, comfortable, and well-maintained. The hostel also organises celebrations and activities that create a warm community atmosphere. It's a perfect place for women looking for safety, comfort, and a supportive environment.",
    rating: 5,
  },
  {
    name: 'Raddy',
    role: 'Student Resident',
    content:
      "The hostel provides excellent facilities including free WiFi, continuous water supply, and good food. The owner and warden are patient, kind, and responsive to residents' needs. The location is very convenient, especially for students studying near EVR College, and safety is given high importance throughout the hostel.",
    rating: 5,
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Which is the best ladies hostel in Trichy?',
    answer:
      "Mathi's Nest Ladies Hostel Trichy is widely regarded as one of the best ladies hostels in Trichy, offering a safe, comfortable, and affordable living environment for students and working women. With 24/7 security, CCTV surveillance, homely food, free WiFi, and a prime location on Race Course Road, we provide everything you need in a premium girls hostel in Trichy.",
  },
  {
    question: "Is Mathi's Nest safe for working women?",
    answer:
      "Absolutely. Mathi's Nest is a dedicated working women's hostel in Trichy with round-the-clock security, CCTV monitoring, secure entry protocols, and a strictly women-only environment. Our management team is trained to support professional women, including those working night shifts, ensuring a safe and respectful atmosphere at all times.",
  },
  {
    question: 'Do you provide food at the hostel?',
    answer:
      'Yes, we serve fresh, homely, and nutritious meals daily. Our kitchen prepares balanced breakfast, lunch, and dinner using quality ingredients. The food is designed to provide the comfort of home-cooked meals, which is especially appreciated by students and working women living away from their families.',
  },
  {
    question: "Is WiFi available at Mathi's Nest?",
    answer:
      "Yes, high-speed free WiFi is available throughout the hostel premises. Whether you are attending online classes, working remotely, preparing for government exams, or staying in touch with family, our reliable internet connection supports all your connectivity needs.",
  },
  {
    question: 'Do you have CCTV security?',
    answer:
      "Yes, comprehensive CCTV surveillance covers all common areas, entry points, and corridors. Combined with 24/7 security personnel, this makes Mathi's Nest a secure girls hostel in Trichy where residents and their families can feel confident about safety.",
  },
  {
    question: 'Do you provide laundry service?',
    answer:
      'Yes, we offer convenient laundry service for all residents. This facility saves valuable time for students and working professionals, allowing you to focus on academics and career without worrying about daily washing and drying chores.',
  },
  {
    question: 'How close is the hostel to colleges in Trichy?',
    answer:
      "Mathi's Nest is strategically located on Race Course Road in Lourdh Swamy Colony, providing easy access to major colleges and universities across Trichy. Public transport, auto-rickshaws, and bus routes are readily available, making daily commutes quick and affordable for college students.",
  },
  {
    question: 'What facilities are available at the hostel?',
    answer:
      'Our facilities include 24/7 security, CCTV surveillance, free WiFi, laundry service, homely food, daily housekeeping, power backup, RO drinking water, a study area, wardrobes, attached bathrooms, and parking. These amenities make us a fully furnished ladies hostel in Trichy suited for modern living.',
  },
  {
    question: "Can working professionals stay at Mathi's Nest?",
    answer:
      "Yes, Mathi's Nest welcomes working women, nurses, IT professionals, teachers, and other female professionals. Our peaceful environment, flexible timings, secure premises, and homely amenities make it an ideal working women's hostel near Race Course Road, Trichy.",
  },
  {
    question: 'Is parking available at the hostel?',
    answer:
      'Yes, secure parking is available for residents with two-wheelers. This is particularly convenient for working professionals and students who commute daily by scooter or motorcycle, adding an extra layer of practicality to your stay.',
  },
  {
    question: 'What room sharing options are available?',
    answer:
      'We offer single sharing, double sharing, and triple sharing rooms. Each option includes comfortable beds, storage space, ventilation, daily cleaning, attached washroom, natural lighting, and modern furnishings — allowing you to choose based on your budget and privacy preferences.',
  },
  {
    question: "Is Mathi's Nest an affordable ladies hostel in Trichy?",
    answer:
      "Yes, we offer competitive and transparent pricing across all room types. Mathi's Nest is designed to be an affordable ladies hostel in Trichy that does not compromise on safety, cleanliness, or quality amenities — making premium accommodation accessible to students and working women.",
  },
  {
    question: "How do I book a room at Mathi's Nest?",
    answer:
      'You can book a room by calling us directly, sending an email, or scheduling a visit through our contact section. We recommend visiting the hostel in person to see the rooms and facilities before confirming your booking. Our team will guide you through availability, pricing, and the admission process.',
  },
  {
    question: 'Is the hostel suitable for government exam aspirants?',
    answer:
      "Yes, many government exam aspirants choose Mathi's Nest for its quiet study area, reliable WiFi, peaceful atmosphere, and nutritious food. The hostel provides an environment conducive to focused preparation for TNPSC, banking, and other competitive examinations.",
  },
  {
    question: "What makes Mathi's Nest different from other girls hostels in Trichy?",
    answer:
      "Mathi's Nest combines premium amenities with affordable pricing in a prime Race Course Road location. Our unwavering focus on women's safety, homely food, friendly management, and immaculate cleanliness sets us apart from other ladies PG and hostel options in Trichy. We are not just accommodation — we are a trusted community for women.",
  },
]

export const LOCAL_SEO_CONTENT = {
  title: "Your Trusted Ladies Hostel in Trichy — Mathi's Nest",
  paragraphs: [
    "Searching for a ladies hostel near me or a hostel near me in Trichy? Mathi's Nest Ladies Hostel is strategically located on Race Course Road in Lourdh Swamy Colony, Khaja Nagar, Tiruchirappalli — one of the most well-connected areas in the city. Whether you are a college student, a working professional, or a nurse seeking reliable women accommodation in Trichy, our hostel offers the safety, comfort, and convenience you deserve.",
    "As a leading girls hostel in Trichy, we cater to the diverse needs of modern women. Our ladies hostel Trichy facility is purpose-built for female residents, ensuring a secure, respectful, and supportive environment. From popular double sharing rooms to budget-friendly four sharing options, Mathi's Nest is the working women's hostel that balances quality living with affordable pricing.",
    "Rated 4.5★ by 39+ residents and families, we are consistently ranked among the best ladies hostel in Trichy options available today. With CCTV security, homely meals, free WiFi, laundry service, and attentive management, we have earned our reputation as a safe girls hostel in Trichy. Visit Mathi's Nest today and discover why so many women choose us when they search for a ladies hostel in Trichy or a girls PG near me.",
  ],
} as const

export interface NearbyCategory {
  category: string
  places: { name: string; distance: string }[]
}

export const NEARBY_LOCATIONS: NearbyCategory[] = [
  {
    category: 'Educational',
    places: [
      { name: 'Race IAS Academy', distance: '500 m' },
      { name: 'EVR College', distance: '900 m' },
      { name: 'Law College', distance: '950 m' },
      { name: 'Jamal Mohamed College', distance: '2.5 km' },
      { name: 'Bharathidasan University', distance: '5 km' },
    ],
  },
  {
    category: 'Healthcare',
    places: [
      { name: 'Om Harish Hospital', distance: '25 m' },
      { name: 'Government Hospital Trichy', distance: '2 km' },
      { name: 'Kauvery Hospital', distance: '4 km' },
    ],
  },
  {
    category: 'Tourist & Cultural',
    places: [
      { name: 'Rockfort Temple', distance: '5 km' },
      { name: 'Sri Rangam Temple', distance: '6 km' },
    ],
  },
  {
    category: 'Transport',
    places: [
      { name: 'Main Bus Stand', distance: '2.5 km' },
      { name: 'Trichy Railway Station', distance: '3.5 km' },
      { name: 'Tiruchirappalli International Airport', distance: '9 km' },
    ],
  },
]

export const HOSTEL_RATING = {
  score: 4.5,
  reviewCount: 39,
  tagline: 'Mathi’s Nest — Safe. Comfortable. Home.',
} as const
