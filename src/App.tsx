import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { HeroReveal } from './components/HeroReveal';
import useLenis from './hooks/useLenis';

import { PageTransition } from './components/PageTransition';
import { WealthManagement } from './pages/WealthManagement';
import { LiquidityManagement } from './pages/LiquidityManagement';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useLenis();

  return (
    <div className="min-h-screen bg-plk-navy flex flex-col">
      <ScrollToTop />
      {isLoading && <HeroReveal onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <Header />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wealth-management" element={<WealthManagement />} />
              <Route path="/liquidity-management" element={<LiquidityManagement />} />
            </Routes>
          </PageTransition>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;