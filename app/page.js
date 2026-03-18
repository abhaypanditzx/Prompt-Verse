'use client'
import { useState,useEffect } from "react";
import Hero from "../components/Hero";
import CategoriesSecton from "../components/Category/CategoriesSecton";
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
 <div className="flex min-h-screen w-full items-center flex-col justify-center bg-[#F8F9FA] font-sans ">
     <section>
      <Hero/>
     </section>
      <section className="w-full">
        <CategoriesSecton/>
      </section>
    </div>
  );
}
