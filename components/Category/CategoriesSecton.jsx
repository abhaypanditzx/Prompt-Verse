"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const CategoriesSecton = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const res = await fetch("/api/category", {
        method: "GET"
      });
      const data = await res.json();
      setCategories(data.categories || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

 
  return (


  <div className={`flex flex-row bg-white/60 backdrop-blur-md w-full gap-6 p-4 md:p-6 sticky md:top-0  top-20 z-40 `}>
    {
       categories.map((category) => (
        <Link className="bg-white rounded-full shadow-md py-2 px-6 font-semibold border-gray-200 hover:scale-110    transform-all duration-300 " key={category._id} href={`/category/${category.slug}`}>
          {category.title}
        </Link>
        ))}
  </div>

  );
};

export default CategoriesSecton;
