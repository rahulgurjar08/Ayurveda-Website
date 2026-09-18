'use client';

import Link from 'next/link';
import { FaLeaf, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#F3F6F1] text-[#2C3E35] border-t border-[#E2E8DE] font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-[#3B5B49] rounded-full flex items-center justify-center text-white">
                <FaLeaf className="text-lg" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#2C4A3E]">Ayurveda</span>
            </Link>
            <p className="text-xs sm:text-sm text-[#5C6F63] leading-relaxed">
              Classical Ayurvedic healing for the modern people, restoring body, mind and soul for a healthier lifestyle.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E5EFE2] text-[#3B5B49] flex items-center justify-center hover:bg-[#3B5B49] hover:text-white transition">
                <FaFacebookF size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E5EFE2] text-[#3B5B49] flex items-center justify-center hover:bg-[#3B5B49] hover:text-white transition">
                <FaInstagram size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E5EFE2] text-[#3B5B49] flex items-center justify-center hover:bg-[#3B5B49] hover:text-white transition">
                <FaTwitter size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#E5EFE2] text-[#3B5B49] flex items-center justify-center hover:bg-[#3B5B49] hover:text-white transition">
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base text-[#2C4A3E] uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5C6F63]">
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
            <h3 className="font-serif font-bold text-base text-[#2C4A3E] uppercase tracking-wider">Our Treatments</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#5C6F63]">
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Panchakarma</Link></li>
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Panchakarma Therapy</Link></li>
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Herbal Medicines</Link></li>
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Diet & Nutrition</Link></li>
              <li><Link href="/treatments" className="hover:text-[#3B5B49] transition">Wellness Programs</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch & Admin Button */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-base text-[#2C4A3E] uppercase tracking-wider">Get In Touch</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C6F63]">
              <li className="flex items-start space-x-2.5">
                <FaPhoneAlt className="text-[#3B5B49] mt-1 flex-shrink-0" size={14} />
                <span>+91 82392 39249</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FaEnvelope className="text-[#3B5B49] mt-1 flex-shrink-0" size={14} />
                <span>contact@ayurveda.com</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <FaMapMarkerAlt className="text-[#3B5B49] mt-1 flex-shrink-0" size={14} />
                <span>Kota , Rajasthan</span>
              </li>
            </ul>

            {/* Admin Login Button */}
            <div className="pt-2">
              <Link 
                href="/admin" 
                className="inline-flex items-center gap-2 bg-[#3B5B49] hover:bg-[#2C4A3E] text-white px-4 py-2 rounded-lg text-xs font-semibold transition shadow-sm"
              >
                <FaLock size={12} /> Admin Dashboard
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="bg-[#365337] text-white py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>© 2026 Ayurveda. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:underline">Site Experts</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}