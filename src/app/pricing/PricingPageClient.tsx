"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import Link from "next/link";

const PRICING_PLANS = [
  {
    name: "Standard Deployment",
    price: "₹1,50,000",
    period: "/month",
    description: "Ideal for small and medium businesses requiring reliable manpower support and essential IT operations.",
    features: ["Up to 10 staff deployment", "Housekeeping operations", "Basic IT support desk", "Monthly performance reporting", "Compliance-ready documentation"],
    highlighted: false,
  },
  {
    name: "Enterprise Solutions",
    price: "₹5,00,000+",
    period: "/month",
    description: "Best for large private organizations and government projects needing high-scale managed operations.",
    features: [
      "Dedicated facility management team",
      "Priority telecom execution",
      "24/7 network and escalation coverage",
      "Project manager and SLA governance",
      "Custom reporting and integration support",
    ],
    highlighted: true,
  },
  {
    name: "Digital Growth Retainer",
    price: "₹75,000",
    period: "/month",
    description: "For brands scaling digital visibility through structured marketing and content execution.",
    features: ["SEO roadmap and audits", "Multi-platform social management", "Weekly content plans", "Paid campaign optimization", "Bi-weekly analytics reporting"],
    highlighted: false,
  },
];

export default function PricingPageClient() {
  return (
    <div className="w-full pb-12 pt-28 md:pt-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">Flexible Pricing</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Transparent monthly packages aligned to deployment complexity, project scale, and delivery expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`flex h-full flex-col rounded-3xl border p-7 shadow-sm ${
                plan.highlighted ? "border-primary/40 bg-primary/10" : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="ml-1 text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-background text-foreground hover:bg-muted"
                }`}
              >
                Request Proposal
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 flex max-w-4xl flex-col items-start gap-5 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-start gap-3">
            <Info className="mt-1 shrink-0 text-secondary" size={20} />
            <div>
              <h3 className="text-lg font-semibold">Need a tender-specific commercial quote?</h3>
              <p className="mt-1 text-sm text-muted-foreground">For government tenders and customized deployment models, we provide scope-based pricing and compliance documentation.</p>
            </div>
          </div>
          <Link href="/contact" className="rounded-xl border border-secondary px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground">
            Talk to Sales
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
