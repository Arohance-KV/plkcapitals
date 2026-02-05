import React from 'react';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Philosophy';
import { WhatWeDo } from '../components/WhatWeDo';
import { AboutUs } from '../components/AboutUs';
import { HowWeWork } from '../components/HowWeWork';

export const Home: React.FC = () => {
  return (
    <main className="flex-grow bg-plk-navy">
      <Hero />
      <Philosophy variant="light" />
      <WhatWeDo />
      <AboutUs />
      {/* <HowWeWork /> */}
    </main>
  );
};
