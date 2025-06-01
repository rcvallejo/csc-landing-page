import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // Import the new component

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton /> {/* Add the WhatsApp button here */}
    </div>
  );
};

export default App;