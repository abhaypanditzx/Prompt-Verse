"use client";

import React, { useEffect, useState } from "react";
import Loading from "../loadings/Loading";
import CategoryCard from "./categoryCard";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    setLoading(true);
    const response = await fetch("/api/category");
    const data = await response.json();
    setCategories(data.categories || []);
    console.log(data.categories);
    setLoading(false);
  };

  const handleDelete = async (categoryId) => {
    const response = await fetch(`/api/admin/category/${categoryId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setCategories((prev) => prev.filter((p) => p._id !== categoryId));
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="space-y-4">
      {loading ? (
        <Loading />
      ) : categories.length === 0 ? (
        <p>No categories found</p>
      ) : (
        categories.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default AllCategories;
