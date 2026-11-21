import React from 'react';
import { Hero } from '../components/Hero';
import { Works } from '../components/Works';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Certifications } from '../components/Certifications';
import { Writing } from '../components/Writing';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Works />
      <Experience />
      <Skills />
      <Certifications />
      <Writing />
      <About />
      <Contact />
    </>
  );
};
