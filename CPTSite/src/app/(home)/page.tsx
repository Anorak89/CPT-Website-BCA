'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

function AnimatedText() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: [
        'BCA Competitive Programming Team',
        'Code. Compete. Collaborate.',
        'USACO • ACSL • Codeforces',
        'Beginner to Advanced – All Welcome',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current!, options);
    return () => typed.destroy();
  }, []);

  return (
    <div className="inline-block text-center">
      <span
        ref={typedRef}
        className="text-4xl md:text-6xl font-bold text-white blurry"
      ></span>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    }, { threshold: 0.15 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#0b1228] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full bg-gradient-to-b from-[#030712] via-[#0a1022] to-[#0b1228]">
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <AnimatedText />
          <p className="mt-6 text-white/80 max-w-2xl">
            Bergen County Academies Competitive Programming Team
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#join"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Join CPT
            </a>
            <Link
              to="/about"
              className="rounded-lg border border-white/30 px-5 py-2.5 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <a
            href="#about"
            className="absolute bottom-6 text-white/70 hover:text-white"
          >
            Scroll ↓
          </a>
        </div>
      </div>
      {/* Sections */}
      <section id="join" data-reveal className="reveal relative mx-auto max-w-screen-2xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-white">How to Join</h2>
        <p className="mt-4 max-w-3xl text-white/70">
          Come to our weekly meetings, introduce yourself on Discord, and sign up for upcoming competitions.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/resources" className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition-colors">Resources</Link>
          <Link to="/calendar" className="rounded-md border border-white/20 px-4 py-2 font-medium text-white hover:bg-white/10 transition-colors">Calendar</Link>
          <Link to="/contact" className="rounded-md border border-white/20 px-4 py-2 font-medium text-white hover:bg-white/10 transition-colors">Contact</Link>
        </div>
      </section>

      <section id="about" data-reveal className="reveal relative mx-auto max-w-screen-2xl px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">About Us</h2>
            <p className="mt-4 text-white/70">
              We are BCA's community for algorithmic problem solving: learning, practicing, and competing together.
            </p>
            <div className="mt-6">
              <Link to="/about" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">Read more →</Link>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <ul className="space-y-2 text-white/70">
              <li>• Founded: 2018</li>
              <li>• Location: Bergen County Academies</li>
              <li>• Focus: USACO, ACSL, Codeforces, ICPC-style</li>
              <li>• Members from beginner to advanced</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="competitions" data-reveal className="reveal relative mx-auto max-w-screen-2xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-white">Competitions</h2>
        <p className="mt-4 max-w-3xl text-white/70">
          We regularly participate in USACO, ACSL, Codeforces rounds, and local contests.
        </p>
        <div className="mt-6">
          <Link to="/competitions" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">Competition details →</Link>
        </div>
      </section>

      <section id="lessons" data-reveal className="reveal relative mx-auto max-w-screen-2xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-white">Previous Lessons</h2>
        <p className="mt-4 max-w-3xl text-white/70">
          Browse slides, notes, and recordings from prior meetings to learn at your pace.
        </p>
        <div className="mt-6">
          <Link to="/lessons" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">View lessons →</Link>
        </div>
      </section>

      <section id="contact" data-reveal className="reveal relative mx-auto max-w-screen-2xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-white">Contact & Socials</h2>
        <p className="mt-4 max-w-3xl text-white/70">
          Join our community and stay up to date.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition-colors">Contact Page</Link>
          <Link to="/news" className="rounded-md border border-white/20 px-4 py-2 font-medium text-white hover:bg-white/10 transition-colors">News</Link>
        </div>
      </section>

      <section id="news" data-reveal className="reveal relative mx-auto max-w-screen-2xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-white">Recent News</h2>
        <p className="mt-4 max-w-3xl text-white/70">
          Announcements about meetings, contests, and achievements.
        </p>
        <div className="mt-6">
          <Link to="/news" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">See all news →</Link>
        </div>
      </section>
    </div>
  );
}


// import { PaymentsOverview } from "@/components/Charts/payments-overview";
// import { UsedDevices } from "@/components/Charts/used-devices";
// import { WeeksProfit } from "@/components/Charts/weeks-profit";
// import { TopChannels } from "@/components/Tables/top-channels";
// import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
// import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
// import { Suspense } from "react";
// import { ChatsCard } from "./_components/chats-card";
// import { OverviewCardsGroup } from "./_components/overview-cards";
// import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
// import { RegionLabels } from "./_components/region-labels";

// type PropsType = {
//   searchParams: Promise<{
//     selected_time_frame?: string;
//   }>;
// };

// export default async function Home({ searchParams }: PropsType) {
//   const { selected_time_frame } = await searchParams;
//   const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

//   return (
//     <>
//       <Suspense fallback={<OverviewCardsSkeleton />}>
//         <OverviewCardsGroup />
//       </Suspense>

//       <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
//         <PaymentsOverview
//           className="col-span-12 xl:col-span-7"
//           key={extractTimeFrame("payments_overview")}
//           timeFrame={extractTimeFrame("payments_overview")?.split(":")[1]}
//         />

//         <WeeksProfit
//           key={extractTimeFrame("weeks_profit")}
//           timeFrame={extractTimeFrame("weeks_profit")?.split(":")[1]}
//           className="col-span-12 xl:col-span-5"
//         />

//         <UsedDevices
//           className="col-span-12 xl:col-span-5"
//           key={extractTimeFrame("used_devices")}
//           timeFrame={extractTimeFrame("used_devices")?.split(":")[1]}
//         />

//         <RegionLabels />

//         <div className="col-span-12 grid xl:col-span-8">
//           <Suspense fallback={<TopChannelsSkeleton />}>
//             <TopChannels />
//           </Suspense>
//         </div>

//         <Suspense fallback={null}>
//           <ChatsCard />
//         </Suspense>
//       </div>
//     </>
//   );
// }
