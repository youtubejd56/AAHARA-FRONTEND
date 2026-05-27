import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Reviews from './components/Reviews';
import Register from './components/Register';
import Map from './components/Map';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-950 selection:bg-primary-500 selection:text-white">
      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Reviews />
        <Register />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
