"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import CopyPrompt from "../../../components/promptDetailsPageComponent/CopyPrompt";
import RelatedPrompts from "../../../components/promptDetailsPageComponent/RelatedPrompts";
import ImageContainer from "../../../components/promptDetailsPageComponent/ImageContainer";
import Loading from "../../../components/loadings/Loading";
const PromptPage = () => {
  const { slug } = useParams();
  const [prompt, setPrompt] = useState(null);
  const [copyPrompt, setCopyPrompt] = useState(false);
  const [loading, setLoading] = useState(false);
  // fetching single prompt detail
  const getPromptDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/prompt/${slug}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setPrompt(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // fetching single prompt detail
  useEffect(() => {
    if (!slug) return;
    getPromptDetails();
  }, [slug]);

  // copy prompt to clipboard
  const handleCopyPrompt = async () => {
    try {
      if (!prompt?.prompt) return;
      await navigator.clipboard.writeText(prompt.prompt);
      setCopyPrompt(true);
      setTimeout(() => {
        setCopyPrompt(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  // previous routes
  const previousRoutes = [
    { path: "/", title: "Home" },
    { path: "/prompts", title: "Prompt" },
    { path: `/prompts/${slug}`, title: slug },
  ];
  return (
    <div className="p-4 md:p-6 min-h-screen bg-[#F8F9FA]">
      {loading ? (
        <Loading />
      ) : !prompt ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-semibold text-center [font-family:var(--heading-font)]">
            Prompt not found
          </h1>
        </div>
      ) : (
        // container
        <div className="flex flex-col">
          {/* previous routes */}
          <div className="flex flex-row gap-2 text-gray-500 py-8">
            {previousRoutes.map((link, index) => (
              <div className="flex flex-row items-center" key={index}>
                <Link
                  href={link.path}
                  className="text-sm hover:text-blue-500 font-semibold font-inter transition-colors duration-200 font-inter "
                >
                  {link.title.length > 20
                    ? link.title.substring(0, 20) + "...."
                    : link.title}
                </Link>
                <span>
                  <ChevronRight className="h-5 w-5 " />
                </span>
              </div>
            ))}
          </div>
          {/* title and category tag  */}
          <div className="md:pb-8 pb-4 border-b border-gray-200">
            <h1 className="md:text-3xl text-2xl heading-font font-bold ">
              {prompt?.title}
            </h1>
            <p className=" font-inter font-semibold text-sm md:text-base  mt-2 bg-blue-100 text-blue-500 w-fit px-2 py-1 rounded-full">
              {prompt?.category?.title}
            </p>
          </div>
          {/* main content */}
          <div className="flex flex-col md:justify-between gap-4 md:flex-row">
            <div className="flex flex-col md:flex-row gap-4 md:pt-8 pt-4">
              <ImageContainer prompt={prompt} />
              <CopyPrompt
                copyPrompt={copyPrompt}
                handleCopyPrompt={handleCopyPrompt}
                prompt={prompt}
              />
            </div>
            <RelatedPrompts />
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptPage;
