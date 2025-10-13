"use client";

import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { NAV_DATA } from "./data";
import { ArrowLeftIcon } from "./icons";
import { MenuItem } from "./menu-item";
import { useSidebarContext, SidebarProvider } from "./sidebar-context";

export { SidebarProvider };

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const { setIsOpen, isOpen, isMobile, toggleSidebar } = useSidebarContext();

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-500 ease-in-out"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar slides in below the header, hamburger stays fixed */}
      <aside
        className={cn(
          "max-w-[290px] overflow-hidden border-r border-[#0f1a3a] bg-[#0b1228] transition-all duration-500 ease-in-out",
          isMobile ? "fixed left-0 top-0 z-50 h-full" : "sticky top-0 h-screen",
          isOpen ? "translate-x-0 w-full shadow-2xl" : "-translate-x-full w-0",
        )}
        style={{ willChange: 'transform, width' }}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col py-10 pl-[25px] pr-[7px]">
          {/* Hamburger stays above menu bar */}
          <div className="relative pr-4.5 flex flex-col items-start">
            {isMobile && (
              <button
                onClick={toggleSidebar}
                className="mb-4 z-50 flex items-center justify-center rounded p-2 text-white hover:text-blue-400 transition-colors bg-[#0b1228] shadow-lg"
                style={{ position: 'absolute', top: 0, left: 0 }}
                aria-label="Close navigation menu"
              >
                <ArrowLeftIcon className="size-7" />
              </button>
            )}
            <Link
              to={"/"}
              onClick={() => isMobile && toggleSidebar()}
              className="px-0 py-2.5 min-[850px]:py-0 mt-10"
            >
            </Link>
          </div>

          {/* Navigation */}
          <div className="custom-scrollbar mt-6 flex-1 overflow-y-auto pr-3 min-[850px]:mt-10">
            {NAV_DATA.map((section) => (
              <div key={section.label} className="mb-6">
                <h2 className="mb-5 text-sm font-medium text-white/60">
                  {section.label}
                </h2>

                <nav role="navigation" aria-label={section.label}>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.title}>
                        <MenuItem
                          className="flex items-center gap-3 py-3"
                          as="link"
                          href={item.url}
                          isActive={pathname === item.url}
                        >
                          <item.icon
                            className="size-6 shrink-0"
                            aria-hidden="true"
                          />

                          <span>{item.title}</span>
                        </MenuItem>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
