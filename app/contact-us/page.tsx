import { Metadata } from "next";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact POLICY SEWA for insurance consultation, policy support, and claims assistance.",
};

export default function ContactUsPage() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        description="Speak with our team for policy guidance, service support, and claim-related assistance."
      />
      <section className="section-spacing">
        <div className="container-shell grid gap-8 md:grid-cols-2">
          <InquiryForm
            heading="Talk to an Insurance Advisor"
            subtext="Submit your details and we will contact you shortly."
            submitLabel="Send Inquiry"
            showProduct={false}
          />
          <article className="card-elevated p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Reach us directly
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>Phone: +91 94638 26417</li>
              <li>Email: policysewa@gmail.com</li>
              <li>Office Hours: Mon-Sat, 9:30 AM to 7:00 PM</li>
              <li>Service Area: PAN India insurance advisory support</li>
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              For urgent claim-related help, mention your policy number and
              claim issue in the message for quicker routing.
            </p>
          </article>
        </div>
      </section>
      <section className="section-spacing bg-white">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">
              Consultation Support
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Discuss your requirements and receive clear policy recommendations
              across partner insurers.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Renewal Guidance</h2>
            <p className="mt-2 text-sm text-slate-700">
              Get reminders and guidance for timely renewals, continuity
              benefits, and coverage upgrades.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-900">Claims Desk</h2>
            <p className="mt-2 text-sm text-slate-700">
              Dedicated assistance for claim initiation, document support, and
              insurer communication.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
