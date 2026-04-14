"use client"
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogCard = ({ Blog }) => {
  function makeSlug(title) {
    if (!title) return "";

    const cleaned = title
      .replace(/\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{So}/gu, "")
      .replace(/[^\p{L}\p{N}\s-]+/gu, "")
      .replace(/\s+/g, " ")
      .trim();

    return cleaned
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase();
  }

  return (
    <Link
      href={`/blog/${makeSlug(Blog?.title)}`}
      className="flex flex-col items-center sm:w-72 w-full shadow-xl group bg-white rounded-xl overflow-hidden"
    >
      {/* IMPORTANT: relative required for fill */}
      <div className="relative overflow-hidden w-full h-[260px]">
        <Image
          src={Blog?.coverImage}
          alt={Blog?.title}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, 288px"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-4 w-full flex flex-col gap-2">
        <h6 className="text-lg font-bold text-black">
          {Blog?.title?.substring(0, 30)}...
        </h6>

        <p className="text-gray-600 font-medium text-sm">
          {Blog?.description?.substring(0, 80)}....
        </p>

        <div className="flex flex-row justify-between pt-4">
          <span className="font-medium text-sm bg-blue-100 text-blue-400 w-fit px-2 py-1 rounded-full">
            {Blog?.category}
          </span>

          <div className="text-blue-600 text-sm md:text-base font-semibold flex items-center gap-1">
            <span>View Blog</span>
            <ChevronRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;