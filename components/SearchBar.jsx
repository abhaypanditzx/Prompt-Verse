import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ delayedLoading }) => {
  return (
    <div
      className={`transition-all duration-700 mb-10 ${
        delayedLoading
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: delayedLoading ? "100ms" : "0ms" }}
    >
      <div className="relative w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden">
        
        <input
          type="text"
          placeholder="Search AI prompts..."
          className="w-full py-4 pl-5 pr-32 bg-transparent outline-none text-white placeholder:text-white/60"
        />

        <button className="absolute right-0 top-0 h-full px-6 sm:px-10 flex items-center justify-center bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 active:scale-95">
          <Search size={24} className="text-white" />
        </button>

      </div>
    </div>
  );
};

export default SearchBar;