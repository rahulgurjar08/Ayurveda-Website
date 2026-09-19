"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Star, 
  Play, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Heart,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Sprout
} from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "I was struggling with chronic acidity and bloating for years. After following the Ayurvedic treatment and diet plan, I feel so much lighter and healthier. Thank you, Doctor!",
      name: "Rohan Mehta",
      treatment: "Acidity & Digestion Treatment",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "Suffering from knee pain made daily life difficult. The Panchakarma therapy and medicines helped me a lot. Now I can walk comfortably without pain.",
      name: "Sunita Sharma",
      treatment: "Joint Pain Treatment",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "My skin problems are completely gone after the Ayurvedic treatment. I got natural solutions with no side effects. Highly recommended!",
      name: "Priya Verma",
      treatment: "Skin Care Treatment",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "I had stress, anxiety and sleepless nights. The Ayurvedic counselling and treatments really balanced my mind and improved my sleep naturally.",
      name: "Amit K.",
      treatment: "Stress Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "After delivery, I opted for postpartum care and it was amazing. The therapies and diet plan gave me strength and energy.",
      name: "Neha Joshi",
      treatment: "Postpartum Care",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "Very professional and caring doctor. The treatment is personalized and you can see real results.",
      name: "Vijay Malhotra",
      treatment: "General Wellness",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    }
  ];

  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopSlideIndex, setDesktopSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % testimonials.length);
      setDesktopSlideIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const leftCards = testimonials.slice(0, 3);
  const rightCards = testimonials.slice(3, 6);

  const prevDesktopSlide = () => setDesktopSlideIndex((prev) => (prev === 0 ? 1 : 0));
  const nextDesktopSlide = () => setDesktopSlideIndex((prev) => (prev === 0 ? 1 : 0));

  const prevMobileSlide = () => setMobileIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextMobileSlide = () => setMobileIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <div className="bg-[#FAF9F5] text-[#2c3e35] font-sans overflow-x-hidden min-h-screen">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="relative overflow-hidden bg-[#EFF4EC] min-h-[400px] lg:min-h-[440px] w-full">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[50%]">
          <Image
            src="/img13.png"
            alt="Ayurveda Herbal Mortar"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#EFF4EC] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto min-h-[400px] lg:min-h-[440px] px-6 sm:px-10 lg:px-12 flex items-center">
          <div className="w-full lg:w-[50%] py-10">
            <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#2a4d38] font-semibold mb-3">
              <span>TESTIMONIALS</span>
              <Leaf className="w-3.5 h-3.5" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-serif text-[#1e3328] leading-[1.15] font-semibold">
              Trusted by Patients, <br />
              <span className="text-[#2a4d38]">Proven by Results</span>
            </h1>
            
            <p className="mt-4 text-[#4f6356] text-xs sm:text-sm leading-relaxed max-w-md">
              Read what our happy patients have to say about their healing journey with Ayurveda and how it has improved their health and quality of life.
            </p>
            
            <button className="mt-6 bg-[#2a4d38] hover:bg-[#1e3328] text-white px-5 py-2.5 rounded-md text-xs font-semibold transition flex items-center gap-2 shadow-md cursor-pointer">
              <span className="text-xs">❝❞</span> Share Your Experience
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS BAR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-sm border border-[#e8ebd9] p-5 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="flex items-center justify-center gap-3 border-r border-[#e8ebd9] last:border-0 pr-2">
            <div className="w-10 h-10 rounded-full bg-[#f3f7f0] flex items-center justify-center text-[#2a4d38] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-[#1e3328] leading-tight">2000+</h3>
              <p className="text-[11px] text-gray-500">Happy Patients</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-r border-[#e8ebd9] last:border-0 pr-2">
            <div className="w-10 h-10 rounded-full bg-[#f3f7f0] flex items-center justify-center text-[#2a4d38] shrink-0">
              <Star className="w-5 h-5 fill-[#e2a83b] text-[#e2a83b]" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-[#1e3328] leading-tight">4.9/5</h3>
              <p className="text-[11px] text-gray-500">Average Rating</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-r border-[#e8ebd9] last:border-0 pr-2">
            <div className="w-10 h-10 rounded-full bg-[#f3f7f0] flex items-center justify-center text-[#2a4d38] shrink-0">
              <Heart className="w-5 h-5 text-[#2a4d38]" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-[#1e3328] leading-tight">98%</h3>
              <p className="text-[11px] text-gray-500">Satisfaction Rate</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f3f7f0] flex items-center justify-center text-[#2a4d38] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-[#1e3328] leading-tight">10+</h3>
              <p className="text-[11px] text-gray-500">Years of Trust</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: TESTIMONIALS HEADER */}
      <section className="text-center pt-14 pb-8 px-4">
        <p className="text-[11px] uppercase tracking-wider text-[#2a4d38] font-medium mb-1">Patient Testimonials</p>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1e3328] font-semibold">Real Stories, Real Transformations</h2>
      </section>

      {/* SECTION 4: TESTIMONIAL CARDS GRID */}
      <section 
        className="max-w-6xl mx-auto px-4 sm:px-6 pb-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Desktop View Slider */}
        <div className="hidden md:block relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${desktopSlideIndex * 100}%)` }}
          >
            {/* Slide 1 */}
            <div className="w-full flex-shrink-0 grid grid-cols-3 gap-5">
              {leftCards.map((item, index) => (
                <div key={index} className="bg-[#FAF8F3] rounded-xl p-6 border border-[#ece8db] flex flex-col justify-between shadow-xs hover:shadow-md transition">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl text-[#2a4d38] font-serif leading-none">“</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#e2a83b] text-[#e2a83b]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#4f6356] text-xs leading-relaxed mb-6">
                      {item.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#e8ebd9]">
                    <img src={item.image} alt={item.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <h4 className="font-serif font-bold text-[#1e3328] text-xs">{item.name}</h4>
                      <p className="text-[10px] text-gray-500">{item.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide 2 */}
            <div className="w-full flex-shrink-0 grid grid-cols-3 gap-5">
              {rightCards.map((item, index) => (
                <div key={index} className="bg-[#FAF8F3] rounded-xl p-6 border border-[#ece8db] flex flex-col justify-between shadow-xs hover:shadow-md transition">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl text-[#2a4d38] font-serif leading-none">“</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#e2a83b] text-[#e2a83b]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#4f6356] text-xs leading-relaxed mb-6">
                      {item.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#e8ebd9]">
                    <img src={item.image} alt={item.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <h4 className="font-serif font-bold text-[#1e3328] text-xs">{item.name}</h4>
                      <p className="text-[10px] text-gray-500">{item.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prevDesktopSlide}
              className="w-8 h-8 rounded-full bg-white border border-[#e5dec9] shadow-sm flex items-center justify-center text-[#1b3022] hover:bg-[#2a4d38] hover:text-white transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setDesktopSlideIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${desktopSlideIndex === idx ? "w-6 bg-[#2a4d38]" : "w-2 bg-[#d4cbb3]"}`}
                />
              ))}
            </div>
            <button 
              onClick={nextDesktopSlide}
              className="w-8 h-8 rounded-full bg-white border border-[#e5dec9] shadow-sm flex items-center justify-center text-[#1b3022] hover:bg-[#2a4d38] hover:text-white transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile View Slider */}
        <div className="block md:hidden">
          <div className="bg-[#FAF8F3] rounded-xl p-5 border border-[#ece8db]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl text-[#2a4d38] font-serif">“</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#e2a83b] text-[#e2a83b]" />
                ))}
              </div>
            </div>
            <p className="text-[#4f6356] text-xs leading-relaxed mb-4">
              {testimonials[mobileIndex].quote}
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-[#e8ebd9]">
              <img src={testimonials[mobileIndex].image} alt={testimonials[mobileIndex].name} className="w-9 h-9 rounded-full object-cover" />
              <div>
                <h4 className="font-serif font-bold text-[#1e3328] text-xs">{testimonials[mobileIndex].name}</h4>
                <p className="text-[10px] text-gray-500">{testimonials[mobileIndex].treatment}</p>
              </div>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <button 
              onClick={prevMobileSlide}
              className="w-8 h-8 rounded-full bg-white border border-[#e5dec9] flex items-center justify-center text-[#1b3022] active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${mobileIndex === idx ? "w-5 bg-[#2a4d38]" : "w-1.5 bg-[#d4cbb3]"}`}
                />
              ))}
            </div>
            <button 
              onClick={nextMobileSlide}
              className="w-8 h-8 rounded-full bg-white border border-[#e5dec9] flex items-center justify-center text-[#1b3022] active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: VIDEO TESTIMONIAL BANNER (EXACT REPLICA OF IMAGE_A15584) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="relative overflow-hidden bg-[#F4F4EC] rounded-2xl py-8 px-6 sm:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center border border-[#e8ebd9]">
          
          {/* Exact Bottom-Right Botanical Line Art Vector (Mortar + Leaf) */}
          <div className="absolute right-0 bottom-0 w-48 sm:w-60 h-48 sm:h-60 pointer-events-none opacity-40 flex items-end justify-end">
            <svg viewBox="0 0 200 200" fill="none" stroke="#22441f" strokeWidth="0.8" className="w-full h-full">
              {/* Mortar Bowl */}
              <ellipse cx="140" cy="160" rx="45" ry="18" />
              <path d="M 95 160 C 95 195, 185 195, 185 160" />
              {/* Pestle */}
              <path d="M 145 130 L 165 175" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Botanical Leaf Overlay */}
              <path d="M 140 160 Q 150 70 175 10" />
              <path d="M 160 110 C 190 95, 200 60, 195 30 C 170 40, 160 75, 160 110 Z" />
              <path d="M 155 70 C 120 60, 100 30, 110 5 C 130 15, 145 45, 155 70 Z" />
              <path d="M 165 40 C 185 25, 195 10, 190 0 C 175 5, 165 25, 165 40 Z" />
            </svg>
          </div>

          {/* Left Column: Heading & Button */}
          <div className="md:col-span-4 relative z-10">
            <p className="text-[12px] font-semibold text-[#22441f] mb-1.5">
              Hear From Our Patients
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1e3328] font-normal leading-tight mb-5">
              Their Journey <br /> In Their Words
            </h3>
            
            <button className="flex items-center gap-2 text-xs font-semibold text-[#1e3328] hover:text-[#2a4d38] transition cursor-pointer">
              <span className="w-6 h-6 rounded-full bg-[#22441f] text-white flex items-center justify-center shadow-sm">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
              <span>Watch Video Testimonials</span>
            </button>
          </div>

          {/* Middle Column: Video Thumbnail */}
          <div className="md:col-span-4 relative z-10 flex justify-center">
            <div className="relative w-full max-w-[280px] h-[165px] sm:h-[180px] rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80" 
                alt="Patient Video" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white text-[#22441f] flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition">
                  <Play className="w-4 h-4 fill-current ml-0.5 text-[#22441f]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Text */}
          <div className="md:col-span-4 relative z-10 pl-0 md:pl-2">
            <span className="text-3xl text-[#22441f] font-serif leading-none block mb-2 font-bold">❝</span>
            <p className="text-xs sm:text-[13px] text-[#334639] leading-relaxed mb-4 max-w-xs font-serif">
              Ayurveda is not just treatment, it's a way of life. Grateful to be on this healing journey.
            </p>
            <p className="text-[11px] font-semibold text-[#22441f]">
              – Our Happy Patient
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6: EXACT CTA WITH CORRESPONDING BOTANICAL LINE ART SKETCH */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#21431e] via-[#2d5626] to-[#1c3819] rounded-2xl py-6 px-6 sm:px-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#3b6333]">
          
          {/* Leaf Vector Line Art on the Right Side */}
          <div className="absolute right-0 top-0 bottom-0 w-52 sm:w-64 opacity-35 pointer-events-none flex items-center justify-end">
            <svg viewBox="0 0 200 300" fill="none" stroke="#a3e635" strokeWidth="1.2" className="w-full h-full">
              <path d="M 100 290 Q 110 150 130 10" />
              <path d="M 120 200 C 160 180, 180 130, 170 90 C 135 100, 120 145, 120 200 Z" />
              <path d="M 120 200 C 135 185, 160 160, 170 90" />
              <path d="M 115 140 C 70 130, 45 90, 55 45 C 85 55, 105 100, 115 140 Z" />
              <path d="M 115 140 C 95 120, 70 100, 55 45" />
              <path d="M 125 90 C 155 70, 170 45, 160 20 C 135 30, 125 60, 125 90 Z" />
              <path d="M 125 90 C 142 70, 155 50, 160 20" />
            </svg>
          </div>

          {/* Left Content with Circle Leaf Icon */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-emerald-100">
              <Sprout className="w-9 h-9 sm:w-10 sm:h-10 text-[#2b5224]" />
            </div>

            <div>
              <p className="text-xs text-emerald-100/90 font-medium mb-1">
                Join Thousands of Happy Patients
              </p>
              <h3 className="text-xl sm:text-2xl md:text-[26px] font-serif font-normal leading-tight">
                Start Your Healing Journey Today
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-1.5 font-light">
                Book your consultation and experience the power of Ayurveda.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0">
            <button className="bg-white hover:bg-emerald-50 text-[#22441f] px-5 py-3 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer">
              <Calendar className="w-4 h-4 text-[#22441f]" />
              <span>Book Appointment</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}