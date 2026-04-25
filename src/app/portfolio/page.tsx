import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";
import { buildPageMetadata, getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio",
  description:
    "View Vimanasa portfolio highlights across manpower deployment, telecom infrastructure rollouts, and digital execution success stories.",
  path: "/portfolio",
  keywords: [
    "service portfolio",
    "telecom implementation case studies",
    "outsourcing project highlights",
  ],
});

export default function PortfolioPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/portfolio`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Portfolio",
        url: pageUrl,
        description:
          "View Vimanasa portfolio highlights across manpower deployment, telecom infrastructure rollouts, and digital execution success stories.",
      },
      {
        "@type": "ItemList",
        name: "Portfolio Categories",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Manpower Deployment" },
          { "@type": "ListItem", position: 2, name: "Telecom Infrastructure" },
          { "@type": "ListItem", position: 3, name: "Digital Execution" },
        ],
      },
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioPageClient />
    </>
  );
}
