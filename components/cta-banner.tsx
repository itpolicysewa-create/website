import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CtaBanner({
  title,
  description,
  primaryHref = "/get-a-quote",
  primaryLabel = "Get a Personalized Quote",
}: CtaBannerProps) {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <div className="card-elevated bg-gradient-to-r from-blue-900 to-teal-700 p-8 text-white md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-blue-100">{description}</p>
          <Link
            href={primaryHref}
            className="focus-ring mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50"
          >
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
