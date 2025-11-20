"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// No imports needed for external links
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    console.log('🔍 [CONTACT PAGE DEBUG] Contact page component mounted');
    console.log('🔍 [CONTACT PAGE DEBUG] Current URL:', window.location.href);
    console.log('🔍 [CONTACT PAGE DEBUG] Current pathname:', window.location.pathname);
    console.log('🔍 [CONTACT PAGE DEBUG] Contact page rendered successfully');
  }, []);
  return (
    <>
      <Breadcrumb pageName="Contact" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Get in Touch</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">Discord</h3>
            <a href="https://discord.gg/bca-cpt" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-blue-400 hover:underline">Join our server</a>
          </div>
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">Email</h3>
            <a href="mailto:kunpar27@bergen.org" className="mt-1 inline-block text-blue-400 hover:underline">kunpar27@bergen.org</a>
          </div>
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">Instagram</h3>
            <a href="https://www.instagram.com/bca.cpt" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-blue-400 hover:underline">@bca.cpt</a>
          </div>
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">TikTok</h3>
            <a href="https://www.tiktok.com/@bca.cpt" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-blue-400 hover:underline">@bca.cpt</a>
          </div>
        </div>
      </div>
    </>
  );
}


