import type { Metadata } from "next";
import TendersPageClient from "./TendersPageClient";
import { buildPageMetadata, getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tenders",
  description:
    "Track active tender opportunities, compliance notices, and collaboration requests for manpower and telecom projects at Vimanasa.",
  path: "/tenders",
  keywords: [
    "active tenders India",
    "government manpower tenders",
    "telecom procurement opportunities",
  ],
});

export default function TendersPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/tenders`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Tenders",
        url: pageUrl,
        description:
          "Track active tender opportunities, compliance notices, and collaboration requests for manpower and telecom projects at Vimanasa.",
      },
      {
        "@type": "ItemList",
        name: "Tender Categories",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Manpower Tenders" },
          { "@type": "ListItem", position: 2, name: "Telecommunications Tenders" },
          { "@type": "ListItem", position: 3, name: "Government Procurement Notices" },
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
      <TendersPageClient />
    </>
  );
}
