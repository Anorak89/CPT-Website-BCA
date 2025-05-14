'use client'
import "@/css/satoshi.css";
import "@/css/style.css";

import Script from 'next/script';
import { Sidebar } from "@/components/Layouts/sidebar";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Header } from "@/components/Layouts/header";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import Particles from "react-particles";
import "react"
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [open, setOpen] = useState(false);
//   return (
//   <html lang="en" suppressHydrationWarning>
//     <body>
//       <Providers>
//         <NextTopLoader showSpinner={false} />

//         <div className="flex min-h-screen">
//           <aside className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ${open ? 'w-48' : 'w-12'}`}>
//             <button className="p-2" onClick={() => setOpen(!open)}><Menu /></button>
//             <nav className="mt-8 flex flex-col space-y-4">
//               {['About','Calendar','Lessons','Competitions','Contact','News'].map(tab => (
//                 <Link key={tab} href={`/${tab.toLowerCase()}`} className="px-2 truncate hover:bg-gray-700">
//                   {open ? tab : tab[0]}
//                 </Link>
//               ))}
//             </nav>
//           </aside>

//           <div className="w-full bg-gray-2 dark:bg-[#020d1a] ml-12">
//             <Header />

//             <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
//               {children}
//             </main>
//           </div>
//         </div>
//       </Providers>
//     </body>
//   </html>
// );
// }

// export const metadata: Metadata = {
//   title: {
//     template: "%s | BCA CPT",
//     default: "BCA Competitive Programming Team",
//   },
//   description:
//     "Bergen County Academies Comeptetive Programming Team",
// };

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          strategy="beforeInteractive"
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        />
        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/vanta@latest/dist/vanta.birds.min.js"
        />
        <Providers>
          <NextTopLoader showSpinner={false} />

          <div className="flex min-h-screen">
            <Sidebar />

            <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
              <Header />

              <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
