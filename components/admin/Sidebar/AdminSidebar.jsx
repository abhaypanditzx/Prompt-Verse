"use client";

import React, { useState } from "react";
import { sidebarLinks } from "./adminSidebaData";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronRight, LogOut } from "lucide-react";

const AdminSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/admin/logout", { method: "POST" });
    if (res.ok) router.push("/admin/login");
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="sm:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
      >
        <ChevronRight className={`${openSidebar ? "rotate-180" : ""}`} />
      </button>

      {/* Overlay (mobile) */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed sm:static top-0 left-0 h-screen w-64 bg-white shadow-md z-50
        transform transition-transform duration-300
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0`}
      >
        {/* Header */}
        <div className="text-xl font-bold px-6 py-6 border-b heading-font">
          Dashboard
        </div>

        {/* Links */}
        <nav className="flex flex-col mt-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setOpenSidebar(false)}
              className="px-6 py-3 flex items-center gap-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              <link.icon size={18} />
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full border-t">
          <button
            onClick={handleLogout}
            className="w-full px-6 py-3 flex items-center gap-2 hover:bg-red-50 hover:text-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

          <p className="text-center text-gray-400 text-xs py-2">
            © 2026 PromptVerse
          </p>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;