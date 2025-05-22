import AboutUs from '@/components/home/AboutUs';

import Hero from '@/components/home/Hero';
import ProfessionTeam from '@/components/home/ProfessionTeam';
import Section from '@/components/home/Section';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <Section />
      <AboutUs />
      <ProfessionTeam />
    </div>
  );
};

export default page;
