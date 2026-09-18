'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';

export default function ContactUsPage() {
  const { addEnquiry } = useApp();

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form Submission States
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Do I need to book an appointment?',
      a: 'Yes, booking an appointment in advance helps us ensure dedicated time and care for your consultation.'
    },
    {
      q: 'What should I bring for my first consultation?',
      a: 'Please bring any previous medical reports, prescriptions, and a list of current medications you are taking.'
    },
    {
      q: 'Are Ayurvedic treatments safe for everyone?',
      a: 'Yes, our treatments are customized according to your body type (Prakriti) and are completely safe under expert guidance.'
    },
    {
      q: 'How long does a consultation take?',
      a: 'A typical initial consultation takes between 30 to 45 minutes.'
    },
    {
      q: 'Do you offer online consultations?',
      a: 'Yes, we provide video consultations for international and outstation patients.'
    }
  ];

  // Contact Form Submission Handler
  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "General Enquiry";
    const message = formData.get("message")?.toString().trim() || "";

    if (name && phone) {
      addEnquiry({
        name,
        phone,
        email,
        treatment: subject,
        concern: message,
        source: "contact",
      });
    }

    setContactSubmitted(true);

    const whatsappNumber = "918239239249";
    const whatsappMessage = `New Contact Form Enquiry 🌿\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n--------------------------------\nSent from Website`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");

    form.reset();
  };

  // Newsletter Handler
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <div className="bg-[#f9faf6] text-gray-800 font-sans min-h-screen">
      
      {/* SECTION 1: HERO / CONTACT HEADER (Full Bleed Background) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F8F0] to-[#FAF9F5] min-h-[400px] sm:min-h-[440px] lg:min-h-[470px] w-full">

        {/* Right Side Image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[50%]">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=90&w=1000&auto=format&fit=crop&utm_source=chatgpt.com"
            alt="Ayurveda Herbal Care"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Same Home Banner Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3F8F0] via-[#F3F8F0]/70 to-transparent lg:from-[#F3F8F0] lg:via-[#F3F8F0]/60 lg:to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto min-h-[400px] sm:min-h-[440px] lg:min-h-[470px] px-4 sm:px-8 lg:px-16 flex items-center">
          <div className="w-full lg:w-[60%] py-8 lg:py-0">

            {/* Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-4">
              <span>CONTACT US</span>
              <span className="text-emerald-700">🌱</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-emerald-950 leading-[1.08]">
              We’re Here to Help
              <br />
              <span className="text-emerald-900">
                You Live a Healthier Life
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Have questions or need guidance? Get in touch with us.
              <br className="hidden sm:block" />
              We’ll be happy to assist you on your healing journey.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-100/70 text-emerald-800 flex items-center justify-center text-lg">
                  🎧
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Expert<br />Guidance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-100/70 text-emerald-800 flex items-center justify-center text-lg">
                  🌿
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Natural &amp;<br />Safe Care
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-100/70 text-emerald-800 flex items-center justify-center text-lg">
                  🕒
                </div>
                <span className="text-xs font-bold text-gray-800 leading-tight">
                  Quick<br />Response
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LOWER CONTENT WRAPPER */}
      <div className="py-12 px-4 sm:px-8 lg:px-16 space-y-16 max-w-7xl mx-auto">
        
        {/* SECTION 2: GET IN TOUCH & SEND US A MESSAGE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-emerald-950">Get in Touch</h2>
              <span className="text-emerald-700">🌱</span>
            </div>

            <div className="space-y-5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="text-emerald-800 text-lg">📞</span>
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <a href="tel:+918239239249" className="text-gray-700 font-semibold hover:text-emerald-800 transition">
                    +91 82392 39249
                  </a>
                  <p className="text-gray-400 text-[11px]">(Mon - Sat, 9:00 AM - 7:00 PM)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-emerald-800 text-lg">✉️</span>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <a 
                    href="mailto:info@ayurvedacare.com" 
                    className="text-gray-700 font-semibold hover:text-emerald-800 transition"
                  >
                    info@ayurvedacare.com
                  </a>
                  <p className="text-gray-400 text-[11px]">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-emerald-800 text-lg">📍</span>
                <div>
                  <p className="font-bold text-gray-900">Address</p>
                  <p className="text-gray-700 font-medium leading-snug">
                    Kota, Rajasthan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-emerald-800 text-lg">🕒</span>
                <div>
                  <p className="font-bold text-gray-900">Consultation Hours</p>
                  <p className="text-gray-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-700">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                <span className="text-emerald-800 text-lg">📅</span>
                <div>
                  <p className="font-bold text-gray-900">Book Appointment</p>
                  <p className="text-gray-600 text-xs">Book your consultation online. It&apos;s quick, easy & secure.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-emerald-950">Send Us a Message</h2>
              <span className="text-emerald-700">🌱</span>
            </div>

            {contactSubmitted && (
              <div className="bg-emerald-50 text-emerald-900 border border-emerald-200 p-4 rounded-xl text-xs font-semibold">
                ✓ Message Sent! Recorded in Admin and opened on WhatsApp.
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-700 transition"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-700 transition"
                />
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-700 transition"
              />

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject / Interested Treatment"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-700 transition"
              />

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Your Message"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-700 transition"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-emerald-900 hover:bg-emerald-950 text-white font-medium text-xs py-3.5 rounded-xl shadow transition flex items-center justify-center gap-2"
              >
                <span>🚀</span> Send Message
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 pt-1">
                <span>🔒</span>
                <span>Your information is safe with us. We respect your privacy.</span>
              </div>
            </form>
          </div>
        </section>

        {/* SECTION 3: VISIT OUR CLINIC & MAP */}
        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-emerald-950">Visit Our Clinic</h2>
                <span className="text-emerald-700">🌱</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Experience authentic Ayurvedic care in a calm, peaceful and healing environment.
              </p>
            </div>

            <div className="flex justify-between items-center text-center gap-2">
              <div className="flex flex-col items-center">
                <span className="text-emerald-800 text-2xl mb-1">🌿</span>
                <span className="text-[11px] font-bold text-gray-800">Peaceful<br />Environment</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-emerald-800 text-2xl mb-1">🥣</span>
                <span className="text-[11px] font-bold text-gray-800">Authentic<br />Treatments</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-emerald-800 text-2xl mb-1">👨‍⚕️</span>
                <span className="text-[11px] font-bold text-gray-800">Personalized<br />Care</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-inner">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
              alt="Ayurveda Clinic Interior"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-4 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=Kota,+Rajasthan,+India&output=embed"
              title="Clinic Location Map"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </section>

        {/* SECTION 4: FAQS & IMMEDIATE HELP */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-bold text-emerald-950">Frequently Asked Questions</h2>
              <span className="text-emerald-700">🌱</span>
            </div>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 text-xs font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span>{faq.q}</span>
                    <span className="text-emerald-800 font-bold text-sm">
                      {openFaq === idx ? '▲' : '▼'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-xs text-gray-500 border-t border-gray-50 pt-2 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-8 rounded-3xl shadow-sm space-y-6 relative overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center text-lg font-bold">
                📞
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-950">Need Immediate Help?</h3>
                <p className="text-xs text-gray-500 mt-0.5">Call us directly for any urgent queries or assistance.</p>
              </div>
            </div>

            <div>
              <a href="tel:+918239239249" className="text-xl font-extrabold text-emerald-900 hover:text-emerald-700 transition">
                +91 82392 39249
              </a>
            </div>

            <a
              href="tel:+918239239249"
              className="bg-emerald-900 hover:bg-emerald-950 text-white font-medium text-xs px-6 py-3 rounded-xl shadow transition inline-flex items-center gap-2"
            >
              <span>📞</span> Call Now
            </a>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=400&auto=format&fit=crop"
                alt="Herbal"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </section>

        {/* SECTION 5: SUBSCRIBE TO OUR NEWSLETTER */}
        <section className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800/60 border border-emerald-700/50 flex items-center justify-center text-xl shrink-0">
              ✉️
            </div>
            <div>
              <span className="text-[11px] text-emerald-300 font-semibold uppercase tracking-wider">Stay Updated with Ayurvedic Tips & Offers</span>
              <h2 className="text-xl sm:text-2xl font-bold mt-0.5">Subscribe to Our Newsletter</h2>
              <p className="text-xs text-emerald-200/70 mt-1">Get the latest health tips, Ayurvedic remedies and special offers.</p>
            </div>
          </div>

          {!subscribed ? (
            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full sm:w-72 bg-white text-gray-800 placeholder-gray-400 text-xs px-4 py-3 rounded-xl focus:outline-none"
              />
              <button type="submit" className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs px-6 py-3 rounded-xl transition shrink-0">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="bg-emerald-900 border border-emerald-700 px-4 py-3 rounded-xl text-xs font-semibold text-emerald-200">
              ✓ Thank you for subscribing to our wellness newsletter!
            </div>
          )}
        </section>

      </div>
    </div>
  );
}