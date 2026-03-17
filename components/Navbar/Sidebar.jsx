'use client'
import React from "react";
import Link from "next/link";
import { navLinks } from "./navData";
const Sidebar = ({ openSidebar,setOpenSidebar}) => {
  return (
    <div
      className={`fixed sm:hidden h-screen pt-16 bg-white w-[80%] right-0 top-0  transition-transform duration-300 ${openSidebar ? "translate-x-0" : "translate-x-full"}`}
    >

      {navLinks.map((link) => (
        <div key={link.path}>
          <Link
          onClick={()=>setOpenSidebar(false)}
            href={link.path}
            className="text-black border-b px-6  focus:text-gray-900 border-gray-800 py-3 flex items-center gap-x-2  "
          >
            <link.icon  className="h-5 w-5"/>
            <span className="font-medium">{link.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
