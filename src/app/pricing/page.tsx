import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";
import { buildPageMetadata, getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Review transparent service pricing for staffing, telecommunications projects, and IT solutions tailored to your business and project requirements.",
  path: "/pricing",
  keywords: [
    "outsourcing pricing",
    "telecom project costing",
    "IT services pricing",
  ],
});

export default function PricingPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/pricing`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Pricing",
        url: pageUrl,
        description:
          "Review transparent service pricing for staffing, telecommunications projects, and IT solutions tailored to your business and project requirements.",
      },
      {
        "@type": "OfferCatalog",
        name: "Vimanasa Pricing Plans",
        url: pageUrl,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: siteUrl,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PricingPageClient />
    </>
  );
}
