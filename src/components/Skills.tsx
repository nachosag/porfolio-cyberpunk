import React from 'react';
import { Code2, Cpu, Boxes } from 'lucide-react';

export default function Skills() {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-transparent to-purple-900/20">
      <h2 className="text-4xl font-bold text-center mb-16 neon-text">TECH_STACK</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Code2 className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Frontend Matrix</h3>
          <p className="text-gray-400">React, Vue, Angular</p>
        </div>
        <div className="text-center">
          <Cpu className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Backend Systems</h3>
          <p className="text-gray-400">Node.js, Python, Go</p>
        </div>
        <div className="text-center">
          <Boxes className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Database Cores</h3>
          <p className="text-gray-400">MongoDB, PostgreSQL</p>
        </div>
      </div>
    </section>
  );
}