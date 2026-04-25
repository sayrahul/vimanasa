import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { buildPageMetadata, getSiteUrl, SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Home",
  description:
    "Vimanasa Services LLP empowers organizations with manpower outsourcing, telecom infrastructure, and IT-led digital transformation services across India.",
  path: "/",
  keywords: [
    "manpower outsourcing",
    "telecommunications services India",
    "digital transformation partner",
  ],
});

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: siteUrl,
        description: SITE_TAGLINE,
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        name: "Home",
        url: siteUrl,
        description:
          "Vimanasa Services LLP empowers organizations with manpower outsourcing, telecom infrastructure, and IT-led digital transformation services across India.",
        isPartOf: {
          "@type": "WebSite",
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
      <HomePageClient />
    </>
  );
}
