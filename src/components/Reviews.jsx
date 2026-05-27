import React, { useState } from 'react';
import { Star, PenTool, User, X, ChevronLeft, ChevronRight } from 'lucide-react';

const initialReviews = [
  {
    id: 1,
    name: 'Rahul & Anjali Nair',
    role: 'Wedding Reception Host',
    location: 'Pala',
    rating: 5,
    text: 'The Traditional Sadhya was absolutely outstanding. Every single guest was raving about the Avial and the Ada Pradhaman Payasam. The team arrived early, set up perfectly, and the service throughout was spotless. Aahara exceeded every expectation we had for our wedding.',
    date: '12 May, 2026',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 2,
    name: 'Prof. Mathews Joseph',
    role: 'College Fest Convener, St. Thomas College',
    location: 'Pala',
    rating: 5,
    text: 'We organized our college fest catering for 1,200+ students and Aahara delivered flawlessly. The live pasta stalls and barbecue counters were an absolute hit — the queues never stopped! Incredibly hygienic, well-managed, and within our budget.',
    date: '20 April, 2026',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 3,
    name: 'Sandeep K. Verma',
    role: 'Corporate Annual Meet Organizer',
    location: 'Payappar',
    rating: 5,
    text: 'Extremely professional and elegant service. The continental dinner spread, dessert counters, and visual presentation all matched a 5-star standard. Our clients and executives were thoroughly impressed. Will be booking Aahara again for our next event.',
    date: '04 May, 2026',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: 4,
    name: 'Deepa & Anil Thomas',
    role: 'Housewarming Ceremony Host',
    location: 'Kottayam',
    rating: 5,
    text: 'We hired Aahara for our grihapravesam and the traditional Kerala Sadhya was divine. The chefs used authentic recipes and fresh local ingredients. Guests kept complimenting us long after the event. Highly recommended for any family occasion.',
    date: '01 June, 2026',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80'
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [newReview, setNewReview] = useState({ name: '', role: '', location: 'Pala', rating: 5, text: '' });
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    setReviews(prev => [{ ...newReview, id: Date.now(), date: 'Just now', image: null }, ...prev]);
    setNewReview({ name: '', role: '', location: 'Pala', rating: 5, text: '' });
    setShowForm(false);
    setActiveIdx(0);
  };

  const featured = reviews[activeIdx];

  return (
    <section id="reviews" className="bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-primary-400 uppercase block mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              What Our
              <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary-500/30 text-primary-400 text-sm font-bold hover:bg-primary-500/5 transition-all self-start lg:self-auto"
          >
            <PenTool className="h-4 w-4" />
            {showForm ? 'Cancel' : 'Write a Review'}
          </button>
        </div>

        {/* Review form */}
        {showForm && (
          <div className="mb-16 glass rounded-3xl p-8 border border-primary-500/20 max-w-2xl">
            <h3 className="text-lg font-bold text-white mb-6">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 font-bold block mb-1.5">Your Name *</label>
                  <input type="text" name="name" value={newReview.name} onChange={handleInputChange} placeholder="E.g. Amal Dev" required className="w-full bg-dark-900 border border-gray-800 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-bold block mb-1.5">Event / Role</label>
                  <input type="text" name="role" value={newReview.role} onChange={handleInputChange} placeholder="Wedding Host, Fest Organizer..." className="w-full bg-dark-900 border border-gray-800 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 font-bold block mb-1.5">Rating</label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(star => (
                    <button key={star} type="button" onClick={() => setNewReview(p => ({...p, rating: star}))} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} className="hover:scale-110 transition-transform">
                      <Star className={`h-6 w-6 ${(hoverRating || newReview.rating) >= star ? 'text-primary-400 fill-primary-400' : 'text-gray-700'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 font-bold block mb-1.5">Your Review *</label>
                <textarea name="text" value={newReview.text} onChange={handleInputChange} rows="4" placeholder="Tell us about the food quality, service, and your experience..." required className="w-full bg-dark-900 border border-gray-800 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-sm">Submit Review</button>
            </form>
          </div>
        )}

        {/* Full-width featured review + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Featured large review */}
          <div className="lg:col-span-3 glass rounded-3xl overflow-hidden border border-gray-900 relative flex flex-col justify-between p-10 md:p-14 min-h-[400px]">
            {/* Large decorative quote mark */}
            <div className="absolute top-8 right-10 text-[10rem] leading-none text-primary-500/5 font-black select-none pointer-events-none">"</div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-8">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary-400 fill-primary-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-10 italic">
                "{featured.text}"
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {featured.image ? (
                  <img src={featured.image} alt={featured.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary-500/30" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-dark-800 border-2 border-primary-500/30 flex items-center justify-center text-gray-500">
                    <User className="h-5 w-5" />
                  </div>
                )}
                <div>
                  <p className="font-bold text-white">{featured.name}</p>
                  <p className="text-xs text-gray-400">{featured.role} · {featured.location}</p>
                </div>
              </div>
              {/* Prev / Next */}
              <div className="flex gap-2">
                <button onClick={() => setActiveIdx((activeIdx - 1 + reviews.length) % reviews.length)} className="p-2 rounded-xl bg-dark-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setActiveIdx((activeIdx + 1) % reviews.length)} className="p-2 rounded-xl bg-dark-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: stack of mini reviews */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {reviews.filter((_, i) => i !== activeIdx).slice(0, 3).map((review) => (
              <button
                key={review.id}
                onClick={() => setActiveIdx(reviews.findIndex(r => r.id === review.id))}
                className="glass text-left p-6 rounded-2xl border border-gray-900 hover:border-gray-800 transition-all duration-300 group"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 text-primary-400 fill-primary-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic line-clamp-2 mb-4 group-hover:text-white transition-colors">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  {review.image ? (
                    <img src={review.image} alt={review.name} className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center text-gray-600">
                      <User className="h-3.5 w-3.5" />
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-bold text-white">{review.name}</p>
                    <p className="text-[10px] text-gray-500">{review.location}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
