"use client";

import React, { useState, useEffect } from "react";
import { 
  Star, 
  Quote, 
  Play, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Smile,
  HeartHandshake,
  ChevronLeft,
  ChevronRight
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

  // Mobile Index State (1 card at a time)
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop Slider State (Left: cards 0-2, Right: cards 3-5)
  const [desktopSlideIndex, setDesktopSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto Play Timer (Dono Views Ke Liye)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Mobile Slide
      setMobileIndex((prev) => (prev + 1) % testimonials.length);
      // Desktop Slide (0 -> Left Set [0,1,2], 1 -> Right Set [3,4,5])
      setDesktopSlideIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Desktop Controls
  const leftCards = testimonials.slice(0, 3);
  const rightCards = testimonials.slice(3, 6);

  const prevDesktopSlide = () => {
    setDesktopSlideIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const nextDesktopSlide = () => {
    setDesktopSlideIndex((prev) => (prev === 0 ? 1 : 0));
  };

  // Mobile Controls
  const prevMobileSlide = () => {
    setMobileIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextMobileSlide = () => {
    setMobileIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1b3022] font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3EEE3] to-[#FAF7F2] min-h-[360px] sm:min-h-[400px] lg:min-h-[430px]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[50%]">
          <img
            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1000&auto=format&fit=crop&q=90"
            alt="Ayurvedic Treatment Herbs & Mortar"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3EEE3] via-[#F3EEE3]/75 to-transparent lg:from-[#F3EEE3] lg:via-[#F3EEE3]/65 lg:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto min-h-[360px] sm:min-h-[400px] lg:min-h-[430px] px-6 sm:px-8 md:px-10 lg:px-12 flex items-center">
          <div className="w-full lg:w-[60%] py-8 lg:py-0">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2d5a3f] font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2d5a3f]"></span>
              Testimonials
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif text-[#1b3022] leading-[1.08]">
              Trusted by Patients,
              <br />
              <span className="text-[#3c6e47]">Proven by Results</span>
            </h1>
            <p className="mt-5 text-[#4a5d52] text-sm sm:text-base leading-relaxed max-w-xl">
              Read what our happy patients have to say about their healing journey with Ayurveda and how it has improved their health and quality of life.
            </p>
            <button className="mt-6 bg-[#2d5a3f] hover:bg-[#1b3022] text-white px-6 sm:px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-md inline-flex items-center gap-2 cursor-pointer">
              <Quote className="w-4 h-4" />
              Share Your Experience
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border border-[#e5dec9]">
          <div className="flex items-center gap-3 sm:gap-4 border-b sm:border-b-0 sm:border-r pb-3 sm:pb-0 last:border-b-0 last:border-r-0 border-[#eee7d3]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f2f7f3] flex items-center justify-center text-[#2d5a3f] shrink-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-[#1b3022]">2000+</h3>
              <p className="text-[10px] sm:text-xs text-[#6b7c72] uppercase tracking-wider font-medium">Happy Patients</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 border-b sm:border-b-0 sm:border-r pb-3 sm:pb-0 last:border-b-0 last:border-r-0 border-[#eee7d3]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f2f7f3] flex items-center justify-center text-[#2d5a3f] shrink-0">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#f59e0b] text-[#f59e0b]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-[#1b3022]">4.9/5</h3>
              <p className="text-[10px] sm:text-xs text-[#6b7c72] uppercase tracking-wider font-medium">Average Rating</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 border-r-0 sm:border-r border-[#eee7d3]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f2f7f3] flex items-center justify-center text-[#2d5a3f] shrink-0">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-[#1b3022]">98%</h3>
              <p className="text-[10px] sm:text-xs text-[#6b7c72] uppercase tracking-wider font-medium">Satisfaction Rate</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f2f7f3] flex items-center justify-center text-[#2d5a3f] shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-[#1b3022]">10+</h3>
              <p className="text-[10px] sm:text-xs text-[#6b7c72] uppercase tracking-wider font-medium">Years of Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Header */}
      <section className="text-center pt-16 sm:pt-20 pb-8 sm:pb-12 px-4">
        <p className="text-xs uppercase tracking-widest text-[#2d5a3f] font-semibold mb-2">Patient Testimonials</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1b3022]">Real Stories, Real Transformations</h2>
      </section>

      {/* TESTIMONIALS SLIDER SECTION */}
      <section 
        className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* DESKTOP VIEW: 3 Cards Left & 3 Cards Right (Sliding 3-by-3) */}
        <div className="hidden md:block relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${desktopSlideIndex * 100}%)` }}
          >
            {/* Slide 1: Left 3 Cards */}
            <div className="w-full flex-shrink-0 grid grid-cols-3 gap-6 px-1">
              {leftCards.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#eee7d3] flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <Quote className="w-9 h-9 text-[#2d5a3f]/20 group-hover:text-[#2d5a3f] transition-colors duration-300" />
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#4a5d52] text-sm leading-relaxed mb-6">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#f4efdc]">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-11 h-11 rounded-full object-cover border border-[#2d5a3f]/30 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-[#1b3022] text-sm">{item.name}</h4>
                      <p className="text-xs text-[#6b7c72] font-medium">{item.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide 2: Right 3 Cards */}
            <div className="w-full flex-shrink-0 grid grid-cols-3 gap-6 px-1">
              {rightCards.map((item, index) => (
                <div 
                  key={index + 3} 
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#eee7d3] flex flex-col justify-between group hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <Quote className="w-9 h-9 text-[#2d5a3f]/20 group-hover:text-[#2d5a3f] transition-colors duration-300" />
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#4a5d52] text-sm leading-relaxed mb-6">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#f4efdc]">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-11 h-11 rounded-full object-cover border border-[#2d5a3f]/30 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-[#1b3022] text-sm">{item.name}</h4>
                      <p className="text-xs text-[#6b7c72] font-medium">{item.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prevDesktopSlide}
              className="w-10 h-10 rounded-full bg-white border border-[#e5dec9] shadow-sm flex items-center justify-center text-[#1b3022] hover:bg-[#2d5a3f] hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setDesktopSlideIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${desktopSlideIndex === idx ? "w-8 bg-[#2d5a3f]" : "w-2.5 bg-[#d4cbb3]"}`}
                />
              ))}
            </div>

            <button 
              onClick={nextDesktopSlide}
              className="w-10 h-10 rounded-full bg-white border border-[#e5dec9] shadow-sm flex items-center justify-center text-[#1b3022] hover:bg-[#2d5a3f] hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MOBILE VIEW: Single Card Auto Slider */}
        <div className="block md:hidden relative max-w-sm mx-auto">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#eee7d3] flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex justify-between items-center mb-4">
                <Quote className="w-8 h-8 text-[#2d5a3f]/30" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
              </div>
              <p className="text-[#4a5d52] text-sm leading-relaxed mb-6">
                "{testimonials[mobileIndex].quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#f4efdc]">
              <img 
                src={testimonials[mobileIndex].image} 
                alt={testimonials[mobileIndex].name} 
                className="w-11 h-11 rounded-full object-cover border border-[#2d5a3f]/30 shrink-0"
              />
              <div>
                <h4 className="font-serif font-bold text-[#1b3022] text-sm">{testimonials[mobileIndex].name}</h4>
                <p className="text-[11px] text-[#6b7c72] font-medium">{testimonials[mobileIndex].treatment}</p>
              </div>
            </div>
          </div>

          {/* Mobile Slider Navigation */}
          <div className="flex items-center justify-between mt-4 px-4">
            <button 
              onClick={prevMobileSlide}
              className="w-9 h-9 rounded-full bg-white border border-[#e5dec9] shadow-sm flex items-center justify-center text-[#1b3022] active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${mobileIndex === idx ? "w-6 bg-[#2d5a3f]" : "w-2 bg-[#d4cbb3]"}`}
                />
              ))}
            </div>

            <button 
              onClick={nextMobileSlide}
              className="w-9 h-9 rounded-full bg-white border border-[#e5dec9] shadow-sm flex items-center justify-center text-[#1b3022] active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </section>

      {/* Video Testimonial Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="bg-[#f2efe6] rounded-3xl p-6 sm:p-8 border border-[#e5dec9] grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#2d5a3f] font-semibold mb-2">Hear From Our Patients</p>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1b3022] mb-4 leading-snug">
              Their Journey <br />In Their Words
            </h3>
            <button className="flex items-center gap-3 text-[#1b3022] hover:text-[#2d5a3f] text-sm font-semibold transition-colors group cursor-pointer">
              <span className="w-9 h-9 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              Watch Video Testimonials
            </button>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-md group">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80" 
              alt="Video patient testimonial thumbnail" 
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white text-[#2d5a3f] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>
          </div>

          <div className="relative">
            <Quote className="w-8 h-8 text-[#2d5a3f] mb-2" />
            <p className="text-sm sm:text-base text-[#4a5d52] italic mb-4 leading-relaxed">
              "Ayurveda is not just treatment, it's a way of life. Grateful to be on this healing journey."
            </p>
            <span className="text-xs font-bold text-[#1b3022] uppercase tracking-wider">- Our Happy Patient</span>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#1b3022] rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl gap-6">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#2d5a3f]/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6 z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/25 shrink-0">
              <Smile className="w-7 h-7 sm:w-8 sm:h-8 text-[#a3c2af]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#a3c2af] font-semibold mb-1">Join Thousands of Happy Patients</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif">Start Your Healing Journey Today</h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">Book your consultation and experience the power of Ayurveda.</p>
            </div>
          </div>

          <button className="bg-white hover:bg-[#f0eada] text-[#1b3022] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 z-10 shrink-0 cursor-pointer w-full sm:w-auto justify-center">
            <Calendar className="w-4 h-4" /> Book Appointment
          </button>
        </div>
      </section>

    </div>
  );
}