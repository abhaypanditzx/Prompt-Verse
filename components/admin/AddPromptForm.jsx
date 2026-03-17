"use client";

import React, { useEffect, useState } from "react";
import {toast} from "react-hot-toast"
const AddPromptForm = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await fetch("/api/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data =  await response.json()
    setCategories(data.categories)
    if(category === ""){
      setCategory(data.categories[0]._id)
    }
    
  };
  useEffect(() => {
    getCategories();
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt || !image || !title || !category) {
      toast.error("all fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("image", image);
    formData.append("title", title);
    formData.append("category", category);

    const response = await fetch("/api/prompt", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if(data.success){
      setPrompt("");
      setImage(null);
      setPreview(null);
      setTitle("");
      setCategory("");
      toast.success(data.message)
    }
    else{
      toast.error(data.error)
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  console.log(category)

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-[320px] sm:w-[500px] lg:w-[600px] shadow-lg flex flex-col gap-5"
      >
        <h2 className="text-2xl font-semibold text-center">Add Prompt</h2>

        {/* Image Upload */}

        <div className="h-48 w-48 border-2 border-dashed border-gray-300 rounded-lg relative flex justify-center items-center mx-auto cursor-pointer hover:border-blue-400 transition">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="h-full w-full object-cover rounded-lg"
            />
          ) : (
            <p className="text-gray-400">Click to upload</p>
          )}

          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageChange}
          />
        </div>

        <select 
        className="bg-blue-100"
        value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            
            <option key={cat._id} value={cat._id}>
              {cat.title}
            </option>
          ))}
        </select>
        {/* Title */}

        <div>
          <label className="text-sm text-gray-600">Title</label>

          <input
            type="text"
            placeholder="Prompt title"
            className="border border-gray-300 rounded-md p-2 h-10 w-full mt-1 focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Prompt */}

        <div>
          <label className="text-sm text-gray-600">Prompt</label>

          <textarea
            placeholder="Enter prompt"
            className="border border-gray-300 rounded-md p-2 h-40 w-full resize-none mt-1 focus:outline-none focus:border-blue-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-3 font-semibold w-full rounded-md transition"
        >
          Add Prompt
        </button>
      </form>
    </div>
  );
};

export default AddPromptForm;
