'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xykdlzer', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json();
        console.error('Formspree error:', data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  return (
    <section className="py-24 px-6 bg-[#112240]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Carl Vincent G. Platil
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                UI/UX Designer & Front-End Developer crafting intuitive, impactful digital experiences.
              </p>
            </div>
            
            <p className="text-gray-400">
              Open to collaborations, freelance, and exciting opportunities.
            </p>
            
            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <div className="flex gap-6">
                <a
                  href="mailto:carl.platil@urios.edu.ph"
                  className="w-14 h-14 bg-[#1e2a3a] hover:bg-blue-600 transition-colors rounded-full flex items-center justify-center text-2xl"
                  aria-label="Email"
                >
                  ✉️
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#1e2a3a] hover:bg-blue-600 transition-colors rounded-full flex items-center justify-center text-2xl"
                  aria-label="GitHub"
                >
                  <svg className="w-7 h-7 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="pt-12 text-gray-500 text-sm space-y-2">
              <p>© 2026 Carl Vincent G. Platil. All rights reserved.</p>
              <p className="text-gray-600">Crafted with passion for pixel-perfect experiences.</p>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="bg-[#0a192f] rounded-3xl p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white mb-4">Send Message</h3>
              <p className="text-gray-400">Fill out the form below and I&apos;ll get back to you soon!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" action="https://formspree.io/f/xykdlzer" method="POST">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  autoComplete="name"
                  suppressHydrationWarning
                  className="w-full px-6 py-4 bg-[#1e2a3a] text-white rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                  suppressHydrationWarning
                  className="w-full px-6 py-4 bg-[#1e2a3a] text-white rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  autoComplete="off"
                  suppressHydrationWarning
                  className="w-full px-6 py-4 bg-[#1e2a3a] text-white rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-[#1e2a3a] text-white rounded-xl border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                suppressHydrationWarning
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <p className="text-green-400 text-center">✓ Message sent successfully!</p>
              )}
              
              {status === 'error' && (
                <p className="text-red-400 text-center">✗ Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
