'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FaCalendarAlt, 
  FaArrowRight,
  FaSpa,
  FaBone,
  FaHeartbeat,
  FaBrain,
  FaShieldAlt,
  FaUserMd,
  FaSearch,
  FaClipboardList,
  FaLeaf,
  FaSmile,
  FaHourglassHalf,
  FaTimes,
  FaCheckCircle
} from 'react-icons/fa';

// Array for treatments with detailed modal data
const treatmentsList = [
  {
    id: 'digestive-care',
    title: 'Digestive Care',
    desc: 'Effective Ayurvedic therapies to improve digestion, relieve acidity, gas, bloating, constipation and IBS.',
    icon: FaLeaf,
    fullDetail: 'Ayurveda views digestion (Agni) as the key pillar of health. Our Digestive Care program heals chronic acidity, bloating, and IBS using herbal remedies and customized dietary corrections.',
    benefits: [
      'Relief from chronic acidity & gas',
      'Effective IBS & constipation management',
      'Restoration of gut microbiota balance',
      'Personalized Ayurvedic diet guidelines'
    ],
    duration: '2 - 4 Weeks Program',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'joint-pain',
    title: 'Joint & Pain Management',
    desc: 'Natural relief from arthritis, back pain, neck pain, sprains and muscular pain.',
    icon: FaBone,
    fullDetail: 'Joint pain is primarily caused by aggravated Vata dosha. Our treatments utilize therapeutic massages with medicated oils (Abhyanga, Janu Basti) to relieve stiffness and rebuild joint elasticity.',
    benefits: [
      'Reduces joint inflammation & swelling',
      'Long-term relief from back & neck pain',
      'Improves joint flexibility & cartilage health',
      '100% natural with zero side effects'
    ],
    duration: '3 - 6 Weeks Program',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'skin-care',
    title: 'Skin Care',
    desc: 'Ayurvedic treatments for acne, eczema, pimples, psoriasis and other skin problems.',
    icon: FaSpa,
    fullDetail: 'Our skin care treatments target internal blood impurities and Pitta imbalance. We offer natural herbs and detox therapies to give you clear, healthy, and radiant skin.',
    benefits: [
      'Clears stubborn acne & hyperpigmentation',
      'Calms eczema & psoriasis flare-ups',
      'Pure blood detoxification',
      'Restores natural skin radiance'
    ],
    duration: '4 - 8 Weeks Program',
    image: 'https://images.unsplash.com/photo-1704597435594-6688c953892a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxheXVydmVkYXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 'stress-management',
    title: 'Stress Management',
    desc: 'Balance your mind and body, reduce stress, anxiety, depression and improve sleep.',
    icon: FaBrain,
    fullDetail: 'Through therapies like Shirodhara and herbal nerve tonics (Medhya Rasayanas), we help soothe the nervous system, reduce anxiety, and promote deep restful sleep.',
    benefits: [
      'Relieves stress & mental anxiety',
      'Fixes chronic insomnia & sleep disorders',
      'Enhances memory & mental focus',
      'Calms the nervous system naturally'
    ],
    duration: '2 - 3 Weeks Program',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'panchakarma',
    title: 'Panchakarma Therapy',
    desc: 'Detoxify and rejuvenate your body with authentic Panchakarma therapies.',
    icon: FaHeartbeat,
    fullDetail: 'Panchakarma is the ultimate 5-step Ayurvedic body detoxification routine. It clears metabolic toxins from deep tissue layers, boosting overall energy and longevity.',
    benefits: [
      'Deep physical & cellular detoxification',
      'Boosts immune system function',
      'Rejuvenates tired body tissues',
      'Restores natural body metabolic rate'
    ],
    duration: '7 - 21 Days Intensive Program',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'immunity-boost',
    title: 'Immunity Boost',
    desc: 'Strengthen your immunity and prevent illnesses with Ayurvedic herbs and therapies.',
    icon: FaShieldAlt,
    fullDetail: 'Our immunity boost programs focus on building Ojas (vital vigor) using potent Rasayana herbs like Ashwagandha, Giloy, and Amla, keeping seasonal infections away.',
    benefits: [
      'Enhances natural body defenses',
      'Protects against seasonal allergies & flu',
      'Boosts stamina & daily vigor',
      'Comprehensive cell rejuvenation'
    ],
    duration: '4 Weeks Program',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800'
  }
];

