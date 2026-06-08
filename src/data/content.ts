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
  Bath,
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
    "Welcome to Mathi's Nest Ladies Hostel Trichy — a premium, female-friendly accommodation designed for college students, working women, nurses, IT professionals, and government exam aspirants who are searching for a safe ladies hostel in Trichy. Located on Race Course Road in Lourdh Swamy Colony, our hostel offers the perfect blend of comfort, security, and affordability that makes us one of the most trusted girls hostels in Trichy.",
    "When you search for a ladies hostel near me or a hostel near me in Trichy, you deserve more than just a room — you deserve a home. At Mathi's Nest, every resident enjoys a safe environment with 24/7 security, CCTV surveillance, and attentive management that prioritises the well-being of every woman who walks through our doors. Our prime location provides easy access to leading colleges, hospitals, IT parks, and government offices across Trichy, making daily commutes simple and stress-free.",
    "Our comfortable rooms are thoughtfully furnished with modern amenities, ample storage, attached washrooms, and natural lighting. Whether you need a single sharing room for focused study or a triple sharing option for budget-friendly living, we have flexible accommodation to suit your needs. We serve homely, nutritious food prepared with care, maintain spotless common areas through daily housekeeping, and offer facilities including free WiFi, laundry service, power backup, and RO drinking water.",
    "As a dedicated working women's hostel in Trichy, we understand the unique needs of professional women who require a peaceful, secure space after long workdays. Our affordable pricing ensures that quality accommodation remains accessible without compromising on safety or comfort. Join the growing community of residents who have made Mathi's Nest their trusted home — the best ladies hostel in Trichy for women who value safety, cleanliness, and a warm, welcoming atmosphere.",
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
      "Situated on Race Course Road in Lourdh Swamy Colony, Mathi's Nest offers unmatched connectivity to colleges, hospitals, IT corridors, and transport hubs — making it the ideal ladies hostel in Trichy for students and professionals alike.",
  },
  {
    icon: Shield,
    title: 'Safe for Women',
    description:
      'Your safety is our highest priority. With 24/7 security personnel, comprehensive CCTV surveillance, secure entry protocols, and a strictly women-only environment, we are a safe girls hostel in Trichy you can trust completely.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description:
      "Premium accommodation does not have to come with a premium price tag. Our transparent, competitive rates make Mathi's Nest an affordable ladies hostel in Trichy without compromising on quality, comfort, or security.",
  },
  {
    icon: Sparkles,
    title: 'Modern Amenities',
    description:
      'From high-speed WiFi and power backup to RO drinking water, laundry service, and a dedicated study area, every facility is designed to support your daily routine as a student or working professional.',
  },
  {
    icon: HeartHandshake,
    title: 'Friendly Management',
    description:
      'Our approachable, responsive management team is always available to address concerns, assist with room arrangements, and ensure every resident feels valued, heard, and genuinely cared for.',
  },
  {
    icon: Leaf,
    title: 'Clean Environment',
    description:
      'Daily housekeeping, regular deep cleaning, and well-maintained common areas create a hygienic, pleasant living space. Cleanliness is not an afterthought — it is a standard we uphold every single day.',
  },
]

export interface FacilityItem {
  icon: LucideIcon
  title: string
  description: string
}

export const FACILITIES: FacilityItem[] = [
  {
    icon: Shield,
    title: '24/7 Security',
    description:
      'Round-the-clock security personnel ensure a protected environment, giving residents and their families complete peace of mind at all times.',
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description:
      'Strategic CCTV cameras monitor common areas and entry points, adding an extra layer of safety to our secure girls hostel in Trichy.',
  },
  {
    icon: Wifi,
    title: 'Free WiFi',
    description:
      'High-speed internet connectivity supports online classes, remote work, exam preparation, and staying connected with loved ones.',
  },
  {
    icon: Shirt,
    title: 'Laundry Service',
    description:
      'Convenient laundry facilities save you time and effort, so you can focus on your studies and career without daily chores weighing you down.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Homely Food',
    description:
      'Nutritious, home-style meals prepared with fresh ingredients provide the warmth and comfort of home-cooked food every day.',
  },
  {
    icon: SprayCan,
    title: 'Housekeeping',
    description:
      'Professional daily cleaning of rooms and common areas maintains a spotless, hygienic environment throughout the hostel.',
  },
  {
    icon: Zap,
    title: 'Power Backup',
    description:
      'Uninterrupted power supply through backup generators ensures your study sessions and daily routines are never disrupted.',
  },
  {
    icon: Droplets,
    title: 'RO Drinking Water',
    description:
      'Clean, purified RO water is available throughout the premises, promoting health and well-being for every resident.',
  },
  {
    icon: BookOpen,
    title: 'Study Area',
    description:
      'A quiet, well-lit study zone provides the perfect atmosphere for focused exam preparation and academic excellence.',
  },
  {
    icon: Archive,
    title: 'Wardrobe',
    description:
      'Spacious wardrobes and storage solutions in every room keep your belongings organised and easily accessible.',
  },
  {
    icon: Bath,
    title: 'Attached Bathroom',
    description:
      'Clean, well-maintained attached washrooms in every room offer privacy and convenience for daily personal care.',
  },
  {
    icon: Car,
    title: 'Parking',
    description:
      'Secure parking space is available for residents with two-wheelers, adding convenience for working professionals and students.',
  },
]

export interface RoomType {
  title: string
  subtitle: string
  features: string[]
}

