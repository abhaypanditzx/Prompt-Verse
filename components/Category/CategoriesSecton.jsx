'use client'
import React, { useState ,useEffect} from 'react'
import CategoryCard from './CategoryCard'

const CategoriesSecton = () => {
  const [Categories ,setCategories]= useState([])
  const getCategories = async () => {
  const res = await fetch("/api/category",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  });
  const data = await res.json();
  setCategories(data.categories || []);
 
}

useEffect(() => {
  getCategories();
}, []);

  return (
    <div className='w-full bg-white '>
      <div className='flex flex-col items-center p-4 md:p-8 justify-start'>
        <h1 className='text-3xl md:text-5xl font-poppins text-center md:text-left  font-bold  pb-2 md:pb-4 text-black'>
          Browse by Category
        </h1>
        <p className='text-sm font-inter md:text-lg text-center px-4 md:px-0 md:text-left  font-medium text-gray-500'>
          Find the perfect style for your next masterpiece.
        </p>
      </div>
      <div className='flex  flex-row  overflow-x-scroll items-center gap-4 p-6  md:p-12 justify-start w-full'>
        {
          Categories.map((category)=>(
            <CategoryCard
            key={category._id}
            category={category}
            />
          ))
        }
      </div>
    </div>
  )
}

export default CategoriesSecton