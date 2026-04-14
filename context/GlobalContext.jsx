"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [searchedPrompt, setSearchedPrompt] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router =  useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (searchQuery.trim() === "") {
        return;
      }
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          query: searchQuery,
        }),
      });
      const data = await response.json();
      setSearchedPrompt(data.prompts);
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } catch (error) {
      console.log(error);
    }
  };
  const searchParams ={
    searchQuery,
    setSearchQuery,
    handleSearch,
  }
  return (
    <GlobalContext.Provider
      value={{ searchedPrompt, setSearchedPrompt, handleSearch,searchParams ,setSearchedPrompt}}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalContextProvider;
