import type { Metadata } from "next";
import ClientsPageClient from "./ClientsPageClient";
import { buildPageMetadata, getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Clients",
  description:
    "Discover organizations that trust Vimanasa for manpower, telecom, and IT solutions delivered with reliability, compliance, and scale.",
  path: "/clients",
  keywords: [
    "trusted staffing partner",
    "enterprise telecom clients",
    "government and private clients",
  ],
});

export default function ClientsPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/clients`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Clients",
        url: pageUrl,
        description:
          "Discover organizations that trust Vimanasa for manpower, telecom, and IT solutions delivered with reliability, compliance, and scale.",
      },
      {
        "@type": "ItemList",
        name: "Client Segments",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Government Organizations" },
          { "@type": "ListItem", position: 2, name: "Private Enterprises" },
          { "@type": "ListItem", position: 3, name: "Infrastructure Programs" },
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
      <ClientsPageClient />
    </>
  );
}
