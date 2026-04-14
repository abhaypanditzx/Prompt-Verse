"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Briefcase, Home, Info, BookImage } from "lucide-react";
// import { navLinks } from "./navData";
import { sidebarLinks } from "./Sidebar/adminSidebaData";
const AdminMobileSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
     <> <Link
        href="/admin"
        className="md:flex hidden  bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 absolute text-white font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-500/50  top-2 right-2 z-50 items-center gap-x-2 "
      >
        Admin <ArrowRight />
      </Link>
    <div className="sticky top-0  w-full  z-50 md:hidden bg-white shadow-lg h-fit py-6 px-4">
      <div className="realtive">
        <button
          className="fixed top-2 right-2 z-50 "
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          {openSidebar ? (
            <X className="h-5 w-5 " />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>
      <div
        className={`fixed sm:hidden h-screen pt-16 shadow-lg border-l-2 border-gray-200 bg-white w-[80%] z-40 right-0 top-0  transition-transform duration-300 ${openSidebar ? "translate-x-0" : "translate-x-full"}`}
      >
        {sidebarLinks.map((link) => (
          <div key={link.path}>
            <Link
              onClick={() => setOpenSidebar(false)}
              href={link.path}
              className="text-black border-b px-6  focus:text-gray-900 border-gray-800 py-3 flex items-center gap-x-2  "
            >
              <link.icon className="h-5 w-5" />
              <span className="font-medium">{link.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AdminMobileSidebar;
