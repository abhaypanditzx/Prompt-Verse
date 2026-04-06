"use client";

import { Check, ChevronRight, Copy } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import RelatedPrompts from "../../../components/promptDetailsPageComponent/RelatedPrompts";
import Loading from "../../../components/Loading";
import BlogPage from "../../../components/BlogPage";

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
        setBlog(data);
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

  if (loading) return <div className="flex items-center justify-center min-h-screen"><Loading /></div>;

  if (!blog)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-semibold">Blog not found</h1>
      </div>
    );

  return (
   <div className="flex  min-h-screen  flex-col md:flex-row p-4 bg-[#F8F9FA]">
     <BlogPage previousRoutes={previousRoutes} blog={blog} handleCopyPrompt={handleCopyPrompt} copyPrompt={copyPrompt}/>
     <RelatedPrompts/>
   </div>
  );
};

export default PromptPage;
