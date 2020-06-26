import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Gallery1 from './components/Gallery1';
import './scss/styles.scss';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutSection />
      <Gallery />

      <section class="page-section bg-dark text-white" id="page-section">
        <div class="container text-center">
          <h2 class="mb-4">Contact Your New Favorite Local Mushroom Farm</h2>
          <a class="btn btn-light btn-xl js-scroll-trigger" href="#contact">
            Contact Us
          </a>
        </div>
      </section>

      <ContactUs />

      <Footer />
    </>
  );
}

export default App;
