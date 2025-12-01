'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold liquid-text tracking-tight">
            TEBITA
          </h1>
        </div>

        <div className="w-64 h-1 bg-[#E0E0E0]/10 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-[#C0C0C0] via-[#E0E0E0] to-[#C0C0C0] transition-all duration-300"
            style={{
              width: `${progress}%`,
              boxShadow: '0 0 20px rgba(192, 192, 192, 0.5)',
            }}
          />
        </div>

        <p className="mt-6 font-mono text-sm text-[#C0C0C0]">{progress}%</p>
      </div>
    </div>
  );
}
