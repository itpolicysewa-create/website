import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { processSteps, whyChooseUsPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "See why clients trust POLICY SEWA for transparent insurance advice and reliable long-term service.",
};

export default function WhyChooseUsPage() {
  return (
    <div>
      <PageHero
        title="Why Choose POLICY SEWA"
        description="Our approach is built around clarity, customization, and dependable support."
      />
      <section className="section-spacing">
        <div className="container-shell">
          <SectionHeading title="What sets us apart" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {whyChooseUsPoints.map((point) => (
              <article key={point} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-700">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-shell rounded-2xl border border-teal-100 bg-teal-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Service model built for real life events</h2>
          <p className="mt-3 text-sm text-slate-700">
            Insurance decisions are rarely one-time decisions. Life events like marriage, children, home loans, business expansion, and medical history changes can alter your coverage needs. Our advisory process is designed to adapt with those changes over time.
          </p>
        </div>
      </section>
      <section className="section-spacing bg-white">
        <div className="container-shell">
          <SectionHeading title="Our client journey" />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, idx) => (
              <article key={step.title} className="card-elevated p-5">
                <p className="text-sm font-semibold text-teal-600">Step {idx + 1}</p>
                <h2 className="mt-2 font-semibold text-slate-900">{step.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
