"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// No imports needed for external links
import { useEffect } from "react";

export default function ResourcesPage() {
  useEffect(() => {
    console.log('🔍 [RESOURCES PAGE DEBUG] Resources page component mounted');
    console.log('🔍 [RESOURCES PAGE DEBUG] Current URL:', window.location.href);
    console.log('🔍 [RESOURCES PAGE DEBUG] Current pathname:', window.location.pathname);
    console.log('🔍 [RESOURCES PAGE DEBUG] Resources page rendered successfully');
  }, []);
  return (
    <>
      <Breadcrumb pageName="Resources" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Resources</h1>
        <p className="mt-3 text-white/70">Links, tutorials, and videos.</p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-white/70">
          <li><a href="https://usaco.guide" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">USACO Guide</a></li>
          <li><a href="https://neetcode.io" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">NeetCode (DSA practice)</a></li>
          <li><a href="https://cp-algorithms.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">CP-Algorithms</a></li>
        </ul>
        <div className="mt-8 rounded-lg border border-dashed border-[#0f1a3a] p-6 text-white/70">
          Video lessons coming soon.
        </div>
      </div>
    </>
  );
}


