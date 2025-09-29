"use client";

import { SearchIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { Notification } from "./notification";
import { UserInfo } from "./user-info";

export function Header() {

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#0f1a3a] bg-[#0b1228] px-4 py-4 shadow-lg md:px-6 2xl:px-10">
      {/* Logo and Title */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={"/images/logo/logo-icon.svg"}
          width={40}
          height={40}
          alt="BCA CPT"
          className="rounded-lg"
        />
        <div className="hidden md:block">
          <h1 className="text-lg font-bold text-white">BCA CPT</h1>
          <p className="text-xs text-blue-300">Competitive Programming Team</p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
        <Link href="/calendar" className="text-white/80 hover:text-white transition-colors">Calendar</Link>
        <Link href="/lessons" className="text-white/80 hover:text-white transition-colors">Lessons</Link>
        <Link href="/competitions" className="text-white/80 hover:text-white transition-colors">Competitions</Link>
        <Link href="/resources" className="text-white/80 hover:text-white transition-colors">Resources</Link>
        <Link href="/news" className="text-white/80 hover:text-white transition-colors">News</Link>
        <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
      </nav>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:block relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-64 rounded-full border border-[#1b2a5a] bg-[#0f1731] text-white placeholder:text-white/40 py-2 pl-10 pr-4 outline-none transition-colors focus:border-blue-500"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
        </div>
        
        <Notification />
        <UserInfo />
      </div>
    </header>
  );
}
