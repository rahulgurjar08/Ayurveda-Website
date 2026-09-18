'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  // Navigation items with their exact route paths corresponding to your folder structure
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
    <header className="sticky top-0 z-50 bg-[#F9FBF7]/90 backdrop-blur-md border-b border-[#E5EFE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <div className="w-10 h-10 bg-[#3B5B49] rounded-full flex items-center justify-center text-white">
            <FaLeaf className="text-xl" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#2C4A3E]">Ayurveda</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#4A6B5D]">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              onClick={() => setActiveTab(item.name)}
              className={`transition-colors hover:text-[#2C4A3E] ${activeTab === item.name ? 'text-[#2C4A3E] font-semibold border-b-2 border-[#3B5B49] pb-1' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Book Appointment CTA Button */}
        <div className="hidden md:block">
          <Link href="/book-appointment">
            <button className="bg-[#3B5B49] hover:bg-[#2C4A3E] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md">
              <span>Book Appointment</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#2C4A3E] focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5EFE2] px-4 pt-2 pb-4 space-y-3 shadow-md">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              onClick={() => {
                setActiveTab(item.name);
                setMobileMenuOpen(false);
              }}
              className="block text-[#4A6B5D] hover:text-[#2C4A3E] font-medium py-1"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/book-appointment" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full mt-2 bg-[#3B5B49] text-white py-2.5 rounded-full text-sm font-medium">
              Book Appointment
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}