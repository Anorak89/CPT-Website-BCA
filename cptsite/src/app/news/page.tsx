import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { loadPublicJson } from "@/lib/server/loadPublicJson";

type NewsItem = { title: string; body: string; date?: string };

export default async function NewsPage() {
  const items = await loadPublicJson<NewsItem[]>("news.json");
  return (
    <>
      <Breadcrumb pageName="News" />
      <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <h1 className="text-2xl font-bold text-dark dark:text-white">Important News</h1>
        <div className="mt-6 space-y-4">
          {items.map((n) => (
            <div key={n.title} className="rounded-lg border border-stroke p-4 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">{n.title}</h3>
              {n.date && <p className="text-xs text-dark-4 dark:text-dark-6">{n.date}</p>}
              <p className="mt-1 text-dark-5 dark:text-dark-6">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


