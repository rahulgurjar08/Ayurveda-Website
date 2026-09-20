'use client';

import Link from 'next/link';
import { FaLeaf, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#F6F8F3] text-[#2C3E35] border-t border-[#E2E8DE] font-sans relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Mobile: 2 Columns Grid, Desktop: 4 Columns Grid + Image Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-[#2C5E3B] rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                <FaLeaf className="text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1F3826] leading-tight">Ayurveda</span>
                <span className="text-[11px] text-[#4A6B53] tracking-widest uppercase font-medium">Healing Naturally</span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-[#556B5D] leading-relaxed max-w-sm">
              We provide authentic Ayurvedic care to help you achieve optimal health and natural healing.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#2C5E3B] text-white flex items-center justify-center hover:bg-[#1F3826] transition shadow-sm">
                <FaFacebookF size={13} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#2C5E3B] text-white flex items-center justify-center hover:bg-[#1F3826] transition shadow-sm">
                <FaInstagram size={13} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#2C5E3B] text-white flex items-center justify-center hover:bg-[#1F3826] transition shadow-sm">
                <FaWhatsapp size={13} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#2C5E3B] text-white flex items-center justify-center hover:bg-[#1F3826] transition shadow-sm">
                <FaYoutube size={13} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm sm:text-base text-[#1F3826] uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#556B5D]">
              <li><Link href="/" className="hover:text-[#2C5E3B] transition">Home</Link></li>
              <li><Link href="/about-doctor" className="hover:text-[#2C5E3B] transition">About Doctor</Link></li>
              <li><Link href="/treatments" className="hover:text-[#2C5E3B] transition">Treatments</Link></li>
              <li><Link href="/services" className="hover:text-[#2C5E3B] transition">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#2C5E3B] transition">Blog</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#2C5E3B] transition">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-[#2C5E3B] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm sm:text-base text-[#1F3826] uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#556B5D]">
              <li><Link href="/services" className="hover:text-[#2C5E3B] transition">Ayurvedic Consultation</Link></li>
              <li><Link href="/services" className="hover:text-[#2C5E3B] transition">Panchakarma Therapy</Link></li>
              <li><Link href="/services" className="hover:text-[#2C5E3B] transition">Herbal Treatments</Link></li>
              <li><Link href="/services" className="hover:text-[#2C5E3B] transition">Diet & Nutrition</Link></li>
              <li><Link href="/services" className="hover:text-[#2C5E3B] transition">Yoga & Lifestyle Guidance</Link></li>
              <li><Link href="/services" className="hover:text-[#2C5E3B] transition">Wellness Programs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us & Direct Image Link */}
          <div className="col-span-2 lg:col-span-1 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-bold text-sm sm:text-base text-[#1F3826] uppercase tracking-wider">Contact Us</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#556B5D]">
                <li className="flex items-start space-x-2.5">
                  <FaPhoneAlt className="text-[#2C5E3B] mt-1 flex-shrink-0" size={13} />
                  <a href="tel:+919876543210" className="hover:text-[#2C5E3B] transition">+91 98765 43210</a>
                </li>
                <li className="flex items-start space-x-2.5">
                  <FaEnvelope className="text-[#2C5E3B] mt-1 flex-shrink-0" size={13} />
                  <a href="mailto:info@ayurvedacare.com" className="hover:text-[#2C5E3B] transition truncate">info@ayurvedacare.com</a>
                </li>
                <li className="flex items-start space-x-2.5">
                  <FaMapMarkerAlt className="text-[#2C5E3B] mt-1 flex-shrink-0" size={13} />
                  <span>123, Green Park, New Delhi, India - 110016</span>
                </li>
              </ul>

              {/* Admin Button */}
              <div className="pt-1">
                <Link 
                  href="/admin" 
                  className="inline-flex items-center gap-2 bg-[#2C5E3B] hover:bg-[#1F3826] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition shadow-sm"
                >
                  <FaLock size={11} /> Admin Dashboard
                </Link>
              </div>
            </div>

            {/* Ayurvedic Mortar & Pestle Image using direct web link */}
            <div className="hidden lg:block pt-2">
              <img 
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&auto=format&fit=crop&q=60" 
                alt="Ayurvedic Herbs and Mortar" 
                className="w-44 h-auto object-contain ml-auto opacity-90 rounded-md mix-blend-multiply"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="bg-[#1C3624] text-white py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>© 2026 Ayurveda. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs text-[#CFD8CD]">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}