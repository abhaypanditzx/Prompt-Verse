"use client";
import React, { useEffect, useState } from "react";
import PromptLoadingCardDisplay from "./promptLoadingCardDisplay";
import PromptCard from "./PromptCard";
const LatestPrompt = () => {
  const [loading, setLoading] = useState(true);
  const [prompts, setPrompts] = useState([]);
  const getPrompts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/prompt", {
        method: "GET",
      });
      const data = await res.json();
      setPrompts(data.prompts);
      console.log(data.prompts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPrompts();
  }, []);
  return (
    <section className="max-w-7xl mx-auto bg-white w-full py-12 md:py-20 border-t border-gray-200 p-4">
      <div className="p-6">
        <h1 className="text-3xl md:text-5xl heading-font text-start md:text-left font-bold  text-black">
          Recent Prompts
        </h1>
        <p className="text-gray-500 text-sm md:text-lg text-start md:text-left max-w-xl">
          Master the art of AI with our latest tutorials and prompt collections.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-start gap-6 w-full">
        {loading ? (
          <PromptLoadingCardDisplay />
        ) : (
          prompts?.map((prompt) => (
            <PromptCard key={prompt._id} prompt={prompt} />
          ))
        )}
      </div>
    </section>
  );
};

export default LatestPrompt;
