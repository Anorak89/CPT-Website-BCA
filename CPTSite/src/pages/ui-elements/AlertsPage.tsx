import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function AlertsPage() {
  return (
    <>
      <Breadcrumb pageName="Alerts" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Alerts</h1>
        <p className="mt-3 text-white/70">Alert components will be displayed here.</p>
      </div>
    </>
  );
}