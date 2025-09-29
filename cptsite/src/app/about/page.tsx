import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function AboutPage() {
  return (
    <>
      <Breadcrumb pageName="About Us" />
      <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-dark dark:text-white">BCA Competitive Programming Team</h1>
            <p className="mt-4 text-dark-5 dark:text-dark-6">
              Our purpose is to grow a welcoming community around algorithmic problem solving—teaching
              fundamentals, practicing together, and competing at local and national contests.
            </p>
            <div className="mt-6 space-y-2 text-dark-5 dark:text-dark-6">
              <p><span className="font-semibold text-dark dark:text-white">Location:</span> Bergen County Academies</p>
              <p><span className="font-semibold text-dark dark:text-white">Founded:</span> 20XX</p>
              <p><span className="font-semibold text-dark dark:text-white">Focus:</span> USACO, ACSL, Codeforces, ICPC-style training</p>
            </div>
          </div>
          <div className="rounded-xl border border-stroke p-6 dark:border-dark-3">
            <h2 className="text-xl font-semibold text-dark dark:text-white">Accolades</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-dark-5 dark:text-dark-6">
              <li>USACO promotions and medal finishes</li>
              <li>Top placements at regional contests</li>
              <li>Strong performance in ACSL divisions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}


