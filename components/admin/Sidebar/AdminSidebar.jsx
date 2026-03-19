"use client";

import React, { useState } from "react";
import { sidebarLinks } from "./adminSidebaData";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronRight, LogOut } from "lucide-react";

const AdminSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/admin/logout", {
      method: "POST",
    });

    if (response.ok) {
      router.push("/admin/login");
    }
  };
  console.log("isopen", openSidebar);

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}

      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="absolute top-4 left-4 z-50 sm:hidden"
      >
        <ChevronRight className={`${openSidebar ? "rotate-180" : ""}`} />
      </button>

      {/* Sidebar */}

      <div
        className={`fixed sm:static  top-0 left-0 h-screen w-64 z-40  bg-white text-gray-800 shadow-md transition-transform duration-300
        ${openSidebar ? "translate-x-0" : "-translate-x-full"} 
        sm:translate-x-0`}
      >
        {/* Title */}

        <div className="text-2xl font-bold py-8 px-6 border-b heading-font">
          DASHBOARD
        </div>

        {/* Links */}

        <div className="flex flex-col">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setOpenSidebar(false)}
              className="px-6 py-4 flex gap-x-2 items-center  hover:bg-blue-500/10 transition"
            >
              <link.icon size={18} />

              <span >{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Footer */}

        <div className="absolute bottom-0 left-0 w-full">
          <button
            onClick={handleLogout}
            className="px-6 py-4 flex items-center gap-2 w-full hover:bg-red-50 hover:text-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

          <p className="text-center text-gray-400 text-sm pb-4">
            © 2026 PromptVerse
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
