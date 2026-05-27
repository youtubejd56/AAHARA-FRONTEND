import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, Phone, Instagram } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#packages', label: 'Packages' },
  { href: '#workflow', label: 'How We Work' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Location' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-dark-950/90 backdrop-blur-xl border-b border-gray-900/80 py-4 shadow-2xl shadow-black/30'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="p-2 bg-gradient-to-tr from-primary-600 to-secondary-500 rounded-lg shadow-lg shadow-primary-900/30">
            <Utensils className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-black text-lg tracking-tight">
            AAHARA <span className="text-primary-400">CATERING</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
          <a
            href="https://www.instagram.com/aaharaevents?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-gray-400 hover:text-[#e1306c] transition-colors"
            title="Instagram"
          >
            <Instagram className="h-4.5 w-4.5" />
          </a>
          <a href="tel:+917510921089" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors font-medium">
            <Phone className="h-3.5 w-3.5 text-primary-400" />
            +91 7510921089
          </a>
          <a
            href="#booking"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-sm font-bold text-white shadow-lg shadow-primary-900/20 hover:shadow-primary-900/40 hover:scale-[1.03] transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-dark-950/95 backdrop-blur-xl border-t border-gray-900 px-6 py-6 flex flex-col gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-gray-300 hover:text-white text-base font-medium border-b border-gray-900/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+917510921089" onClick={() => setIsOpen(false)} className="py-3 text-gray-300 hover:text-white text-base border-b border-gray-900/60">
            📞 +91 7510921089
          </a>
          <a
            href="https://www.instagram.com/aaharaevents?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="py-3 text-gray-300 hover:text-[#e1306c] text-base border-b border-gray-900/60 flex items-center gap-2 transition-colors"
          >
            <Instagram className="h-4.5 w-4.5" /> Instagram Page
          </a>
          <a
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="mt-4 py-3.5 text-center rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
