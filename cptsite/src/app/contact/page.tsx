import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Breadcrumb pageName="Contact" />
      <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <h1 className="text-2xl font-bold text-dark dark:text-white">Get in Touch</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-lg border border-stroke p-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">Discord</h3>
            <Link href="#" className="mt-1 inline-block text-primary hover:underline">Join our server</Link>
          </div>
          <div className="rounded-lg border border-stroke p-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">Email</h3>
            <a href="mailto:bcacpt@example.com" className="mt-1 inline-block text-primary hover:underline">bcacpt@example.com</a>
          </div>
          <div className="rounded-lg border border-stroke p-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">Instagram</h3>
            <Link href="#" className="mt-1 inline-block text-primary hover:underline">@bca.cpt</Link>
          </div>
          <div className="rounded-lg border border-stroke p-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">TikTok</h3>
            <Link href="#" className="mt-1 inline-block text-primary hover:underline">@bca.cpt</Link>
          </div>
        </div>
      </div>
    </>
  );
}


