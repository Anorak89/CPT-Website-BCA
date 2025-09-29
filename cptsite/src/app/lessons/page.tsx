import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { loadPublicJson } from "@/lib/server/loadPublicJson";

type Lesson = {
  title: string;
  summary: string;
  slidesUrl?: string;
  recordingUrl?: string;
};

export default async function LessonsPage() {
  const lessons = await loadPublicJson<Lesson[]>("lessons.json");
  return (
    <>
      <Breadcrumb pageName="Lessons" />
      <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <h1 className="text-2xl font-bold text-dark dark:text-white">Previous Lessons</h1>
        <p className="mt-3 text-dark-5 dark:text-dark-6">Slides, notes, and recordings.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lessons.map((l) => (
            <div key={l.title} className="rounded-lg border border-stroke p-4 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">{l.title}</h3>
              <p className="mt-1 text-sm text-dark-5 dark:text-dark-6">{l.summary}</p>
              <div className="mt-2 flex gap-3 text-sm">
                {l.slidesUrl && (
                  <a href={l.slidesUrl} className="text-primary hover:underline" target="_blank" rel="noreferrer">Slides</a>
                )}
                {l.recordingUrl && (
                  <a href={l.recordingUrl} className="text-primary hover:underline" target="_blank" rel="noreferrer">Recording</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


