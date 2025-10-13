import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function CompetitionsPage() {
  return (
    <>
      <Breadcrumb pageName="Competitions" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Competitions</h1>
        <p className="mt-3 text-white/70">Contest schedules and results.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">USACO</h3>
            <p className="mt-1 text-sm text-white/70">USA Computing Olympiad contests</p>
          </div>
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">ACSL</h3>
            <p className="mt-1 text-sm text-white/70">American Computer Science League</p>
          </div>
        </div>
      </div>
    </>
  );
}