'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const sphereRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center bg-[#050505] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(192,192,192,0.1) 0%, transparent 50%)`,
          transition: 'background 0.3s ease',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <div className="flex-1 flex items-end justify-center w-full">
          <div className="text-center max-w-4xl px-8 mb-12">
            <div className="overflow-hidden mb-4">
              <p className="text-xs md:text-sm font-mono text-[#C0C0C0]/70 tracking-[0.3em] uppercase animate-[slideDown_0.8s_ease-out]">
                Welcome to the Future
              </p>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#E0E0E0] leading-tight tracking-tight animate-[slideDown_1s_ease-out_0.2s_backwards]">
                Where Every Line of Code
                <br />
                Creates <span className="liquid-text">Infinite Ripples</span>
              </h2>
            </div>
            <div className="overflow-hidden mt-6">
              <p className="text-sm md:text-base text-[#C0C0C0]/80 font-light leading-relaxed max-w-2xl mx-auto animate-[slideDown_1.2s_ease-out_0.4s_backwards]">
                Precision-engineered solutions in artificial intelligence, full-stack architecture,
                and hyper-automation. We don't just build technology—we engineer flow.
              </p>
            </div>
            <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent animate-[expand_1.5s_ease-out_0.6s_backwards]" />
          </div>
        </div>

        <div
          ref={sphereRef}
          className="relative w-64 h-64 md:w-96 md:h-96 rounded-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(${1 + Math.abs(mousePosition.x) * 0.05})`,
            background: 'radial-gradient(circle at 30% 30%, #E8E8E8, #A0A0A0)',
            boxShadow: '0 20px 60px rgba(192, 192, 192, 0.3), inset 0 -20px 40px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-lg bg-[#050505]/80 backdrop-blur-sm border border-[#E0E0E0]/10 p-4 overflow-hidden">
              <div className="font-mono text-[#00FF00] text-xs md:text-sm leading-relaxed">
                <span className="text-[#E0E0E0]">{'>'}</span> tebita.init()
                <br />
                <span className="text-[#C0C0C0]">Loading intelligence...</span>
                <br />
                <span className="text-[#00FF00]">✓ System ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-start justify-start w-full pl-12" />
      </div>

      <div className="absolute bottom-12 left-12 z-20 max-w-2xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 tracking-tight">
          <span className="block text-[#E0E0E0]">TEBITA.</span>
        </h1>
        <p className="text-lg md:text-2xl text-[#C0C0C0] font-light leading-relaxed tracking-wide">
          From a single drop,
          <br />
          <span className="liquid-text">an ocean of intelligence.</span>
        </p>
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-12 h-12 rounded-full border border-[#C0C0C0]/30 flex items-center justify-center hover:border-[#C0C0C0] transition-all duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.3)]"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6 text-[#C0C0C0] animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
