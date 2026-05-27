import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

const stages = [
  {
    key: 'stage1',
    label: 'Step 01',
    title: 'Planning & Taste',
    steps: [
      {
        time: 'Consultation',
        title: 'Custom Menu Design',
        by: 'Aahara Culinary Consultants',
        location: 'Office or Virtual Meeting',
        desc: 'Sit down with our chefs to design your custom wedding or party menu. Select vegetarian/non-vegetarian ratios and customize dessert options.',
      },
      {
        time: 'Tasting Session',
        title: 'Curated Food Tasting',
        by: 'Lead Cook',
        location: 'Aahara Tasting Kitchen',
        desc: 'Taste the selected items beforehand. We adjust spices, texture, and visual plating to match your family preferences perfectly.',
      },
    ]
  },
  {
    key: 'stage2',
    label: 'Step 02',
    title: 'Sourcing & Prep',
    steps: [
      {
        time: '24 Hours Before',
        title: 'Fresh Local Sourcing',
        by: 'Logistics Managers',
        location: 'Local Markets & Farms',
        desc: 'We source fresh vegetables, meat, and coconut milk directly from local farmers around Pala and Payappar to ensure absolute freshness.',
      },
      {
        time: '12 Hours Before',
        title: 'Hygienic Prep & Slow Cooking',
        by: 'Kitchen Crew',
        location: 'Main Preparation Facility',
        desc: 'Washing, cutting, and initial marination in our certified, ultra-clean kitchens following strict safety and hygiene guidelines.',
      },
    ]
  },
  {
    key: 'stage3',
    label: 'Step 03',
    title: 'Event Day',
    steps: [
      {
        time: '3 Hours Before Event',
        title: 'Venue Setup & Live Counters',
        by: 'Site Managers',
        location: 'Your Chosen Venue',
        desc: 'Arranging the premium buffet layouts, setting up live counters, warmers, cutlery, linen, and event lighting as agreed.',
      },
      {
        time: 'During Event',
        title: 'Service & Live Cooking',
        by: 'Full Service Staff',
        location: 'Buffet Area & Counters',
        desc: 'Live counters open. Our experienced servers assist all guests, ensuring continuous warm refills and consistent, gracious service throughout.',
      },
    ]
  },
];

export default function Schedule() {
  const [active, setActive] = useState('stage1');
  const current = stages.find(s => s.key === active);

  return (
    <section id="workflow" className="bg-dark-950 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-primary-400 uppercase block mb-4">Our Process</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              How We
              <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                Deliver Quality
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed lg:text-right">
            From the first tasting consultation to spotless post-event cleanup — a seamless, professional experience at every step.
          </p>
        </div>

        {/* Full-width timeline grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-gray-900">

          {/* Step tabs */}
          <div className="lg:col-span-2 bg-dark-900 flex flex-col">
            {stages.map((stage) => (
              <button
                key={stage.key}
                onClick={() => setActive(stage.key)}
                className={`text-left p-8 border-b border-gray-900 relative transition-all group ${active === stage.key ? 'bg-dark-950' : 'hover:bg-dark-950/50'}`}
              >
                {active === stage.key && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary-500 to-secondary-500 rounded-r"></div>
                )}
                <p className="text-xs font-black text-primary-400 uppercase tracking-widest mb-1">{stage.label}</p>
                <p className={`text-xl font-black transition-colors ${active === stage.key ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>{stage.title}</p>
              </button>
            ))}
            {/* Large quote block */}
            <div className="flex-grow p-8 flex items-end">
              <p className="text-xs text-gray-600 leading-relaxed italic">
                "We treat every event as our own celebration — giving you the freedom to enjoy every moment while we handle every detail."
                <span className="block mt-2 text-gray-500 not-italic font-bold">— Aahara Catering Team</span>
              </p>
            </div>
          </div>

          {/* Steps detail */}
          <div className="lg:col-span-3 bg-dark-950 p-8 md:p-12 flex flex-col gap-8">
            {current.steps.map((step, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-primary-500/20 last:border-transparent group">
                {/* Dot */}
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 border-2 border-dark-950"></div>

                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-3.5 w-3.5 text-primary-400" />
                  <span className="text-xs font-bold text-primary-400">{step.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                  <MapPin className="h-3 w-3" />
                  {step.location}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-1">{step.title}</h3>
                <p className="text-xs text-secondary-400 font-semibold mb-3">Managed by {step.by}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
