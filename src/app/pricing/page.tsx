"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import Link from "next/link";

const PRICING_PLANS = [
  {
    name: "Standard Deployment",
    price: "₹1,50,000",
    period: "/month",
    description: "Perfect for small to medium scale private businesses needing core manpower or basic IT maintenance.",
    features: [
      "Up to 10 Security Guards / Staff",
      "Standard Housekeeping Service",
      "Basic IT Helpdesk Support",
      "Standard Client Management Portal",
      "Monthly Reporting"
    ],
    highlighted: false,
  },
  {
    name: "Enterprise Solutions",
    price: "₹5,00,000+",
    period: "/month",
    description: "Comprehensive coverage for large enterprises and government entities requiring high-tier compliance.",
    features: [
      "Custom Facility Management Team",
      "Advanced Armed Security Personnel",
      "24/7 Dedicated Network Operations (NOC)",
      "Dedicated Project Manager",
      "Full API & Digital Suite Access",
      "Priority SLA Response Time"
    ],
    highlighted: true,
  },
  {
    name: "Digital Marketing Retainer",
    price: "₹75,000",
    period: "/month",
    description: "Amplify your brand presence with our dedicated team of digital creators and SEO experts.",
    features: [
      "Comprehensive SEO Strategy",
      "Social Media Management (4 Platforms)",
      "Weekly Custom Content Creation",
      "Performance Analytics & Bi-Weekly Reports",
      "Paid Ad Campaign Strategy"
    ],
    highlighted: false,
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Flexible Pricing</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Transparent retainer packages tailored to scale seamlessly with your growing infrastructural and digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`p-8 rounded-3xl relative overflow-hidden flex flex-col ${
                plan.highlighted 
                  ? "bg-primary/10 border-2 border-primary" 
                  : "glass-card border border-border mt-4 md:mt-8"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary" />
              )}
              {plan.highlighted && (
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-4">
                  Most Popular
                </span>
              )}

              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-muted-foreground mb-6 text-sm flex-grow">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground font-medium">{plan.period}</span>
              </div>

              <ul className="flex flex-col gap-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-foreground/90">
                    <Check size={20} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-auto w-full py-4 text-center rounded-xl font-bold transition-all ${
                  plan.highlighted 
                    ? "bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(12,164,218,0.3)]" 
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Requirements Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 glass-card border border-border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <Info className="text-secondary shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-bold mb-1">Need a specialized tender quotation?</h3>
              <p className="text-muted-foreground">For government tenders and highly specific custom infrastructure quotes, contact our specialized corporate relations team.</p>
            </div>
          </div>
          <Link href="/contact" className="px-8 py-3 rounded-xl border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all font-semibold whitespace-nowrap">
            Request Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
