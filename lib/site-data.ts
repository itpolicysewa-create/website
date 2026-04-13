export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type ProductItem = {
  title: string;
  description: string;
  keyBenefits: string[];
};

export type PartnerItem = {
  name: string;
  category: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Partners", href: "/insurance-partners" },
  { label: "Products", href: "/insurance-products" },
  { label: "Why Us", href: "/why-choose-us" },
  { label: "Claims", href: "/claims-assistance" },
  { label: "Contact", href: "/contact-us" },
  { label: "Quote", href: "/get-a-quote" },
];

export const trustStats: StatItem[] = [
  { value: "10+ Years", label: "Insurance advisory experience" },
  { value: "20+ Partners", label: "Leading insurers onboarded" },
  { value: "1:1 Guidance", label: "Personalized policy planning" },
  { value: "Dedicated Support", label: "Claims assistance desk" },
];

export const products: ProductItem[] = [
  {
    title: "Health Insurance",
    description:
      "Comprehensive medical cover for individuals, families, and senior citizens.",
    keyBenefits: ["Cashless hospitalization", "Tax benefits", "Pre & post-hospital cover"],
  },
  {
    title: "Term Life Insurance",
    description:
      "Protect your family's financial future with high-cover, low-premium plans.",
    keyBenefits: ["High life cover", "Flexible policy terms", "Rider options"],
  },
  {
    title: "Motor Insurance",
    description:
      "Smart coverage for cars and two-wheelers with smooth policy renewals and claim support.",
    keyBenefits: ["Own damage + third-party", "Add-on covers", "Quick renewals"],
  },
  {
    title: "Corporate Insurance",
    description:
      "Employee health and risk protection solutions tailored to business needs.",
    keyBenefits: ["Group mediclaim", "Scalable plans", "HR support coordination"],
  },
];

export const partnerInsurers: PartnerItem[] = [
  { name: "Star Health", category: "Health Insurance" },
  { name: "Care Health", category: "Health Insurance" },
  { name: "HDFC ERGO", category: "General Insurance" },
  { name: "ICICI Lombard", category: "General Insurance" },
  { name: "Bajaj Allianz", category: "Life & General" },
  { name: "Niva Bupa", category: "Health Insurance" },
];

export const whyChooseUsPoints = [
  "Policy recommendations aligned to your budget, lifestyle, and goals",
  "Transparent guidance with clear comparison of benefits and exclusions",
  "End-to-end support from policy selection to claim documentation",
  "Prompt service from an experienced team that values long-term relationships",
];

export const processSteps: ProcessStep[] = [
  {
    title: "Understand Your Need",
    description:
      "We evaluate your health, life, family, and financial protection priorities.",
  },
  {
    title: "Compare Top Plans",
    description:
      "Get unbiased plan comparisons across 20+ insurers, including Star Health and Care Health.",
  },
  {
    title: "Choose With Confidence",
    description:
      "Our advisors explain the fine print so you select the right policy with clarity.",
  },
  {
    title: "Stay Supported",
    description:
      "From renewals to claims, we stay available as your long-term insurance partner.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rohit Mehta",
    location: "Surat",
    quote:
      "POLICY SEWA made insurance selection simple. They compared plans clearly and helped me choose a policy that actually fits my family.",
  },
  {
    name: "Anita Sharma",
    location: "Ahmedabad",
    quote:
      "The team was responsive during my hospital claim process and guided us at every stage. Their support made a stressful time much easier.",
  },
  {
    name: "Kunal Patel",
    location: "Vadodara",
    quote:
      "Professional advice, transparent communication, and no pressure selling. I trust them for my health and term insurance planning.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How does POLICY SEWA help me choose the right insurance plan?",
    answer:
      "Our advisors understand your requirements first, compare relevant options from multiple insurers, and explain plan terms in plain language before you decide.",
  },
  {
    question: "Do you charge for consultation?",
    answer:
      "Initial consultations are designed to help you evaluate coverage needs and compare options with clarity. You can discuss your requirement without pressure.",
  },
  {
    question: "Can you assist if I already have an existing policy?",
    answer:
      "Yes. We can review your existing policy, identify coverage gaps, and guide you on renewals, upgrades, or supplementary plans when needed.",
  },
  {
    question: "Will you support me during claims?",
    answer:
      "Yes, our claims support desk assists with claim intimation, document checklist, follow-ups, and insurer coordination for smoother settlement.",
  },
];
