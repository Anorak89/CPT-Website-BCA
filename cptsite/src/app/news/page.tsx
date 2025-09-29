import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { loadPublicJson } from "@/lib/server/loadPublicJson";

type NewsItem = { title: string; body: string; date?: string };

export default async function NewsPage() {
  const items = await loadPublicJson<NewsItem[]>("news.json");
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


