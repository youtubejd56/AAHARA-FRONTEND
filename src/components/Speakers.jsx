import React, { useState } from 'react';
import { ChefHat, Check, X, UtensilsCrossed, ArrowRight } from 'lucide-react';

const packages = [
  {
    id: 'sadhya',
    name: 'Traditional Sadhya Feast',
    tag: 'Vegetarian',
    tagColor: 'text-green-400 bg-green-400/10 border-green-400/20',
    priceLabel: 'From ₹400 / plate',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Authentic Kerala feast on fresh banana leaves with 24+ traditional side dishes and payasam.',
    fullDesc: 'Our signature Sadhya features pure vegetarian Kerala delicacies cooked by traditional chefs. Includes local red rice, Parippu, Sambar, Rasam, Avial, Thoran, Olan, Kalan, Koottukari, Mango Pickle, Inji Puli, Papadum, Banana, and 3 types of rich Payasam.',
    highlights: ['24+ Side Dishes', 'Banana Leaf Service', '3 Types of Payasam', 'Traditional Recipes'],
    ideal: 'Weddings, Housewarmings & Festivals'
  },
  {
    id: 'buffet',
    name: 'Imperial Royal Buffet',
    tag: 'Veg & Non-Veg',
    tagColor: 'text-primary-400 bg-primary-400/10 border-primary-400/20',
    priceLabel: 'From ₹650 / plate',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Premium biryanis, slow-cooked gravies, Naans, and continental spread for grand receptions.',
    fullDesc: 'A grand feast featuring premium Basmati Rice Biryanis (Chicken/Mutton/Veg), Butter Chicken, Malabar Fish Curry, Paneer Butter Masala, Butter Naans, Tandoori Rotis, fresh garden salads, raita, and an assortment of local and continental appetizers.',
    highlights: ['Basmati Biryani Stations', 'Live Carving Counter', 'Dessert Corner', 'Multi-Cuisine Spread'],
    ideal: 'Receptions, College Fests & Corporate Galas'
  },
  {
    id: 'live',
    name: 'Live Stalls & Continental',
    tag: 'Fusion Specials',
    tagColor: 'text-secondary-400 bg-secondary-400/10 border-secondary-400/20',
    priceLabel: 'From ₹800 / plate',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Interactive live pasta counters, BBQ grills, North Indian chaat stalls, and mocktail bars.',
    fullDesc: 'Bring energy to your event! Live pasta counters (Penne/Fussili in White/Red sauce), live barbecue grills, interactive North Indian Chaat counters (Pani Puri, Sev Puri, Samosa Chaat), custom juice & mocktail bars, and premium ice cream rolls.',
    highlights: ['Live Pasta Counters', 'BBQ Grill Stations', 'Chaat & Street Food', 'Mocktail Bar'],
    ideal: 'Birthday Parties, Evening Galas & Cocktails'
  },
  {
    id: 'hightea',
    name: 'High-Tea & Snacks',
    tag: 'Light Dining',
    tagColor: 'text-accent-400 bg-accent-400/10 border-accent-400/20',
    priceLabel: 'From ₹250 / plate',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'Finger foods, authentic local snacks, and freshly brewed filter coffee and cardamom tea.',
    fullDesc: 'Perfect for seminars or casual gatherings. Includes fresh local snacks (Pazham Pori, Cutlets, Samosas, Spring Rolls), finger sandwiches (Chicken, Veg, Cheese), cookies, muffins, and freshly-brewed hot filter coffee, cardamom tea, and lemon iced tea.',
    highlights: ['Pazham Pori & Local Snacks', 'Finger Sandwiches', 'Filter Coffee & Tea', 'Pastry Selection'],
    ideal: 'Business Meetings, Seminars & Small Parties'
  },
];

export default function Speakers() {
  const [selected, setSelected] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const active = packages[activeIdx];

  return (
    <section id="packages" className="bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-primary-400 uppercase block mb-4">Culinary Packages</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Our Signature
              <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Menus
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed lg:text-right">
            Choose from pre-curated menus or consult our chefs to craft a fully customized menu for your celebration.
          </p>
        </div>

        {/* Full-width showcase layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-gray-900">
          {/* Left: Package Selector Tabs */}
          <div className="lg:col-span-2 bg-dark-950 flex flex-col">
            {packages.map((pkg, i) => (
              <button
                key={pkg.id}
                onClick={() => setActiveIdx(i)}
                className={`text-left p-6 border-b border-gray-900 transition-all duration-300 relative group ${
                  activeIdx === i ? 'bg-dark-900' : 'hover:bg-dark-900/50'
                }`}
              >
                {activeIdx === i && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary-500 to-secondary-500 rounded-r"></div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${pkg.tagColor} mb-2 inline-block`}>
                      {pkg.tag}
                    </span>
                    <h3 className={`font-bold text-base leading-tight mb-1 ${activeIdx === i ? 'text-white' : 'text-gray-300'}`}>{pkg.name}</h3>
                    <p className="text-xs text-gray-500">{pkg.priceLabel}</p>
                  </div>
                  <ArrowRight className={`h-4 w-4 flex-shrink-0 mt-1 transition-all ${activeIdx === i ? 'text-primary-400' : 'text-gray-700 group-hover:text-gray-500'}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Active Package Detail */}
          <div className="lg:col-span-3 relative min-h-[500px] flex flex-col">
            {/* Background Image */}
            <img
              src={active.image}
              alt={active.name}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-dark-950/30"></div>

            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full" style={{ minHeight: '500px' }}>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${active.tagColor} mb-3 inline-block w-fit backdrop-blur-sm`}>
                {active.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{active.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">{active.fullDesc}</p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                {active.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-primary-400 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Ideal for</p>
                  <p className="text-sm text-white font-semibold">{active.ideal}</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg font-black text-primary-400">{active.priceLabel}</span>
                  <a
                    href="#booking"
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-sm hover:scale-[1.02] transition-transform"
                  >
                    <UtensilsCrossed className="h-4 w-4" />
                    Select
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
