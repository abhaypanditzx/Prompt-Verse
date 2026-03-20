'use client'
import React, { useEffect, useState } from 'react'
import PromptLoadingCardDisplay from './promptLoadingCardDisplay'
import PromptCard from './PromptCard'
const LatestPrompt = () => {
    const [loading,setLoading]  = useState(true)
    const [prompts,setPrompts] = useState([])
    const getPrompts = async()=>{
        try {
            setLoading(true)
            const res = await fetch("/api/prompt",{
                method:"GET"
            })
            const data = await res.json()
            setPrompts(data.prompts)
            console.log(data.prompts)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getPrompts()
    },[])
  return (
    <section className="max-w-7xl mx-auto bg-gray-50 py-12 md:py-20 p-4">
      
<h1 className="text-3xl md:text-5xl heading-font text-center md:text-left  font-bold  pb-2 md:pb-4 text-black">
     Recent Prompts
</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {loading ? (
        <PromptLoadingCardDisplay/>
    ):(
        prompts?.map((item)=>(
           <PromptCard key={item._id} prompts={prompts}/>
        ))
    )}
    
</div>

    </section>
  )
}

export default LatestPrompt