"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import Loading from "../Loading";
const AllPrompts = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [prompts, setPrompts] = useState([]);
  const [openPrompt, setOpenPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const getPrompts = async () => {
    setLoading(true);
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPrompts(data.prompts || []);
    setLoading(false);
  };

  const handleDelete = async (promptId) => {
    const response = await fetch(`/api/prompt/delete/${promptId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setPrompts((prev) => prev.filter((p) => p._id !== promptId));
    }
  };

  useEffect(() => {
    getPrompts();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold text-center [font-family:var(--heading-font)]">
        All Prompts
      </h1>

      {loading ? (
        <Loading />
      ) : prompts.length > 0 ? (
        prompts.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            setOpenMenu={setOpenMenu}
            openMenu={openMenu}
            handleDelete={handleDelete}
            setOpenPrompt={setOpenPrompt}
            openPrompt={openPrompt}
          />
        ))
      ) : (
        <p>No prompts found</p>
      )}
    </div>
  );
};

export default AllPrompts;
