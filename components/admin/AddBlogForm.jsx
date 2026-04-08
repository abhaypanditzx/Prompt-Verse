"use client";
import { useState } from "react";

export default function AddBlogForm() {
  const [PreviewCoverImage, setPreviewCoverImage] = useState(null);
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    category: "",
    coverImage: null,
    blocks: [{ heading: "", prompt: "", explanation: "", image: null }],
  });
  const changeCoverImage = (e) => {
    setPreviewCoverImage(URL.createObjectURL(e.target.files[0]));
    setBlogData({
      ...blogData,
      coverImage: e.target.files[0],
    });
  };

  const handleBlockChange = (index, field, value) => {
    const updated = [...blogData.blocks];
    updated[index][field] = value;

    setBlogData({
      ...blogData,
      blocks: updated,
    });
  };

  const addBlock = () => {
    setBlogData({
      ...blogData,
      blocks: [...blogData.blocks, { heading: "", prompt: "", explanation: "", image: null }],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit hit");

    const formData = new FormData();

    formData.append("title", blogData.title);
    formData.append("description", blogData.description);
    formData.append("category", blogData.category);
    formData.append("coverImage", blogData.coverImage);
    formData.append(
      "blocks",
      JSON.stringify(
        blogData.blocks.map((b) => ({
          heading: b.heading,
          prompt: b.prompt,
          explanation: b.explanation,
        })),
      ),
    );

    blogData.blocks.forEach((block, index) => {
      formData.append(`blockImage_${index}`, block.image);
    });

    const res = await fetch("/api/admin/blog/create", {
      method: "POST",
      body: formData,
    });
    console.log(res);
  };
 const removeBlock = (index) => {
  setBlogData(prev => ({
    ...prev,
    blocks: prev.blocks.filter((_, i) => i !== index)
  }));
};

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl mx-auto bg-white shadow-lg p-4"
    >
      <div className="flex flex-col justify-center gap-4  pb-4">
        {/* upload Image and preview it  */}
        <div className="relative  h-64 overflow-hidden w-64  border-gray-800 border">
          {PreviewCoverImage ? (
            <>
              {/* cover image  */}
              <img
                src={PreviewCoverImage}
                alt="cover-image"
                className="absolute top-0 left-0 w-64 h-64 object-cover"
              />
              {/* remove cover image  */}
              <button
                type="button"
                onClick={() => setPreviewCoverImage(null)}
                className="absolute top-0 right-0 p-2 bg-red-500 text-white"
              >
                remove
              </button>
            </>
          ) : (
            <div className="absolute top-0 left-0 w-full h-full object-cover">
              {/* add  cover image  */}
              <input
                type="file"
                className="absolute top-0 left-0 w-full h-full object-cover"
                onChange={(e) => changeCoverImage(e)}
              />
            </div>
          )}
        </div>
        <input
          placeholder="Enter Blog Title"
          className="border-gray-800 border  w-full p-2"
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        />

        <textarea
          placeholder="Enter Blog Description"
          className="border-gray-800 border  w-full p-2 resize-none h-20"
          onChange={(e) =>
            setBlogData({ ...blogData, description: e.target.value })
          }
        />
        {/* select category here */}
        <select
          className="border-gray-800 border  w-full p-2"
          onChange={(e) =>
            setBlogData({ ...blogData, category: e.target.value })
          }
        >
          <option value="">Select Category</option>
          <option value="Chatgpt">Chatgpt</option>
          <option value="Gemini">Gemini</option>
          <option value="Claude">Claude</option>
          <option value="Perplexity">Perplexity</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {blogData.blocks.map((block, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-4 border-gray-800 border  w-full p-2 mb-4"
        >
          <input
            placeholder="heading"
            className="border-gray-800 border  w-full p-2"
            onChange={(e) =>
              handleBlockChange(index, "heading", e.target.value)
            }
          />

          <textarea
            placeholder="Detailed Explanation (Required for AdSense thick content)"
            className="border-gray-800 border  w-full p-2 resize-none h-24"
            onChange={(e) => handleBlockChange(index, "explanation", e.target.value)}
          />

          <textarea
            placeholder="prompt"
            className="border-gray-800 border  w-full p-2 resize-none h-20"
            onChange={(e) => handleBlockChange(index, "prompt", e.target.value)}
          />

          <input
            type="file"
            onChange={(e) =>
              handleBlockChange(index, "image", e.target.files[0])
            }
          />

          {/* remove block */}
          <button type="button" onClick={() => removeBlock(index)}
          className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-lg text-white font-semibold">
            Remove Block
          </button>
        </div>
      ))}

    <div className="flex justify-center gap-4">
      <button type="button" onClick={addBlock}
      className="bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-lg text-white font-semibold">
        Add Block
      </button>

      <button type="submit" className="bg-green-500 hover:bg-green-600 px-4 py-1.5 rounded-lg text-white font-semibold">
        Submit
      </button>
    </div>
    </form>
  );
}
