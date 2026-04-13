type InquiryFormProps = {
  heading: string;
  subtext: string;
  submitLabel: string;
  showProduct?: boolean;
};

export function InquiryForm({
  heading,
  subtext,
  submitLabel,
  showProduct = true,
}: InquiryFormProps) {
  return (
    <section className="card-elevated p-6 md:p-8" aria-label={heading}>
      <h3 className="text-xl font-bold text-slate-900">{heading}</h3>
      <p className="mt-2 text-sm text-slate-600">{subtext}</p>
      <form className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Full Name
          <input
            type="text"
            name="name"
            required
            className="focus-ring mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Mobile Number
          <input
            type="tel"
            name="phone"
            required
            className="focus-ring mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email Address
          <input
            type="email"
            name="email"
            required
            className="focus-ring mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        {showProduct ? (
          <label className="text-sm font-medium text-slate-700">
            Insurance Type
            <select
              name="insuranceType"
              className="focus-ring mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              <option>Health Insurance</option>
              <option>Term Life Insurance</option>
              <option>Motor Insurance</option>
              <option>Corporate Insurance</option>
            </select>
          </label>
        ) : null}
        <label className="text-sm font-medium text-slate-700 md:col-span-2">
          Message
          <textarea
            name="message"
            rows={4}
            className="focus-ring mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="focus-ring rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-950 md:col-span-2 md:justify-self-start"
        >
          {submitLabel}
        </button>
      </form>
    </section>
  );
}
