import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function CompetitionsPage() {
  return (
    <>
      <Breadcrumb pageName="Competitions" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Competitions</h1>
        <p className="mt-3 text-white/70">Contest schedules and results.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a href="https://usaco.org" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#0f1a3a] p-4 hover:border-blue-500 transition-colors">
            <h3 className="font-semibold text-white">USACO</h3>
            <p className="mt-1 text-sm text-white/70">USA Computing Olympiad contests</p>
          </a>
          <a href="https://www.acsl.org" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#0f1a3a] p-4 hover:border-blue-500 transition-colors">
            <h3 className="font-semibold text-white">ACSL</h3>
            <p className="mt-1 text-sm text-white/70">American Computer Science League</p>
          </a>
          <a href="https://codeforces.com/contests" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#0f1a3a] p-4 hover:border-blue-500 transition-colors">
            <h3 className="font-semibold text-white">Codeforces</h3>
            <p className="mt-1 text-sm text-white/70">Regular rated contests and practice</p>
          </a>
          <a href="https://atcoder.jp/contests/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#0f1a3a] p-4 hover:border-blue-500 transition-colors">
            <h3 className="font-semibold text-white">AtCoder</h3>
            <p className="mt-1 text-sm text-white/70">Weekly beginner-friendly contests</p>
          </a>
        </div>
      </div>
    </>
  );
}