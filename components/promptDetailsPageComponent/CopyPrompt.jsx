import React from 'react'
import { Copy,Check } from 'lucide-react'
const CopyPrompt = ({prompt,copyPrompt,handleCopyPrompt}) => {
  return (
            <div className="md:w-[360px] w-full rounded-xl  overflow-hidden shadow-xl bg-white p-3 ">
              <div className='flex  justify-between px-4 py-2'>
                
                <h3 className='font-inter font-semibold text-lg flex flex-row items-center gap-2'>
                  <div className='h-full w-[5px] bg-blue-500'></div>
                  <span>
                    Prompt
                  </span>
                </h3>
              <button
                onClick={() => handleCopyPrompt()}
                className={`px-4 py-1 text-white font-inter font-semibold cursor-pointer rounded-lg ${copyPrompt ? "bg-green-500" : "bg-blue-500"}`}
                >
                {copyPrompt ? <div className="flex flex-row items-center gap-2">
                  <Check className='h-5 w-5'/> Copied
                </div>:
                <div className="flex flex-row items-center gap-2">
                  <Copy className='h-5 w-5'/> Copy
                </div>
                }
              </button>
                </div>
              <div className=" p-4 bg-zinc-100 rounded-xl mt-4">
                <p>{prompt?.prompt}</p>
              </div>
            </div>
  )
}

export default CopyPrompt