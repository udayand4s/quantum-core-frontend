"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroBanner() {
  return (
    <div className="relative mt-6 flex justify-center items-center min-h-screen"> {/* Added flex and centered text */}
      <WavyBackground className="max-w-4xl text-center"> {/* Ensure text-center is on WavyBackground */}
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold">
          Shaping a quantum-powered tomorrow.
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var">
          Welcome to QuantumCore
        </p>
      </WavyBackground>
    </div>
  );
}
