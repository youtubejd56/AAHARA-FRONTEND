import React, { useState } from 'react';
import { Check, ShieldCheck, QrCode, MessageSquare, UtensilsCrossed, Users } from 'lucide-react';

const packagePricing = {
  sadhya:  { name: 'Traditional Sadhya Feast', pricePerGuest: 400 },
  buffet:  { name: 'Imperial Royal Buffet',    pricePerGuest: 650 },
  live:    { name: 'Live Stalls & Continental',pricePerGuest: 800 },
  hightea: { name: 'High-Tea & Snacks',        pricePerGuest: 250 },
};

const addons = {
  catering:     { name: 'Full Catering Setup & Servers', price: 5000 },
  photography:  { name: 'Photography & Videography',    price: 25000 },
  anchor:       { name: 'Professional Anchor / MC',     price: 10000 },
  royalEntry:   { name: 'Royal Entry Setup',            price: 15000 },
};

export default function Register() {
  const [form, setForm] = useState({
    name: '', phone: '', date: '', location: 'Pala, Payappar',
    eventType: 'wedding', packageType: 'buffet', guestCount: 200,
    services: { catering: true, photography: false, anchor: false, royalEntry: false },
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const set = (key, val) => setForm(p => ({ ...p, [key]: val }));
  const toggleAddon = (k) => setForm(p => ({ ...p, services: { ...p.services, [k]: !p.services[k] } }));

  const total = (() => {
    const food = packagePricing[form.packageType].pricePerGuest * Number(form.guestCount);
    const extra = Object.entries(form.services).reduce((acc, [k, v]) => acc + (v ? addons[k].price : 0), 0);
    return food + extra;
  })();

  const whatsappLink = () => {
    const serviceList = Object.entries(form.services).filter(([,v]) => v).map(([k]) => addons[k].name).join(', ');
    const msg = `Hi Aahara Catering! I'd like to book an event.\n\n*Name:* ${form.name}\n*Contact:* ${form.phone}\n*Event Date:* ${form.date}\n*Location:* ${form.location}\n*Event Type:* ${form.eventType}\n*Food Package:* ${packagePricing[form.packageType].name}\n*Guests:* ${form.guestCount}\n*Add-ons:* ${serviceList || 'None'}\n*Estimated Quote:* ₹${total.toLocaleString('en-IN')}\n\nPlease confirm availability!`;
    return `https://wa.me/917510921089?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) { setError('Please fill Name, Phone, and Event Date.'); return; }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="booking" className="bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary-400 uppercase block mb-4">Book Online</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Get an Instant
            <span className="block bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
              Quote & Book
            </span>
          </h2>
        </div>

        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {error && <div className="p-4 bg-red-950/40 border border-red-800 text-red-300 rounded-xl text-sm">{error}</div>}

              {/* Personal Details */}
              <div className="glass rounded-3xl p-8 border border-gray-900">
                <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2"><UtensilsCrossed className="h-4 w-4 text-primary-400" /> Your Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: 'Your Name *', name: 'name', type: 'text', placeholder: 'John Doe' },
                    { label: 'WhatsApp Number *', name: 'phone', type: 'tel', placeholder: '+91 9876543210' },
                    { label: 'Event Date *', name: 'date', type: 'date', placeholder: '' },
                    { label: 'Location / Town', name: 'location', type: 'text', placeholder: 'Pala, Payappar' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">{f.label}</label>
                      <input type={f.type} name={f.name} value={form[f.name]} onChange={e => set(f.name, e.target.value)} placeholder={f.placeholder} className="w-full bg-dark-950 border border-gray-800 rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors" required={f.label.includes('*')} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Package & Guest Count */}
              <div className="glass rounded-3xl p-8 border border-gray-900">
                <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2"><Users className="h-4 w-4 text-primary-400" /> Package & Guest Count</h3>

                {/* Event type */}
                <div className="mb-5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Event Category</label>
                  <select name="eventType" value={form.eventType} onChange={e => set('eventType', e.target.value)} className="w-full bg-dark-950 border border-gray-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-primary-500 transition-colors">
                    <option value="wedding">Wedding / Reception</option>
                    <option value="college">College Event</option>
                    <option value="corporate">Corporate Seminar / Dinner</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>

                {/* Guest slider */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Guest Count</label>
                    <span className="text-sm font-black text-primary-400">{form.guestCount} Guests</span>
                  </div>
                  <input type="range" min="50" max="2000" step="25" value={form.guestCount} onChange={e => set('guestCount', e.target.value)} className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-primary-500" />
                  <div className="flex justify-between text-[10px] text-gray-600 mt-1"><span>50</span><span>2,000</span></div>
                </div>

                {/* Package radio cards */}
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">Food Package</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(packagePricing).map(([key, val]) => (
                    <div key={key} onClick={() => set('packageType', key)} className={`p-4 rounded-2xl border cursor-pointer transition-all ${form.packageType === key ? 'border-primary-500 bg-primary-500/5' : 'border-gray-800 hover:border-gray-700'}`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-bold text-white">{val.name}</p>
                          <p className="text-xs text-primary-400 mt-0.5">₹{val.pricePerGuest} / plate</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 mt-0.5 flex-shrink-0 ${form.packageType === key ? 'border-primary-500 bg-primary-500' : 'border-gray-700'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div className="glass rounded-3xl p-8 border border-gray-900">
                <h3 className="text-base font-bold text-white mb-6">Add-on Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(addons).map(([key, val]) => (
                    <div key={key} onClick={() => toggleAddon(key)} className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${form.services[key] ? 'border-secondary-500 bg-secondary-500/5' : 'border-gray-800 hover:border-gray-700'}`}>
                      <div>
                        <p className="text-sm font-bold text-white">{val.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">+ ₹{val.price.toLocaleString('en-IN')}</p>
                      </div>
                      <div className={`w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 ${form.services[key] ? 'bg-secondary-500 border-secondary-500' : 'border-gray-700'}`}>
                        {form.services[key] && <Check className="h-3 w-3 text-white stroke-[3px]" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={handleSubmit} className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-black text-lg tracking-wide hover:scale-[1.01] shadow-2xl shadow-primary-900/30 transition-all">
                Generate My Quote
              </button>
            </div>

            {/* Live Quote Panel */}
            <div className="lg:col-span-1">
              <div className="glass rounded-3xl p-8 border border-gray-900 sticky top-24">
                <h3 className="text-base font-bold text-white mb-6 pb-4 border-b border-gray-900">Live Estimate</h3>
                <div className="space-y-4 text-sm mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Package</span>
                    <span className="text-white font-semibold text-right max-w-[60%]">{packagePricing[form.packageType].name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Guests</span>
                    <span className="text-white font-semibold">{form.guestCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Food Total</span>
                    <span className="text-white font-bold">₹{(packagePricing[form.packageType].pricePerGuest * Number(form.guestCount)).toLocaleString('en-IN')}</span>
                  </div>
                  {Object.entries(form.services).filter(([,v]) => v).length > 0 && (
                    <div className="border-t border-gray-900 pt-4 space-y-2">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Add-ons</p>
                      {Object.entries(form.services).filter(([,v]) => v).map(([k]) => (
                        <div key={k} className="flex justify-between text-xs">
                          <span className="text-gray-400">{addons[k].name}</span>
                          <span className="text-white">₹{addons[k].price.toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-900 pt-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400 text-sm">Estimated Total</span>
                  </div>
                  <p className="text-4xl font-black text-white mb-1">₹{total.toLocaleString('en-IN')}</p>
                  <p className="text-[11px] text-gray-500 mb-6">Includes food, setup & selected services</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck className="h-4 w-4 text-accent-400" />
                    Secure WhatsApp confirmation
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Success */
          <div className="max-w-xl mx-auto">
            <div className="glass rounded-3xl p-10 md:p-14 border border-primary-500/20 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500"></div>

              <div className="inline-flex p-4 bg-primary-500/10 rounded-full text-primary-400 mb-6 border border-primary-500/20">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-black text-white mb-3">Quote Ready!</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">Send your booking details directly to Aahara Catering via WhatsApp and confirm your event slot.</p>

              {/* Receipt card */}
              <div className="bg-dark-900 rounded-2xl border border-gray-800 p-6 text-left mb-8">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-primary-400 font-bold">Package</p>
                    <p className="text-sm font-bold text-white">{packagePricing[form.packageType].name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Total</p>
                    <p className="text-sm font-black text-primary-400">₹{total.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                  <div><p className="text-gray-500 mb-0.5">Name</p><p className="text-white font-bold">{form.name}</p></div>
                  <div><p className="text-gray-500 mb-0.5">Phone</p><p className="text-white font-bold">{form.phone}</p></div>
                  <div><p className="text-gray-500 mb-0.5">Event Date</p><p className="text-white font-bold">{form.date}</p></div>
                  <div><p className="text-gray-500 mb-0.5">Location</p><p className="text-white font-bold">{form.location}</p></div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="h-5 w-28 bg-[repeating-linear-gradient(90deg,#6366f1,#6366f1_2px,#111625_2px,#111625_6px)] rounded opacity-60"></div>
                  <div className="p-1.5 bg-white rounded-lg"><QrCode className="h-8 w-8 text-dark-950" /></div>
                </div>
              </div>

              <div className="space-y-3">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-base hover:scale-[1.02] transition-all shadow-xl">
                  <MessageSquare className="h-5 w-5 fill-white" />
                  Confirm via WhatsApp
                </a>
                <button onClick={() => setSubmitted(false)} className="w-full py-3 rounded-xl border border-gray-800 hover:border-gray-700 text-gray-400 text-sm font-semibold transition-all">
                  Modify Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
