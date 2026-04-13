import { Metadata } from "next";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { trustStats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a personalized insurance quote from POLICY SEWA and compare options from 20+ insurers.",
};

export default function GetQuotePage() {
  return (
    <div>
      <PageHero
        title="Get a Personalized Insurance Quote"
        description="Tell us your requirements and receive advisor-backed quote options that fit your needs and budget."
      />
      <section className="section-spacing">
        <div className="container-shell grid gap-8 md:grid-cols-2">
          <InquiryForm
            heading="Request Quote"
            subtext="Our team will review your details and connect with tailored plan options."
            submitLabel="Get My Quote"
          />
          <aside className="space-y-4">
            {trustStats.map((stat) => (
              <article key={stat.label} className="card-elevated p-5">
                <p className="text-lg font-bold text-blue-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </article>
            ))}
          </aside>
        </div>
      </section>
      <section className="section-spacing bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Fast response</h2>
            <p className="mt-2 text-sm text-slate-700">
              Most quote requests are reviewed quickly during business hours with a callback from our advisory team.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Tailored recommendations</h2>
            <p className="mt-2 text-sm text-slate-700">
              We compare options based on your age, family profile, budget range, and protection priorities.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Clear next steps</h2>
            <p className="mt-2 text-sm text-slate-700">
              You receive transparent plan comparisons and support through policy issuance and documentation.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
