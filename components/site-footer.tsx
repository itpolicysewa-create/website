import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-200">
      <div className="container-shell space-y-10">
        <section className="card-elevated flex flex-col items-start justify-between gap-4 bg-gradient-to-r from-blue-900 to-teal-700 p-8 text-white md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">
              Need help choosing insurance?
            </h3>
            <p className="mt-2 max-w-xl text-blue-100">
              Speak with our advisors for personalized policy guidance and
              end-to-end support.
            </p>
          </div>
          <Link
            href="/get-a-quote"
            className="focus-ring rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50"
          >
            Request Free Consultation
          </Link>
        </section>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/policysewa-logo-footer.png"
              alt="Policy Sewa logo"
              width={170}
              height={64}
              className="h-14 w-auto object-contain"
              unoptimized
            />
            <p className="mt-3 text-sm text-slate-400">
              Trusted insurance broker with 10+ years of experience and
              partnerships with 20+ insurers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Phone: +91 94638 26417</li>
              <li>Email: policysewa@gmail.com</li>
              <li>Mon-Sat: 9:30 AM to 7:00 PM</li>
            </ul>
          </div>
        </div>

        <p className="border-t border-slate-800 pt-6 text-xs text-slate-400">
          Copyright {new Date().getFullYear()} POLICY SEWA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
