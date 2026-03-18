"use client";
import React, { useState, useEffect } from "react";
import PromptCard from "../../components/PromptCard";
import PromptLoadingCardDisplay from "../../components/promptLoadingCardDisplay";
const Prompts = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllPrompts = async () => {
    try {
      setLoading(true);
      const data = await fetch("/api/prompt", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await data.json();
      setPrompts(res.prompts);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllPrompts();
  }, []);
  return (
    <div className="p-4 md:p-6 h-full bg-[#F8F9FA]">
      <div className="flex items-center flex-wrap gap-6 ">
        {prompts.map((prompt) =>
          loading ? (
              <PromptLoadingCardDisplay/>
        ) : (
            <PromptCard key={prompt._id} prompt={prompt} /> 
          ),
        )}
      </div>
    </div>
  );
};

export default Prompts;
