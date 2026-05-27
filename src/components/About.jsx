import React from 'react';
import { Heart, GraduationCap, Briefcase, Cake, Utensils, Camera, Mic, Crown, Sparkles } from 'lucide-react';

const services = [
  { icon: Heart, title: 'Wedding Catering', desc: 'Grand multi-cuisine wedding feasts — from traditional Sadhya on banana leaves to lavish continental buffets. Every detail curated for your big day.', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80' },
  { icon: GraduationCap, title: 'College Events', desc: 'Budget-friendly yet vibrant catering for college fests, graduation ceremonies, and student gatherings with live counters and fast service.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80' },
  { icon: Briefcase, title: 'Corporate Events', desc: 'Professional, spotless catering for executive lunches, annual galas, product launches, and business conferences of all scales.', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
  { icon: Cake, title: 'Birthday Parties', desc: 'Themed food counters, customized cakes, and delightful party snacks that every guest — young or old — will love and remember.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
  { icon: Camera, title: 'Photography & Videography', desc: 'Partnered professional visual storytellers to document your event with cinematic video packages and high-resolution photography.', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80' },
  { icon: Mic, title: 'Anchor & MC Services', desc: 'Engaging professional anchors, bilingual MCs, and hosts who keep your guests entertained throughout the program.', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' },
  { icon: Crown, title: 'Royal Entry', desc: 'Grand bride and groom entries with spotlight arrangements, traditional shinkari melam drums, flower showers, and custom themed setups.', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80' },
  { icon: Sparkles, title: 'Full Event Management', desc: 'Sound systems, stage decorations, floral arrangements, theme planning, and complete end-to-end event coordination under one roof.', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80' },
];

export default function About() {
  return (
    <section id="services" className="bg-dark-950 relative">
      {/* Section intro — full width dark band */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold tracking-widest text-primary-400 uppercase block mb-4">What We Offer</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              A Complete Event
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed lg:text-right">
            From premium cuisine to royal entrance arrangements — every element of your celebration, delivered flawlessly.
          </p>
        </div>

        {/* Services — large masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-900 rounded-3xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="relative group overflow-hidden border-b border-r border-gray-900 last:border-r-0 [&:nth-child(4n)]:border-r-0"
                style={{ minHeight: '280px' }}
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-900/40"></div>

                <div className="relative z-10 p-8 flex flex-col justify-end h-full" style={{ minHeight: '280px' }}>
                  <div className="mb-4 inline-flex p-2.5 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-width dark gold stats band */}
      <div className="border-t border-b border-gray-900 bg-dark-900/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '500+', label: 'Events Successfully Delivered' },
            { value: '10,000+', label: 'Happy Guests Served' },
            { value: '100%', label: 'Hygienic Food Preparation' },
            { value: 'Pala', label: 'Serving Kottayam & Beyond' },
          ].map((s, i) => (
            <div key={i} className="py-4">
              <p className="text-4xl md:text-5xl font-black text-white mb-2">{s.value}</p>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
