"use client";

import Link from "next/link";
import { MenuIcon } from "./icons";
import { useSidebarContext } from "@/components/Layouts/sidebar/sidebar-context";

export function Header() {
  const { toggleSidebar } = useSidebarContext();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#0f1a3a] bg-[#0b1228] px-4 py-4 shadow-lg md:px-6 2xl:px-10">
      {/* Hamburger Menu Button fixed on the left */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 text-white hover:text-blue-400 transition-colors z-50"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="size-6" />
        </button>
      </div>

      {/* Centered Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="flex items-center">
          <div className="text-center">
            <h1 className="text-lg font-bold text-white">BCA CPT</h1>
            <p className="text-xs text-blue-300">Competitive Programming Team</p>
          </div>
        </Link>
      </div>

      {/* Empty div for spacing */}
      <div className="w-10"></div>
    </header>
  );
}
