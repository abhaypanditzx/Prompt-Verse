import { Menu, X } from 'lucide-react';
import React from 'react'

const MobileNavbar = ({openSidebar,setOpenSidebar}) => {
  return (
    <div className="sm:hidden flex items-center justify-between px-3 text-black bg-white h-20">
        <div className="logo text-black border-black border-2 p-2  rounded-full">
          P
        </div>
        {/* toggle button  sidebar open/close */}
        <div className="absolute z-50 top-5 right-5">
          <button
            className={` text-black h-6 w-6 ${openSidebar ? "hidden" : "block"}`}
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <Menu />
          </button>
          <button
            className={` text-black h-6 w-6 ${openSidebar ? "block" : "hidden"}`}
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <X />
          </button>
        </div>
      </div>
  )
}

export default MobileNavbar;