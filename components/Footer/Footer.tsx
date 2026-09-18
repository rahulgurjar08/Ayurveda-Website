'use client';

import Link from 'next/link';
import { FaLeaf, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#F3F6F1] text-[#2C3E35] border-t border-[#E2E8DE] font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Mobile: 2 Columns Grid, Desktop: 4 Columns Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info & Socials (Mobile: Full Width) */}
          <div className="col-span-2 lg:col-span-1 space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#3B5B49] rounded-full flex items-center justify-center text-white shrink-0">
                <FaLeaf className="text-base sm:text-lg" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#2C4A3E]">Ayurveda</span>
            </Link>
            <p className="text-xs sm:text-sm text-[#5C6F63] leading-relaxed max-w-sm">
              Classical Ayurvedic healing for the modern people, restoring body, mind and soul for a healthier lifestyle.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E5EFE2] text-[#3B5B49] flex items-center justify-center hover:bg-[#3B5B49] hover:text-white transition">
                <FaFacebookF size={13} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E5EFE2] text-[#3B5B49] flex items-center justify-center hover:bg-[#3B5B49] hover:text-white transition">
                <FaInstagram size={13} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E5EFE2] text-[#3B5B49] flex items-center justify-center hover:bg-[#3B5B49] hover:text-white transition">
                <FaTwitter size={13} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E5EFE2] text-[#3B5B49] flex items-center justify-center hover:bg-[#3B5B49] hover:text-white transition">
                <FaYoutube size={13} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#2C4A3E] uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#5C6F63]">
              <li><Link href="/" className="hover:text-[#3B5B49] transition">Home</Link></li>
              <li><Link href="/about-doctor" className="hover:text-[#3B5B49] transition">About Doctor</Link></li>
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Treatments</Link></li>
              <li><Link href="/services" className="hover:text-[#3B5B49] transition">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#3B5B49] transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#3B5B49] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Treatments */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#2C4A3E] uppercase tracking-wider">Our Treatments</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#5C6F63]">
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Panchakarma</Link></li>
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Panchakarma Therapy</Link></li>
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Herbal Medicines</Link></li>
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Diet & Nutrition</Link></li>
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Wellness Programs</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch & Admin Button (Mobile: Full Width for proper spacing) */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#2C4A3E] uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5C6F63]">
              <li className="flex items-start space-x-2">
                <FaPhoneAlt className="text-[#3B5B49] mt-1 flex-shrink-0" size={13} />
                <a href="tel:+918239239249" className="hover:text-[#3B5B49] transition">+91 82392 39249</a>
              </li>
              <li className="flex items-start space-x-2">
                <FaEnvelope className="text-[#3B5B49] mt-1 flex-shrink-0" size={13} />
                <a href="mailto:contact@ayurveda.com" className="hover:text-[#3B5B49] transition truncate">contact@ayurveda.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-[#3B5B49] mt-1 flex-shrink-0" size={13} />
                <span>Kota, Rajasthan</span>
              </li>
            </ul>

            {/* Admin Login Button */}
            <div className="pt-1">
              <Link 
                href="/admin" 
                className="inline-flex items-center gap-2 bg-[#3B5B49] hover:bg-[#2C4A3E] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold transition shadow-sm"
              >
                <FaLock size={11} /> Admin Dashboard
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="bg-[#365337] text-white py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>© 2026 Ayurveda. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:underline">Site Experts</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}