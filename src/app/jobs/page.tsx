import type { Metadata } from "next";
import JobsPageClient from "./JobsPageClient";
import { buildPageMetadata, getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Apply for open roles at Vimanasa Services LLP and grow your career in manpower operations, telecom engineering, and digital innovation.",
  path: "/jobs",
  keywords: [
    "jobs in manpower services",
    "telecom jobs India",
    "IT careers in Maharashtra",
  ],
});

export default function JobsPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/jobs`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Careers",
        url: pageUrl,
        description:
          "Apply for open roles at Vimanasa Services LLP and grow your career in manpower operations, telecom engineering, and digital innovation.",
      },
      {
        "@type": "ItemList",
        name: "Open Roles",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "JobPosting",
              title: "Technical Project Manager",
              employmentType: "FULL_TIME",
              hiringOrganization: {
                "@type": "Organization",
                name: SITE_NAME,
                sameAs: siteUrl,
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Chhatrapati Sambhajinagar",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
              },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "JobPosting",
              title: "Telecom Field Engineer",
              employmentType: "FULL_TIME",
              hiringOrganization: {
                "@type": "Organization",
                name: SITE_NAME,
                sameAs: siteUrl,
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
              },
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "JobPosting",
              title: "Business Development Executive",
              employmentType: "FULL_TIME",
              hiringOrganization: {
                "@type": "Organization",
                name: SITE_NAME,
                sameAs: siteUrl,
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Mumbai",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
              },
            },
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
      <JobsPageClient />
    </>
  );
}
