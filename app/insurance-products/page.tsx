import { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insurance Products",
  description:
    "Discover health, life, motor, and corporate insurance solutions with expert policy guidance from POLICY SEWA.",
};

export default function InsuranceProductsPage() {
  return (
    <div>
      <PageHero
        title="Insurance Products"
        description="Choose from carefully compared plans across health, life, motor, and business insurance categories."
      />
      <section className="section-spacing">
        <div className="container-shell grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.title} className="card-elevated p-6">
              <h2 className="text-xl font-bold text-slate-900">{product.title}</h2>
              <p className="mt-2 text-slate-600">{product.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700">
                {product.keyBenefits.map((benefit) => (
                  <li key={benefit}>- {benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section-spacing bg-white">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          <article className="card-elevated p-6">
            <h2 className="text-xl font-bold text-slate-900">How we recommend products</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>- We map your risk profile and financial priorities first</li>
              <li>- We compare benefits, exclusions, waiting periods, and claim processes</li>
              <li>- We suggest practical add-ons only when they add real value</li>
            </ul>
          </article>
          <article className="card-elevated p-6">
            <h2 className="text-xl font-bold text-slate-900">Who this page is for</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>- Families planning long-term medical protection</li>
              <li>- Individuals looking for high-cover term plans</li>
              <li>- Vehicle owners renewing or upgrading insurance</li>
              <li>- Businesses seeking employee insurance structures</li>
            </ul>
          </article>
        </div>
      </section>
      <CtaBanner
        title="Not sure which policy is right for you?"
        description="Share your priorities and get product recommendations tailored to your profile."
      />
    </div>
  );
}