export default function TreatmentsSectionOnly() {
  // Modal State Management
  const [selectedTreatment, setSelectedTreatment] = useState<typeof treatmentsList[0] | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#2C3E35] font-sans antialiased overflow-x-hidden relative">
      
      {/* 1. BREADCRUMB & HERO BANNER */}
      <div className="bg-[#F3F5F0] py-3 px-4 sm:px-6 md:px-12 border-b border-[#E2E6DF]">
        <div className="max-w-7xl mx-auto text-xs sm:text-sm text-[#5C6F63]">
          <Link href="/" className="hover:text-[#365337] transition-colors">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#365337] font-medium">Treatments</span>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#F6F8F1] min-h-[460px] sm:min-h-[500px] lg:min-h-[540px]">
        {/* Right Side Image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
          <img
            src="/img2.png"
            alt="Ayurvedic treatments herbs and oils"
            className="w-full h-full object-cover object-center"
          />
          {/* Left Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F8F1] via-[#F6F8F1]/80 via-25% to-transparent lg:from-[#F6F8F1] lg:via-[#F6F8F1]/70 lg:to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] px-6 sm:px-8 md:px-10 lg:px-2 flex items-center">
          <div className="w-full lg:w-[58%] py-12 lg:py-0">
            {/* Small Heading */}
            <div className="flex items-center gap-2 text-[#365337] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-[1px] bg-[#365337]"></span>
              OUR TREATMENTS
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-serif font-bold text-[#233B27] leading-[1.08]">
              Natural Healing Solutions
              <br />
              <span className="text-[#4D7B3D]">
                For Every Health Need
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[580px] text-sm sm:text-base text-[#526A5C] leading-relaxed">
              Ayurveda offers a holistic approach to heal the root cause of
              disorders and bring balance to your body, mind and soul.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR AYURVEDIC TREATMENTS CARDS SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3E35]">Our Ayurvedic Treatments</h2>
          <p className="text-xs sm:text-sm text-[#5C6F63]">Customized treatments for a healthier and happier you</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatmentsList.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id} 
                className="group bg-[#FAF9F5] border border-[#EBEFE8] p-6 rounded-2xl flex items-start justify-between gap-4 hover:shadow-lg hover:border-[#365337]/30 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-lg flex-shrink-0 group-hover:bg-[#365337] group-hover:text-white transition-colors duration-300">
                    <IconComp />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#2C3E35] group-hover:text-[#365337] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5C6F63] leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Learn More Button Opens Modal */}
                    <button 
                      onClick={() => setSelectedTreatment(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#365337] pt-1 hover:underline cursor-pointer"
                    >
                      Learn More <FaArrowRight size={10} />
                    </button>
                  </div>
                </div>

                {/* Arrow Action Opens Modal */}
                <button 
                  onClick={() => setSelectedTreatment(item)}
                  aria-label={`Open ${item.title} details`}
                  className="w-8 h-8 rounded-full border border-[#DCE5D9] flex items-center justify-center text-[#365337] flex-shrink-0 group-hover:bg-[#365337] group-hover:text-white group-hover:border-[#365337] transition-all duration-300 cursor-pointer"
                >
                  <FaArrowRight size={10} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. OUR TREATMENT APPROACH */}
      <section className="py-12 px-4 sm:px-6 md:px-12 bg-[#F3F5F0] border-y border-[#E2E6DF]">
        <div className="max-w-7xl mx-auto text-center space-y-2 mb-10">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3E35]">Our Treatment Approach</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-5 rounded-2xl shadow-xs space-y-2 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-lg">
              <FaUserMd />
            </div>
            <h4 className="font-serif font-bold text-sm text-[#2C3E35]">1. Consultation</h4>
            <p className="text-[11px] text-[#5C6F63]">Detailed consultation and health assessment</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs space-y-2 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-lg">
              <FaSearch />
            </div>
            <h4 className="font-serif font-bold text-sm text-[#2C3E35]">2. Diagnosis</h4>
            <p className="text-[11px] text-[#5C6F63]">Identify the root cause of the problem</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs space-y-2 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-lg">
              <FaClipboardList />
            </div>
            <h4 className="font-serif font-bold text-sm text-[#2C3E35]">3. Personalized Plan</h4>
            <p className="text-[11px] text-[#5C6F63]">Customized treatment plan for your body type</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs space-y-2 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-lg">
              <FaLeaf />
            </div>
            <h4 className="font-serif font-bold text-sm text-[#2C3E35]">4. Treatment</h4>
            <p className="text-[11px] text-[#5C6F63]">Natural therapies and herbal remedies</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-xs space-y-2 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-lg">
              <FaSmile />
            </div>
            <h4 className="font-serif font-bold text-sm text-[#2C3E35]">5. Better Health</h4>
            <p className="text-[11px] text-[#5C6F63]">Long term wellness and balanced living</p>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE AYURVEDA SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md h-[300px] sm:h-[360px]">
              <img 
                src="/img1.png" 
                alt="Ayurvedic treatments natural" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#365337] text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <span className="text-2xl"><FaLeaf /></span>
                <div>
                  <h4 className="font-serif font-bold text-lg">100%</h4>
                  <p className="text-[10px] text-[#A2B8A5]">Natural &amp; Safe Treatments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#365337]">Why Choose Ayurveda?</p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3E35]">Why Ayurvedic Treatments?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] flex-shrink-0">
                  <FaLeaf />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">Natural &amp; Safe</h4>
                  <p className="text-xs text-[#5C6F63]">Made from natural herbs and therapies with no side effects.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] flex-shrink-0">
                  <FaClipboardList />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">Personalized Care</h4>
                  <p className="text-xs text-[#5C6F63]">Treatment plans tailored to your body type and health needs.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] flex-shrink-0">
                  <FaHeartbeat />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">Holistic Healing</h4>
                  <p className="text-xs text-[#5C6F63]">Treats the root cause and promotes overall well-being.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] flex-shrink-0">
                  <FaHourglassHalf />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2C3E35]">Long Lasting Results</h4>
                  <p className="text-xs text-[#5C6F63]">Focus on long term relief and healthy living.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPOINTMENT BANNER */}
      <section className="py-6 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-[#365337] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2C422D] flex items-center justify-center text-white text-xl flex-shrink-0 shadow-inner">
              <FaCalendarAlt />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#A2B8A5] font-semibold">Take the first step towards a healthier you!</p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold">Book Your Appointment Today</h3>
            </div>
          </div>

          <Link 
            href="/book-appointment" 
            className="bg-white text-[#365337] hover:bg-[#FAF9F5] hover:scale-105 px-6 py-3 rounded-full text-xs font-semibold transition-all shadow-md flex items-center gap-2 flex-shrink-0"
          >
            <FaCalendarAlt size={12} /> Book Appointment
          </Link>
        </div>
      </section>

      {/* 6. DYNAMIC POPUP MODAL */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-all duration-300">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 border border-[#EBEFE8] shadow-2xl relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F5F7EE] hover:bg-[#E5EFE6] text-[#2C3E35] flex items-center justify-center transition cursor-pointer"
            >
              <FaTimes />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 pr-8">
              <div className="w-12 h-12 rounded-2xl bg-[#E5EFE6] flex items-center justify-center text-[#365337] shrink-0 text-xl">
                <selectedTreatment.icon />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4D7B3D]">
                  Ayurvedic Solution
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3E35]">
                  {selectedTreatment.title}
                </h2>
              </div>
            </div>

            {/* Treatment Image */}
            <div className="h-40 sm:h-48 w-full rounded-2xl overflow-hidden relative">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Treatment Description */}
            <p className="text-xs sm:text-sm text-[#5C6F63] leading-relaxed">
              {selectedTreatment.fullDetail}
            </p>

            {/* Benefits List */}
            <div className="space-y-2">
              <h4 className="text-sm font-serif font-bold text-[#2C3E35]">
                Key Benefits:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedTreatment.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#4D7B3D] text-xs shrink-0 mt-0.5" />
                    <span className="text-xs text-[#4A5D52] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration Box */}
            <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#EBEFE8]">
              <strong className="block text-[11px] font-bold text-[#2C3E35]">Expected Duration</strong>
              <span className="text-xs text-[#5C6F63]">{selectedTreatment.duration}</span>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-[#EBEFE8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedTreatment(null)}
                className="w-full sm:w-auto text-xs font-semibold text-[#5C6F63] hover:text-[#2C3E35] px-4 py-2 cursor-pointer"
              >
                Close
              </button>

              <Link
                href="/book-appointment"
                className="w-full sm:w-auto bg-[#365337] hover:bg-[#2C422D] text-white px-6 py-2.5 rounded-full text-xs font-semibold transition text-center shadow-md flex items-center justify-center gap-2"
              >
                <FaCalendarAlt size={12} /> Book Consultation
              </Link>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}