export const ROOM_TYPES: RoomType[] = [
  {
    title: 'Single Sharing',
    subtitle: 'Private room for focused study and personal space',
    features: [
      'Comfortable Beds',
      'Storage Space',
      'Ventilation',
      'Daily Cleaning',
      'Attached Washroom',
      'Natural Lighting',
      'Modern Furnishings',
    ],
  },
  {
    title: 'Double Sharing',
    subtitle: 'Ideal balance of privacy and companionship',
    features: [
      'Comfortable Beds',
      'Storage Space',
      'Ventilation',
      'Daily Cleaning',
      'Attached Washroom',
      'Natural Lighting',
      'Modern Furnishings',
    ],
  },
  {
    title: 'Triple Sharing',
    subtitle: 'Budget-friendly option without compromising comfort',
    features: [
      'Comfortable Beds',
      'Storage Space',
      'Ventilation',
      'Daily Cleaning',
      'Attached Washroom',
      'Natural Lighting',
      'Modern Furnishings',
    ],
  },
]

export const ROOM_FEATURE_ICONS: Record<string, LucideIcon> = {
  'Comfortable Beds': BedDouble,
  'Storage Space': Archive,
  Ventilation: Wind,
  'Daily Cleaning': SprayCan,
  'Attached Washroom': Bath,
  'Natural Lighting': Sun,
  'Modern Furnishings': Sparkles,
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priya S.',
    role: 'B.Com Student, Trichy',
    content:
      "I was searching for a safe ladies hostel near me when I found Mathi's Nest. The security here is excellent — CCTV cameras everywhere and friendly staff at the entrance. The food tastes just like home, and my college is only a short bus ride away. The rooms are always clean, and management responds quickly to any request. I feel completely safe living here and would recommend it to any college girl in Trichy.",
    rating: 5,
  },
  {
    name: 'Keerthana M.',
    role: 'Staff Nurse, Trichy',
    content:
      "As a nurse working night shifts, safety was my top priority when choosing accommodation. Mathi's Nest is the best working women's hostel in Trichy I have experienced. The 24/7 security gives my parents peace of mind, and the attached washroom in my room is a huge plus. Food is served on time even after my late shifts. The location on Race Course Road is perfect for my hospital commute.",
    rating: 5,
  },
  {
    name: 'Divya R.',
    role: 'IT Professional, Trichy',
    content:
      "I moved to Trichy for my first job and needed a reliable girls PG in Trichy. Mathi's Nest exceeded my expectations with fast WiFi, power backup during outages, and a peaceful study area for my certification exams. The management is incredibly friendly and helped me settle in on day one. The hostel is spotlessly clean, and the affordable pricing made it an easy choice for a young professional.",
    rating: 5,
  },
  {
    name: 'Nivetha K.',
    role: 'Engineering Student, Trichy',
    content:
      "Finding a fully furnished ladies hostel in Trichy was challenging until a friend recommended Mathi's Nest. The triple sharing room is spacious with good ventilation and natural lighting. Daily cleaning keeps everything fresh, and the laundry service saves me hours every week. I love how close we are to colleges and the bus stand. It truly feels like a second home away from home.",
    rating: 5,
  },
  {
    name: 'Harini P.',
    role: 'Government Exam Aspirant',
    content:
      "I needed a quiet, secure environment to prepare for my TNPSC exams. Mathi's Nest provides exactly that — a dedicated study area, uninterrupted WiFi, and a calm atmosphere. The homely food keeps me energised during long study sessions. Management is supportive and understanding of exam schedules. Among all the hostels for ladies I visited in Trichy, this one stood out for its cleanliness and professionalism.",
    rating: 5,
  },
  {
    name: 'Swetha R.',
    role: 'MBA Student, Trichy',
    content:
      "Safety, food, and location — Mathi's Nest checks all three boxes perfectly. The ladies hostel in Trichy is well-maintained with modern furnishings and RO drinking water. My double sharing room has ample storage and a comfortable bed. The friendly management team organised a welcome orientation that made settling in effortless. I have recommended this hostel to three of my classmates already.",
    rating: 5,
  },
  {
    name: 'Anitha V.',
    role: 'School Teacher, Trichy',
    content:
      "After relocating to Trichy for a teaching position, I wanted women accommodation in Trichy that felt safe and homely. Mathi's Nest delivers on every promise — CCTV security, clean rooms, nutritious meals, and a prime location near Race Course Road. Parking for my scooter is convenient, and the housekeeping staff does a wonderful job. I have been here for eight months and could not be happier.",
    rating: 5,
  },
  {
    name: 'Pavithra S.',
    role: 'Pharmacy Student, Trichy',
    content:
      "My parents were particular about finding a secure girls hostel in Trichy before I joined college. Mathi's Nest gave them complete confidence with its women-only policy, security guards, and transparent management. The food is delicious and varied, the rooms are well-ventilated, and the WiFi is reliable for online lectures. It is easily the best ladies hostel in Trichy for students who value safety and comfort.",
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
    "Searching for a ladies hostel near me or a hostel near me in Trichy? Mathi's Nest Ladies Hostel is strategically located in Lourdh Swamy Colony on Race Course Road — one of the most well-connected areas in the city. Whether you are a college student, a working professional, or a nurse seeking reliable women accommodation in Trichy, our hostel offers the safety, comfort, and convenience you deserve.",
    "As a leading girls hostel in Trichy, we cater to the diverse needs of modern women. Our ladies hostel Trichy facility is purpose-built for female residents, ensuring a secure, respectful, and supportive environment. From affordable single sharing rooms to spacious triple sharing options, Mathi's Nest is the working women's hostel that balances quality living with budget-friendly pricing.",
    "Residents and families consistently rate us among the best ladies hostel in Trichy options available today. With CCTV security, homely meals, free WiFi, laundry service, and attentive management, we have earned our reputation as a safe girls hostel in Trichy. Visit Mathi's Nest today and discover why so many women choose us when they search for a ladies hostel in Trichy or a girls PG near me.",
  ],
} as const
