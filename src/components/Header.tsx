import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/80 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80&w=2000"
        alt="Cyberpunk background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-20 text-center p-8">
        <h1 
          className="text-6xl md:text-8xl font-bold mb-4 neon-text glitch"
          data-text="CYBER_DEV"
        >
          CYBER_DEV
        </h1>
        <p className="text-xl md:text-2xl text-purple-300 mb-8">FULL STACK DEVELOPER // DIGITAL ARCHITECT</p>
        <div className="flex gap-6 justify-center">
          <a href="#" className="hover:text-pink-500 transition-colors"><Github size={24} /></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><Mail size={24} /></a>
        </div>
      </div>
    </header>
  );
}