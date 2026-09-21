'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import {
  Headphones,
  Leaf,
  Clock,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ShieldCheck,
  Send,
  UserCheck,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';

export default function ContactUsPage() {
  const { addEnquiry } = useApp();

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form Submission States
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Do I need to book an appointment?',
      a: 'Yes, booking an appointment in advance helps us ensure dedicated time and care for your consultation.',
    },
    {
      q: 'What should I bring for my first consultation?',
      a: 'Please bring any previous medical reports, prescriptions, and a list of current medications you are taking.',
    },
    {
      q: 'Are Ayurvedic treatments safe for everyone?',
      a: 'Yes, our treatments are customized according to your body type (Prakriti) and are completely safe under expert guidance.',
    },
    {
      q: 'How long does a consultation take?',
      a: 'A typical initial consultation takes between 30 to 45 minutes.',
    },
    {
      q: 'Do you offer online consultations?',
      a: 'Yes, we provide video consultations for international and outstation patients.',
    },
  ];

  // Contact Form Submission Handler
  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString().trim() || '';
    const phone = formData.get('phone')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const subject =
      formData.get('subject')?.toString().trim() || 'General Enquiry';
    const message = formData.get('message')?.toString().trim() || '';

    if (name && phone) {
      addEnquiry({
        name,
        phone,
        email,
        treatment: subject,
        concern: message,
        source: 'contact',
      });
    }

    setContactSubmitted(true);

    const whatsappNumber = '919509790248';
    const whatsappMessage = `New Contact Form Enquiry 🌿\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n--------------------------------\nSent from Website`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, '_blank');

    form.reset();
  };

  // Newsletter Handler
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <div className="bg-[#fcfdfa] text-gray-800 font-sans min-h-screen">
      {/* SECTION 1: HERO HEADER */}
      <section className="relative overflow-hidden bg-[#F3F8F0] min-h-[420px] lg:min-h-[460px] w-full">
       {/* Right Side Background Image */}
  <div className="absolute inset-y-0 right-0 w-full lg:w-[50%]">
    <Image
      src="/img12.png"
      alt="Ayurveda Herbal Care"
      fill
      priority
      className="object-cover object-center"
    />
    
    {/* Updated Gradient Blend - Ab Image Clear Dikhegi */}
    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F3F8F0] to-transparent pointer-events-none" />
  </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto min-h-[420px] lg:min-h-[460px] px-6 sm:px-12 lg:px-16 flex items-center">
          <div className="w-full lg:w-[58%] py-10 lg:py-0">
            {/* Tag Line */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-widest mb-3">
              <span>CONTACT US</span>
              <Leaf className="w-3.5 h-3.5 fill-emerald-800 text-emerald-800" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-bold text-emerald-950 leading-tight">
              We’re Here to Help <br />
              <span className="text-emerald-950">You Live a Healthier Life</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-gray-600 text-xs sm:text-sm leading-relaxed max-w-lg">
              Have questions or need guidance? Get in touch with us. <br />
              We’ll be happy to assist you on your healing journey.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 max-w-lg">
              {/* Card 1 */}
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border border-emerald-100/60 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-[#e2eee0] flex items-center justify-center shrink-0">
                  <Headphones className="w-5 h-5 text-emerald-900" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Expert<br />Guidance
                </span>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border border-emerald-100/60 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-[#e2eee0] flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-emerald-900" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Natural &<br />Safe Care
                </span>
              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border border-emerald-100/60 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-[#e2eee0] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-900" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Quick<br />Response
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOWER CONTENT SECTION */}
      <div className="py-12 px-4 sm:px-8 lg:px-16 space-y-12 max-w-7xl mx-auto">
        {/* SECTION 2: CONTACT INFORMATION & FORM */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Contact Details */}
        {/* Left Column: Contact Details with Connected Timeline */}
<div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
  <div className="flex items-center gap-2 mb-2">
    <h2 className="text-lg font-serif font-bold text-emerald-950">
      Get in Touch
    </h2>
    <Leaf className="w-3.5 h-3.5 text-emerald-700 fill-emerald-700" />
  </div>

  <div className="relative space-y-6 text-xs pl-2">
    {/* Vertical Connecting Line */}
    <div className="absolute left-[19px] top-3 bottom-3 w-[1px] bg-emerald-200/60 -z-0" />

    {/* Item 1: Phone */}
    <div className="relative z-10 flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-[#f2f7f0] border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 shadow-sm">
        <Phone className="w-3.5 h-3.5" />
      </div>
      <div className="pt-0.5">
        <p className="font-bold text-gray-900">Phone</p>
        <a
          href="tel:+919876543210"
          className="text-gray-700 font-semibold hover:text-emerald-800"
        >
          +91 82392 39249
        </a>
        <p className="text-gray-400 text-[10px]">
          (Mon - Sat, 9:00 AM - 7:00 PM)
        </p>
      </div>
    </div>

    {/* Item 2: Email */}
    <div className="relative z-10 flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-[#f2f7f0] border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 shadow-sm">
        <Mail className="w-3.5 h-3.5" />
      </div>
      <div className="pt-0.5">
        <p className="font-bold text-gray-900">Email</p>
        <a
          href="mailtocontact.prisminfotech@gmail.com"
          className="text-gray-700 font-semibold hover:text-emerald-800"
        >
        contact.prisminfotech@gmail.com
        </a>
        <p className="text-gray-400 text-[10px]">
          We reply within 24 hours
        </p>
      </div>
    </div>

    {/* Item 3: Address */}
    <div className="relative z-10 flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-[#f2f7f0] border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 shadow-sm">
        <MapPin className="w-3.5 h-3.5" />
      </div>
      <div className="pt-0.5">
        <p className="font-bold text-gray-900">Address</p>
        <p className="text-gray-600 font-medium leading-relaxed">
          Kota ,Rajasthan
        </p>
      </div>
    </div>

    {/* Item 4: Consultation Hours */}
    <div className="relative z-10 flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-[#f2f7f0] border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 shadow-sm">
        <Clock className="w-3.5 h-3.5" />
      </div>
      <div className="pt-0.5">
        <p className="font-bold text-gray-900">Consultation Hours</p>
        <p className="text-gray-600">
          Monday - Saturday: 9:00 AM - 7:00 PM
        </p>
        <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
      </div>
    </div>

    {/* Item 5: Book Appointment */}
    <div className="relative z-10 flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-[#f2f7f0] border border-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 shadow-sm">
        <Calendar className="w-3.5 h-3.5" />
      </div>
      <div className="pt-0.5">
        <p className="font-bold text-gray-900">Book Appointment</p>
        <p className="text-gray-500 text-[11px]">
          Book your consultation online. It&apos;s quick, easy & secure.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-serif font-bold text-emerald-950">
                Send Us a Message
              </h2>
              <Leaf className="w-3.5 h-3.5 text-emerald-700 fill-emerald-700" />
            </div>

            {contactSubmitted && (
              <div className="bg-emerald-50 text-emerald-900 border border-emerald-200 p-3 rounded-xl text-xs font-semibold">
                ✓ Message Sent! Recorded in Admin and opened on WhatsApp.
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-gray-50/70 border border-gray-200 rounded-lg p-3 text-xs focus:outline-none focus:border-emerald-700 transition placeholder-gray-400"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full bg-gray-50/70 border border-gray-200 rounded-lg p-3 text-xs focus:outline-none focus:border-emerald-700 transition placeholder-gray-400"
                />
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full bg-gray-50/70 border border-gray-200 rounded-lg p-3 text-xs focus:outline-none focus:border-emerald-700 transition placeholder-gray-400"
              />

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full bg-gray-50/70 border border-gray-200 rounded-lg p-3 text-xs focus:outline-none focus:border-emerald-700 transition placeholder-gray-400"
              />

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Your Message"
                className="w-full bg-gray-50/70 border border-gray-200 rounded-lg p-3 text-xs focus:outline-none focus:border-emerald-700 transition placeholder-gray-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#1b3d2f] hover:bg-[#122b21] text-white font-semibold text-xs py-3 rounded-lg shadow transition flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" /> Send Message
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                <span>
                  Your information is safe with us. We respect your privacy.
                </span>
              </div>
            </form>
          </div>
        </section>

        {/* SECTION 3: VISIT OUR CLINIC & MAP */}
    {/* SECTION 3: VISIT OUR CLINIC & MAP */}
<section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
  
  {/* Left Column: Text & Icons */}
  <div className="lg:col-span-4 flex flex-col justify-center space-y-8 lg:pr-4">
    <div>
      <h2 className="text-xl font-serif font-bold text-emerald-950 mb-1">
        Visit Our Clinic
      </h2>
      
      {/* Custom Divider matching the image */}
      <div className="flex items-center gap-1 mb-4">
        <div className="w-6 h-[1.5px] bg-emerald-800"></div>
        <Leaf className="w-3.5 h-3.5 text-emerald-800 fill-emerald-800" />
      </div>
      
      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-medium">
        Experience authentic Ayurvedic care in a calm, peaceful and
        healing environment.
      </p>
    </div>

    {/* Transparent Icons Row */}
    <div className="flex justify-between items-start text-center">
      <div className="flex flex-col items-center gap-2">
        <Leaf className="w-6 h-6 text-emerald-800 stroke-[1.5]" />
        <span className="text-[11px] font-bold text-gray-800 leading-tight">
          Peaceful
          <br />
          Environment
        </span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <Sparkles className="w-6 h-6 text-emerald-800 stroke-[1.5]" />
        <span className="text-[11px] font-bold text-gray-800 leading-tight">
          Authentic
          <br />
          Treatments
        </span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <UserCheck className="w-6 h-6 text-emerald-800 stroke-[1.5]" />
        <span className="text-[11px] font-bold text-gray-800 leading-tight">
          Personalized
          <br />
          Care
        </span>
      </div>
    </div>
  </div>

  {/* Middle Column: Clinic Image */}
  <div className="lg:col-span-4 relative min-h-[220px] rounded-2xl overflow-hidden shadow-sm">
    <Image
      src="/img10.png"
      alt="Ayurveda Clinic Interior"
      fill
      className="object-cover"
    />
  </div>

  {/* Right Column: Map */}
  <div className="lg:col-span-4 relative min-h-[220px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
    <iframe
      src="https://www.google.com/maps?q=Green+Park,+New+Delhi,+India&output=embed"
      title="Clinic Location Map"
      className="w-full h-full border-0"
      loading="lazy"
    />
  </div>
</section>

        {/* SECTION 4: FAQS & NEED HELP */}
      {/* SECTION 4: FAQS & NEED IMMEDIATE HELP */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
  
  {/* Left Column: Frequently Asked Questions */}
  <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
    
    <div>
      <h2 className="text-xl font-serif font-bold text-emerald-950 mb-1">
        Frequently Asked Questions
      </h2>
      
      {/* Title Divider */}
      <div className="flex items-center gap-1 mb-5">
        <div className="w-6 h-[1.5px] bg-emerald-800"></div>
        <Leaf className="w-3.5 h-3.5 text-emerald-800 fill-emerald-800" />
      </div>

      {/* Accordion List */}
      <div className="space-y-3 relative z-10">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200/80 rounded-xl overflow-hidden transition-all shadow-2xs"
          >
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full text-left px-4 py-3 text-xs sm:text-[13px] font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50/50 transition"
            >
              <span>{faq.q}</span>
              {openFaq === idx ? (
                <ChevronUp className="w-4 h-4 text-emerald-800 shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
              )}
            </button>
            {openFaq === idx && (
              <div className="px-4 pb-3.5 text-xs text-gray-600 border-t border-gray-100 pt-2.5 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Bottom-Left Decorative Leaf Illustration */}
    <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-20 pointer-events-none">
      <Leaf className="w-full h-full text-emerald-800" />
    </div>
  </div>

  {/* Right Column: Need Immediate Help Banner */}
  <div className="lg:col-span-5 bg-[#f8faf6] border border-emerald-100/80 p-6 sm:p-8 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[300px]">
    
    <div className="space-y-4 relative z-10 max-w-[65%]">
      {/* Header with Circle Phone Icon */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#335c28] text-white flex items-center justify-center shrink-0 shadow-sm">
          <Phone className="w-5 h-5 fill-white" />
        </div>
        <h3 className="text-lg font-serif font-bold text-emerald-950 leading-tight">
          Need Immediate Help?
        </h3>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed font-medium">
        Call us directly for any urgent queries or assistance.
      </p>

      {/* Phone Number Display */}
      <div>
        <a
          href="tel:+91 82392 39249"
          className="text-xl sm:text-2xl font-bold text-emerald-950 hover:text-emerald-800 tracking-tight transition"
        >
          +91 82392 39249
        </a>
      </div>

      {/* Call Button */}
      <div className="pt-2">
        <a
          href="tel:+919509790248"
          className="bg-[#335c28] hover:bg-[#27481f] text-white font-semibold text-xs px-6 py-2.5 rounded-lg shadow-sm transition inline-flex items-center gap-2"
        >
          <Phone className="w-3.5 h-3.5 fill-white" /> Call Now
        </a>
      </div>
    </div>

    {/* Bottom-Right Ayurvedic Bowl & Herbs Image */}
    <div className="absolute bottom-0 right-0 w-[55%] sm:w-[50%] h-[80%] pointer-events-none">
      <Image
        src="/img11.png"
        alt="Ayurvedic Herbs"
        fill
        className="object-contain object-bottom right-0"
      />
    </div>
  </div>

</section>

        {/* SECTION 5: SUBSCRIBE TO NEWSLETTER */}
       {/* SECTION 5: SUBSCRIBE TO NEWSLETTER */}
<section className="bg-[#385e2b] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden">
  
  {/* Subtle Background Watermark Pattern */}
  <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between items-center px-10">
    <Leaf className="w-40 h-40 transform -rotate-45" />
    <Leaf className="w-40 h-40 transform rotate-45" />
  </div>

  {/* Left Info Area */}
  <div className="relative z-10 flex items-center gap-5">
    {/* White Circular Icon Badge */}
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
      <Mail className="w-6 h-6 text-[#385e2b]" />
    </div>
    
    <div>
      <span className="text-[10px] sm:text-[11px] text-emerald-100/90 font-medium tracking-wide">
        Stay Updated with Ayurvedic Tips & Offers
      </span>
      <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-xs text-emerald-100/80 mt-1">
        Get the latest health tips, Ayurvedic remedies and special offers.
      </p>
    </div>
  </div>

  {/* Right Input Form Area */}
  <div className="relative z-10 w-full lg:w-auto">
    {!subscribed ? (
      <form
        onSubmit={handleNewsletterSubmit}
        className="bg-white p-1 rounded-xl flex items-center w-full lg:w-[420px] border border-white/20 shadow-inner"
      >
        <input
          type="email"
          required
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-xs px-3.5 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#2a4720] hover:bg-[#203718] text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition shrink-0 border border-[#3d682f]"
        >
          Subscribe
        </button>
      </form>
    ) : (
      <div className="bg-white/10 border border-white/20 px-5 py-2.5 rounded-xl text-xs font-semibold text-emerald-100">
        ✓ Thank you for subscribing to our newsletter!
      </div>
    )}
  </div>
</section>
      </div>
    </div>
  );
}