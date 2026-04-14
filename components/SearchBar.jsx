"use client";
import React from "react";
import { Search } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";
const SearchBar = ({ delayedLoading }) => {
  const { handleSearch, searchParams } = useGlobalContext();
const {setSearchQuery,searchQuery} =searchParams;
  return (
    <form
      onSubmit={handleSearch}
      className={`transition-all  group duration-700 mb-10 
       ${
         delayedLoading
           ? "opacity-100 translate-y-0"
           : "opacity-0 translate-y-6"
       }`}
      style={{ transitionDelay: delayedLoading ? "100ms" : "0ms" }}
    >
      <div className="relative flex flex-row w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden">
        <div className="flex items-center justify-center pl-5">
          <Search size={24} className="text-white" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) =>setSearchQuery(e.target.value)}
          placeholder="Search AI prompts..."
          className="w-full py-4  bg-transparent px-2  md:px-5 outline-none text-white placeholder:text-white/60"
        />
      </div>
    </form>
  );
};

export default SearchBar;
