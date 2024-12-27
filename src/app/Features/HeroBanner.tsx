"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroBanner() {
  return (
    <div className="relative flex flex-col items-center justify-center px-6 py-2 bg-black">
      <WavyBackground className="w-full max-w-4xl text-center ">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold py-2 ">
          Shaping a Quantum-Powered Tomorrow.
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-200 font-medium">
        Empowering industries with quantum-powered<br/> solutions for unparalleled breakthroughs.
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
