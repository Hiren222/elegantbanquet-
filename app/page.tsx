'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Sparkles,
  Car,
  UtensilsCrossed,
  Users,
  Mic2,
  Palette,
  Zap,
  CheckCircle2,
  X,
  Menu,
  ArrowRight,
  Star,
  ExternalLink,
  Quote,
  Flame,
  HeartHandshake,
  Wine,
  Building2,
  PartyPopper,
  Leaf,
  CalendarDays,
  ShieldCheck,
} from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'wedding' | 'haldi-mehendi' | 'cocktail' | 'corporate' | 'birthday';
  title: string;
  subtitle: string;
  categoryLabel: string;
  imgSrc: string;
  largeImgSrc: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    category: 'wedding',
    title: 'Grand AC Ballroom & Banquet View',
    subtitle: 'Spacious hall with central cooling, ornate crystal chandeliers, and expansive floor layout',
    categoryLabel: 'Spacious AC Hall',
    imgSrc: '/banquetthree.jpeg',
    largeImgSrc: '/banquetthree.jpeg',
  },
  {
    id: '2',
    category: 'wedding',
    title: 'Royal Chiavari Seating & Chandeliers',
    subtitle: 'Round dining tables draped in rich pink linens with gold Chiavari chairs and floral centerpieces',
    categoryLabel: 'Dining & Decor',
    imgSrc: '/banquettwo.jpeg',
    largeImgSrc: '/banquettwo.jpeg',
  },
  {
    id: '3',
    category: 'birthday',
    title: 'Grand Celebration Entrance & Balloon Arch',
    subtitle: 'Peach, white and metallic gold balloon arches with shimmer gold curtains and LED lighting',
    categoryLabel: 'Grand Entrance',
    imgSrc: '/banquetone.jpeg',
    largeImgSrc: '/banquetone.jpeg',
  },
  {
    id: '4',
    category: 'cocktail',
    title: 'Festive Banquet Celebration Setup',
    subtitle: 'Ambient celebration lighting, premium audio, and dedicated party arrangements at Bloom Hotel',
    categoryLabel: 'Event Setup',
    imgSrc: '/banquetfour.jpeg',
    largeImgSrc: '/banquetfour.jpeg',
  },
  {
    id: '5',
    category: 'corporate',
    title: 'Refined Banquet Ambiance & Hospitality',
    subtitle: 'Impeccable event styling, comfortable guest seating, and seamless banquet coordination',
    categoryLabel: 'Hall Ambiance',
    imgSrc: '/banquetonefive.jpeg',
    largeImgSrc: '/banquetonefive.jpeg',
  },
  {
    id: '6',
    category: 'wedding',
    title: 'Google Business Profile & 4.8★ Reviews',
    subtitle: 'Verified 4.8★ rating with 137 authentic Google reviews from satisfied event hosts',
    categoryLabel: '4.8★ Verified',
    imgSrc: '/screenshot.png',
    largeImgSrc: '/screenshot.png',
  },
];

const REVIEWS = [
  {
    author: 'Priyank Naik',
    occasion: 'Grand Family Celebration',
    rating: 5,
    quote: 'The AC hall is spacious and beautifully designed, making it perfect for any occasion.',
    verified: true,
  },
  {
    author: 'Amrita Dalal',
    occasion: 'Wedding & Reception Feast',
    rating: 5,
    quote: 'Beautifully decorated, delicious food with a variety of options.',
    verified: true,
  },
  {
    author: 'Vikram & Radhika Singhania',
    occasion: 'Mehendi & Sangeet Night',
    rating: 5,
    quote: 'Located conveniently right on Juhu Tara Road at Bloom Hotel. The hospitality was top-notch and the Jain food prepared for our family was genuinely authentic and loved by everyone!',
    verified: true,
  },
  {
    author: 'Rohit K. Mehta',
    occasion: 'Corporate Annual Awards',
    rating: 5,
    quote: 'Exceptional acoustics, high-ceiling ballroom atmosphere, and effortless valet parking. The live counters for Mexican and Oriental food were an absolute crowd hit.',
    verified: true,
  },
];

