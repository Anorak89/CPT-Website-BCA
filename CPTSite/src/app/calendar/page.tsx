import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CalendarBox from "@/components/CalenderBox";
import { loadPublicJson } from "@/lib/server/loadPublicJson";

type EventItem = {
  title: string;
  date: string; // ISO string
  location?: string;
  zoom?: string;
  description?: string;
};

export default async function CalendarPage() {
  const events = await loadPublicJson<EventItem[]>("events.json");
  return (
    <>
      <Breadcrumb pageName="Calendar" />
      <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <h1 className="text-2xl font-bold text-dark dark:text-white">Upcoming Events</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {events.map((e) => (
            <div key={e.title + e.date} className="rounded-lg border border-stroke p-4 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">{e.title}</h3>
              <p className="text-sm text-dark-4 dark:text-dark-6">{new Date(e.date).toLocaleString()}</p>
              {e.location && <p className="mt-1 text-sm text-dark-5 dark:text-dark-6">{e.location}</p>}
              {e.description && <p className="mt-2 text-dark-5 dark:text-dark-6">{e.description}</p>}
              <div className="mt-2">
                {e.zoom && (
                  <a href={e.zoom} target="_blank" rel="noreferrer" className="text-primary hover:underline">Zoom Link</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Existing calendar component below if you want the interactive view */}
      <div className="mt-6">
        <CalendarBox />
      </div>
    </>
  );
}
