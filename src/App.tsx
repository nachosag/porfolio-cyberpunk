import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black cyber-grid text-gray-100">
      <Header />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;