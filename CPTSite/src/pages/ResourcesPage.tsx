import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumb pageName="Resources" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Resources</h1>
        <p className="mt-3 text-white/70">Learning materials and practice problems.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">USACO Guide</h3>
            <p className="mt-1 text-sm text-white/70">Comprehensive training materials</p>
          </div>
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">Codeforces</h3>
            <p className="mt-1 text-sm text-white/70">Practice problems and contests</p>
          </div>
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">AtCoder</h3>
            <p className="mt-1 text-sm text-white/70">Educational contest platform</p>
          </div>
        </div>
      </div>
    </>
  );
}