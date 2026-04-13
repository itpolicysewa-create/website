"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="border-b border-slate-100 bg-slate-50 py-2 text-center text-xs text-slate-600">
        <p className="container-shell">
          10+ years experience | 20+ insurer partners | Personalized policy &
          claims guidance
        </p>
      </div>
      <div className="container-shell grid grid-cols-[auto_1fr_auto] items-center gap-3 py-4">
        <Link
          href="/"
          className="focus-ring flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/policysewa-logo-light.png"
            alt="Policy Sewa logo"
            width={150}
            height={56}
            className="h-12 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center justify-center gap-6 lg:flex"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring text-sm font-medium ${
                  isActive
                    ? "text-blue-900"
                    : "text-slate-600 hover:text-blue-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center justify-end gap-2">
          <Link
            href="/get-a-quote"
            className="focus-ring hidden rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-950 sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            className="focus-ring rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="container-shell flex flex-col py-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`focus-ring rounded-md px-2 py-2 text-sm ${
                    isActive
                      ? "bg-blue-50 font-semibold text-blue-900"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/get-a-quote"
              onClick={() => setIsMenuOpen(false)}
              className="focus-ring mt-2 rounded-full bg-blue-900 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-blue-950 sm:hidden"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
