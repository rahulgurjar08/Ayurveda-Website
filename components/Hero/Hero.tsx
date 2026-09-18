'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Activity, 
  Bone, 
  Smile, 
  HeartPulse, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  Clock, 
  Quote,
  X
} from 'lucide-react';

// Treatments Full Data with Modal Content
const treatmentsData = [
  { 
    id: 'digestive-care',
    title: 'Digestive Care', 
    desc: 'Natural remedies for acidity, constipation, IBS and other digestive issues.', 
    icon: Activity,
    fullDetail: 'Ayurveda considers digestion (Agni) as the root of overall health. Our Digestive Care program focuses on rebalancing your internal digestive fire, eliminating toxins (Ama), and restoring optimal gut microbiota using pure herbal formulations and dietary guidelines.',
    benefits: [
      'Relief from chronic acidity & bloating',
      'Effective IBS & constipation management',
      'Improved nutrient absorption & metabolism',
      'Customized Ayurvedic diet plan'
    ],
    duration: '2 - 4 Weeks Program',
    suitableFor: 'People suffering from Acid Reflux, Bloating, Constipation, IBS',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'joint-pain-management',
    title: 'Joint & Pain Management', 
    desc: 'Ayurvedic treatment for arthritis, back pain, neck pain and joint stiffness.', 
    icon: Bone,
    fullDetail: 'Joint and muscular pains are usually caused by an imbalance in Vata dosha. Our pain management treatments combine herbal oils (Thailam), therapeutic massage (Abhyanga), and specialized localized therapies like Janu Basti and Kati Basti to reduce inflammation and restore mobility.',
    benefits: [
      'Reduces joint inflammation & stiffness',
      'Long-term relief from chronic back & neck pain',
      'Restores cartilage & improves flexibility',
      '100% natural without painful side effects'
    ],
    duration: '3 - 6 Weeks Program',
    suitableFor: 'Arthritis, Sciatica, Spondylitis, Chronic Back Pain',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'skin-care',
    title: 'Skin Care', 
    desc: 'Natural solutions for acne, eczema, pigmentation and glowing skin.', 
    icon: Smile,
    fullDetail: 'Healthy skin is a reflection of internal blood purity and balanced Pitta dosha. We provide herbal blood purifiers, soothing external Lepas (pastes), and detox routines to treat skin disorders from their root cause.',
    benefits: [
      'Clears stubborn acne & dark spots',
      'Soothes psoriasis, eczema & rashes',
      'Enhances natural skin glow & texture',
      'Detoxifies blood safely'
    ],
    duration: '4 - 8 Weeks Program',
    suitableFor: 'Acne, Psoriasis, Eczema, Hyperpigmentation, Dry Skin',
    image: 'https://plus.unsplash.com/premium_photo-1682097802069-404b1f37ec49?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    id: 'stress-management',
    title: 'Stress Management', 
    desc: 'Manage stress, anxiety, and improve mental well-being.', 
    icon: HeartPulse,
    fullDetail: 'High stress levels disrupt the central nervous system. Through authentic therapies like Shirodhara, Medhya Rasayanas (brain tonics), and guided lifestyle adjustments, we help calm the mind and restore deep mental clarity.',
    benefits: [
      'Deep relief from anxiety & chronic stress',
      'Improves sleep quality & fixes insomnia',
      'Boosts focus, memory & mental clarity',
      'Balances nervous system naturally'
    ],
    duration: '2 - 3 Weeks Program',
    suitableFor: 'Insomnia, Anxiety, Work Stress, Burnout, Mood Swings',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'panchakarma-therapy',
    title: 'Panchakarma Therapy', 
    desc: 'Detoxify your body and rejuvenate with authentic Panchakarma treatments.', 
    icon: Sparkles,
    fullDetail: 'Panchakarma is the ultimate Ayurvedic detoxification procedure designed to eliminate deep-seated metabolic toxins. This 5-step purificatory therapy revives every tissue layer, revitalizing your immune system.',
    benefits: [
      'Complete physical & mental detox',
      'Boosts immunity & metabolism',
      'Slows aging & rejuvenates tissue cells',
      'Restores natural energy balance'
    ],
    duration: '7 - 21 Days Intensive Program',
    suitableFor: 'Overall Body Detox, Chronic Diseases, Metabolic Disorders',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=1000'
  },
];

