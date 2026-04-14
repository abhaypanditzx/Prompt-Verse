"use client";
import { useState } from "react";
import PromptCard from "../../components/prompt/PromptCard";
import { useGlobalContext } from "../../context/GlobalContext";
import { Search } from "lucide-react";

const SearchPage = () => {
  const { searchedPrompt, searchParams, setSearchedPrompt } =
    useGlobalContext();

  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredPrompt, setFilteredPrompt] = useState([]);

  const filterByCategory = (e) => {
    const value = e.target.value;
    setCategoryFilter(value);
    const filtered = searchedPrompt.filter((p) => p?.category?.title.toLowerCase() == value.toLowerCase());
      setFilteredPrompt(filtered);
  };

 


  return (
    <div>
      <div className="text-center text-2xl font-bold mt-10">
        <p>Search Results</p>
      </div>
      {/* search by title  */}
      <div className="grid grid-cols-3">
        <form
          onSubmit={searchParams.handleSearch}
          className="flex items-center  border border-gray-300  px-4 py-2"
        >
          <Search size={24} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchParams.searchQuery}
            onChange={(e) => {
              searchParams.setSearchQuery(e.target.value);
            }}
            className="outline-none w-full"
          />
        </form>
        <div className="flex items-center  border border-gray-300  px-4 py-2">
          <select value={categoryFilter} onChange={(e) =>filterByCategory(e)}>
            <option value="">All Categories</option>
            <option value="gemini">Gemini</option>
            <option value="chatgpt">ChatGPT</option>
            <option value="claude">Claude</option>
            <option value="perplexity">Perplexity</option>
            <option value="">Other</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p>Search by title</p>
        <p>Search by category</p>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 p-6 ">
        {/* <h1>Search Results</h1> */}
        {categoryFilter === ""
          ? searchedPrompt?.map((prompt) => (
              <PromptCard key={prompt._id} prompt={prompt} />
            ))
          : filteredPrompt?.map((prompt) => (
              <PromptCard key={prompt._id} prompt={prompt} />
            ))}
      </div>
    </div>
  );
};

export default SearchPage;
