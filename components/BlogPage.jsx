"use client";
import { Check, ChevronRight, Copy } from "lucide-react";
import Link from "next/link";
import React from "react";
const BlogPage = ({ blog, previousRoutes, handleCopyPrompt, copyPrompt }) => {
  return (
    <div className=" mr-4 w-full">
      <div className="flex flex-col  max-w-4xl w-full">
        {/* previous routes */}
        <div className="flex flex-wrap items-center gap-2 text-gray-500 py-6">
          {previousRoutes.map((link, index) => (
            <div key={link.path} className="flex items-center">
              <Link
                href={link.path}
                className="text-sm hover:text-blue-500 font-semibold"
              >
                {link.title?.length > 30
                  ? link.title.slice(0, 30) + "..."
                  : link.title}
              </Link>

              {index !== previousRoutes.length - 1 && (
                <ChevronRight className="h-4 w-4 mx-1" />
              )}
            </div>
          ))}
        </div>
        {/* header */}
        <div className="pb-6 md:pb-8">
          <h1 className="text-3xl md:text-5xl font-bold capitalize">
            {blog.title}
          </h1>

          <p className="mt-2 bg-blue-100 text-blue-600 w-fit px-3 py-1 rounded-full text-sm font-semibold">
            {blog.category}
          </p>

          <p className="text-gray-700 mt-3">{blog.description}</p>

          {/* cover image */}
          {blog.coverImage && (
            <div className="relative w-full aspect-video mt-4 overflow-hidden  shadow-lg  rounded-lg ">
              <img
                src={blog?.coverImage}
                alt={blog?.title}
                className="object-cover h-full w-full"
              />
            </div>
          )}
        </div>

        {/* content */}
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
          {blog.blocks?.map((block, index) => (
            <div
              key={block._id}
              className="mb-8 border-b border-gray-200 pb-4 "
            >
              <h2 className="text-xl md:text-2xl font-bold mb-3">
                {block.heading}
              </h2>

              {/* block image */}
              {block.image && (
                <div className="relative w-56   rounded-lg overflow-hidden">
                  <img
                    src={block.image}
                    alt={block.heading}
                    className="object-cover h-full w-full"
                  />
                </div>
              )}

              {/* prompt */}
              <button
                onClick={() => handleCopyPrompt(block.prompt)}
                className={`px-4 py-1 text-white font-inter font-semibold cursor-pointer rounded-lg mt-4 mb-2  ${copyPrompt ? "bg-green-500" : "bg-blue-500"}`}
              >
                {copyPrompt ? (
                  <div className="flex flex-row items-center gap-2">
                    <Check className="h-5 w-5" /> Copied
                  </div>
                ) : (
                  <div className="flex flex-row items-center gap-2">
                    <Copy className="h-5 w-5" /> Copy
                  </div>
                )}
              </button>
              <p className="text-gray-700 italic mt-4 leading-relaxed">
                <span className="font-semibold text-gray-900">
                  Prompt {index + 1}:
                </span>{" "}
                {block.prompt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
