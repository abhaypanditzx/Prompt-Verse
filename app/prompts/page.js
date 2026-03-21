"use client";
import React, { useState, useEffect } from "react";
import PromptLoadingCardDisplay from "../../components/promptLoadingCardDisplay";
import dynamic from "next/dynamic";
const  PromptCard = dynamic(()=> import( "../../components/PromptCard"),{
  loading:()=> <PromptLoadingCardDisplay/>
})

const AdComponent = dynamic(() => import("../../components/AdComponent"), {
  ssr: false,
});

const Prompts = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllPrompts = async () => {
    try {
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
      <div className="flex flex-col items-center text-start p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl heading-font font-bold text-black pb-2">
          All Prompts
        </h1>
        <p className="text-gray-500 text-sm md:text-lg text-center max-w-xl">
          Master the art of AI with our latest tutorials and prompt collections.
        </p>
      </div>
      <AdComponent/>
      <div className="flex justify-start  flex-wrap gap-4 w-full ">
        {loading ? (
          Array(8).fill(0).map((_,i)=>(<PromptLoadingCardDisplay key={i}/>))
        ) : (
          prompts.map((prompt) => (
            <PromptCard key={prompt._id} prompt={prompt} />
          ))
        )}
      </div>
    </div>
  );
};

export default Prompts;
