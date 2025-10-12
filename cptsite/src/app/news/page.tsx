"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";

type NewsItem = { title: string; body: string; date?: string };

export default function NewsPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await fetch('/data/news.json');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Failed to load news:', error);
        setItems([]);
      } finally {
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


