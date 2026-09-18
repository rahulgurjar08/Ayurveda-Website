'use client';

import Link from 'next/link';
import { 
  FaLeaf, 
  FaCheck, 
  FaCalendarAlt, 
  FaUserMd, 
  FaUsers, 
  FaShieldAlt, 
  FaHeart, 
  FaHandHoldingMedical, 
  FaSpa, 
  FaBookMedical
} from 'react-icons/fa';

export default function AboutDoctorPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#2C3E35] font-sans antialiased overflow-x-hidden">
      
      {/* 1. BREADCRUMB SECTION */}
      <div className="bg-[#F3F5F0] py-2.5 px-4 sm:px-6 md:px-12 border-b border-[#E2E6DF]">
        <div className="max-w-7xl mx-auto text-xs sm:text-sm text-[#5C6F63]">
          <Link href="/" className="hover:text-[#365337] active:text-[#365337] transition-colors">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#365337] font-medium">About Doctor</span>
        </div>
      </div>

      {/* 2. HERO / DOCTOR PROFILE SECTION */}
      <section className="relative overflow-hidden bg-[#F8F9F3] min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]">

{/* RIGHT IMAGE */}
<div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">

  <img
    src="https://www.medicaltrusthospital.com/public/images/ayurtrust-img-2.webp"
    alt="Ayurvedic Doctor Consultation"
    className="w-full h-full object-cover object-center"
  />

  {/* SOFT FADE */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9F3] via-[#F8F9F3]/75 to-transparent lg:from-[#F8F9F3] lg:via-[#F8F9F3]/55 lg:to-transparent" />

</div>

{/* CONTENT */}
<div className="relative z-10 max-w-7xl mx-auto min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] px-4 sm:px-6 md:px-10 lg:px-12 flex items-center">

  <div className="w-full lg:w-[62%] py-10 sm:py-12 lg:py-0">

    {/* LABEL */}
    <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
      <span className="w-8 h-px bg-[#365337]" />

      <span className="text-[#365337] text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em]">
        ABOUT THE DOCTOR
      </span>
    </div>

    {/* HEADING */}
    <h1 className="text-center lg:text-left font-serif font-bold text-[#203D2A] text-4xl sm:text-5xl md:text-6xl lg:text-[56px] leading-[1.05]">
      Dedicated to Your
      <br />
      <span className="text-[#4D7A42]">
        Health &amp; Wellness
      </span>
    </h1>

    {/* DESCRIPTION */}
    <p className="mt-5 text-center lg:text-left max-w-xl mx-auto lg:mx-0 text-[#5C6F63] text-sm sm:text-base leading-7">
      With deep knowledge of Ayurveda and a compassionate approach,
      Dr. Anjali Sharma is dedicated to helping people achieve natural
      healing and long-term wellness.
    </p>

    {/* DOCTOR DETAILS */}
    <div className="mt-6 text-center lg:text-left">

      <h2 className="font-serif italic text-2xl sm:text-3xl text-[#365337]">
        Dr. Anjali Sharma
      </h2>

      <p className="mt-1 text-sm font-bold text-[#2C3E35]">
        BAMS, MD (Ayurveda)
      </p>

      <p className="mt-1 text-xs sm:text-sm text-[#5C6F63]">
        Ayurvedic Consultant &amp; Panchakarma Specialist
      </p>

    </div>

  </div>
</div>
</section>

      {/* 3. STATS BAR - Responsive Grid + Touch Feedback */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 md:px-12 bg-white border-y border-[#E2E6DF]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          
          <div className="flex flex-col items-center space-y-1 p-3 rounded-xl bg-[#FAF9F5] sm:bg-transparent active:scale-95 sm:hover:bg-[#FAF9F5] transition-all duration-200 group">
            <div className="text-[#365337] text-lg sm:text-xl mb-1 sm:group-hover:scale-110 transition-transform"><FaUserMd /></div>
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#2C3E35]">10+</h3>
            <p className="text-[11px] sm:text-xs text-[#5C6F63]">Years of Experience</p>
          </div>

          <div className="flex flex-col items-center space-y-1 p-3 rounded-xl bg-[#FAF9F5] sm:bg-transparent active:scale-95 sm:hover:bg-[#FAF9F5] transition-all duration-200 group">
            <div className="text-[#365337] text-lg sm:text-xl mb-1 sm:group-hover:scale-110 transition-transform"><FaUsers /></div>
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#2C3E35]">5000+</h3>
            <p className="text-[11px] sm:text-xs text-[#5C6F63]">Happy Patients</p>
          </div>

          <div className="flex flex-col items-center space-y-1 p-3 rounded-xl bg-[#FAF9F5] sm:bg-transparent active:scale-95 sm:hover:bg-[#FAF9F5] transition-all duration-200 group">
            <div className="text-[#365337] text-lg sm:text-xl mb-1 sm:group-hover:scale-110 transition-transform"><FaSpa /></div>
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#2C3E35]">15+</h3>
            <p className="text-[11px] sm:text-xs text-[#5C6F63]">Specialized Treatments</p>
          </div>

          <div className="flex flex-col items-center space-y-1 p-3 rounded-xl bg-[#FAF9F5] sm:bg-transparent active:scale-95 sm:hover:bg-[#FAF9F5] transition-all duration-200 group">
            <div className="text-[#365337] text-lg sm:text-xl mb-1 sm:group-hover:scale-110 transition-transform"><FaShieldAlt /></div>
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#2C3E35]">100%</h3>
            <p className="text-[11px] sm:text-xs text-[#5C6F63]">Natural &amp; Safe</p>
          </div>

        </div>
      </section>

      {/* 4. EXPERIENCE & EDUCATION SECTION */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Experience Column */}
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

          {/* Education & Qualifications Column */}
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

      {/* 5. OUR APPROACH SECTION - Mobile Grid & Active Touch States */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 bg-white border-t border-[#E2E6DF]">
        <div className="max-w-7xl mx-auto text-center space-y-1 mb-8 sm:mb-10">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#365337]">Our Approach</p>
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#2C3E35]">Healing Naturally, Living Better</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          
          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 active:scale-95 sm:hover:-translate-y-2 sm:hover:shadow-md transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-active:bg-[#365337] group-active:text-white sm:group-hover:bg-[#365337] sm:group-hover:text-white transition-colors">
              <FaLeaf />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Natural Healing</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">We believe in the healing power of nature and focus on treatments that are safe, effective and natural.</p>
          </div>

          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 active:scale-95 sm:hover:-translate-y-2 sm:hover:shadow-md transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-active:bg-[#365337] group-active:text-white sm:group-hover:bg-[#365337] sm:group-hover:text-white transition-colors">
              <FaUsers />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Personalized Care</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">Every individual is unique. We create personalized treatment plans tailored to your body and lifestyle.</p>
          </div>

          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 active:scale-95 sm:hover:-translate-y-2 sm:hover:shadow-md transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-active:bg-[#365337] group-active:text-white sm:group-hover:bg-[#365337] sm:group-hover:text-white transition-colors">
              <FaHeart />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Holistic Wellness</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">We treat the root cause of health issues and promote balance of body, mind and spirit.</p>
          </div>

          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 active:scale-95 sm:hover:-translate-y-2 sm:hover:shadow-md transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-active:bg-[#365337] group-active:text-white sm:group-hover:bg-[#365337] sm:group-hover:text-white transition-colors">
              <FaBookMedical />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Ancient Wisdom</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">Our treatments are based on time-tested Ayurvedic principles and backed by modern understanding.</p>
          </div>

          <div className="bg-[#FAF9F5] border border-[#EBEFE8] p-4 sm:p-5 rounded-2xl text-center space-y-2.5 sm:col-span-2 lg:col-span-1 active:scale-95 sm:hover:-translate-y-2 sm:hover:shadow-md transition-all duration-200 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-[#E5EFE6] flex items-center justify-center text-[#365337] text-base sm:text-lg group-active:bg-[#365337] group-active:text-white sm:group-hover:bg-[#365337] sm:group-hover:text-white transition-colors">
              <FaHandHoldingMedical />
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#2C3E35]">Compassionate Care</h3>
            <p className="text-[11px] text-[#5C6F63] leading-relaxed">We are committed to providing care with compassion, empathy and respect.</p>
          </div>

        </div>
      </section>

      {/* 6. APPOINTMENT BANNER */}
      <section className="py-6 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-[#365337] text-white rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2C422D] flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0 shadow-inner">
              <FaCalendarAlt />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#A2B8A5] font-semibold">Take the first step towards a healthier you!</p>
              <h3 className="text-lg sm:text-2xl font-serif font-bold">Book Your Appointment Today</h3>
            </div>
          </div>

          <Link 
            href="/book-appointment" 
            className="bg-white text-[#365337] active:scale-95 sm:hover:bg-[#FAF9F5] sm:hover:scale-105 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-semibold transition-all shadow-md flex items-center gap-2 flex-shrink-0"
          >
            <FaCalendarAlt size={12} /> Book Appointment
          </Link>
        </div>
      </section>

    </main>
  );
}