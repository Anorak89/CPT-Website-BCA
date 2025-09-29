import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumb pageName="Resources" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Resources</h1>
        <p className="mt-3 text-white/70">Links, tutorials, and videos.</p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-white/70">
          <li><Link href="https://usaco.guide" className="text-blue-400 hover:underline">USACO Guide</Link></li>
          <li><Link href="https://neetcode.io" className="text-blue-400 hover:underline">NeetCode (DSA practice)</Link></li>
          <li><Link href="https://cp-algorithms.com" className="text-blue-400 hover:underline">CP-Algorithms</Link></li>
        </ul>
        <div className="mt-8 rounded-lg border border-dashed border-[#0f1a3a] p-6 text-white/70">
          Video lessons coming soon.
        </div>
      </div>
    </>
  );
}


