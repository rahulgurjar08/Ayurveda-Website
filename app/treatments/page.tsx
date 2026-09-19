'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FaCalendarAlt, 
  FaArrowRight,
  FaShieldAlt,
  FaTimes,
  FaCheckCircle
} from 'react-icons/fa';

import { 
  GiStomach, 
  GiKneeCap, 
  GiLotus, 
  GiMortar 
} from 'react-icons/gi';

// --- 1. Custom SVG Icons for "Why Choose Ayurveda" Section (Uniform Sized) ---
function PlantHandIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C12 22 14 18 20 18C22 18 24 19 25 21" stroke="#365337" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 18C18 14 15 11 11 11C11 15 14 18 18 18Z" stroke="#365337" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 14C21 11 25 11 25 14C22 16 19 15 18 14Z" stroke="#365337" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M6 25C10 25 13 23 15 21" stroke="#365337" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LotusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8C16 8 13 14 16 22C19 14 16 8 16 8Z" stroke="#365337" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 15C12 14 7 18 9 22C12 23 15 21 16 20" stroke="#365337" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 15C20 14 25 18 23 22C20 23 17 21 16 20" stroke="#365337" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DoctorIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="11" r="4" stroke="#365337" strokeWidth="2" />
      <path d="M10 25C10 20.5 12.5 18 16 18C19.5 18 22 20.5 22 25" stroke="#365337" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 18V21M14 20H18" stroke="#365337" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="17" r="8" stroke="#365337" strokeWidth="2" />
      <path d="M16 13V17L19 19" stroke="#365337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 7L16 9L19 7" stroke="#365337" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// --- 2. Custom SVG Icons for "Treatment Approach Timeline" ---
function ConsultationIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="8" width="20" height="26" rx="2" stroke="#2D5A27" strokeWidth="2.5" fill="#FAF9F5" />
      <path d="M15 6C15 4.89543 15.8954 4 17 4H23C24.1046 4 25 4.89543 25 6V8H15V6Z" fill="#365337" stroke="#2D5A27" strokeWidth="1.5" />
      <path d="M15 15H25M15 20H23M15 25H20" stroke="#4D7B3D" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="25" r="3" fill="#D9A74A" stroke="#2D5A27" strokeWidth="1.5" />
    </svg>
  );
}

function DiagnosisIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20H10Z" fill="#365337" stroke="#2D5A27" strokeWidth="2" />
      <path d="M12 20C12 20 15 12 20 12C25 12 28 20 28 20" stroke="#4D7B3D" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 12V6M20 6C18 6 16 8 16 8M20 6C22 6 24 8 24 8" stroke="#4D7B3D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 22C10 27.5228 14.4772 32 20 32C25.5228 32 30 27.5228 30 22H10Z" fill="#365337" stroke="#2D5A27" strokeWidth="2" />
      <path d="M17 17L27 9M27 9L23 8M27 9L28 13" stroke="#D9A74A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TreatmentIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12C17 16 13 20 13 24C13 27.866 16.134 31 20 31C23.866 31 27 27.866 27 24C27 20 23 16 20 12Z" fill="#E5EFE6" stroke="#2D5A27" strokeWidth="2" />
      <path d="M10 26C13 26 16 23 16 20C13 20 10 23 10 26Z" stroke="#2D5A27" strokeWidth="2" fill="#A2B8A5" />
      <path d="M30 26C27 26 24 23 24 20C27 20 30 23 30 26Z" stroke="#2D5A27" strokeWidth="2" fill="#A2B8A5" />
    </svg>
  );
}

function HealthIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 32S8 24 8 16A7 7 0 0 1 20 11A7 7 0 0 1 32 16C32 24 20 32 20 32Z" stroke="#2D5A27" strokeWidth="2.5" fill="none" />
      <path d="M20 26V18M20 22C18 20 16 20 16 20M20 20C22 18 24 18 24 18" stroke="#4D7B3D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const treatmentSteps = [
  { id: '1', stepNumber: '1. Consultation', desc: 'Detailed consultation and health assessment', IconComponent: ConsultationIcon },
  { id: '2', stepNumber: '2. Diagnosis', desc: 'Identify the root cause of the problem', IconComponent: DiagnosisIcon },
  { id: '3', stepNumber: '3. Personalized Plan', desc: 'Customized treatment plan for your body type', IconComponent: PlanIcon },
  { id: '4', stepNumber: '4. Treatment', desc: 'Natural therapies and herbal remedies', IconComponent: TreatmentIcon },
  { id: '5', stepNumber: '5. Better Health', desc: 'Long term wellness and balanced living', IconComponent: HealthIcon }
];

const treatmentsList = [
  {
    id: 'digestive-care',
    title: 'Digestive Care',
    desc: 'Effective Ayurvedic therapies to improve digestion, relieve acidity, gas, bloating, constipation and IBS.',
    icon: GiStomach,
    fullDetail: 'Ayurveda views digestion (Agni) as the key pillar of health. Our Digestive Care program heals chronic acidity, bloating, and IBS using herbal remedies and customized dietary corrections.',
    benefits: ['Relief from chronic acidity & gas', 'Effective IBS & constipation management', 'Restoration of gut microbiota balance', 'Personalized Ayurvedic diet guidelines'],
    duration: '2 - 4 Weeks Program',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'joint-pain',
    title: 'Joint & Pain Management',
    desc: 'Natural relief from arthritis, back pain, neck pain, sprains and muscular pain.',
    icon: GiKneeCap,
    fullDetail: 'Joint pain is primarily caused by aggravated Vata dosha. Our treatments utilize therapeutic massages with medicated oils to relieve stiffness and rebuild joint elasticity.',
    benefits: ['Reduces joint inflammation & swelling', 'Long-term relief from back & neck pain', 'Improves joint flexibility', '100% natural with zero side effects'],
    duration: '3 - 6 Weeks Program',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'skin-care',
    title: 'Skin Care',
    desc: 'Ayurvedic treatments for acne, eczema, pimples, psoriasis and other skin problems.',
    icon: GiLotus,
    fullDetail: 'Our skin care treatments target internal blood impurities and Pitta imbalance with natural herbs and detox therapies.',
    benefits: ['Clears stubborn acne', 'Calms eczema & psoriasis flare-ups', 'Pure blood detoxification', 'Restores natural skin radiance'],
    duration: '4 - 8 Weeks Program',
    image: 'https://images.unsplash.com/photo-1704597435594-6688c953892a?w=500&auto=format&fit=crop&q=60'
  },
  {
    id: 'stress-management',
    title: 'Stress Management',
    desc: 'Balance your mind and body, reduce stress, anxiety, depression and improve sleep.',
    icon: GiLotus,
    fullDetail: 'Through therapies like Shirodhara and herbal nerve tonics, we help soothe the nervous system and promote deep restful sleep.',
    benefits: ['Relieves stress & mental anxiety', 'Fixes chronic insomnia', 'Enhances memory & mental focus', 'Calms nervous system naturally'],
    duration: '2 - 3 Weeks Program',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'panchakarma',
    title: 'Panchakarma Therapy',
    desc: 'Detoxify and rejuvenate your body with authentic Panchakarma therapies.',
    icon: GiMortar,
    fullDetail: 'Panchakarma clears metabolic toxins from deep tissue layers, boosting overall energy and longevity.',
    benefits: ['Deep physical & cellular detox', 'Boosts immune system', 'Rejuvenates tired body tissues', 'Restores natural body metabolic rate'],
    duration: '7 - 21 Days Intensive Program',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'immunity-boost',
    title: 'Immunity Boost',
    desc: 'Strengthen your immunity and prevent illnesses with Ayurvedic herbs and therapies.',
    icon: FaShieldAlt,
    fullDetail: 'Our immunity boost programs focus on building Ojas using potent Rasayana herbs like Ashwagandha, Giloy, and Amla.',
    benefits: ['Enhances natural body defenses', 'Protects against seasonal allergies', 'Boosts stamina & daily vigor', 'Comprehensive cell rejuvenation'],
    duration: '4 Weeks Program',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800'
  }
];

