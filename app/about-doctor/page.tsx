'use client';

import Link from 'next/link';
import { 
  FaLeaf, 
  FaCheck, 
  FaCalendarAlt, 
  FaUserMd, 
  FaUsers, 
  FaAward, 
  FaHeart, 
  FaHandHoldingMedical, 
  FaSpa, 
  FaBookMedical
} from 'react-icons/fa';

export default function AboutDoctorPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#2C3E35] font-sans antialiased overflow-x-hidden pt-0 m-0">
      
      {/* 2. HERO / DOCTOR PROFILE SECTION (Fixed top spacing) */}
      <section className="relative overflow-hidden bg-[#F8F9F3] pt-6 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 md:px-10 lg:px-12 border-b border-[#E2E6DF]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[52%] space-y-6 text-center lg:text-left">
            
            {/* LABEL */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-8 h-px bg-[#365337]" />
              <span className="text-[#365337] text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em]">
                ABOUT THE DOCTOR 🌿
              </span>
            </div>

            {/* HEADING */}
            <h1 className="font-serif font-bold text-[#203D2A] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1]">
              Dedicated to Your <br />
              <span className="text-[#4D7A42]">Health &amp; Wellness</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-xl mx-auto lg:mx-0 text-[#5C6F63] text-sm sm:text-base leading-relaxed">
              With deep knowledge of Ayurveda and a compassionate approach, 
              Dr. Anjali Sharma is dedicated to helping people achieve natural 
              healing and long-term wellness.
            </p>

            {/* DOCTOR DETAILS */}
            <div className="pt-2">
              <h2 className="font-serif italic text-2xl sm:text-3xl text-[#365337]">
                Dr. Anjali Sharma
              </h2>
              <p className="mt-1 text-sm font-bold text-[#2C3E35]">
                BAMS, MD (Ayurveda)
              </p>
              <p className="mt-0.5 text-xs sm:text-sm text-[#5C6F63]">
                Ayurvedic Consultant &amp; Panchakarma Specialist
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE CONTAINER */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px] bg-[#EAEFE7] rounded-3xl overflow-hidden shadow-sm flex items-center justify-center">
              <img
                src="/doc.jpg"
                alt="Ayurvedic Doctor Consultation - Dr. Anjali Sharma"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://www.medicaltrusthospital.com/public/images/ayurtrust-img-2.webp";
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="py-8 px-4 sm:px-6 md:px-12 bg-white border-b border-[#E2E6DF]">
        <div className="max-w-7xl mx-auto bg-[#FCFBF7] border border-[#F0EFEA] rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#EFEEE9]">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 first:sm:pl-0">
              <div className="w-12 h-12 rounded-full bg-[#F2F4EE] flex items-center justify-center text-[#365337] text-xl flex-shrink-0 shadow-sm">
                <FaUserMd />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2C3E35]">10+</h3>
                <p className="text-xs text-[#5C6F63]">Years of Experience</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-full bg-[#F2F4EE] flex items-center justify-center text-[#365337] text-xl flex-shrink-0 shadow-sm">
                <FaLeaf />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2C3E35]">5000+</h3>
                <p className="text-xs text-[#5C6F63]">Happy Patients</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-full bg-[#F2F4EE] flex items-center justify-center text-[#365337] text-xl flex-shrink-0 shadow-sm">
                <FaSpa />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2C3E35]">15+</h3>
                <p className="text-xs text-[#5C6F63]">Specialized Treatments</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 last:sm:pr-0">
              <div className="w-12 h-12 rounded-full bg-[#F2F4EE] flex items-center justify-center text-[#365337] text-xl flex-shrink-0 shadow-sm">
                <FaAward />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2C3E35]">100%</h3>
                <p className="text-xs text-[#5C6F63]">Natural &amp; Safe</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE & EDUCATION SECTION */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3E35] border-b pb-2 sm:pb-3 border-[#E2E6DF]">
              Experience
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6F63] leading-relaxed">
              Dr. Anjali Sharma has over 10 years of experience in the field of Ayurveda. She has helped thousands of patients overcome chronic health issues through personalized treatment plans and natural healing therapies.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#365337] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <FaCheck className="text-[9px] sm:text-[10px]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#2C3E35]">Expertise in Ayurvedic Consultation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#365337] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <FaCheck className="text-[9px] sm:text-[10px]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#2C3E35]">Specialization in Panchakarma Therapies</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#365337] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <FaCheck className="text-[9px] sm:text-[10px]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#2C3E35]">Treating Lifestyle Disorders &amp; Chronic Conditions</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#365337] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <FaCheck className="text-[9px] sm:text-[10px]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#2C3E35]">Holistic Approach to Mind, Body &amp; Soul</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2C3E35] border-b pb-2 sm:pb-3 border-[#E2E6DF]">
              Education &amp; Qualifications
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#365337] mt-1.5 flex-shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">MD (Ayurveda)</h4>
                  <p className="text-[11px] sm:text-xs text-[#5C6F63]">Rajasthan Ayurved University, Jodhpur</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#365337] mt-1.5 flex-shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">BAMS (Bachelor of Ayurvedic Medicine &amp; Surgery)</h4>
                  <p className="text-[11px] sm:text-xs text-[#5C6F63]">Rajasthan Ayurved University, Jodhpur</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#365337] mt-1.5 flex-shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">Diploma in Panchakarma Therapy</h4>
                  <p className="text-[11px] sm:text-xs text-[#5C6F63]">National Institute of Ayurveda, Jaipur</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#365337] mt-1.5 flex-shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#2C3E35]">Certificate in Yoga &amp; Naturopathy</h4>
                  <p className="text-[11px] sm:text-xs text-[#5C6F63]">Morarji Desai National Institute of Yoga, New Delhi</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. OUR APPROACH SECTION */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 bg-white border-t border-[#E2E6DF]">
        <div className="max-w-7xl mx-auto text-center space-y-1 mb-8 sm:mb-10">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#365337]">Our Approach</p>
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#2C3E35]">Healing Naturally, Living Better</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          
          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-hover:bg-[#365337] group-hover:text-white transition-colors">
              <FaLeaf />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Natural Healing</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">We believe in the healing power of nature and focus on treatments that are safe, effective and natural.</p>
          </div>

          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-hover:bg-[#365337] group-hover:text-white transition-colors">
              <FaUsers />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Personalized Care</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">Every individual is unique. We create personalized treatment plans tailored to your body and lifestyle.</p>
          </div>

          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-hover:bg-[#365337] group-hover:text-white transition-colors">
              <FaHeart />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Holistic Wellness</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">We treat the root cause of health issues and promote balance of body, mind and spirit.</p>
          </div>

          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-hover:bg-[#365337] group-hover:text-white transition-colors">
              <FaBookMedical />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Ancient Wisdom</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">Our treatments are based on time-tested Ayurvedic principles and backed by modern understanding.</p>
          </div>

          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 sm:col-span-2 lg:col-span-1 transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-hover:bg-[#365337] group-hover:text-white transition-colors">
              <FaHandHoldingMedical />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Compassionate Care</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">We are committed to providing care with compassion, empathy and respect.</p>
          </div>

        </div>
      </section>

      {/* 6. APPOINTMENT BANNER */}
      <section className="py-6 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-[#365337] text-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden text-center md:text-left">
          
          {/* Subtle Background Leaf Watermark Effect */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
            <svg className="w-96 h-96 fill-current text-white" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.5,17 5,17.5C5.5,15 7,11 17,8Z" />
            </svg>
          </div>

          {/* Left Content with Large White Icon Circle */}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-5 relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF9F5] flex items-center justify-center text-[#365337] text-2xl sm:text-3xl flex-shrink-0 shadow-lg">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#C8D6CA] font-semibold">
                Take the first step towards a healthier you!
              </p>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-white">
                Book Your Appointment Today
              </h3>
              <p className="text-xs sm:text-sm text-[#D5E1D7] font-light">
                Personalized Ayurvedic care for you and your family.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <Link 
            href="/book-appointment" 
            className="bg-white text-[#365337] hover:bg-[#FAF9F5] hover:scale-105 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2.5 flex-shrink-0 relative z-10 active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
            </svg>
            Book Appointment
          </Link>

        </div>
      </section>

    </main>
  );
}