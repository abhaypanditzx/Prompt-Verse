import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Loading from "./Loading";

const PromptCard = ({ prompt }) => {
  // Robust slug generator
  function makeSlug(title) {
    if (!title) return "";

    // Remove emoji and most punctuation while preserving Unicode letters/numbers
    // Uses Unicode property escapes; requires Node 10+ / modern browsers
    const cleaned = title
      // remove emoji and symbols (keeps letters, numbers, spaces, and hyphens)
      .replace(/\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{So}/gu, "")
      // replace any character that is not a letter, number, space or hyphen with empty
      .replace(/[^\p{L}\p{N}\s-]+/gu, "")
      // normalize whitespace to single spaces
      .replace(/\s+/g, " ")
      .trim();

    // Turn spaces into hyphens, collapse multiple hyphens, trim hyphens, lowercase
    const slug = cleaned
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase();

    return slug;
  }
  return (
    <Link
      href={`/prompts/${makeSlug(prompt?.title)}`}
      className="flex flex-col items-center sm:w-72  w-full shadow-xl group"
    >
      <div className="overflow-hidden rounded-t-xl max-h-[300px]  w-full ">
        <img
          src={prompt?.image}
          alt={prompt?.title}
          className="w-full h-full hover:scale-110 transition-transform duration-300 object-cover"
        />
      </div>
      <div className="p-4 w-full flex flex-col gap-2">
        <h6 className="text-lg font-bold text-black">
          {prompt?.title?.substring(0, 30) + "..."}
        </h6>
        <p className="text-gray-600 font-inter font-medium text-sm">
          {prompt?.prompt?.substring(0, 80) + "...."}
        </p>
        <div className="flex flex-row justify-between pt-4">
          <span className=" font-inter font-medium text-sm  bg-blue-100 text-blue-400 w-fit px-2 py-1 rounded-full">
            {prompt?.category?.title}
          </span>
          <div className=" text-blue-600 font-inter text-sm md:text-base font-semibold flex items-center gap-0  md:gap-2  ">
            <span>View Prompt</span> <ChevronRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PromptCard;
