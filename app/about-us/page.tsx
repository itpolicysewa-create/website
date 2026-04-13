import { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { trustStats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about POLICY SEWA, a trusted insurance broker with 10+ years of experience and 20+ insurer partnerships.",
};

export default function AboutUsPage() {
  return (
    <div>
      <PageHero
        title="About POLICY SEWA"
        description="For over a decade, we have helped clients make informed insurance decisions with personalized guidance and service-led support."
      />
      <section className="section-spacing">
        <div className="container-shell grid gap-8 md:grid-cols-2">
          <div>
            <SectionHeading title="Our Story" />
            <p className="mt-4 text-slate-700">
              POLICY SEWA was founded with a clear purpose: to simplify insurance decisions and make trustworthy advisory support accessible. We work as your insurance partner, not just a policy seller.
            </p>
            <p className="mt-4 text-slate-700">
              With partnerships across 20+ insurers, including Star Health and Care Health, we offer broad market access while maintaining a client-first recommendation process.
            </p>
            <p className="mt-4 text-slate-700">
              Every recommendation is based on your real requirements, such as family size, health profile, financial liabilities, and long-term goals, so coverage remains practical and relevant.
            </p>
          </div>
          <article className="card-elevated p-6">
            <h2 className="text-xl font-bold text-slate-900">Our Core Values</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>- Transparency in policy comparison and disclosures</li>
              <li>- Personal attention to every client requirement</li>
              <li>- Long-term relationship beyond policy issuance</li>
              <li>- Reliable support during claims and renewals</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="section-spacing bg-white">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          <article className="card-elevated p-6">
            <h2 className="text-lg font-bold text-slate-900">Our Mission</h2>
            <p className="mt-3 text-sm text-slate-700">
              To help every client understand insurance clearly and choose coverage with confidence, not confusion.
            </p>
          </article>
          <article className="card-elevated p-6">
            <h2 className="text-lg font-bold text-slate-900">Our Vision</h2>
            <p className="mt-3 text-sm text-slate-700">
              To be a long-term protection partner known for trust, service quality, and responsible advisory practices.
            </p>
          </article>
          <article className="card-elevated p-6">
            <h2 className="text-lg font-bold text-slate-900">Our Commitment</h2>
            <p className="mt-3 text-sm text-slate-700">
              From first consultation to claim support and renewal reminders, we stay engaged at every stage of your policy lifecycle.
            </p>
          </article>
        </div>
      </section>
      <section className="section-spacing bg-white">
        <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <article key={stat.label} className="rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBanner
        title="Plan your protection with confidence"
        description="Connect with our advisors and discover policy options matched to your priorities."
      />
    </div>
  );
}
