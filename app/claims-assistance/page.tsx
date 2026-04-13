import { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Claims Assistance",
  description:
    "Get support for claim intimation, documentation, and insurer coordination with POLICY SEWA claims assistance.",
};

const claimSteps = [
  "Share your policy and claim event details with our support team",
  "Receive a clear checklist of required documents and timelines",
  "Get help with claim intimation and submission process",
  "Stay updated through insurer follow-ups until resolution",
];

export default function ClaimsAssistancePage() {
  return (
    <div>
      <PageHero
        title="Claims Assistance"
        description="When a claim arises, we support you with process clarity, documentation guidance, and timely follow-ups."
      />
      <section className="section-spacing">
        <div className="container-shell grid gap-8 md:grid-cols-2">
          <article className="card-elevated p-6">
            <h2 className="text-xl font-bold text-slate-900">How we help you</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>- Guidance on cashless and reimbursement claim paths</li>
              <li>- Document checklist and submission support</li>
              <li>- Coordination with insurer and service teams</li>
              <li>- Follow-up assistance for faster closure</li>
            </ul>
          </article>
          <article className="card-elevated p-6">
            <h2 className="text-xl font-bold text-slate-900">Claims process</h2>
            <ol className="mt-4 space-y-2 text-sm text-slate-700">
              {claimSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>
      <section className="section-spacing bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Cashless claims</h2>
            <p className="mt-2 text-sm text-slate-700">
              Guidance on hospital network checks, pre-authorization, and required hospital desk coordination.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Reimbursement claims</h2>
            <p className="mt-2 text-sm text-slate-700">
              Help with bills, prescriptions, diagnostic records, discharge summaries, and submission timelines.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Status follow-up</h2>
            <p className="mt-2 text-sm text-slate-700">
              Assistance in tracking insurer responses, additional document requests, and closure milestones.
            </p>
          </article>
        </div>
      </section>
      <CtaBanner
        title="Need immediate claims guidance?"
        description="Reach our support desk and get step-by-step assistance from our claims team."
        primaryHref="/contact-us"
        primaryLabel="Contact Claims Support"
      />
    </div>
  );
}
