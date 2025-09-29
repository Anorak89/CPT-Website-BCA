import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Breadcrumb pageName="Contact" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Get in Touch</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">Discord</h3>
            <Link href="#" className="mt-1 inline-block text-blue-400 hover:underline">Join our server</Link>
          </div>
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">Email</h3>
            <a href="mailto:bcacpt@example.com" className="mt-1 inline-block text-blue-400 hover:underline">bcacpt@example.com</a>
          </div>
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">Instagram</h3>
            <Link href="#" className="mt-1 inline-block text-blue-400 hover:underline">@bca.cpt</Link>
          </div>
          <div className="rounded-lg border border-[#0f1a3a] p-4">
            <h3 className="font-semibold text-white">TikTok</h3>
            <Link href="#" className="mt-1 inline-block text-blue-400 hover:underline">@bca.cpt</Link>
          </div>
        </div>
      </div>
    </>
  );
}