const CUISINES = [
  {
    name: 'Indian Delicacies',
    desc: 'Royal North Indian curries, aromatic Dum Biryanis, tandoor treats, South Indian specialties, and vibrant live Chaat counters.',
    tag: 'Regal Traditions',
    icon: Flame,
    color: 'from-amber-700 to-amber-900',
  },
  {
    name: 'Jain Food Available',
    desc: 'Strictly 100% pure Jain culinary spread prepared with zero onion, zero garlic, and zero root vegetables, with uncompromising hygiene and exquisite taste.',
    tag: 'Pure & Certified',
    icon: Leaf,
    color: 'from-emerald-700 to-emerald-900',
  },
  {
    name: 'Italian Cuisine',
    desc: 'Hand-rolled pastas, artisanal thin-crust pizzas, creamy risottos, antipasti platters, and garlic herb focaccia.',
    tag: 'Artisanal Flavors',
    icon: UtensilsCrossed,
    color: 'from-red-700 to-red-900',
  },
  {
    name: 'Mexican Specialties',
    desc: 'Sizzling fajitas, crispy corn tacos, stuffed quesadillas, loaded nachos, and house-made guacamole & salsa bar.',
    tag: 'Fiesta Treats',
    icon: Sparkles,
    color: 'from-orange-700 to-orange-900',
  },
  {
    name: 'Oriental Cuisine',
    desc: 'Steaming gourmet dim sums, wok-tossed noodles, fragrant wok fried rice, manchurian bowls, and Asian stir-fries.',
    tag: 'Wok & Steam',
    icon: UtensilsCrossed,
    color: 'from-yellow-700 to-amber-800',
  },
  {
    name: 'Thai Feasts',
    desc: 'Aromatic green and red Thai curries, authentic Pad Thai noodles, Som Tum salad, and fragrant jasmine rice.',
    tag: 'Aromatic Herbs',
    icon: UtensilsCrossed,
    color: 'from-teal-700 to-teal-900',
  },
];

