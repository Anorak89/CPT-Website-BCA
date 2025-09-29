import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumb pageName="Resources" />
      <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <h1 className="text-2xl font-bold text-dark dark:text-white">Resources</h1>
        <p className="mt-3 text-dark-5 dark:text-dark-6">Links, tutorials, and videos.</p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-dark-5 dark:text-dark-6">
          <li><Link href="https://usaco.guide" className="text-primary hover:underline">USACO Guide</Link></li>
          <li><Link href="https://neetcode.io" className="text-primary hover:underline">NeetCode (DSA practice)</Link></li>
          <li><Link href="https://cp-algorithms.com" className="text-primary hover:underline">CP-Algorithms</Link></li>
        </ul>
        <div className="mt-8 rounded-lg border border-dashed border-stroke p-6 text-dark-5 dark:border-dark-3 dark:text-dark-6">
          Video lessons coming soon.
        </div>
      </div>
    </>
  );
}


