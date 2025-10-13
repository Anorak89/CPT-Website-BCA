import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function TablesPage() {
  return (
    <>
      <Breadcrumb pageName="Tables" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Tables</h1>
        <p className="mt-3 text-white/70">Data tables will be displayed here.</p>
      </div>
    </>
  );
}