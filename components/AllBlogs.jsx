"use client"
import React, { useState,useEffect } from 'react'
import BlogCard from './BlogCard'
const AllBlogs = () => {
    const [blogs,setBlogs]=   useState([])
    const fetchBlog =  async()=>{
        const res =  await fetch("/api/blog/all")
        const data = await res.json()
        setBlogs(data.blogs)
    }
    useEffect(() => {
        fetchBlog()
    }, [])
    console.log(blogs)
  return (
    <div>
        <h1 className='text-2xl font-bold text-center my-4'>All Blogs</h1>

        <div className='flex flex-wrap justify-center gap-4'>
            {blogs.map((blog)=>{
                return(
                    <BlogCard key={blog._id} Blog={blog}/>
                )
            })}
        </div>
    </div>
  )
}

export default AllBlogs