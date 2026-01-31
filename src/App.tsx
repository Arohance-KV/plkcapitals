import React from 'react';
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

import { PageTransition } from './components/PageTransition';
*/

function App() {
  return (
    <div className="min-h-screen bg-plk-navy flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-plk-lima/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-plk-red/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="z-10 text-center space-y-8 px-4">
        <div className="space-y-2">
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-plk-white tracking-tighter">
            PLK
          </h1>
          <p className="text-xl md:text-2xl font-sans text-plk-lima tracking-widest uppercase">
            Capital Advisors
          </p>
        </div>

        <div className="h-px w-32 bg-gradient-to-r from-transparent via-plk-grey to-transparent mx-auto"></div>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-sans font-light text-plk-white">
            Coming Soon
          </h2>
          <p className="text-plk-grey max-w-lg mx-auto font-sans leading-relaxed">
            We are currently building something exceptional. Our new digital experience is under construction.
          </p>
        </div>
      </div>

      {/*
      <div className="min-h-screen bg-plk-navy flex flex-col">
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
      */}
    </div>
  );
}

export default App;