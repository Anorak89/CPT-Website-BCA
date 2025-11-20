import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export default function ContactPage() {
  return (
    <>
      <Breadcrumb pageName="Contact Us" />
      <div className="rounded-[10px] bg-[#0b1228] p-6 shadow-1 border border-[#0f1a3a]">
        <h1 className="text-2xl font-bold text-white">Contact Us</h1>
        <p className="mt-3 text-white/70">Get in touch with the CPT team.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-white">Social Links</h3>
            <div className="mt-3 space-y-2">
              <a href="https://discord.gg/bca-cpt" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">Discord Server</a>
              <a href="https://github.com/BCA-CPT" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">GitHub Organization</a>
              <a href="https://www.instagram.com/bca.cpt" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Meeting Info</h3>
            <div className="mt-3 space-y-1 text-white/70">
              <p>Time: Tuesdays 4:15-5:00 PM</p>
              <p>Location: Room 138</p>
              <p>Email: <a href="mailto:kunpar27@bergen.org" className="text-primary hover:underline">kunpar27@bergen.org</a> or <a href="mailto:bozsha27@bergen.org" className="text-primary hover:underline">bozsha27@bergen.org</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}