'use client'
import React, { useEffect, useState } from 'react'
import PromptLoadingCardDisplay from './promptLoadingCardDisplay'
import CategoryCard from './Category/CategoryCard'
const LatestPrompt = () => {
    const [loading,setLoading]  = useState(true)
    const [prompt,setPrompt] = useState(null)
    const getPrompt = async()=>{
        try {
            setLoading(true)
            const res = await fetch("/api/prompt",{
                method:"GET"
            })
            const data = await res.json()
            setPrompt(data.prompt)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getPrompt()
    },[])
  return (
    <section className="max-w-7xl mx-auto bg-gray-50 py-12 md:py-20 p-4">
      
<h1 className="text-3xl md:text-5xl heading-font text-center md:text-left  font-bold  pb-2 md:pb-4 text-black">
     Latest from Blog
</h1>
<div>
    
        <img src={prompt?.image} alt={prompt?.title} className='h-full w-full'/>
    
</div>

    </section>
  )
}

export default LatestPrompt