import Link from 'next/link'
import React from 'react'

const CategoryCard = ({category}) => {
  console.log(category);
  
  return (
    <Link href={`/category/${category.slug}`} className='w-40 h-72 hover:shadow-lg  hover:-translate-y-1 transition-shadow duration-300 bg-white rounded-lg border-gray-300 border-[0.3px]   flex flex-col  p-4  items-center '>
<div className='pb-5'>
    <div className='h-44 w-32    rounded-lg border-gray-300 border-[0.3px]  '>
<img src={category.image} alt={category.name}  className='object-cover  h-full w-full'/>
</div>
</div>
<p className='text-lg font-inter  font-medium text-black text-center pb-2'>{category?.title}</p>
<p className='text-sm font-inter text-gray-400 bg-gray-100 rounded-full w-full text-center' >{category.promptCount} Prompts</p>
    </Link>
  )
}

export default CategoryCard