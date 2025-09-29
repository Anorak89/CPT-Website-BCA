import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

export default function CompetitionsPage() {
  return (
    <>
      <Breadcrumb pageName="Competitions" />
      <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <h1 className="text-2xl font-bold text-dark dark:text-white">Competitions We Join</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-lg border border-stroke p-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">USACO</h3>
            <p className="mt-1 text-sm text-dark-5 dark:text-dark-6">Monthly contests from Bronze to Platinum.</p>
            <Link href="https://usaco.org" className="mt-2 inline-block text-primary hover:underline">usaco.org</Link>
          </div>
          <div className="rounded-lg border border-stroke p-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">ACSL</h3>
            <p className="mt-1 text-sm text-dark-5 dark:text-dark-6">Algorithmic and CS theory challenges.</p>
            <Link href="https://www.acsl.org" className="mt-2 inline-block text-primary hover:underline">acsl.org</Link>
          </div>
          <div className="rounded-lg border border-stroke p-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">Codeforces</h3>
            <p className="mt-1 text-sm text-dark-5 dark:text-dark-6">Frequent rounds for all levels.</p>
            <Link href="https://codeforces.com" className="mt-2 inline-block text-primary hover:underline">codeforces.com</Link>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-semibold text-dark dark:text-white">Study Materials</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-dark-5 dark:text-dark-6">
          <li>
            <Link href="https://cp-algorithms.com" className="text-primary hover:underline">CP-Algorithms</Link>
          </li>
          <li>
            <Link href="https://usaco.guide" className="text-primary hover:underline">USACO Guide</Link>
          </li>
          <li>
            <Link href="https://cses.fi/problemset/" className="text-primary hover:underline">CSES Problem Set</Link>
          </li>
        </ul>
      </div>
    </>
  );
}


