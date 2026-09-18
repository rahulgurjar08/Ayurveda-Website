
'use client';

import { useState } from 'react';
import type { IconType } from 'react-icons';
import Link from 'next/link';

import {
  FaHome,
  FaChevronRight,
  FaLeaf,
  FaCalendarAlt,
  FaPlay,
  FaArrowRight,
  FaStethoscope,
  FaSpa,
  FaSeedling,
  FaUserMd,
  FaUtensils,
  FaBrain,
  FaWater,
  FaWind,
  FaHeartbeat,
  FaShieldAlt,
  FaSmile,
  FaCheckCircle,
  FaTimes,
} from 'react-icons/fa';

type Service = {
  id: number;
  icon: IconType;
  title: string;
  desc: string;
  fullDetails: string;
};

type Therapy = {
  icon: IconType;
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
      icon: FaSpa,
      title: 'Panchakarma Therapy',
      desc: 'Detoxify and rejuvenate your body with authentic Panchakarma treatments for long lasting results.',
      fullDetails:
        'Panchakarma involves five traditional purification procedures customized to eliminate deep-rooted toxins, restore dosha balance, and reset your metabolism.',
    },
    {
      id: 3,
      icon: FaSeedling,
      title: 'Herbal Treatments',
      desc: 'Natural herbal medicines to treat various acute and chronic health conditions effectively.',
      fullDetails:
        "We prescribe 100% natural, classic Ayurvedic herbal formulations customized specifically to your body's constitutional requirements without synthetic additives.",
    },
    {
      id: 4,
      icon: FaUserMd,
      title: 'Yoga & Lifestyle Guidance',
      desc: 'Personalized yoga, diet and lifestyle recommendations to bring balance to body, mind and soul.',
      fullDetails:
        'Receive customized daily routines (Dinacharya) and specialized yoga postures tailored to strengthen your physical and mental balance.',
    },
    {
      id: 5,
      icon: FaUtensils,
      title: 'Diet & Nutrition',
      desc: 'Customized Ayurvedic diet plans to improve digestion, immunity and overall well-being.',
      fullDetails:
        'Learn how to eat according to your unique dosha profile with seasonal eating recommendations that naturally optimize digestive fire (Agni).',
    },
    {
      id: 6,
      icon: FaBrain,
      title: 'Stress Management',
      desc: 'Ayurvedic therapies and techniques to reduce stress, anxiety and improve mental wellness.',
      fullDetails:
        'Integrating targeted herbal remedies, meditation routines, and soothing therapies designed to calm the central nervous system and restore mental focus.',
    },
  ];

  const therapies: Therapy[] = [
    {
      icon: FaSpa,
      title: 'Abhyanga Massage',
      desc: 'Herbal oil massage to improve circulation, relax muscles and nourish the body.',
    },
    {
      icon: FaUserMd,
      title: 'Shirodhara Therapy',
      desc: 'Therapeutic oil treatment for the head to calm the mind and improve sleep quality.',
    },
    {
      icon: FaWater,
      title: 'Basti Therapy',
      desc: 'Ayurvedic medicated enema therapy to detoxify and balance the body.',
    },
    {
      icon: FaWind,
      title: 'Nasya Therapy',
      desc: 'Herbal nasal therapy to clear sinuses, improve respiration and boost head health.',
    },
    {
      icon: FaHeartbeat,
      title: 'Raktamokshana',
      desc: 'Purification therapy to detoxify blood and treat skin disorders and chronic conditions.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#2C3E35] font-sans antialiased overflow-x-hidden">

      {/* 1. BREADCRUMB */}
      

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAF9F5] min-h-[460px] sm:min-h-[500px] lg:min-h-[540px]">

        <div className="absolute inset-y-0 right-0 w-full lg:w-[50%]">
          <img
            src="/img4.jpeg"
            alt="Ayurvedic doctor providing natural healthcare"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/75 to-transparent lg:from-[#FAF9F5] lg:via-[#FAF9F5]/65 lg:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] px-6 sm:px-8 md:px-10 lg:px-12 flex items-center">

          <div className="w-full lg:w-[60%] py-10 lg:py-0">

            <div className="inline-flex items-center gap-2 text-[#365337] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-5">
              <span>OUR SERVICES</span>
              <FaLeaf size={12} />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-serif font-bold text-[#2C3E35] leading-[1.1]">
              Comprehensive Ayurvedic <br />
              <span className="italic font-normal text-[#365337]">
                Care For Your Well-Being
              </span>
            </h1>

            <div className="flex items-center gap-3 text-[#365337] mt-5">
              <span className="w-8 h-[1px] bg-[#365337]" />
              <FaLeaf size={12} />
              <span className="w-8 h-[1px] bg-[#365337]" />
            </div>

            <p className="mt-5 text-[#5C6F63] text-sm sm:text-base leading-relaxed max-w-xl">
              We offer a range of authentic Ayurvedic services and therapies
              to help you achieve optimal health, naturally and holistically.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-5">

              <Link
                href="/book-appointment"
                className="bg-[#365337] text-white hover:bg-[#2C422D] px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center gap-2"
              >
                <span>Book an Appointment</span>
                <FaCalendarAlt size={13} />
              </Link>

              <a
                href="#how-it-works"
                className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#2C3E35] hover:text-[#365337] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#DCE5D9] flex items-center justify-center text-[#365337] shadow-sm">
                  <FaPlay size={10} className="ml-0.5" />
                </div>

                <div>
                  <strong className="block text-sm font-bold">
                    How It Works
                  </strong>

                  <small className="text-[11px] text-[#5C6F63] font-normal">
                    Watch Video
                  </small>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR AYURVEDIC SERVICES CARDS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white border-t border-[#E2E6DF]">

        <div className="max-w-7xl mx-auto text-center space-y-2 mb-12">

          <div className="inline-block text-[#365337] mb-1">
            <FaLeaf size={14} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3E35]">
            Our Ayurvedic Services
          </h2>

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
                className="group bg-[#FAF9F5] border border-[#EBEFE8] p-6 rounded-2xl flex flex-col justify-between gap-6 hover:shadow-xl hover:border-[#365337]/40 hover:-translate-y-1 transition-all duration-300"
              >

                <div className="space-y-4">

                  <div className="w-12 h-12 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-lg group-hover:bg-[#365337] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconComponent />
                  </div>

                  <div className="space-y-1.5">

                    <h3 className="font-serif font-bold text-lg text-[#2C3E35] group-hover:text-[#365337] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#5C6F63] leading-relaxed">
                      {item.desc}
                    </p>

                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#365337] hover:underline cursor-pointer w-fit"
                >
                  Learn More
                  <FaArrowRight size={10} />
                </button>

              </div>
            );
          })}

        </div>
      </section>

      {/* 4. SPECIALIZED THERAPIES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#FAF9F5] border-t border-[#E2E6DF]">

        <div className="max-w-7xl mx-auto space-y-8">

          <div className="text-center sm:text-left space-y-1">

            <div className="inline-block text-[#365337]">
              <FaLeaf size={14} />
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3E35]">
              Specialized Therapies
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

            {therapies.map((item, idx) => {

              const TherapyIcon = item.icon;

              return (
                <Link
                  href="/book-appointment"
                  key={idx}
                  className="group bg-white border border-[#E2E6DF] p-5 rounded-2xl space-y-3 hover:shadow-lg hover:border-[#365337]/40 hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base group-hover:bg-[#365337] group-hover:text-white transition-colors duration-300">
                    <TherapyIcon />
                  </div>

                  <div className="space-y-1">

                    <h4 className="font-serif font-bold text-sm text-[#2C3E35] group-hover:text-[#365337] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-[#5C6F63] leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </Link>
              );
            })}

          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE OUR SERVICES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white border-t border-[#E2E6DF]">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-5">

            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[320px] sm:h-[380px] border border-[#E2E6DF]">

              <img
                src="/img3.jpeg"
                alt="Ayurvedic treatments natural setup"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-[#365337] text-white px-5 py-3.5 rounded-2xl shadow-lg flex items-center gap-3">

                <span className="text-xl">
                  <FaLeaf />
                </span>

                <div>

                  <h4 className="font-serif font-bold text-base leading-tight">
                    100% Natural
                  </h4>

                  <p className="text-[10px] text-[#A2B8A5]">
                    Safe • Effective • Authentic
                  </p>

                </div>

              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">

            <div className="space-y-1">

              <div className="inline-block text-[#365337]">
                <FaLeaf size={14} />
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C3E35]">
                Why Choose Our Services?
              </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 pt-1">

              {/* Item 1 */}
              <div className="group flex gap-3.5 items-start">

                <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] flex-shrink-0 group-hover:bg-[#365337] group-hover:text-white transition-colors duration-300">
                  <FaUserMd />
                </div>

                <div>

                  <h4 className="font-serif font-bold text-sm text-[#2C3E35] group-hover:text-[#365337] transition-colors">
                    Experienced Ayurvedic Doctor
                  </h4>

                  <p className="text-xs text-[#5C6F63] mt-0.5">
                    Expert guidance with years of experience in Ayurvedic medicine.
                  </p>

                </div>

              </div>

              {/* Item 2 */}
              <div className="group flex gap-3.5 items-start">

                <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] flex-shrink-0 group-hover:bg-[#365337] group-hover:text-white transition-colors duration-300">
                  <FaCheckCircle />
                </div>

                <div>

                  <h4 className="font-serif font-bold text-sm text-[#2C3E35] group-hover:text-[#365337] transition-colors">
                    Holistic Healing Approach
                  </h4>

                  <p className="text-xs text-[#5C6F63] mt-0.5">
                    Treating the root cause and promoting overall wellness.
                  </p>

                </div>

              </div>

              {/* Item 3 */}
              <div className="group flex gap-3.5 items-start">

                <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] flex-shrink-0 group-hover:bg-[#365337] group-hover:text-white transition-colors duration-300">
                  <FaShieldAlt />
                </div>

                <div>

                  <h4 className="font-serif font-bold text-sm text-[#2C3E35] group-hover:text-[#365337] transition-colors">
                    Personalized Care
                  </h4>

                  <p className="text-xs text-[#5C6F63] mt-0.5">
                    Treatment plans tailored specifically to your body type and health needs.
                  </p>

                </div>

              </div>

              {/* Item 4 */}
              <div className="group flex gap-3.5 items-start">

                <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] flex-shrink-0 group-hover:bg-[#365337] group-hover:text-white transition-colors duration-300">
                  <FaSmile />
                </div>

                <div>

                  <h4 className="font-serif font-bold text-sm text-[#2C3E35] group-hover:text-[#365337] transition-colors">
                    Long Lasting Results
                  </h4>

                  <p className="text-xs text-[#5C6F63] mt-0.5">
                    Our therapies focus on long term relief and disease prevention.
                  </p>

                </div>

              </div>

              {/* Item 5 */}
              <div className="group flex gap-3.5 items-start sm:col-span-2">

                <div className="w-10 h-10 rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] flex-shrink-0 group-hover:bg-[#365337] group-hover:text-white transition-colors duration-300">
                  <FaLeaf />
                </div>

                <div>

                  <h4 className="font-serif font-bold text-sm text-[#2C3E35] group-hover:text-[#365337] transition-colors">
                    Natural &amp; Safe Therapies
                  </h4>

                  <p className="text-xs text-[#5C6F63] mt-0.5">
                    We use natural herbs and authentic Ayurvedic methods for healing.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. APPOINTMENT BANNER */}
      <section className="py-8 px-4 sm:px-6 md:px-12 bg-white">

        <div className="max-w-7xl mx-auto bg-[#365337] text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">

          <div className="flex flex-col md:flex-row items-center gap-5">

            <div className="w-14 h-14 rounded-full bg-[#2C422D] flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-inner">
              <FaCalendarAlt />
            </div>

            <div className="space-y-1">

              <p className="text-[11px] uppercase tracking-widest text-[#A2B8A5] font-semibold">
                Take the first step towards a healthier you!
              </p>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                Book Your Appointment Today
              </h3>

              <p className="text-xs text-[#A2B8A5]">
                Let us help you live a healthy, balanced and happy life.
              </p>

            </div>

          </div>

          <Link
            href="/book-appointment"
            className="bg-white text-[#365337] hover:bg-[#FAF9F5] hover:scale-105 px-8 py-4 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 flex-shrink-0"
          >
            <FaCalendarAlt size={13} />
            Book Appointment
          </Link>

        </div>
      </section>

      {/* POPUP MODAL */}
      {selectedService && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >

          <div
            className="bg-[#FAF9F5] border border-[#E2E6DF] rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-[#5C6F63] hover:text-[#2C3E35] p-2 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Close Modal"
            >
              <FaTimes size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-[#E2E6DF] pb-4">

              <div className="w-12 h-12 rounded-full bg-[#365337] text-white flex items-center justify-center text-xl shadow-md">

                {(() => {
                  const ModalIcon = selectedService.icon;
                  return <ModalIcon />;
                })()}

              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#2C3E35] pr-8">
                {selectedService.title}
              </h3>

            </div>

            {/* Modal Content */}
            <div className="space-y-3">

              <p className="text-xs sm:text-sm text-[#5C6F63] leading-relaxed">
                {selectedService.desc}
              </p>

              <p className="text-xs sm:text-sm text-[#2C3E35] font-medium leading-relaxed bg-white p-4 rounded-xl border border-[#E2E6DF]">
                {selectedService.fullDetails}
              </p>

            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">

              <Link
                href="/book-appointment"
                className="w-full bg-[#365337] text-white hover:bg-[#2C422D] py-3 rounded-full text-xs sm:text-sm font-semibold text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Book This Service</span>
                <FaCalendarAlt size={12} />
              </Link>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-full bg-transparent border border-[#E2E6DF] text-[#5C6F63] hover:bg-[#E2E6DF]/30 py-3 rounded-full text-xs sm:text-sm font-semibold text-center transition-all"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}

    </main>
  );
}
