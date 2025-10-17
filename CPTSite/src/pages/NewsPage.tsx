import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";

type NewsItem = {
  title: string;
  summary: string;
  date: string;
  url?: string;
};

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await fetch('/data/news.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Failed to load news:', error);
        setNews([]);
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
          <h1 className="text-2xl font-bold text-white">News</h1>
          <p className="mt-3 text-white/70">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb pageName="News" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">News</h1>
        <p className="mt-3 text-white/70">Meeting every Tuesday from 4:15 to 5 unless otherwise specified.</p>
        <br />
        <p className="mt-1 text-white/70">We may bring treats!</p>
        <div className="mt-6 space-y-4">
          {news.map((item, index) => (
            <div key={index} className="rounded-lg border border-[#0f1a3a] p-4">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-white/70">{item.summary}</p>
              <p className="mt-2 text-xs text-white/50">{item.date}</p>
              {item.url && (
                <a href={item.url} className="mt-2 inline-block text-sm text-primary hover:underline" target="_blank" rel="noreferrer">
                  Read more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}