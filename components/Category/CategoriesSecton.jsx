"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const CategoryCardSkeleton = dynamic(() => import("../CategorySkeleton"))
const CategoryCard = dynamic(()=> import("./CategoryCard"),{
  loading:()=> <CategoryCardSkeleton/>
})
const AdComponent = dynamic(() => import("../AdComponent"), {
  ssr: false,
});
const CategoriesSecton = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCategories = async () => {
    try {
      const res = await fetch("/api/category", {
        method: "GET"
      });
      const data = await res.json();
      setCategories(data.categories || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
<div className="w-full bg-white">

  {/* Heading */}
  <div className="flex flex-col items-center text-start p-4 md:p-8">
    <h1 className="text-3xl md:text-5xl heading-font font-bold text-black pb-2">
      Browse by Category
    </h1>
    <p className="text-gray-500 text-sm md:text-lg text-center max-w-xl">
      Find the perfect style for your next masterpiece.
    </p>
  </div>

  {/* Ad */}
  <AdComponent />

  {/* Categories */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 md:p-12 w-fit">
    {loading
      ? Array(4).fill(0).map((_, i) => (
          <CategoryCardSkeleton key={i} />
        ))
      : categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
  </div>

</div>
  );
};

export default CategoriesSecton;
