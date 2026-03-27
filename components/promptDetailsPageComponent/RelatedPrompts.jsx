"use client";
import { Key } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RelatedPrompts = () => {
  const [prompts, setPrompts] = useState([]);
  const [openPrompt, setOpenPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const getPrompts = async () => {
    setLoading(true);
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPrompts(data.prompts || []);
    setLoading(false);
  };
  useEffect(() => {
    getPrompts();
  }, []);

  return (
    <div className="bg-white felx flex-col p-4 rounded-xl ">
      <div className="md:pb-8 pb-4 border-b   border-gray-200">
        <h1 className="md:text-3xl text-2xl heading-font font-bold ">
          Related Prompts
        </h1>
      </div>
      <div>
        {prompts.slice(0, 4).map((prompt) => {
          return (
            <Link
              href={`/prompts/${prompt.slug}`}
              key={prompt._id}
              className="flex flex-row md:items-start gap-2  py-4"
            >
              <div className="max-h-14 max-w-14 min-h-10 min-w-10 rounded-lg overflow-hidden">
                <img
                  src={prompt.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            <div className="flex flex-col px-4 ">
                <h5 className="font-inter font-bold text-sm hover:text-blue-500 transition-colors duration-200 md:text-base ">
                {prompt.title}
              </h5>
              <p className="font-inter font-semibold text-blue-500 bg-blue-100 w-fit px-2 py-1 rounded-full mt-2 text-xs  ">
                {prompt.category.title}
              </p>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPrompts;
