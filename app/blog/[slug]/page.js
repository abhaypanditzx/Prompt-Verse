"use client";

import { Check, ChevronRight, Copy } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import RelatedPrompts from "../../../components/promptDetailsPageComponent/RelatedPrompts";
import BlogPage from "../../../components/blog/BlogPage";

const PromptPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copyPrompt, setCopyPrompt] = useState(false);

  // fetch blog
  useEffect(() => {
    if (!slug) return;
    const getBlogDetails = async () => {
      try {
        const res = await fetch(`/api/blog/${slug}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (data.success === false) {
          setBlog(null);
          return;
        }
        setBlog(data.blog);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getBlogDetails();
  }, [slug]);

  // breadcrumb
  const previousRoutes = [
    { path: "/", title: "Home" },
    { path: "/blog", title: "Blog" },
    { path: `/blog/${slug}`, title: blog?.title || slug },
  ];
  // copy prompt
  const handleCopyPrompt = (prompt) => {
    navigator.clipboard.writeText(prompt);
    setCopyPrompt(true);
    setTimeout(() => setCopyPrompt(false), 2000);
  };

  if (!blog && !RelatedPrompts) {
    return (
      <div className="mr-4 w-full p-4  animate-pulse">
        <div className="flex flex-col max-w-4xl w-full">
          {/* breadcrumbs */}
          <div className="flex gap-2 py-6">
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>

          {/* header */}
          <div className="pb-6 md:pb-8">
            <div className="h-10 w-3/4 bg-gray-200 rounded" />
            <div className="h-6 w-24 bg-gray-200 rounded-full mt-3" />

            <div className="space-y-2 mt-4">
              <div className="h-4 bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
            </div>

            {/* cover */}
            <div className="w-full aspect-video mt-4 bg-gray-200 rounded-lg" />
          </div>

          {/* blocks */}
          <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 space-y-10">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-1/2 bg-gray-200 rounded" />

                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>

                <div className="w-full max-w-xl aspect-[4/5] bg-gray-200 rounded-lg" />

                <div className="h-8 w-24 bg-gray-200 rounded" />

                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 w-4/5 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (!blog)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-semibold">Blog not found</h1>
      </div>
    );

  return (
    <div className="flex  min-h-screen  flex-col md:flex-row p-4 bg-[#F8F9FA]">
      <BlogPage
        previousRoutes={previousRoutes}
        blog={blog}
        handleCopyPrompt={handleCopyPrompt}
        copyPrompt={copyPrompt}
      />
      <RelatedPrompts />
    </div>
  );
};

export default PromptPage;
