import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Header from './components/Header';
import Gallery from './components/Gallery';
import PageSection from './components/PageSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

import './scss/styles.scss';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutSection />
      <Gallery />
      <PageSection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
