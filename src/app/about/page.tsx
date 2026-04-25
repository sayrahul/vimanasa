import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { buildPageMetadata, getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn about Vimanasa Services LLP, our leadership, mission, values, and commitment to delivering reliable manpower, telecom, and IT services.",
  path: "/about",
  keywords: [
    "about vimanasa services",
    "staffing company leadership",
    "telecom and IT company India",
  ],
});

export default function AboutPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/about`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Us",
        url: pageUrl,
        description:
          "Learn about Vimanasa Services LLP, our leadership, mission, values, and commitment to delivering reliable manpower, telecom, and IT services.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: pageUrl,
          },
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
      <AboutPageClient />
    </>
  );
}
