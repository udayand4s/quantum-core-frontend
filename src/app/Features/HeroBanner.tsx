"use client";
import React, { useState, useEffect } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroBanner() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000); // Trigger animation after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center justify-center px-6 py-8 my-8 bg-black transform transition-all duration-1000 ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <WavyBackground className="w-full max-w-4xl text-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold py-2">
          Shaping a Quantum-Powered Tomorrow.
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-200 font-medium">
          Empowering industries with quantum-powered
          <br /> solutions for unparalleled breakthroughs.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6">
          <button className="px-6 py-3.5 rounded-3xl border-2 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
            Learn More
          </button>
        </div>
      </WavyBackground>
    </div>
  );
}
