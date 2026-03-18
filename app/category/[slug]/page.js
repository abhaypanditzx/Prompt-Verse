"use client"
import React,{useState,useEffect} from 'react'
import { useParams } from 'next/navigation'
import PromptCard from '../../../components/PromptCard'
const CategoryPage = () => {
  const [specificCategory,setSpecificCategory] = useState([]);
  const {slug} = useParams();

  const getPrompts  =  async()=>{
    const data =  await fetch(`/api/category/${slug}`);
    const res =  await data.json();
    
    setSpecificCategory(res.prompts || []);
  } 

  useEffect(() => {
    getPrompts();
  }, [slug]);
 
  return (
    <div className='p-4 md:p-6'>
      <h1 className='text-2xl font-bold text-black mb-6 capitalize'>{slug} Prompts</h1>
     <div className='flex items-center flex-wrap gap-6 '>
      {specificCategory.map((prompt)=>(<PromptCard key={prompt._id} prompt={prompt}/>))}
     </div>
    </div>
  )
}

export default CategoryPage