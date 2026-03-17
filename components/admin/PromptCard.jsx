import React from 'react'
import { ChevronDown } from "lucide-react";
const PromptCard = ({prompt,setOpenMenu,openMenu,handleDelete,setOpenPrompt,openPrompt}) => {
  return (
 <div
            key={prompt._id}
            className="bg-white rounded-lg shadow p-4 flex gap-4 items-start relative"
          >
            {/* Image */}

            <img
              src={prompt.image}
              alt={prompt.title}
              className="h-20 w-20 object-cover rounded"
            />

            {/* Text */}

            <div className="flex-1">
              <p className="font-normal text-gray-600">
                <span className="text-black font-semibold">TITLE: </span>
                {prompt.title}
              </p>
              <p className="font-normal text-gray-600">
                <span className="text-black font-semibold">CATEGORY:</span>
                {prompt.category?.title}
              </p>

              {/* show and  hide prompt  */}
              <div className="flex items-start gap-2 pb-4 flex-col">
                <p className="text-sm text-gray-600 flex">
                  <span className="text-black font-semibold">PROMPT: </span>
                  <ChevronDown onClick={() => setOpenPrompt(openPrompt === prompt._id ? null : prompt._id)} className={` cursor-pointer hover:text-blue-500 transition-transform duration-300 ${openPrompt === prompt._id ? "rotate-180" : "rotate-0"}`} />
                </p>
                {
                  openPrompt === prompt._id &&(
                    <div className="bg-blue-100 px-4 py-2 w-full rounded-md">
                      <p>{prompt.prompt}</p>
                    </div>
                  )
                }
              </div>
              
            </div>

            {/* Menu */}

            <div className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === prompt._id ? null : prompt._id)
                }
                className="text-xl px-2"
              >
                ⋮
              </button>

              {openMenu === prompt._id && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow">
                  <button
                    onClick={() => handleDelete(prompt._id)}
                    className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
  )
}

export default PromptCard