import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [delayedLoading,setDelayedLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelayedLoading(true);
    }, 500);

  }, []);
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-10 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700">
      
      {/* Glow effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-5xl text-center z-10">
        
        {/* Heading */}
        <h1 className={`text-[32px] md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight transition-all duration-700 text-white mb-6 ${delayedLoading ? "opacity-100 translate-y-0" : "opacity-75 translate-y-6"}`}>
          Daily AI Prompts to
          <span className="block text-white/80">Boost Your Creativity</span>
        </h1>

        {/* Subtext */}
        <p className={`text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-500 ${delayedLoading ? "opacity-100 translate-y-0" : "opacity-75 translate-y-4"}`}>
          PromptVerse delivers curated, high-performing prompts for Google Gemini
          and ChatGPT — helping you create faster, smarter, and better.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-500 ${delayedLoading ? "opacity-100 translate-y-0" : "opacity-75 translate-y-4"}`}>
          <Link
            href="/category/chatgpt"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Explore ChatGPT
          </Link>

          <Link
            href="/category/gemini"
            className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold border border-white/30 hover:bg-white hover:text-black transition-all duration-200"
          >
            Explore Gemini
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;