import React from 'react';
import { Terminal } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-16 neon-text">PROJECTS_MATRIX</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((project) => (
          <div key={project} className="group relative bg-gray-900 p-6 rounded-lg border border-pink-500/30 hover:border-pink-500 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <Terminal className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Project_{project}.exe</h3>
            <p className="text-gray-400 mb-4">Neural interface optimization and quantum data processing systems.</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-purple-900/50 rounded-md text-xs">React</span>
              <span className="px-2 py-1 bg-purple-900/50 rounded-md text-xs">Node.js</span>
              <span className="px-2 py-1 bg-purple-900/50 rounded-md text-xs">AI</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}