export default function Home() {
  // Modal State Management
  const [selectedTreatment, setSelectedTreatment] = useState<typeof treatmentsData[0] | null>(null);

  // Testimonials auto-slide state
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { quote: 'The treatment was very effective. I feel more energetic and my digestion has improved a lot. Highly recommend!', name: 'Priya Sharma', role: 'Patient', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' },
    { quote: 'After struggling with chronic back pain for years, Ayurvedic treatment gave me real and lasting relief.', name: 'Rahul Verma', role: 'Patient', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
    { quote: 'A wonderful experience! The doctor is very knowledgeable and the care is completely transformed.', name: 'Anjali Mehta', role: 'Patient', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#2C3E35] font-sans antialiased overflow-x-hidden relative">
      
      {/* 2. HERO */}
      <section className="relative overflow-hidden bg-[#F5F7EE]">
        <div className="relative mx-auto flex min-h-[350px] max-w-7xl items-center px-5 sm:min-h-[400px] sm:px-8 lg:min-h-[460px] lg:px-10">
          <div className="relative z-20 w-full lg:w-[53%]">
            <div className="mb-2 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#55723D] sm:text-[10px]">
              <span className="text-[30px]">🌿</span>
              <span>Natural Healing, Holistic Living.</span>
            </div>
            <h1 className="font-serif text-[28px] font-bold leading-[1.05] text-[#24351F] sm:text-[36px] lg:text-[62px]">
              Ayurvedic Care For
              <br />
              <span className="font-normal text-[#557C3B]">
                A Better Life
              </span>
            </h1>
            <p className="mt-3 max-w-[390px] text-[9px] leading-[1.55] text-[#5D685D] sm:text-[13px]">
              Experience the power of Ayurveda with personalized
              treatments that heal the root cause and bring balance
              to your body, mind & soul.
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <Link
                href="/book-appointment"
                className="rounded-md bg-[#35652F] px-4 py-2 text-[9px] font-semibold text-white transition hover:bg-[#294F25] sm:px-5 sm:py-2.5 sm:text-[14px]"
              >
                Book Appointment
              </Link>
              <a
                href="#treatments"
                className="flex items-center gap-1.5 rounded-md border border-[#6C8365] bg-white/40 px-4 py-2 text-[9px] font-semibold text-[#45613D] transition hover:bg-white sm:px-5 sm:py-2.5 sm:text-[14px]"
              >
                Explore Treatments
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#DCE2D5] pt-3">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#557C3B]" />
                <span className="text-[11px] font-medium text-[#465345] sm:text-[12px]">100% Natural</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#557C3B]" />
                <span className="text-[8px] font-medium text-[#465345] sm:text-[12px]">Personalized Care</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#557C3B]" />
                <span className="text-[8px] font-medium text-[#465345] sm:text-[12px]">Expert Doctor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#557C3B]" />
                <span className="text-[8px] font-medium text-[#465345] sm:text-[12px]">Holistic Healing</span>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ayurvedic Doctor"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F7EE] via-[#F5F7EE]/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F5F7EE]/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS SECTION */}
      <section id="treatments" className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-2 mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#365337]">Our Treatments</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C3E35]">Natural Solutions For Your Health</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {treatmentsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-[#FAF9F5] border border-[#EBEFE8] p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition group">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] group-hover:bg-[#365337] group-hover:text-white transition">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-[#2C3E35] text-base sm:text-lg text-center">{item.title}</h3>
                  <p className="text-xs text-[#5C6F63] text-center leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 sm:pt-6 text-center">
                  {/* BUTTON OPENS POPUP */}
                  <button 
                    onClick={() => setSelectedTreatment(item)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#365337] hover:underline cursor-pointer"
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#F3F5F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#365337]">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C3E35] leading-tight">
              Healing With Tradition <br className="hidden sm:inline" /> Caring With Compassion
            </h2>
            <p className="text-[#5C6F63] text-sm sm:text-base leading-relaxed">
              Our approach combines ancient Ayurvedic wisdom with modern understanding to provide safe, effective and long-lasting results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-xl shadow-xs text-left">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#365337] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">Experienced Doctor</h4>
                  <p className="text-[11px] sm:text-xs text-[#5C6F63]">Expert practitioners dedicated to care.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-xl shadow-xs text-left">
                <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#365337] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">Personalized Plans</h4>
                  <p className="text-[11px] sm:text-xs text-[#5C6F63]">Tailored specifically for your body.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-xl shadow-xs text-left">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#365337] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">Natural & Safe</h4>
                  <p className="text-[11px] sm:text-xs text-[#5C6F63]">Zero side effects using pure herbs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-xl shadow-xs text-left">
                <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-[#365337] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">Holistic Wellness</h4>
                  <p className="text-[11px] sm:text-xs text-[#5C6F63]">Balancing mind, body, and soul.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/book-appointment" 
                className="bg-[#365337] hover:bg-[#2C422D] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition shadow-sm inline-block"
              >
                Know More About Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#E5EFE6] rounded-full p-6 sm:p-8 flex items-center justify-center shadow-inner">
              <div className="w-full h-full rounded-full bg-cover bg-center border-4 sm:border-8 border-white shadow-md overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800" 
                  alt="Ayurveda Ingredients" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white px-3.5 py-2 sm:px-4 sm:py-3 rounded-2xl shadow-lg flex items-center gap-2">
                <span className="text-base sm:text-lg">🌿</span>
                <div className="text-[11px] sm:text-xs">
                  <span className="font-bold block text-[#2C3E35]">100%</span>
                  <span className="text-[#5C6F63]">Natural</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPOINTMENT BANNER */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-[#365337] text-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2C422D] flex items-center justify-center text-white flex-shrink-0">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#A2B8A5] font-semibold">Your Health Is Our Priority</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold">Book Your Appointment Today!</h3>
            </div>
          </div>

          <Link 
            href="/book-appointment" 
            className="bg-white text-[#365337] hover:bg-[#FAF9F5] px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold transition shadow-md flex items-center gap-2 flex-shrink-0"
          >
            <Clock className="w-4 h-4" /> Book Appointment
          </Link>
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-2 mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#365337]">Patient Stories</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C3E35]">What Our Patients Say</h2>
        </div>

        <div className="max-w-xl md:max-w-7xl mx-auto">
          <div className="block md:hidden">
            <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xs relative transition-all duration-500">
              <div className="space-y-3">
                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#365337]/30" />
                <p className="text-xs sm:text-sm text-[#4A5D52] italic leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 sm:pt-6 mt-6 border-t border-[#EBEFE8]">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">{testimonials[currentIndex].name}</h4>
                  <p className="text-[11px] sm:text-xs text-[#5C6F63]">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${currentIndex === idx ? 'w-6 bg-[#365337]' : 'w-2 bg-[#D1DCD3]'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-[#FAF9F5] border border-[#EBEFE8] p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-xs relative">
                <div className="space-y-3">
                  <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#365337]/30" />
                  <p className="text-xs sm:text-sm text-[#4A5D52] italic leading-relaxed">"{item.quote}"</p>
                </div>

                <div className="flex items-center gap-3 pt-4 sm:pt-6 mt-6 border-t border-[#EBEFE8]">
                  <img src={item.image} alt={item.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">{item.name}</h4>
                    <p className="text-[11px] sm:text-xs text-[#5C6F63]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TREATMENT DETAIL POPUP (MODAL) */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity duration-300">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#EBEFE8] shadow-2xl relative space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5F7EE] hover:bg-[#E5EFE6] text-[#2C3E35] flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 pr-8">
              <div className="w-12 h-12 rounded-2xl bg-[#E5EFE6] flex items-center justify-center text-[#365337] shrink-0">
                <selectedTreatment.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#557C3B]">
                  Ayurvedic Treatment Details
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3E35]">
                  {selectedTreatment.title}
                </h2>
              </div>
            </div>

            {/* Treatment Image */}
            <div className="h-44 sm:h-52 w-full rounded-2xl overflow-hidden relative">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Detail */}
            <p className="text-xs sm:text-sm text-[#5C6F63] leading-relaxed">
              {selectedTreatment.fullDetail}
            </p>

            {/* Key Benefits */}
            <div className="space-y-2">
              <h4 className="text-sm font-serif font-bold text-[#2C3E35]">
                Key Benefits:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedTreatment.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#557C3B] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#4A5D52] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metadata (Duration & Suitability) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#EBEFE8]">
                <strong className="block text-[11px] font-bold text-[#2C3E35]">Duration</strong>
                <span className="text-xs text-[#5C6F63]">{selectedTreatment.duration}</span>
              </div>
              <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#EBEFE8]">
                <strong className="block text-[11px] font-bold text-[#2C3E35]">Suitable For</strong>
                <span className="text-xs text-[#5C6F63]">{selectedTreatment.suitableFor}</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#EBEFE8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedTreatment(null)}
                className="w-full sm:w-auto text-xs font-semibold text-[#5C6F63] hover:text-[#2C3E35] px-4 py-2"
              >
                Close Window
              </button>

              <Link
                href="/book-appointment"
                className="w-full sm:w-auto bg-[#365337] hover:bg-[#2C422D] text-white px-6 py-2.5 rounded-full text-xs font-semibold transition text-center shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}