export default function TreatmentsPage() {
  const [selectedTreatment, setSelectedTreatment] = useState<typeof treatmentsList[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#2C3E35] font-sans antialiased overflow-x-hidden">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#F6F8F1] min-h-[445px] flex items-center">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
          <img src="/img2.png" alt="Ayurveda" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F8F1] via-[#F6F8F1]/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full lg:w-[58%] py-10">
            <p className="text-[#365337] text-xs font-bold uppercase tracking-widest mb-2.5">OUR TREATMENTS</p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#233B27]">
              Natural Healing Solutions <br />
              <span className="text-[#4D7B3D]">For Every Health Need</span>
            </h1>
            <p className="mt-3.5 text-sm text-[#526A5C] max-w-lg">
              Ayurveda offers a holistic approach to heal the root cause of disorders and bring balance to your body, mind and soul.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TREATMENTS GRID */}
      <section className="py-10 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3E35]">Our Ayurvedic Treatments</h2>
          <p className="text-xs text-[#5C6F63] mt-1">Customized treatments for a healthier and happier you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5">
          {treatmentsList.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className="bg-[#FAF9F5] border border-[#EBEFE8] p-5.5 rounded-2xl flex items-start justify-between gap-4 hover:shadow-md transition">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-xl shrink-0">
                    <IconComp />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#2C3E35]">{item.title}</h3>
                    <p className="text-xs text-[#5C6F63] mt-1">{item.desc}</p>
                    <button onClick={() => setSelectedTreatment(item)} className="inline-flex items-center gap-1 text-xs font-semibold text-[#365337] mt-2.5 hover:underline">
                      Learn More <FaArrowRight size={10} />
                    </button>
                  </div>
                </div>
                <button onClick={() => setSelectedTreatment(item)} className="w-8 h-8 rounded-full border border-[#DCE5D9] flex items-center justify-center text-[#365337] shrink-0 hover:bg-[#365337] hover:text-white transition">
                  <FaArrowRight size={10} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. OUR TREATMENT APPROACH */}
      <section className="py-15 px-4 sm:px-8 bg-[#F6F7F2] border-y border-[#E2E6DF]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#365337]/40"></span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3E35]">Our Treatment Approach</h2>
            <span className="w-8 h-[1px] bg-[#365337]/40"></span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-7.5 relative">
          {treatmentSteps.map((step, index) => {
            const ComponentIcon = step.IconComponent;
            return (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                {index < treatmentSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-10 left-[55%] w-full items-center z-0">
                    <div className="w-full border-t-2 border-dashed border-[#B1C3B4]" />
                    <span className="text-[#365337] text-xs font-bold -ml-1">›</span>
                  </div>
                )}
                <div className="relative z-10 w-20 h-20 rounded-full bg-[#EBF1E9] flex items-center justify-center mb-3.5 border border-[#E0E8DC]">
                  <ComponentIcon />
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#2C3E35] mb-1">{step.stepNumber}</h3>
                <p className="text-xs text-[#5C6F63] leading-relaxed max-w-[170px]">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE AYURVEDA SECTION */}
      <section className="py-12 sm:py-15 px-4 sm:px-8 lg:px-12 bg-white max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-11 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-sm h-[310px] sm:h-[340px] w-full">
              <img 
                src="/img1.png" 
                alt="Why Ayurvedic Treatments" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 bg-[#28541E] text-white p-3.5 sm:p-4 rounded-xl shadow-md flex items-center gap-3 max-w-[210px]">
                <div className="shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C12 22 13.5 18 18 18C19.5 18 21 18.8 21.8 20" stroke="#90C680" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16.5 18C16.5 14 14 11.5 10.5 11.5C10.5 15 13 18 16.5 18Z" fill="#90C680" stroke="#90C680" strokeWidth="1.5" />
                    <path d="M16.5 14.5C19 12 22 12 22 14.5C19.5 16 17 15.2 16.5 14.5Z" fill="#90C680" stroke="#90C680" strokeWidth="1.2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base sm:text-lg leading-none">100%</h4>
                  <p className="text-[11px] text-[#A6DA97] mt-1 leading-tight font-medium">Natural & Safe Treatments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-5.5">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#365337] uppercase">
                WHY CHOOSE AYURVEDA?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-serif font-bold text-[#2C3E35] mt-1">
                Why Ayurvedic Treatments?
              </h2>

              <div className="relative mt-3.5 mb-2 flex items-center">
                <div className="w-full h-[1px] bg-[#E2E8DF]" />
                <div className="absolute left-1/2 -translate-x-1/2 bg-white px-2">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14C8 14 9 10 13 10C11 7 8 7 8 7C8 7 8 10 5 11C7.5 12.5 8 14 8 14Z" fill="#365337" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-1">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#EBF2EA] flex items-center justify-center shrink-0">
                  <PlantHandIcon />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#2C3E35]">Natural & Safe</h3>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    Made from natural herbs and therapies with no side effects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#EBF2EA] flex items-center justify-center shrink-0">
                  <LotusIcon />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#2C3E35]">Personalized Care</h3>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    Treatment plans tailored to your body type and health needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#EBF2EA] flex items-center justify-center shrink-0">
                  <DoctorIcon />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#2C3E35]">Holistic Healing</h3>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    Treats the root cause and promotes overall well-being.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#EBF2EA] flex items-center justify-center shrink-0">
                  <ClockIcon />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#2C3E35]">Long Lasting Results</h3>
                  <p className="text-xs text-[#5C6F63] leading-relaxed">
                    Focus on long term relief and healthy living.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. BOOK APPOINTMENT BANNER */}
      <section className="py-7.5 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#365337] text-white rounded-2xl p-6 sm:p-7.5 flex flex-col md:flex-row items-center justify-between gap-5.5 relative overflow-hidden">
          <div className="flex items-center gap-5 text-left w-full md:w-auto">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#365337] text-2xl shrink-0 shadow-sm">
              <FaCalendarAlt />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#A2B8A5]">Take the first step towards a healthier you!</p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold">Book Your Appointment Today</h3>
              <p className="text-xs text-[#A2B8A5] mt-0.5">Get expert Ayurvedic care and start your healing journey.</p>
            </div>
          </div>

          <Link href="/book-appointment" className="bg-white text-[#365337] hover:bg-[#FAF9F5] px-6 py-3 rounded-full text-xs font-semibold transition shrink-0 flex items-center gap-2 shadow-sm">
            <FaCalendarAlt size={12} /> Book Appointment
          </Link>
        </div>
      </section>

      {/* 6. POPUP MODAL */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 relative space-y-4">
            <button onClick={() => setSelectedTreatment(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F5F7EE] flex items-center justify-center text-[#2C3E35]">
              <FaTimes />
            </button>
            <h2 className="text-xl font-serif font-bold text-[#2C3E35]">{selectedTreatment.title}</h2>
            <img src={selectedTreatment.image} alt={selectedTreatment.title} className="w-full h-44 object-cover rounded-xl" />
            <p className="text-xs text-[#5C6F63]">{selectedTreatment.fullDetail}</p>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#2C3E35]">Key Benefits:</h4>
              {selectedTreatment.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#4A5D52]">
                  <FaCheckCircle className="text-[#4D7B3D]" /> {b}
                </div>
              ))}
            </div>
            <div className="pt-2 border-t flex justify-end">
              <button onClick={() => setSelectedTreatment(null)} className="text-xs font-semibold text-[#5C6F63] px-4 py-2">Close</button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}