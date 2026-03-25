'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '@/images/Copy_of_FInal_Logo__1_-removebg-preview.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
    sublinks: [
      { label: 'Our History', href: '/about#history' },
      { label: 'Mission and Vision', href: '/about#mission' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Our Work', href: '/about#work' },
    ]
  },
  { label: 'Programs', href: '/programs' },
  { 
    label: 'Media', 
    href: '/media',
    sublinks: [
      { label: 'Photo Gallery', href: '/media#gallery' },
      { label: 'Press Coverage', href: '/media#press' },
      { label: 'News and Updates', href: '/media#news' },
    ]
  },
  { 
    label: 'Get Involved', 
    href: '/get-involved',
    sublinks: [
      { label: 'Volunteer', href: '/get-involved#volunteer' },
      { label: 'Partner', href: '/get-involved#partner' },
      { label: 'Career', href: '/get-involved#career' },
    ]
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-premium py-3'
          : 'bg-white/85 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logoImg}
            alt="HAIFOS"
            className="object-contain h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <div 
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.sublinks && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-black text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
              >
                {link.label}
                {link.sublinks && (
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.sublinks && activeDropdown === link.label && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-52"
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 overflow-hidden">
                      {link.sublinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-xs font-bold text-gray-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block ml-4">
          <Link href="/donate" className="btn-primary text-xs px-8 py-3 uppercase tracking-widest font-black">
            Donate Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => !link.sublinks && setMobileOpen(false)}
                    className="flex items-center justify-between py-3.5 px-4 text-sm font-black text-gray-800 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.sublinks && (
                    <div className="pl-6 grid grid-cols-1 gap-1 pb-2">
                      {link.sublinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2.5 px-4 text-xs font-bold text-gray-500 hover:text-primary transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-6 text-center justify-center py-4 flex items-center gap-2"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
