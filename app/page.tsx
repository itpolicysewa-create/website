import Link from "next/link";
import { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { SectionHeading } from "@/components/section-heading";
import {
  faqs,
  partnerInsurers,
  processSteps,
  products,
  testimonials,
  trustStats,
  whyChooseUsPoints,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Trusted insurance broker with personalized guidance, 20+ insurer options, and dedicated claims support.",
};

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 py-14 text-white md:py-20">
        <div className="container-shell grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
              Trusted Insurance Broker
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
              Insurance Guidance Built on Trust and 10+ Years of Experience
            </h1>
            <p className="mt-5 text-blue-100">
              POLICY SEWA helps individuals, families, and businesses compare and choose the right insurance from 20+ leading insurers, including Star Health and Care Health.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="focus-ring rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact-us"
                className="focus-ring rounded-full border border-blue-300 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
          <div className="card-elevated bg-white p-6 text-slate-900">
            <p className="text-sm font-semibold text-teal-700">Why clients choose us</p>
            <ul className="mt-3 space-y-3 text-sm text-slate-700">
              <li>Expert policy comparison with transparent recommendations</li>
              <li>Dedicated support for claims documentation and follow-ups</li>
              <li>Long-term service for renewals, upgrades, and family coverage planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-6">
        <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <article key={stat.label} className="rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-shell">
          <SectionHeading
            eyebrow="About POLICY SEWA"
            title="A dependable insurance advisory partner for individuals and businesses"
            description="We combine deep market understanding with a client-first approach to help you make confident insurance decisions."
          />
          <p className="mt-4 max-w-3xl text-sm text-slate-700">
            Whether you are selecting first-time health coverage, planning life protection, or reviewing corporate policy structures, our advisors simplify decisions with transparent comparisons and practical recommendations.
          </p>
          <Link href="/about-us" className="mt-4 inline-block text-sm font-semibold text-blue-900 hover:text-blue-700">
            Learn more about our journey
          </Link>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Insurance Products" title="Coverage options for every stage of life" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.title} className="card-elevated p-6">
                <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-700">
                  {product.keyBenefits.map((benefit) => (
                    <li key={benefit}>- {benefit}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Partner Insurers"
            title="Access plans from 20+ trusted insurance companies"
            description="Including Star Health and Care Health, along with leading life and general insurers."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerInsurers.map((partner) => (
              <article key={partner.name} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="font-semibold text-slate-900">{partner.name}</p>
                <p className="text-sm text-slate-600">{partner.category}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Why Choose Us" title="Personalized service, transparent advice, and continued support" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {whyChooseUsPoints.map((point) => (
              <article key={point} className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-700">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-shell">
          <SectionHeading eyebrow="How It Works" title="A straightforward process designed around your needs" />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="card-elevated p-5">
                <p className="text-sm font-bold text-teal-600">Step {index + 1}</p>
                <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Claims Support"
            title="Assistance that stays with you when you need it most"
            description="Our team helps with claim intimation, document readiness, and insurer coordination."
          />
          <Link href="/claims-assistance" className="mt-4 inline-block text-sm font-semibold text-blue-900 hover:text-blue-700">
            Explore claims assistance
          </Link>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-shell">
          <SectionHeading eyebrow="Client Testimonials" title="What policyholders say about POLICY SEWA" centered />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="card-elevated p-6">
                <p className="text-sm text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container-shell">
          <SectionHeading eyebrow="FAQs" title="Answers to common insurance consultation questions" />
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-slate-900">{faq.question}</summary>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-shell">
          <InquiryForm
            heading="Book a Free Insurance Consultation"
            subtext="Share your details and our team will connect with personalized guidance."
            submitLabel="Request a Callback"
          />
        </div>
      </section>

      <CtaBanner
        title="Secure your family's tomorrow with the right policy today"
        description="Get clear advice from experienced insurance advisors and compare plans from leading insurers."
      />
    </div>
  );
}
