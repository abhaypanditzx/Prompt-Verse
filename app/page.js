'use client'
import { useState,useEffect } from "react";
export default function Home() {
   const [allPrompts, setAllPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const res = await fetch("/api/prompt");

        const data = await res.json();
        console.log(data)

        setAllPrompts(data.prompts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPrompts();
  }, []);
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
     <div>
        {allPrompts.map((prompt) => {
          return (
            <div key={prompt._id}>
              <p>{prompt.prompt}</p>
              <img src={prompt.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
