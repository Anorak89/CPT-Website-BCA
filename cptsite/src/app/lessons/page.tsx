"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useEffect, useState } from "react";

type Lesson = {
  title: string;
  summary: string;
  slidesUrl?: string;
  recordingUrl?: string;
};

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLessons() {
      try {
        const response = await fetch('/data/lessons.json');
        const data = await response.json();
        setLessons(data);
      } catch (error) {
        console.error('Failed to load lessons:', error);
        setLessons([]);
      } finally {
        setLoading(false);
      }
    }
    loadLessons();
  }, []);

  if (loading) {
    return (
      <>
        <Breadcrumb pageName="Lessons" />
        <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
          <h1 className="text-2xl font-bold text-white">Previous Lessons</h1>
          <p className="mt-3 text-white/70">Loading...</p>
        </div>
      </>
    );
  }
  return (
    <>
      <Breadcrumb pageName="Lessons" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Previous Lessons</h1>
        <p className="mt-3 text-white/70">Slides, notes, and recordings.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lessons.map((l) => (
            <div key={l.title} className="rounded-lg border border-[#0f1a3a] p-4">
              <h3 className="font-semibold text-white">{l.title}</h3>
              <p className="mt-1 text-sm text-white/70">{l.summary}</p>
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


