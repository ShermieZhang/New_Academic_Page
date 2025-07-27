import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Research } from './components/Research';
import { Publications } from './components/Publications';
import { Teaching } from './components/Teaching';
import { CV } from './components/CV';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Research />
        <Publications />
        <Teaching />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;