"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { navLinks } from "./navData";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  console.log(openDropdown);
  return (
    <div className="sticky top-0 left-0 z-50">
      {/* big screen */}
      <div className="sm:flex hidden items-center justify-between   border-b-2 border-gray-200  px-22 bg-white h-20">
        <div className="logo text-black border-black border-2 p-2  rounded-full">
          P
        </div>
        <div className="relative">
          <div className="max-w-7xl  flex items-center gap-x-10 ">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="flex items-center gap-1 text-gray-900 font-medium hover:text-blue-500"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* small screen  */}

      <MobileNavbar
       setOpenSidebar={setOpenSidebar}
        navLinks={navLinks}
        openSidebar={openSidebar}/>
      <div
        onClick={() => setOpenSidebar(false)}
        className={`sm:hidden ${openSidebar ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity duration-150 inset-0 absolute top-0 left-0 h-screen w-screen bg-black`}
      ></div>
      <Sidebar
        setOpenSidebar={setOpenSidebar}
        navLinks={navLinks}
        openSidebar={openSidebar}
      />
    </div>
  );
};

export default Navbar;
