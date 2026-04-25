import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { buildPageMetadata, getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "Explore Vimanasa services: manpower outsourcing, telecommunications implementation, and IT development for enterprise and government organizations.",
  path: "/services",
  keywords: [
    "manpower outsourcing services",
    "telecom network installation",
    "enterprise IT services",
  ],
});

export default function ServicesPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/services`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Business Services by Vimanasa",
        description:
          "Integrated manpower outsourcing, telecommunications implementation, and IT solution delivery for enterprise and government clients.",
        serviceType: [
          "Manpower Outsourcing",
          "Telecommunications Infrastructure",
          "IT and Digital Solutions",
        ],
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: siteUrl,
        },
        areaServed: {
          "@type": "Country",
          name: "IN",
        },
        url: pageUrl,
      },
      {
        "@type": "OfferCatalog",
        name: "Service Catalog",
        itemListElement: [
          {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            itemOffered: { "@type": "Service", name: "Manpower Outsourcing" },
          },
          {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            itemOffered: { "@type": "Service", name: "Telecommunications Projects" },
          },
          {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            itemOffered: { "@type": "Service", name: "IT & Digital Agency Services" },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesPageClient />
    </>
  );
}
