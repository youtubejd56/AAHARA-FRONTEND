import React, { useState } from 'react';
import { Send, Instagram, MessageSquare, Mail, Phone, MapPin, Utensils, X } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const closeModal = () => setActiveModal(null);

  const policyContent = {
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Data Collection",
          text: "Aahara Catering collects basic contact information (Name, WhatsApp Number, Email, and Event Details) solely to calculate custom quotes and coordinate event planning services."
        },
        {
          heading: "2. WhatsApp & Phone Communication",
          text: "By requesting a quote, you consent to receive direct event-related communications from our management via WhatsApp or voice calls. We do not send unsolicited automated spam."
        },
        {
          heading: "3. Information Security",
          text: "Your contact details are stored securely and are never shared, sold, or distributed to any third-party marketing services or advertising networks."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      sections: [
        {
          heading: "1. Booking & Advance Deposits",
          text: "To secure a catering slot for a specific date, a minimum advance deposit is required. Bookings are considered tentative until the deposit receipt is verified."
        },
        {
          heading: "2. Cancellation & Refunds",
          text: "Cancellations made 14 days or more prior to the event will receive a full refund of the deposit. Cancellations within 14 days may forfeit a portion of the deposit to cover pre-sourced ingredients."
        },
        {
          heading: "3. Sourcing & Hygiene",
          text: "All ingredients are freshly sourced and cooked in strict compliance with safety guidelines. Aahara Catering is not liable for food quality issues arising from improper storage by hosts post-handover."
        },
        {
          heading: "4. Partner Network Services",
          text: "Visual services (Photography, Videography) and hosting (Anchors) are delivered through licensed partners. Aahara coordinates the schedules but partners remain liable for their individual deliverables."
        }
      ]
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-gray-900 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Warm Blur Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-wider text-white">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary-400" />
                AAHARA<span className="text-primary-400">CATERING</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Serving delicious vegetarian & non-vegetarian local cuisines alongside complete wedding, photography, and entrance decorations.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/917510921089"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-900 border border-gray-900 hover:border-gray-800 text-gray-400 hover:text-white transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.instagram.com/aaharaevents?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-900 border border-gray-900 hover:border-gray-800 text-gray-400 hover:text-white hover:text-[#e1306c] transition-colors"
                title="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Navigations</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors font-light">Our Services</a></li>
              <li><a href="#packages" className="text-sm text-gray-400 hover:text-white transition-colors font-light">Food Packages</a></li>
              <li><a href="#reviews" className="text-sm text-gray-400 hover:text-white transition-colors font-light">Customer Reviews</a></li>
              <li><a href="#booking" className="text-sm text-gray-400 hover:text-white transition-colors font-light">Estimate Calculator</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Contact Details</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-primary-400" />
                <a href="tel:+917510921089" className="font-light hover:text-white transition-colors">+91 7510921089</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-secondary-400 mt-0.5" />
                <span className="font-light">Pala, Payappar, Kerala</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Get Seasonal Offers</h4>
            <p className="text-sm text-gray-400 mb-4 font-light leading-relaxed">
              Subscribe to get updates on seasonal feast discounts and booking offers.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email..."
                  className="w-full bg-dark-900 border border-gray-900 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="p-3 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-xl text-xs font-medium">
                Successfully subscribed to offers list.
              </div>
            )}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-gray-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Aahara Catering. All rights reserved.</p>
          <div className="flex gap-6">
            <div>
              <p className='hover:text-primary-400 transition-colors cursor-pointer'>Developed by Vinayak NV</p>
            </div>
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-primary-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-gray-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass max-w-xl w-full rounded-3xl overflow-hidden border border-gray-800 shadow-2xl relative p-8">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-dark-900/60 hover:bg-gray-855 text-gray-400 hover:text-white transition-colors border border-gray-800"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-gray-800/80 pb-4">
              {policyContent[activeModal].title}
            </h3>

            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {policyContent[activeModal].sections.map((section, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="text-sm font-bold text-primary-400">{section.heading}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-850 mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold transition-all hover:opacity-90"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
