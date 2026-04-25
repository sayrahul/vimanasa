import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { buildPageMetadata, getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog & Insights",
  description:
    "Read expert insights from Vimanasa on workforce strategy, telecom modernization, digital trends, and business execution.",
  path: "/blog",
  keywords: [
    "manpower outsourcing insights",
    "telecom strategy articles",
    "digital transformation blog",
  ],
});

export default function BlogPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/blog`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Vimanasa Insights",
        url: pageUrl,
        description:
          "Read expert insights from Vimanasa on workforce strategy, telecom modernization, digital trends, and business execution.",
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: siteUrl,
        },
      },
      {
        "@type": "ItemList",
        name: "Recent Blog Topics",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@type": "BlogPosting", headline: "The Future of Smart Manpower Outsourcing in India" },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: { "@type": "BlogPosting", headline: "Deploying Wi-Fi Solutions for Tier-2 Cities" },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: { "@type": "BlogPosting", headline: "Why Your Corporate Website Needs a Dark Mode" },
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
      <BlogPageClient />
    </>
  );
}
