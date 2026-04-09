import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import SearchBar from "./SearchBar";

const Hero = () => {
  const [delayedLoading, setDelayedLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayedLoading(true);
    }, 300);
  }, []);

  return (
    <div className="relative w-full min-h-screen  pt-10 sm:pt-20 flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* ✅ IMPROVED: Gradient background with better colors */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-blue-950 to-slate-900"></div>

      {/* ✅ IMPROVED: Multiple animated gradient layers for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top glow */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse"></div>
        {/* Bottom glow */}
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* ✅ IMPROVED: Subtle grid pattern for visual interest */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none opacity-50"></div>

      {/* ✅ IMPROVED: Content container with better structure */}
      <div className="max-w-4xl w-full z-10 relative">
        {/* ✅ IMPROVED: Badge above headline (hierarchy) */}
        <div
          className={`flex justify-center mb-8 transition-all duration-500 ${
            delayedLoading
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-white/80">
              AI-Powered Prompts
            </span>
          </div>
        </div>

        {/* ✅ IMPROVED: Better heading hierarchy with visual hierarchy */}
        <h1
          className={`text-center transition-all duration-700 mb-6 ${
            delayedLoading
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main headline */}
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white mb-3">
            Transform Your Ideas
          </span>

          {/* Subheadline with gradient */}
          <span className="block text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Into AI Masterpieces
          </span>
        </h1>

        {/* ✅ IMPROVED: Better description text */}
        <p
          className={`text-center text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 ${
            delayedLoading
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: delayedLoading ? "100ms" : "0ms" }}
        >
          PromptVerse delivers expertly curated, high-performing prompts for
          <span className="text-white font-semibold"> Google Gemini</span> and
          <span className="text-white font-semibold"> ChatGPT</span> — helping
          you create <span className="text-blue-300">faster</span>,
          <span className="text-blue-300"> smarter</span>, and
          <span className="text-blue-300"> better</span>.
        </p>
        {/* search bar  */}
        <SearchBar delayedLoading={delayedLoading}/>

        {/* ✅ IMPROVED: Better CTA buttons with hierarchy */}
        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 ${
            delayedLoading
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: delayedLoading ? "200ms" : "0ms" }}
        >
          {/* Primary CTA */}
          <Link
            href="/category/chatgpt"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 text-white font-bold text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {/* Button content */}
            <span className="flex items-center gap-2">
              Explore ChatGPT
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/category/gemini"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-base border border-white/30 hover:border-white/60 transition-all duration-300 hover:bg-white/20 active:scale-95 whitespace-nowrap"
          >
            Explore Gemini
            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ✅ IMPROVED: Added social proof / stats section */}
        <div
          className={`mt-16 pt-12 border-t border-white/10 transition-all duration-700 ${
            delayedLoading
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: delayedLoading ? "300ms" : "0ms" }}
        >
          <div className=" grid-cols-1 hidden sm:grid sm:grid-cols-3 gap-4 p-4 sm:gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                10K+
              </p>
              <p className="text-sm text-white/60 font-medium">
                Curated Prompts
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                99%
              </p>
              <p className="text-sm text-white/60 font-medium">Success Rate</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                500+
              </p>
              <p className="text-sm text-white/60 font-medium">Active Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
