"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";

type NewsItem = { title: string; body: string; date?: string };

export default function NewsPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('🔍 [NEWS PAGE DEBUG] Component mounted');
    console.log('🔍 [NEWS PAGE DEBUG] Current URL:', window.location.href);
    console.log('🔍 [NEWS PAGE DEBUG] Current pathname:', window.location.pathname);
    console.log('🔍 [NEWS PAGE DEBUG] Starting data fetch...');

    async function loadNews() {
      try {
        const fetchUrl = '/data/news.json';
        console.log('🔍 [NEWS PAGE DEBUG] Fetching data from:', fetchUrl);
        console.log('🔍 [NEWS PAGE DEBUG] Base URL:', window.location.origin);
        console.log('🔍 [NEWS PAGE DEBUG] Full fetch URL:', window.location.origin + fetchUrl);
        
        const response = await fetch(fetchUrl);
        
        console.log('🔍 [NEWS PAGE DEBUG] Fetch response status:', response.status);
        console.log('🔍 [NEWS PAGE DEBUG] Fetch response ok:', response.ok);
        console.log('🔍 [NEWS PAGE DEBUG] Fetch response headers:', Object.fromEntries(response.headers.entries()));
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('🔍 [NEWS PAGE DEBUG] Loaded news data:', data);
        console.log('🔍 [NEWS PAGE DEBUG] Number of news items:', data.length);
        setItems(data);
      } catch (error) {
        console.error('❌ [NEWS PAGE DEBUG] Failed to load news:', error);
        console.error('❌ [NEWS PAGE DEBUG] Error type:', error instanceof Error ? error.constructor.name : typeof error);
        console.error('❌ [NEWS PAGE DEBUG] Error message:', error instanceof Error ? error.message : String(error));
        setItems([]);
      } finally {
        console.log('🔍 [NEWS PAGE DEBUG] Data loading completed');
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  if (loading) {
    return (
      <>
        <Breadcrumb pageName="News" />
        <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
          <h1 className="text-2xl font-bold text-white">Important News</h1>
          <p className="mt-3 text-white/70">Loading...</p>
        </div>
      </>
    );
  }
  return (
    <>
      <Breadcrumb pageName="News" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Important News</h1>
        <div className="mt-6 space-y-4">
          {items.map((n) => (
            <div key={n.title} className="rounded-lg border border-[#0f1a3a] p-4">
              <h3 className="font-semibold text-white">{n.title}</h3>
              {n.date && <p className="text-xs text-white/60">{n.date}</p>}
              <p className="mt-1 text-white/70">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


