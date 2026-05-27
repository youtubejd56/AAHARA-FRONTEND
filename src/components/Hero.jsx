import React from 'react';
import { Calendar, Phone, MapPin, Sparkles, ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark-950">

      {/* Full-bleed hero image background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=80"
          alt="Aahara Catering hero"
          className="w-full h-full object-cover"
        />
        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/60"></div>
      </div>

      {/* Floating gold lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500/60 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/5 text-xs font-bold text-primary-400 mb-8 backdrop-blur-sm tracking-widest uppercase">
            <MapPin className="h-3.5 w-3.5" />
            Pala, Payappar · Kerala
          </div>

          {/* Hero Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-8">
            AAHARA
            <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent">
              EVENT
            </span>
            <span className="block text-white/90">CATERING</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
            Premium multi-cuisine catering for weddings, receptions, corporate galas, and college fests — crafted with fresh local ingredients and impeccable hospitality.
          </p>

          {/* Rating row */}
          <div className="flex items-center gap-2 mb-10">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-primary-400 fill-primary-400" />
              ))}
            </div>
            <span className="text-white font-bold text-sm">5.0</span>
            <span className="text-gray-400 text-sm">· 200+ Events Served</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#booking"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-base shadow-2xl shadow-primary-900/40 hover:shadow-primary-900/60 hover:scale-[1.02] transition-all duration-300"
            >
              <Calendar className="h-5 w-5" />
              Book Your Event
            </a>
            <a
              href="https://wa.me/917510921089"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm text-white font-semibold text-base hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            >
              <Phone className="h-5 w-5 text-primary-400" />
              WhatsApp Us
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-10">
            {[
              { value: '500+', label: 'Events Catered' },
              { value: '10,000+', label: 'Happy Guests' },
              { value: '20+', label: 'Cuisine Types' },
              { value: '100%', label: 'Hygienic Prep' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}
