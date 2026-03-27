"use client"
import React,{useState,useEffect} from 'react'
import { useParams } from 'next/navigation'
import PromptCard from '../../../components/PromptCard'
import PromptLoadingCardDisplay from '../../../components/promptLoadingCardDisplay'
const CategoryPage = () => {
  const [specificCategory,setSpecificCategory] = useState([]);
  const [loading,setLoading] = useState(false)
  const {slug} = useParams();

  const getPrompts  =  async()=>{
    try {
  setLoading(true)
    const data =  await fetch(`/api/category/${slug}`);
    const res =  await data.json();
    
    setSpecificCategory(res.prompts || []);
      } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  } 

  useEffect(() => {
    getPrompts();
  }, [slug]);
 
  return (
    <div className='p-4 md:p-6 bg-[#F8F9FA]'>
      <h1 className='text-2xl font-bold text-black mb-6 capitalize'>{slug} Prompts</h1>
     <div className='flex items-center flex-wrap gap-6  w-full '>
      {
      loading ? Array(8).fill(0).map((_,index)=>(<PromptLoadingCardDisplay key={index}/>)) : specificCategory.map((prompt)=>(<PromptCard key={prompt._id} prompt={prompt}/>))
      }
     </div>
    </div>
  )
}

export default CategoryPage