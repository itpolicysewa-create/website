import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { partnerInsurers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insurance Partners",
  description:
    "Explore POLICY SEWA's insurance company partnerships, including Star Health and Care Health.",
};

export default function InsurancePartnersPage() {
  return (
    <div>
      <PageHero
        title="Insurance Partners"
        description="Access policy choices from 20+ reputed insurance companies through one trusted advisory desk."
      />
      <section className="section-spacing">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our Network"
            title="Leading insurers under one advisory platform"
            description="We compare plans across partner companies to help you make a better-informed decision."
          />
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
            We actively work with health, life, and general insurance providers. Featured names include Star Health and Care Health, with multiple additional insurers available based on your coverage requirement and city.
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerInsurers.map((partner) => (
              <article key={partner.name} className="card-elevated p-6">
                <h2 className="text-lg font-semibold text-slate-900">{partner.name}</h2>
                <p className="text-sm text-slate-600">{partner.category}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-spacing bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Why insurer diversity matters</h2>
            <p className="mt-2 text-sm text-slate-700">
              More options improve your chances of finding better premiums, suitable benefits, and stronger claim servicing fit.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Unbiased plan comparison</h2>
            <p className="mt-2 text-sm text-slate-700">
              We compare coverage terms, waiting periods, room-rent rules, and exclusions before giving recommendations.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Advisory with continuity</h2>
            <p className="mt-2 text-sm text-slate-700">
              Your advisor remains available for renewals, policy upgrades, and claims coordination, not just initial purchase.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
