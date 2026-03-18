import React from 'react'

const PromptLoadingCardDisplay = () => {
  return (
           <div className="flex flex-col items-center sm:w-72 w-full h-fit shadow-xl group">
              <div className="overflow-hidden bg-gray-300 h-[200px]  rounded-t-xl   w-full "></div>
              <div className="p-4 w-full flex flex-col gap-2">
                <div className="bg-gray-300 w-full h-[30px]"></div>
                <div className="bg-gray-300 w-full h-[50px]"></div>
                <div className="flex flex-row justify-between">
                  <span className="bg-gray-300  text-sm   px-2 md:px-4 w-fit h-fit rounded-lg py-0.5 md:py-1 md:rounded-full"></span>
                  <div className=" text-blue-600 font-inter text-sm md:text-base font-semibold flex items-center gap-0  md:gap-2  ">
                    <span className="bg-gray-300 w-[100px] h-[20px]"></span>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default PromptLoadingCardDisplay