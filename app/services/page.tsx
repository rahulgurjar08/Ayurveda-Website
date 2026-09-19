'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaChevronRight,
  FaLeaf,
  FaCalendarAlt,
  FaPlay,
  FaArrowRight,
  FaTimes,
  FaStethoscope,
} from 'react-icons/fa';
import {
  GiMortar,
  GiLotus,
  GiMeditation,
  GiFruitBowl,
  GiPeaceDove,
} from 'react-icons/gi';

// --- SPECIALIZED THERAPIES SVG ICONS ---
const AbhyangaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
    <path d="M18 15c0 2-1.5 3-3 3s-3-1-3-3l1-4h4l1 4z" />
    <path d="M4 14c1.5 2 3.5 3 5 3" />
    <path d="M2.5 10.5C4 12 6 12.5 8 12" />
    <circle cx="15" cy="8" r="0.5" fill="currentColor" />
  </svg>
);

const ShirodharaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4" />
    <path d="M10 6h4" />
    <path d="M12 10v3" />
    <circle cx="12" cy="14" r="0.75" fill="currentColor" />
    <path d="M8 17c0-2 2-3 4-3s4 1 4 3" />
    <path d="M6 20c2 1 4 1.5 6 1.5s4-.5 6-1.5" />
    <path d="M12 7.5v1" />
  </svg>
);

const BastiIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13c0 4 3.5 7 7 7s7-3 7-7H5z" />
    <path d="M3 13h18" />
    <path d="M15 7l3-4" />
    <circle cx="16" cy="5" r="1" fill="currentColor" />
    <path d="M10 10V8" />
  </svg>
);

const NasyaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c-2.5 3-4 6-4 10 0 3 2 5 4 5s4-2 4-5c0-4-1.5-7-4-10z" />
    <path d="M10 16c.5 1 1.5 1.5 2 1.5s1.5-.5 2-1.5" />
  </svg>
);

const RaktamokshanaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3s-6 7.5-6 12a6 6 0 0 0 12 0c0-4.5-6-12-6-12z" />
    <path d="M10 14c1 1 2 1.5 3 1.5" />
  </svg>
);

// --- WHY CHOOSE US SVG ICONS (MATCHING 3rd SCREENSHOT) ---
const DoctorIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
    <path d="M12 7v3" />
    <path d="M10.5 8.5h3" />
  </svg>
);

const HerbalMortarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11a7 7 0 0 0 14 0H5z" />
    <path d="M15 4l-4 5" />
    <path d="M8 8c1-2 3-3 5-3" />
    <path d="M4 11h16" />
    <path d="M9 18h6" />
  </svg>
);

const HandLeafIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 10c2-3 5-4 7-4 0 2-1 5-4 7-1.5 1-3 1.5-3 1.5" />
    <path d="M11 10c-1 3-1 6 2 8" />
    <path d="M4 18c3 0 5-1 7-3.5" />
  </svg>
);

const ClockHerbIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="7" />
    <path d="M12 9v4l2.5 2.5" />
    <path d="M10 3h4" />
    <path d="M12 3v3" />
    <path d="M16 5l2-2" />
  </svg>
);

const PlantSproutIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10" />
    <path d="M12 10C10 6 6 6 5 8c-1 2 1 5 7 2z" />
    <path d="M12 13c2-3 6-3 7-1 1 2-1 5-7 2z" />
  </svg>
);

const ComfortLotusIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <path d="M12 8c-1.5 2-3 3-3 5a3 3 0 0 0 6 0c0-2-1.5-3-3-5z" />
    <path d="M9 13c-1.5 0-2.5-.5-3-1.5 1-1.5 2.5-1.5 3 .5z" />
    <path d="M15 13c1.5 0 2.5-.5 3-1.5-1-1.5-2.5-1.5-3 .5z" />
  </svg>
);

const CalendarCheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 9h18" />
    <circle cx="8" cy="13" r="1" fill="currentColor" />
    <circle cx="12" cy="13" r="1" fill="currentColor" />
    <circle cx="16" cy="13" r="1" fill="currentColor" />
    <path d="M12 17l1.5 1.5 3-3" />
  </svg>
);

type Service = {
  id: number;
  icon: React.FC<{ className?: string }>;
  title: string;
  desc: string;
  fullDetails: string;
};

type Therapy = {
  icon: React.FC<{ className?: string }>;
  title: string;
  desc: string;
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: FaStethoscope,
      title: 'Ayurvedic Consultation',
      desc: 'One-on-one consultation to understand your health concerns and create a personalized treatment plan.',
      fullDetails:
        'Our comprehensive consultation includes Prakriti (body constitution) analysis, pulse diagnosis (Nadi Pariksha), and detailed lifestyle evaluation to target the root cause of health issues.',
    },
    {
      id: 2,
      icon: GiMortar,
      title: 'Panchakarma Therapy',
      desc: 'Detoxify and rejuvenate your body with authentic Panchakarma treatments for long lasting results.',
      fullDetails:
        'Panchakarma involves five traditional purification procedures customized to eliminate deep-rooted toxins, restore dosha balance, and reset your metabolism.',
    },
    {
      id: 3,
      icon: GiLotus,
      title: 'Herbal Treatments',
      desc: 'Natural herbal medicines to treat various acute and chronic health conditions effectively.',
      fullDetails:
        "We prescribe 100% natural, classic Ayurvedic herbal formulations customized specifically to your body's constitutional requirements without synthetic additives.",
    },
    {
      id: 4,
      icon: GiMeditation,
      title: 'Yoga & Lifestyle Guidance',
      desc: 'Personalized yoga, diet and lifestyle recommendations to bring balance to body, mind and soul.',
      fullDetails:
        'Receive customized daily routines (Dinacharya) and specialized yoga postures tailored to strengthen your physical and mental balance.',
    },
    {
      id: 5,
      icon: GiFruitBowl,
      title: 'Diet & Nutrition',
      desc: 'Customized Ayurvedic diet plans to improve digestion, immunity and overall well-being.',
      fullDetails:
        'Learn how to eat according to your unique dosha profile with seasonal eating recommendations that naturally optimize digestive fire (Agni).',
    },
    {
      id: 6,
      icon: GiPeaceDove,
      title: 'Stress Management',
      desc: 'Ayurvedic therapies and techniques to reduce stress, anxiety and improve mental wellness.',
      fullDetails:
        'Integrating targeted herbal remedies, meditation routines, and soothing therapies designed to calm the central nervous system and restore mental focus.',
    },
  ];

  const therapies: Therapy[] = [
    {
      icon: AbhyangaIcon,
      title: 'Abhyanga Massage',
      desc: 'Herbal oil massage to improve circulation, relax muscles and nourish the body.',
    },
    {
      icon: ShirodharaIcon,
      title: 'Shirodhara Therapy',
      desc: 'Therapeutic oil treatment for the forehead to calm the mind and improve sleep quality.',
    },
    {
      icon: BastiIcon,
      title: 'Basti Therapy',
      desc: 'Ayurvedic medicated enema therapy to detoxify and balance the body.',
    },
    {
      icon: NasyaIcon,
      title: 'Nasya Therapy',
      desc: 'Herbal nasal therapy to clear sinuses, improve respiration and boost head health.',
    },
    {
      icon: RaktamokshanaIcon,
      title: 'Raktamokshana',
      desc: 'Purification therapy to detoxify blood and treat skin disorders and chronic conditions.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#2C3E35] font-sans antialiased overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAF9F5] border-b border-[#E8EFE5] p-0">
        <div className="w-full pl-6 sm:pl-12 md:pl-16 lg:pl-20 pr-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 z-20 py-8 lg:py-12 pr-6 flex flex-col justify-center">
             

              <div className="inline-flex items-center gap-2 text-[#2C422D] text-xs font-bold uppercase tracking-wider mb-2">
                <span>OUR SERVICES</span>
                <FaLeaf size={12} />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2C3E35] leading-[1.15]">
                Comprehensive Ayurvedic <br />
                <span className="italic font-normal text-[#2C422D]">
                  Care For Your Well-Being
                </span>
              </h1>

              <div className="flex items-center gap-2 my-4">
                <span className="w-8 h-[1px] bg-[#A2B0A5]/60" />
                <FaLeaf size={10} className="text-[#2C422D]" />
                <span className="w-8 h-[1px] bg-[#A2B0A5]/60" />
              </div>

              <p className="text-[#5C6F63] text-sm sm:text-base leading-relaxed max-w-md">
                We offer a range of authentic Ayurvedic services and therapies to help you achieve optimal health, naturally and holistically.
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-6">
                <Link
                  href="/book-appointment"
                  className="bg-[#2C422D] text-white hover:bg-[#1E301F] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center gap-2"
                >
                  <span>Book an Appointment</span>
                  <FaCalendarAlt size={12} />
                </Link>

                <a
                  href="#how-it-works"
                  className="flex items-center gap-3 group text-xs sm:text-sm font-semibold text-[#2C3E35]"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E0E6DD] flex items-center justify-center text-[#2C422D] shadow-xs group-hover:scale-105 transition-transform">
                    <FaPlay size={10} className="ml-0.5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-[#2C3E35]">
                      How It Works
                    </strong>
                    <span className="text-[11px] text-[#6B7C70] font-normal">
                      Watch Video
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] w-full">
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent z-10 pointer-events-none" />
                <img
                  src="/img4.jpeg"
                  alt="Ayurvedic Treatment Set"
                  className="w-full h-full object-cover object-left lg:object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR AYURVEDIC SERVICES CARDS */}
      <section className="py-14 px-6 sm:px-8 md:px-12 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto text-center space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3E35]">
            Our Ayurvedic Services
          </h2>
          <div className="inline-block text-[#2C422D]">
            <FaLeaf size={14} />
          </div>
          <p className="text-xs sm:text-sm text-[#5C6F63]">
            Personalized care and natural therapies for a healthier you
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white border border-[#E0E6DD] p-6 sm:p-7 rounded-2xl flex items-start gap-5 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#EAF0E8] flex items-center justify-center shrink-0 group-hover:bg-[#2C422D] transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-[#2C422D] group-hover:text-white transition-colors duration-300" />
                </div>

                <div className="space-y-2 flex-1 pt-0.5">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#2C3E35]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    {item.desc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedService(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C422D] hover:underline cursor-pointer pt-2"
                  >
                    Learn More
                    <FaArrowRight size={10} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SPECIALIZED THERAPIES SECTION */}
      <section className="py-12 px-6 sm:px-8 md:px-12 bg-[#FAF9F5] border-t border-[#E8EFE5]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center gap-2">
            <FaLeaf size={16} className="text-[#2C422D]" />
            <h2 className="text-2xl font-serif font-bold text-[#2C3E35]">
              Specialized Therapies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {therapies.map((item, idx) => {
              const TherapyIcon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF0E8] flex items-center justify-center shrink-0 border border-[#DCE5D8] text-[#2C422D]">
                    <TherapyIcon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 pt-0.5">
                    <h4 className="font-serif font-bold text-sm text-[#2C3E35]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#5C6F63] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR SERVICES (EXACT MATCH FOR SCREENSHOT 3) */}
      <section className="py-14 px-6 sm:px-8 md:px-12 bg-[#FAF9F5] border-t border-[#E8EFE5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Image with Bottom-Left Green Overlay Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-sm h-[320px] sm:h-[380px] border border-[#E8EFE5]">
              <img
                src="/img3.jpeg"
                alt="Ayurvedic Herbal Setup"
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge at Bottom Left (as seen in image) */}
              <div className="absolute bottom-4 left-4 bg-[#2C422D] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 text-white">
                  <FaLeaf size={16} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm leading-tight text-white">
                    100% Natural
                  </h4>
                  <p className="text-[10px] text-[#B5CBB8] font-medium tracking-wide">
                    Safe • Effective • Authentic
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-center lg:text-left space-y-1">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3E35]">
                Why Choose Our Services?
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-1 text-[#2C422D] pt-0.5">
                <FaLeaf size={12} />
              </div>
            </div>

            {/* 2-Column Grid with Exact Matching Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 pt-2">
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#EAF0E8] flex items-center justify-center shrink-0 text-[#2C422D] border border-[#DCE5D8]">
                  <DoctorIcon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">
                    Experienced Ayurvedic Doctor
                  </h4>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    Expert guidance with years of experience in Ayurvedic medicine.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#EAF0E8] flex items-center justify-center shrink-0 text-[#2C422D] border border-[#DCE5D8]">
                  <HerbalMortarIcon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">
                    Holistic Healing Approach
                  </h4>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    Treating the root cause and promoting overall wellness.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#EAF0E8] flex items-center justify-center shrink-0 text-[#2C422D] border border-[#DCE5D8]">
                  <HandLeafIcon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">
                    Personalized Care
                  </h4>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    Treatment plans tailored specifically to your body type and health needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#EAF0E8] flex items-center justify-center shrink-0 text-[#2C422D] border border-[#DCE5D8]">
                  <ClockHerbIcon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">
                    Long Lasting Results
                  </h4>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    Our therapies focus on long term relief and disease prevention.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#EAF0E8] flex items-center justify-center shrink-0 text-[#2C422D] border border-[#DCE5D8]">
                  <PlantSproutIcon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">
                    Natural &amp; Safe Therapies
                  </h4>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    We use natural herbs and authentic Ayurvedic methods for healing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#EAF0E8] flex items-center justify-center shrink-0 text-[#2C422D] border border-[#DCE5D8]">
                  <ComfortLotusIcon className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">
                    Comfortable Environment
                  </h4>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    Peaceful and hygienic space for your healing journey.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. APPOINTMENT BANNER (MATCHING BOTTOM BANNER OF 3rd SCREENSHOT) */}
      <section className="py-8 px-6 sm:px-8 md:px-12 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto bg-[#2C422D] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#2C422D] shrink-0 shadow-xs">
              <CalendarCheckIcon className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <p className="text-xs text-[#B5CBB8] font-medium">
                Take the first step towards a healthier you!
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Book Your Appointment Today
              </h3>
              <p className="text-xs text-[#B5CBB8]">
                Let us help you live a healthy, balanced and happy life.
              </p>
            </div>
          </div>

          <Link
            href="/book-appointment"
            className="bg-white text-[#2C422D] hover:bg-[#FAF9F5] px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center gap-2.5 shrink-0"
          >
            <FaCalendarAlt size={14} className="text-[#2C422D]" />
            <span>Book Appointment</span>
          </Link>
        </div>
      </section>

      {/* POPUP MODAL */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#FAF9F5] border border-[#E8EFE5] rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-[#5C6F63] hover:text-[#2C3E35] p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <FaTimes size={18} />
            </button>

            <div className="flex items-center gap-4 border-b border-[#E8EFE5] pb-4">
              <div className="w-12 h-12 rounded-full bg-[#2C422D] text-white flex items-center justify-center shadow-sm">
                {(() => {
                  const ModalIcon = selectedService.icon;
                  return <ModalIcon className="w-6 h-6 text-white" />;
                })()}
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#2C3E35] pr-8">
                {selectedService.title}
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-[#5C6F63] leading-relaxed">
                {selectedService.desc}
              </p>
              <p className="text-xs sm:text-sm text-[#2C3E35] font-medium leading-relaxed bg-white p-4 rounded-xl border border-[#E8EFE5]">
                {selectedService.fullDetails}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/book-appointment"
                className="w-full bg-[#2C422D] text-white hover:bg-[#1E301F] py-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Book This Service</span>
                <FaCalendarAlt size={12} />
              </Link>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}