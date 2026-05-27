import React from 'react';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';

export default function Map() {
  return (
    <section id="location" className="bg-dark-950 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-primary-400 uppercase block mb-4">Find Us</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Visit Our
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Location
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed lg:text-right">
            Come visit us at Pala, Payappar for tasting consultations, custom menu planning, or to meet our team.
          </p>
        </div>

        {/* Full-width side-by-side split */}
        <div className="rounded-3xl overflow-hidden border border-gray-900 grid grid-cols-1 lg:grid-cols-5 min-h-[520px]">

          {/* Left info panel */}
          <div className="lg:col-span-2 bg-dark-900 p-10 md:p-12 flex flex-col justify-between">
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="p-3.5 bg-dark-950 border border-gray-800 rounded-2xl text-primary-400 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Our Address</p>
                  <p className="text-lg font-bold text-white">Aahara Event Catering</p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">Pala, Payappar PO<br />Kottayam District, Kerala — 686 574</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3.5 bg-dark-950 border border-gray-800 rounded-2xl text-secondary-400 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Contact & Bookings</p>
                  <a href="tel:+917510921089" className="text-lg font-bold text-white hover:text-primary-400 transition-colors">+91 7510921089</a>
                  <p className="text-sm text-gray-400 mt-1">WhatsApp & Voice Bookings available</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3.5 bg-dark-950 border border-gray-800 rounded-2xl text-accent-400 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Working Hours</p>
                  <p className="text-lg font-bold text-white">08:00 AM – 09:00 PM</p>
                  <p className="text-sm text-gray-400 mt-1">Monday to Sunday · All days</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917510921089"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              Chat with Us on WhatsApp
            </a>
          </div>

          {/* Right: Map */}
          <div className="lg:col-span-3 relative min-h-[400px]">
            <iframe
              title="Aahara Catering Location — Payappar - Anthiyalam Rd, Lalam, Kerala"
              src="https://maps.google.com/maps?q=Payappar+Anthiyalam+Rd+Lalam+Kerala+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
