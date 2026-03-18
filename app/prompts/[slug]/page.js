"use client"
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState,useEffect } from 'react'
import toast from 'react-hot-toast';

const PromptPage = () => {
  const {slug} = useParams();
  const [prompt,setPrompt] = useState(null)
  const [copyPrompt,setCopyPrompt] = useState(false)
const getPrompDetails =  async()=>{
  try {
    const data =  await fetch(`/api/prompt/${slug}`)
    const res = await data.json()
    console.log(res)
    setPrompt(res)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  getPrompDetails()
},[slug])

const handleCopyPrompt =async()=>{
try {
    await navigator.clipboard.writeText(prompt.prompt)
  setCopyPrompt(true)
  toast.success("Prompt Copied")
  setTimeout(()=>{
    setCopyPrompt(false)
  },2000)
} catch (error) {
  toast.error("Failed to Copy Prompt")
}
}

const previousRoutes  =  [
  {path:"/" , title:"Home"},
  {path:"/prompts" , title:"Prompt"},
  {path:`/prompts/${slug}` , title:slug},
]
  return (
<div className='p-4 md:p-6 bg-[#F8F9FA]'>
{prompt && (
<div className='flex flex-col '>
<div className='flex flex-row gap-2 text-gray-500 py-8'>
  {/* routing links */}
{
  previousRoutes.map((link,index)=>(
   <>
    <Link href={link.path} key={index} className='text-sm font-inter '>
      {
      link.title.length>20 ? link.title.substring(0,40)+"...." : link.title
      }
    </Link>
    <span>
      <ChevronRight className='h-5 w-5 '/>
    </span>
   </>
  ))
}
</div>
<div className='md:pb-8 pb-4 border-b border-gray-200'>
<h1 className='md:text-3xl text-2xl font-poppins font-bold '>{prompt?.title}</h1>
<p className=' font-inter font-semibold text-sm md:text-base bg-blue-100 text-blue-500 w-fit px-2 py-1 rounded-full'>{prompt?.category?.title}</p>
</div>


    <div className='flex flex-row gap-4 md:pt-8 pt-4'>
  <div className='md:w-[360px] w-full rounded-xl  overflow-hidden   ' >
    <img src={prompt?.image} alt={prompt?.title} className='w-full h-full object-cover' />
  </div>
  <div className='md:w-[360px] w-full rounded-xl  overflow-hidden shadow-xl bg-white p-3 ' >
    <button onClick={()=>handleCopyPrompt()} 
    className={`px-4 py-1 text-white font-inter font-semibold rounded-lg ${copyPrompt ? "bg-green-500" : "bg-blue-500"}`}>{copyPrompt ? "Copied" : "Copy"}</button>
   <div className=' p-4 bg-zinc-100 rounded-xl mt-4'>
     <p>{prompt?.prompt}</p>
  </div>
  </div>
  </div>
</div>
)}
    </div>
  )
}

export default PromptPage
