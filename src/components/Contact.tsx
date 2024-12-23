import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-16 neon-text">INITIATE_CONTACT</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="USER_ID"
              className="w-full bg-gray-900 border border-pink-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="NEURAL_MAIL"
              className="w-full bg-gray-900 border border-pink-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="MESSAGE_PAYLOAD"
              rows={4}
              className="w-full bg-gray-900 border border-pink-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 transition-colors"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            TRANSMIT
          </button>
        </form>
      </div>
    </section>
  );
}