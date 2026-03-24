"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import RelatedPrompts from "../../../components/promptDetailsPageComponent/RelatedPrompts";
import Loading from "../../../components/Loading";
import Image from "next/image";
const PromptPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  // const [copyPrompt, setCopyPrompt] = useState(false);
  const [loading, setLoading] = useState(false);
  // fetching single prompt detail
  const getBlogDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/blog/${slug}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setBlog(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(blog?.blocks);
  // fetching single prompt detail
  useEffect(() => {
    if (!slug) return;
    getBlogDetails();
  }, [slug]);

  // copy prompt to clipboard
  // const handleCopyPrompt = async () => {
  //   try {
  //     if (!blog?.prompt) return;
  //     await navigator.clipboard.writeText(blog.prompt);
  //     setCopyPrompt(true);
  //     setTimeout(() => {
  //       setCopyPrompt(false);
  //     }, 2000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // previous routes
  const previousRoutes = [
    { path: "/", title: "Home" },
    { path: "/blog", title: "Blog" },
    { path: `/blog/${slug}`, title: slug },
  ];
  return (
    <div className="p-4 md:p-6 flex bg-[#F8F9FA]">
      {loading ? (
        <Loading />
      ) : !blog ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-semibold text-center [font-family:var(--heading-font)]">
            Blog not found
          </h1>
        </div>
      ) : (
        // container
        <div className="flex flex-col  max-w-4xl ">
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
          <div className="md:pb-8    pb-6">
            <h1 className="md:text-5xl font-heading capitalize text-3xl heading-font font-bold ">
              {blog?.title}
            </h1>
            <p className=" font-inter font-semibold text-sm md:text-base  mt-2 bg-blue-100 text-blue-500 w-fit px-2 py-1 rounded-full">
              {blog?.category}
            </p>
            <p className="text-sm font-medium text-gray-800 mt-2">
              {blog?.description}
            </p>
            <div className="relative w-full bg-amber-400">
              {blog?.coverImage && (
                <div className="relative overflow-hidden w-full h-[360px] rounded-lg shadow-lg object-cover">
                  <Image
                    width={1000}
                    height={400}
                    sizes="(max-width:360px) 100vw, 360px"
                    src={blog?.coverImage}
                    alt={blog?.title}
                  />
                </div>
              )}
            </div>
          </div>
          {/* main content */}
          <div className="flex flex-col justify-start gap-4  shadow-lg rounded-lg p-4 bg-white ">
            <div className="flex flex-col gap-4 pt-4">
              {blog?.blocks?.map((block, index) => (
                <div key={index} className="flex flex-col ">
                  <h1 className="text-2xl font-bold pb-2 font-heading">
                    {block?.heading}
                  </h1>
                  <div className="relative overflow-hidden w-full h-[260px] object-cover">
                    <Image
                      width={200}
                      height={200}
                      sizes="(max-width:360px) 100vw, 288px"
                      src={block?.image}
                      alt={block?.heading}
                    />
                  </div>
                  <p className="text-base italic text-gray-600 py-4  max-w-2xl"> 
                    <span  className="font-semibold text-gray-800">{"Prompt "+index+1 + " : "}</span>
                    {block?.prompt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptPage;
