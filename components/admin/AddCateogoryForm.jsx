"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const AddcateogryForm = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image) {
      alert("Please enter cateogry and image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);

    const response = await fetch("/api/category", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }

    setImage(null);
    setPreview(null);
    setTitle("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-[320px] sm:w-[500px] lg:w-[600px] shadow-lg flex flex-col gap-5"
      >
        <h2 className="text-2xl font-semibold text-center">Add cateogry</h2>

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

        {/* Title */}

        <div>
          <label className="text-sm text-gray-600">Title</label>

          <input
            type="text"
            placeholder="cateogry title"
            className="border border-gray-300 rounded-md p-2 h-10 w-full mt-1 focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* Button */}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-3 font-semibold w-full rounded-md transition"
        >
          Add cateogry
        </button>
      </form>
    </div>
  );
};

export default AddcateogryForm;
