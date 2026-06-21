import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Pillars from '../components/Pillars.jsx';
import Journey from '../components/Journey.jsx';
import Projects from '../components/Projects.jsx';
import Experiences from '../components/Experiences.jsx';
import Achievements from '../components/Achievements.jsx';
import Skills from '../components/Skills.jsx';
import Certificates from '../components/Certificates.jsx';
import LearningRoadmap from '../components/LearningRoadmap.jsx';
import TechStack from '../components/TechStack.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Journey />
        <Projects />
        <Experiences />
        <Achievements />
        <Skills />
        <Certificates />
        <LearningRoadmap />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
