"use client"
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';
import React,{useState,useEffect} from 'react'

const AllBlogs = () => {
    const [blogs,setBlogs]=  useState([]);
    const [loading,setLoading] = useState(true);
    const [OptionsVisible,setOptionsVisible] = useState(null);
const blogImageStyle = {
  overflow: "hidden",
  borderRadius: "100%",
  height: "50px",
  width: "50px"
};
const handleDelete =async(id)=>{
try {
    const res =  await fetch(`/api/admin/blog/delete/${id}`,{
        method:"DELETE"
    })
    const data = await res.json();
    if(data.success){
        getAllBlogs();
    }
} catch (error) {
    console.error(error)
}
}
    const getAllBlogs=  async()=>{
        try {
            const res =  await fetch("/api/blog/all");
            const data = await res.json();
            if(data.success){
                setBlogs(data.blogs);
            }
        } catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        getAllBlogs()
    },[])
    return (
    <div>
        <h1>All Blogs</h1>
        {loading ? (
            <div>Loading...</div>
        ) : (
<div className="flex flex-col gap-3">
  {blogs.map((blog) => (
    <div
      key={blog._id}
      className="flex items-center justify-between gap-4 relative bg-white rounded-xl p-3 shadow-sm border hover:shadow-md transition"
    >
      
     <div className='flex flex-col sm:flex-row items-center gap-4'>
       <div style={blogImageStyle}>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className='w-full h-full object'
        />
      </div>
      <button onClick={() => setOptionsVisible(OptionsVisible === blog._id ? null : blog._id)}>
      <Ellipsis className={` absolute top-2 right-2 `}/>
      </button>
    <button className={`bg-red-500  transition-all duration-300 text-xs text-white px-2 py-1 rounded-lg absolute -right-2 -top-5 ${OptionsVisible ===blog._id?"block":"hidden"}`} onClick={()=>handleDelete(blog._id)}>Delete</button>


      <Link href={`/blog/${blog.slug}`} className="flex flex-col">
        <h1 className="font-semibold text-gray-800 leading-tight">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500">
          /blog/{blog.slug}
        </p>
      </Link>
     </div>
      


    </div>
  ))}
</div>
        )}
    </div>
  )
}

export default AllBlogs