const EVENT_TYPES = [
  {
    title: 'Weddings',
    desc: 'Grand mandap setup, regal stage, luxurious bridal entry, and banquet dining for your once-in-a-lifetime vows.',
    icon: HeartHandshake,
  },
  {
    title: 'Haldi',
    desc: 'Sun-drenched yellow marigold decor, brass urlis, floral jewellery lounge, and festive celebration vibes.',
    icon: Sparkles,
  },
  {
    title: 'Mehendi',
    desc: 'Colorful bohemian tents, intricate floral backdrops, live snack stations, and comfortable bridal seating.',
    icon: Palette,
  },
  {
    title: 'Cocktail Parties',
    desc: 'Chic ambient lighting, state-of-the-art sound console, wide dance floor, and handcrafted beverage catering.',
    icon: Wine,
  },
  {
    title: 'Corporate Events',
    desc: 'Executive award galas, brand launches, seminars, and networking banquets with high-speed AV setup.',
    icon: Building2,
  },
  {
    title: 'Birthday Parties',
    desc: 'Themed jubilee celebrations, 1st birthday galas, silver/golden anniversaries, photo booths, and custom dessert tables.',
    icon: PartyPopper,
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState('300 seated / 500 floating');
  const [foodPreference, setFoodPreference] = useState('Multi-Cuisine with Jain Options');
  const [phoneError, setPhoneError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneClean = phoneNumber.trim();
    const phoneRegex = /^[0-9+\-\s()]{8,20}$/;
    if (!phoneRegex.test(phoneClean)) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await new Promise(res => setTimeout(res, 850));
      setSubmitSuccess(true);
      setFullName('');
      setPhoneNumber('');
      setEventDate('');
      setEventType('');
    } catch {
      setSubmitError('Unable to submit inquiry at this time. Please call 098335 57900 or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];

  const whatsappMessage = encodeURIComponent(
    'Hello Elegant Banquets Juhu, I would like to inquire about booking your spacious AC hall for an event.'
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans antialiased selection:bg-[#F2E4B8] selection:text-[#34080F]">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#220409] text-stone-300 text-xs py-2 px-4 border-b border-[#4A0E17]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F2E4B8] font-semibold text-[11px] border border-[#D4AF37]/30">
              <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
              4.8 ★ · 137 Reviews
            </span>
            <span className="text-stone-300 hidden md:inline">
              Located on Juhu Tara Road at Bloom Hotel, Mumbai
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:09833557900"
              className="flex items-center gap-1.5 text-stone-200 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call: 098335 57900</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={`https://wa.me/919833557900?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <span>WhatsApp: +91 98335 57900</span>
            </a>
          </div>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <a href="#hero" id="nav-logo" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-[#34080F] text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40 shadow-inner group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#220409] block leading-tight">
                  Elegant Banquets Juhu
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#947219] font-medium block">
                  Ground Floor, Bloom Hotel · Juhu, Mumbai
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
              <a href="#hero" id="link-hero" className="hover:text-[#4A0E17] transition-colors py-1">Home</a>
              <a href="#about" id="link-about" className="hover:text-[#4A0E17] transition-colors py-1">About</a>
              <a href="#gallery" id="link-gallery" className="hover:text-[#4A0E17] transition-colors py-1">Gallery</a>
              <a href="#location" id="link-location" className="hover:text-[#4A0E17] transition-colors py-1">Location</a>
            </nav>

            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:09833557900"
                id="nav-call-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#4A0E17] bg-[#F9F4DF] hover:bg-[#F2E4B8] border border-[#EAD38F] transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#947219]" />
                <span>098335 57900</span>
              </a>

              <a
                href="#booking"
                id="nav-book-btn"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] shadow-md hover:shadow-lg transition-all border border-[#D4AF37]/30"
              >
                Book Your Date
              </a>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-700 hover:text-[#4A0E17] hover:bg-stone-100 transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-[#4A0E17] hover:bg-stone-50"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-[#4A0E17] hover:bg-stone-50"
            >
              About
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-[#4A0E17] hover:bg-stone-50"
            >
              Gallery
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-[#4A0E17] hover:bg-stone-50"
            >
              Location
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:09833557900"
                className="w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold text-[#4A0E17] bg-[#F9F4DF] border border-[#EAD38F] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 098335 57900</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-full text-sm font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] shadow"
              >
                Book Your Date
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('/banquetthree.jpeg')" }}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#220409]/92 via-stone-950/85 to-[#220409]/95" />
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-20 opacity-75" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          
          {/* RATING BADGE NEAR HERO */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/60 backdrop-blur-md mb-6 shadow-xl">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#F2E4B8] tracking-wide">
              4.8 ★ · 137 Reviews
            </span>
            <span className="text-stone-400 text-xs hidden sm:inline">|</span>
            <span className="text-xs font-medium text-stone-200 hidden sm:inline">
              Bloom Hotel, Juhu Tara Rd, Mumbai
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-5 leading-tight drop-shadow-md">
            Elegant Banquets Juhu
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#F2E4B8] font-light mb-6 drop-shadow">
            &ldquo;Where Every Celebration Becomes a Memory&rdquo;
          </p>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-stone-200 font-light mb-10 leading-relaxed">
            Located on Juhu Tara Road at Bloom Hotel, our spacious AC hall provides a majestic setting with 300 seated / 500 floating capacity. Masterful culinary offerings across Indian, Italian, Mexican, Oriental, Thai, and dedicated 100% Jain food.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
            <a
              href="#booking"
              id="hero-book-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] border-2 border-[#D4AF37]/70 shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-base flex items-center justify-center gap-2"
            >
              <span>Book Your Date</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </a>

            <a
              href="tel:09833557900"
              id="hero-call-btn"
              className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-stone-900 bg-[#F2E4B8] hover:bg-[#EAD38F] shadow-xl hover:scale-105 transition-all text-base flex items-center justify-center gap-2.5"
            >
              <Phone className="w-5 h-5 text-[#4A0E17]" />
              <span>Call Now: 098335 57900</span>
            </a>

            <a
              href={`https://wa.me/919833557900?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-xl hover:scale-105 transition-all text-base flex items-center justify-center gap-2.5"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* METRIC STRIP */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-300 text-xs sm:text-sm">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <span className="block text-[#F2E4B8] font-serif text-xl sm:text-2xl font-bold">300 / 500</span>
              <span className="text-stone-300 font-medium">300 Seated / 500 Floating</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <span className="block text-[#F2E4B8] font-serif text-xl sm:text-2xl font-bold">Spacious AC</span>
              <span className="text-stone-300 font-medium">Central Climate Control</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <span className="block text-[#F2E4B8] font-serif text-xl sm:text-2xl font-bold">Juhu Tara Rd</span>
              <span className="text-stone-300 font-medium">Ground Floor, Bloom Hotel</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
              <span className="block text-[#F2E4B8] font-serif text-xl sm:text-2xl font-bold">Jain &amp; Multi-Cuisine</span>
              <span className="text-stone-300 font-medium">6 Gourmet Cuisines</span>
            </div>
          </div>

        </div>
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#FDFBF7] to-transparent z-20" />
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F]">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                About Our Venue
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] leading-tight">
              An Exquisite Venue on Juhu Tara Road
            </h2>

            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-stone-900 font-semibold">Located on Juhu Tara Road</strong>, at the ground floor of the prestigious Bloom Hotel in Shivaji Nagar, Juhu, Mumbai, <strong className="text-[#4A0E17] font-serif">Elegant Banquets Juhu</strong> is one of Mumbai’s most distinguished addresses for milestone celebrations.
              </p>
              <p>
                Step inside our <strong className="text-stone-900 font-semibold">spacious AC hall</strong>, crafted with grand chandeliers, graceful ambient lighting, polished interiors, and high acoustic standards. Designed to comfortably accommodate <strong className="text-stone-900 font-semibold">300 seated or up to 500 floating guests</strong>, the venue provides an idyllic atmosphere for both intimate rituals and lavish receptions.
              </p>
              <p>
                Whether you are hosting a traditional Wedding ceremony, a lively Haldi or Mehendi, an energetic Cocktail night, an executive Corporate Gala, or a memorable Birthday Party, our devoted event specialists curate every single detail with precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Located on Juhu Tara Road</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Ground floor, Bloom Hotel, Juhu</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Spacious AC Hall</h4>
                  <p className="text-xs text-stone-500 mt-0.5">High-tonnage central cooling</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">300 Seated / 500 Floating</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Flexible arrangements</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Jain Food Available</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Separate dedicated prep</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#amenities"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A0E17] hover:text-[#34080F] group"
              >
                <span>View Full Capacity &amp; Amenities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          <div className="lg:col-span-6 relative space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/banquettwo.jpeg"
                alt="Spacious AC Hall at Elegant Banquets Juhu"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#220409]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-[#D4AF37]/40 text-stone-900">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#947219] block">
                      Prime Location · Ground Floor
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#220409]">
                      Bloom Hotel, Juhu Tara Road
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Spacious AC Hall · Valet Parking · 300 Seated / 500 Floating
                    </p>
                  </div>
                  <a
                    href="tel:09833557900"
                    className="p-3 rounded-full bg-[#4A0E17] text-white hover:bg-[#34080F] transition-all shadow shrink-0"
                    aria-label="Call Venue"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Real Photo Strip */}
            <div className="grid grid-cols-3 gap-3">
              <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-md h-24 group cursor-pointer" onClick={() => setSelectedPhoto(GALLERY_DATA[0])}>
                <img src="/banquetthree.jpeg" alt="Grand AC Hall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute bottom-1 inset-x-1 text-[10px] text-center font-semibold text-white bg-black/60 rounded px-1 backdrop-blur-xs truncate">Grand Hall</span>
              </div>
              <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-md h-24 group cursor-pointer" onClick={() => setSelectedPhoto(GALLERY_DATA[2])}>
                <img src="/banquetone.jpeg" alt="Grand Entrance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute bottom-1 inset-x-1 text-[10px] text-center font-semibold text-white bg-black/60 rounded px-1 backdrop-blur-xs truncate">Entrance</span>
              </div>
              <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-md h-24 group cursor-pointer" onClick={() => setSelectedPhoto(GALLERY_DATA[3])}>
                <img src="/banquetfour.jpeg" alt="Celebration Decor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute bottom-1 inset-x-1 text-[10px] text-center font-semibold text-white bg-black/60 rounded px-1 backdrop-blur-xs truncate">Celebration</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. EVENTS HOSTED SECTION */}
      <section id="events" className="py-24 bg-[#FAF5EE] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                Celebrations &amp; Gatherings
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] mb-4">
              Events We Host
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              From sacred rituals and glamorous evening parties to prestigious corporate galas, Elegant Banquets Juhu provides custom decor, lighting, and layout configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENT_TYPES.map((ev, i) => {
              const Icon = ev.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/70 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-6 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#220409] mb-3 group-hover:text-[#4A0E17] transition-colors">
                      {ev.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {ev.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#947219] uppercase tracking-wider">
                      Capacity: Up to 500
                    </span>
                    <a
                      href="#booking"
                      className="text-xs font-bold text-[#4A0E17] hover:text-[#34080F] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-sm">
              <span className="text-sm font-medium text-stone-700">
                Planning a custom celebration at Elegant Banquets Juhu?
              </span>
              <a
                href="tel:09833557900"
                className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#4A0E17] hover:bg-[#34080F] transition-all"
              >
                Call: 098335 57900
              </a>
              <a
                href={`https://wa.me/919833557900?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CUISINE SECTION (Italian, Mexican, Oriental, Thai, Indian, Jain food) */}
      <section id="cuisine" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
              Gourmet Culinary Repertoire
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] mb-4">
            Master-Crafted Cuisines
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Our culinary team crafts tantalizing multi-course buffets, interactive live counters, and exquisite traditional spreads tailored to your community traditions.
          </p>
          
          {/* SPECIAL JAIN FOOD CALLOUT */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 shadow-sm text-sm">
            <Leaf className="w-5 h-5 text-emerald-700 shrink-0" />
            <span className="font-medium">
              <strong className="font-bold">100% Pure Jain Food Available:</strong> Prepared with dedicated culinary care, zero root vegetables, zero onion, and zero garlic without compromising on gourmet flavor.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CUISINES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/70 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F9F4DF] text-[#715413] border border-[#EAD38F]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#220409] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Customizable buffet &amp; live counter setups</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#34080F] via-[#4A0E17] to-[#220409] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
              Custom Menus &amp; Tastings
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Want a curated menu for your guests?
            </h3>
            <p className="text-stone-300 text-sm mt-1 max-w-xl">
              From North Indian and Jain wedding spreads to Italian and Mexican live stations, our master chefs design customized feast itineraries.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:09833557900"
              className="px-6 py-3 rounded-full text-sm font-semibold text-stone-900 bg-[#F2E4B8] hover:bg-[#EAD38F] shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call 098335 57900</span>
            </a>
            <a
              href={`https://wa.me/919833557900?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all flex items-center gap-2"
            >
              <span>WhatsApp Menu Request</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-200">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
              Visual Showcase
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] mb-4">
            Venue Setups &amp; Ambience
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Witness how our spacious AC hall transforms for grand weddings, intimate haldi rituals, colorful mehendis, high-energy cocktail nights, and corporate galas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Celebrations' },
              { id: 'wedding', label: 'Weddings' },
              { id: 'haldi-mehendi', label: 'Haldi & Mehendi' },
              { id: 'cocktail', label: 'Cocktail Parties' },
              { id: 'corporate', label: 'Corporate Events' },
              { id: 'birthday', label: 'Birthday Parties' },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                id={`filter-${tab.id}`}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#4A0E17] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              id={`gallery-item-${item.id}`}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl bg-stone-100 cursor-pointer aspect-[4/3] transform-gpu will-change-transform border border-stone-200"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#220409]/95 via-[#220409]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#D4AF37] text-[#220409] rounded-full w-max mb-2 shadow-sm">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-bold text-white leading-snug">{item.title}</h3>
                <p className="text-xs text-stone-200 mt-1 line-clamp-2">{item.subtitle}</p>
                <span className="text-xs text-[#F2E4B8] mt-2 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Click to view full photo &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              id="gallery-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
                onClick={e => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Close lightbox"
                  className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 rounded-full hover:bg-[#4A0E17] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="max-h-[75vh] flex items-center justify-center bg-black">
                  <img
                    src={selectedPhoto.largeImgSrc}
                    alt={selectedPhoto.title}
                    className="max-h-[75vh] w-auto object-contain mx-auto"
                  />
                </div>
                <div className="p-6 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                      {selectedPhoto.categoryLabel}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-white">{selectedPhoto.title}</h4>
                    <p className="text-xs text-stone-300">{selectedPhoto.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#booking"
                      onClick={() => setSelectedPhoto(null)}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] border border-[#D4AF37]/40"
                    >
                      Inquire for This Setup
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 6. CAPACITY & AMENITIES SECTION */}
      <section id="amenities" className="py-24 bg-[#FAF5EE] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                Hall Specifications
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] mb-4">
              Capacity &amp; Amenities
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Designed to host <strong className="text-stone-900">300 seated</strong> and up to <strong className="text-stone-900">500 floating</strong> guests with world-class facilities and seamless event execution.
            </p>
          </div>

          {/* CAPACITY HIGHLIGHT CARD */}
          <div className="mb-14 p-8 rounded-3xl bg-white border border-[#D4AF37]/40 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F9F4DF] text-[#715413] border border-[#EAD38F]">
                Guest Capacity Guide
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#220409]">
                Ideal for 300 Seated &amp; 500 Floating
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Whether you prefer formal round-table banquet seating with theatrical stage sightlines, or a dynamic floating reception with cocktail high-tops and live gourmet counters, our spacious AC hall provides flexible layouts tailored to your guest list.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF5EE] border border-stone-200 text-center">
                  <span className="font-serif text-3xl font-bold text-[#4A0E17] block">300</span>
                  <span className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Seated Guests</span>
                  <span className="text-[11px] text-stone-500 block mt-0.5">Round Table &amp; Theater</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF5EE] border border-stone-200 text-center">
                  <span className="font-serif text-3xl font-bold text-[#4A0E17] block">500</span>
                  <span className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Floating Guests</span>
                  <span className="text-[11px] text-stone-500 block mt-0.5">Receptions &amp; Mixers</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src="/banquetfour.jpeg"
                alt="Banquet Seating at Elegant Banquets Juhu"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-medium text-sm">
                  Spacious AC Hall on Juhu Tara Road · Bloom Hotel
                </span>
              </div>
            </div>
          </div>

          {/* AMENITIES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/70 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-5 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#220409] mb-2">Spacious AC Hall</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Centralized high-tonnage climate control ensuring refreshing guest comfort in every season.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/70 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-5 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#220409] mb-2">Valet &amp; Hotel Parking</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Dedicated valet parking service at the ground floor entrance of Bloom Hotel on Juhu Tara Road.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/70 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-5 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#220409] mb-2">Multi-Cuisine &amp; Jain Food</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Master chef offerings covering Indian, Italian, Mexican, Oriental, Thai, and 100% Jain food.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/70 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-5 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#220409] mb-2">Capacity: 300 / 500</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Optimal hall dimensions comfortably accommodating 300 seated banquet or 500 floating reception guests.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/70 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-5 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors">
                <Mic2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#220409] mb-2">Stage &amp; Audio System</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Raised stage with digital acoustic sound, wireless microphones, and versatile warm lighting fixtures.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/70 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-5 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#220409] mb-2">Decoration &amp; Floral Styling</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                In-house creative team delivering bespoke floral mandaps, haldi/mehendi backdrops, and modern themes.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/70 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-5 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#220409] mb-2">100% Power Backup</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Heavy-duty silent industrial backup generators ensuring completely uninterrupted celebrations.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-[#D4AF37]/70 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center mb-5 group-hover:bg-[#4A0E17] group-hover:text-[#F2E4B8] transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#220409] mb-2">Bridal Suite &amp; Green Rooms</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Private, air-conditioned dressing rooms with vanity mirrors and en-suite facilities for hosts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION (Using the real ones) */}
      <section id="testimonials" className="py-24 bg-white border-b border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                Client Reviews
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#220409] mb-3">
              Celebration Stories &amp; Reviews
            </h2>
            
            {/* RATING BADGE PROMINENTLY */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EE] border border-[#D4AF37]/50 text-stone-800 text-sm font-bold my-2 shadow-sm">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span>4.8 ★ · 137 Google Reviews</span>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-2">
              Read real verified experiences from hosts who celebrated their cherished occasions at Elegant Banquets Juhu.
            </p>
          </div>
        </div>

        {/* FEATURED REAL REVIEWS GRID */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Review 1 - Priyank Naik */}
          <div className="p-8 rounded-3xl bg-[#FDFBF7] border-2 border-[#D4AF37]/50 shadow-md relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#4A0E17] text-[#F2E4B8] text-xs font-bold rounded-full uppercase tracking-wider shadow">
              Verified Review
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#D4AF37]/40" />
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#220409] font-medium italic leading-relaxed mb-6">
                &ldquo;The AC hall is spacious and beautifully designed, making it perfect for any occasion.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-[#220409] text-lg">Priyank Naik</h4>
                <span className="text-xs text-stone-500">Verified Client Review</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Google Verified</span>
              </div>
            </div>
          </div>

          {/* Review 2 - Amrita Dalal */}
          <div className="p-8 rounded-3xl bg-[#FDFBF7] border-2 border-[#D4AF37]/50 shadow-md relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#4A0E17] text-[#F2E4B8] text-xs font-bold rounded-full uppercase tracking-wider shadow">
              Verified Review
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#D4AF37]/40" />
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#220409] font-medium italic leading-relaxed mb-6">
                &ldquo;Beautifully decorated, delicious food with a variety of options.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-[#220409] text-lg">Amrita Dalal</h4>
                <span className="text-xs text-stone-500">Verified Client Review</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Google Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* GOOGLE PROFILE & 4.8★ RATING BADGE SHOWCASE */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#FAF5EE] to-[#FDFBF7] border border-[#D4AF37]/50 shadow-md flex flex-col sm:flex-row items-center gap-6">
            <div
              className="sm:w-2/5 shrink-0 rounded-2xl overflow-hidden border-2 border-stone-200 shadow-md cursor-pointer group relative"
              onClick={() => setSelectedPhoto(GALLERY_DATA[5])}
            >
              <img
                src="/screenshot.png"
                alt="Google Rating Badge 4.8 Stars - Elegant Banquets Juhu"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                Click to Enlarge
              </div>
            </div>
            <div className="sm:w-3/5 space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] text-xs font-bold text-[#715413]">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                <span>4.8 ★ Google Verified · 137 Reviews</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#220409]">
                Rated 4.8 Out of 5 on Google
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Trusted by hundreds of families and corporate event planners across Mumbai for milestone celebrations at Bloom Hotel on Juhu Tara Road.
              </p>
              <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-stone-500 font-medium">
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" /> 100% Genuine Reviews
                </span>
                <span>•</span>
                <span>Bloom Hotel, Juhu Tara Rd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Horizontal Glide Track */}
        <div className="relative w-full overflow-hidden group py-2">
          <div className="absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-horizontal flex gap-6 px-4">
            {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((item, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[380px] shrink-0 p-6 sm:p-7 rounded-2xl bg-[#FDFBF7] border border-stone-200/90 shadow-sm hover:shadow-md hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-[#D4AF37]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#D4AF37]/40" />
                  </div>
                  <p className="text-stone-700 text-sm sm:text-base italic leading-relaxed mb-6 font-light">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-[#220409] text-base leading-tight">
                      {item.author}
                    </h4>
                    <span className="text-xs text-stone-500 mt-0.5 block">
                      {item.occasion}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#947219] bg-[#F9F4DF] px-2.5 py-1 rounded-full border border-[#EAD38F] shrink-0">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOOKING FORM SECTION */}
      <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[#4A0E17] via-[#D4AF37] to-[#4A0E17]" />

          <div className="p-8 sm:p-12 lg:p-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F] mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                  Inquire &amp; Reserve Date
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#220409] mb-3">
                Book Your Date at Elegant Banquets Juhu
              </h2>
              <p className="text-stone-600 text-sm sm:text-base">
                Tell us about your upcoming event. Our banquet manager will verify date availability, guide you on custom catering (including pure Jain options), and arrange a private hall visit.
              </p>
            </div>

            {/* QUICK CONTACT BAR INSIDE FORM */}
            <div className="mb-8 p-4 rounded-2xl bg-[#FAF5EE] border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm font-medium text-stone-800">
                <div className="w-10 h-10 rounded-full bg-[#4A0E17] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-[#220409]">Need Immediate Date Confirmation?</span>
                  <span className="text-xs text-stone-600">Call our manager directly or chat on WhatsApp</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:09833557900"
                  className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#4A0E17] hover:bg-[#34080F] transition-all"
                >
                  Call 098335 57900
                </a>
                <a
                  href={`https://wa.me/919833557900?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {submitSuccess && (
              <div className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-emerald-950 mb-1">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-emerald-800 leading-relaxed">
                      Thank you for contacting Elegant Banquets Juhu. Our banquet coordinator will reach out to you via phone (098335 57900) or WhatsApp within a few hours to confirm hall availability and prepare a personalized package.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
                <p>{submitError}</p>
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Full Name <span className="text-[#4A0E17]">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full_name"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="e.g. Priyank Naik"
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone-number" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Phone Number <span className="text-[#4A0E17]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    name="phone_number"
                    required
                    value={phoneNumber}
                    onChange={e => {
                      setPhoneNumber(e.target.value);
                      if (phoneError) setPhoneError(false);
                    }}
                    placeholder="e.g. 098335 57900"
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  />
                  {phoneError && (
                    <p className="text-xs text-red-600 mt-1">
                      Please enter a valid contact number (minimum 8 digits).
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="event-date" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Event Date <span className="text-[#4A0E17]">*</span>
                  </label>
                  <input
                    type="date"
                    id="event-date"
                    name="event_date"
                    min={todayStr}
                    required
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="event-type" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Event Type <span className="text-[#4A0E17]">*</span>
                  </label>
                  <select
                    id="event-type"
                    name="event_type"
                    required
                    value={eventType}
                    onChange={e => setEventType(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  >
                    <option value="" disabled>Select event category...</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Haldi">Haldi</option>
                    <option value="Mehendi">Mehendi</option>
                    <option value="Cocktail Party">Cocktail Party</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Other Celebration">Other Celebration</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guest-count" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Capacity / Expected Guests
                  </label>
                  <select
                    id="guest-count"
                    name="guest_count"
                    value={guestCount}
                    onChange={e => setGuestCount(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  >
                    <option value="100-200 seated">Intimate (100 – 200 Guests)</option>
                    <option value="300 seated">Seated Banquet (Up to 300 Guests)</option>
                    <option value="300 seated / 500 floating">Grand Gala (300 Seated / 500 Floating)</option>
                    <option value="500+ floating">High Capacity Floating (500+ Guests)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="food-pref" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Cuisine Preference
                  </label>
                  <select
                    id="food-pref"
                    name="food_preference"
                    value={foodPreference}
                    onChange={e => setFoodPreference(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#4A0E17] transition-all text-sm bg-stone-50/50"
                  >
                    <option value="Multi-Cuisine with Jain Options">Multi-Cuisine + Jain Food Available</option>
                    <option value="Strictly 100% Pure Jain Menu">Strictly 100% Pure Jain Menu</option>
                    <option value="Traditional Indian Wedding Feast">Traditional Indian Wedding Feast</option>
                    <option value="International (Italian, Mexican, Oriental, Thai)">International Live Counters (Italian, Mexican, Thai, Oriental)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  id="submit-booking-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] border border-[#D4AF37]/40 shadow-lg hover:shadow-xl transition-all text-base flex items-center justify-center gap-2 group disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <span>Check Availability &amp; Request Quote</span>
                  )}
                </button>
                <p className="text-center text-xs text-stone-500 mt-3">
                  We respect your privacy. No spam. You may also call us at 098335 57900 anytime.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 9. LOCATION + MAP SECTION */}
      <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F4DF] border border-[#EAD38F]">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#715413]">
                Visit Elegant Banquets Juhu
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#220409] leading-tight">
              Located on Juhu Tara Road, Mumbai
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              Situated right on the bustling and prestigious Juhu Tara Road at Bloom Hotel, our venue offers effortless connectivity for guests across Mumbai and arriving from Mumbai Airport.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Venue Address</h4>
                  <p className="text-stone-700 text-base mt-0.5 font-medium">
                    Ground floor, Bloom Hotel, Juhu Tara Rd,<br />
                    Shivaji Nagar, Juhu, Mumbai 400049
                  </p>
                  <p className="text-xs text-[#947219] mt-1 font-semibold">
                    Prime Juhu beachside hospitality corridor
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Direct Contact Numbers</h4>
                  <p className="text-stone-700 text-sm mt-0.5">
                    Phone / Call Now:{' '}
                    <a href="tel:09833557900" className="font-bold text-[#4A0E17] hover:underline">
                      098335 57900
                    </a>
                  </p>
                  <p className="text-stone-700 text-sm mt-0.5">
                    WhatsApp:{' '}
                    <a
                      href={`https://wa.me/919833557900?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-600 hover:underline"
                    >
                      +91 98335 57900
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">Hall Visiting &amp; Tour Hours</h4>
                  <p className="text-stone-700 text-sm mt-0.5">
                    Monday – Sunday: 10:00 AM – 8:30 PM
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Walk-ins welcome; call ahead to arrange a personal guided walkthrough.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ground+floor+Bloom+Hotel+Juhu+Tara+Rd+Shivaji+Nagar+Juhu+Mumbai+400049"
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-[#4A0E17] hover:bg-[#34080F] border border-[#D4AF37]/40 shadow-md hover:shadow-lg transition-all text-sm"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
              </a>

              <a
                href="tel:09833557900"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[#4A0E17] bg-[#F9F4DF] hover:bg-[#F2E4B8] border border-[#EAD38F] text-sm shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Venue</span>
              </a>
            </div>
          </div>

          {/* GOOGLE MAP EMBED */}
          <div className="lg:col-span-7">
            <div className="w-full h-[400px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border-2 border-stone-200 relative bg-stone-100">
              <iframe
                id="google-map-iframe"
                title="Elegant Banquets Juhu Location Map - Bloom Hotel, Juhu Tara Road"
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?q=Bloom%20Hotel%2C%20Juhu%20Tara%20Rd%2C%20Shivaji%20Nagar%2C%20Juhu%2C%20Mumbai%2C%20Maharashtra%20400049&t=&z=16&ie=UTF8&iwloc=&output=embed"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-stone-200 shadow text-xs font-bold text-[#220409]">
                📍 Bloom Hotel, Juhu Tara Rd, Mumbai 400049
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#220409] text-stone-300 border-t border-[#4A0E17]/60 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-14">
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-black/40 text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  Elegant Banquets Juhu
                </span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                Where every celebration becomes a memory. Located on Juhu Tara Road at Bloom Hotel, our spacious AC hall hosts weddings, haldi, mehendi, cocktail parties, corporate events, and birthdays with 300 seated / 500 floating capacity.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D4AF37]">
                <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                <span className="font-bold">4.8 ★ · 137 Google Reviews</span>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-[#F2E4B8] mb-4 tracking-wide">Quick Navigation</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#hero" className="text-stone-300 hover:text-[#D4AF37] transition-colors">Home</a></li>
                <li><a href="#about" className="text-stone-300 hover:text-[#D4AF37] transition-colors">About Juhu Venue</a></li>
                <li><a href="#events" className="text-stone-300 hover:text-[#D4AF37] transition-colors">Events We Host</a></li>
                <li><a href="#cuisine" className="text-stone-300 hover:text-[#D4AF37] transition-colors">Cuisines &amp; Jain Food</a></li>
                <li><a href="#gallery" className="text-stone-300 hover:text-[#D4AF37] transition-colors">Event Photo Gallery</a></li>
                <li><a href="#amenities" className="text-stone-300 hover:text-[#D4AF37] transition-colors">Capacity &amp; Amenities</a></li>
                <li><a href="#testimonials" className="text-stone-300 hover:text-[#D4AF37] transition-colors">Reviews (4.8 ★)</a></li>
                <li><a href="#location" className="text-stone-300 hover:text-[#D4AF37] transition-colors">Location &amp; Map</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold text-[#F2E4B8] mb-4 tracking-wide">Direct Contact</h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a href="tel:09833557900" className="flex items-center gap-3 text-stone-300 hover:text-white group">
                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#220409] transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span>098335 57900 (Call Now)</span>
                  </a>
                </li>

                <li>
                  <a
                    href={`https://wa.me/919833557900?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-stone-300 hover:text-[#25D366] group"
                  >
                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span>+91 98335 57900 (WhatsApp)</span>
                  </a>
                </li>

                <li className="flex items-start gap-3 text-stone-300">
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="text-xs leading-relaxed">
                    Ground floor, Bloom Hotel, Juhu Tara Rd, Shivaji Nagar, Juhu, Mumbai 400049
                  </span>
                </li>

                <li className="flex items-center gap-3 text-stone-300">
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <span className="text-xs">
                    Visiting Hours: 10:00 AM – 8:30 PM (Daily)
                  </span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-[#4A0E17]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
            <p>&copy; 2026 Elegant Banquets Juhu. All rights reserved.</p>
            <p className="text-stone-400">
              Ground floor, Bloom Hotel, Juhu Tara Rd, Shivaji Nagar, Juhu, Mumbai 400049
            </p>
          </div>

        </div>
      </footer>

      {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Call Button */}
        <a
          href="tel:09833557900"
          id="floating-call-btn"
          aria-label="Call Now"
          className="flex items-center gap-2 px-4 py-3 bg-[#4A0E17] hover:bg-[#34080F] text-white rounded-full shadow-2xl border border-[#D4AF37]/50 hover:scale-105 transition-all text-xs font-bold"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="hidden sm:inline">Call: 098335 57900</span>
          <span className="sm:hidden">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/919833557900?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="WhatsApp Us"
          className="flex items-center gap-2.5 px-4 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:scale-105 transition-all text-xs font-bold group"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
          <Phone className="w-4 h-4 fill-current" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
