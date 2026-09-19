'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LuCalendarDays } from 'react-icons/lu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Doctor', path: '/about-doctor' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F7EE]/95 backdrop-blur-md border-b border-[#E5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Section with Image from /public */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          {/* Public folder image render (e.g., public/logo.png) */}
          <div className="relative w-10 h-10 overflow-hidden rounded-full flex items-center justify-center">
            <Image 
              src="/img5.png" // Agar image ka naam/path alag hai toh change karein (e.g. /images/logo.png)
              alt="Ayurveda Logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Logo Text & Subtitle */}
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#24351F] leading-none">
              Ayurveda
            </span>
            <span className="text-[10px] font-sans font-medium text-[#557C3B] tracking-wider leading-tight mt-1">
              Healing Naturally
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold text-[#4A5D52]">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              onClick={() => setActiveTab(item.name)}
              className={`transition-all hover:text-[#24351F] relative py-1 ${
                activeTab === item.name 
                  ? 'text-[#24351F] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#35652F]' 
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Book Appointment CTA Button */}
        <div className="hidden md:block">
          <Link href="/book-appointment">
            <button className="bg-[#35652F] hover:bg-[#294F25] text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition-all shadow-xs flex items-center gap-2 cursor-pointer">
              <LuCalendarDays className="text-sm" />
              <span>Book Appointment</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#24351F] focus:outline-none p-1"
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-[#E5EFE6] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              onClick={() => {
                setActiveTab(item.name);
                setMobileMenuOpen(false);
              }}
              className={`block text-sm font-medium py-1.5 ${
                activeTab === item.name ? 'text-[#35652F] font-bold' : 'text-[#4A5D52]'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/book-appointment" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full mt-3 bg-[#35652F] text-white py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2">
              <LuCalendarDays className="text-sm" />
              <span>Book Appointment</span>
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}