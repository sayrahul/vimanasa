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
  const baseDatePosted = "2026-04-25";
  const validThrough = "2026-12-31T23:59";
  const organization = {
    "@type": "Organization",
    name: SITE_NAME,
    sameAs: siteUrl,
    logo: `${siteUrl}/logo.png`,
  };

  const jobPostings = [
    {
      "@type": "JobPosting",
      title: "Senior Network Engineer",
      description:
        "Design, implement, and maintain telecommunications networks for enterprise and institutional clients while ensuring uptime, security, and documentation compliance.",
      datePosted: baseDatePosted,
      validThrough,
      employmentType: "FULL_TIME",
      identifier: {
        "@type": "PropertyValue",
        name: SITE_NAME,
        value: "VIM-CAREER-001",
      },
      hiringOrganization: organization,
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
    {
      "@type": "JobPosting",
      title: "Security Guard (Tender)",
      description:
        "Provide on-ground security coverage for government and enterprise sites, including patrol checks, access control, and incident reporting.",
      datePosted: baseDatePosted,
      validThrough,
      employmentType: "CONTRACTOR",
      identifier: {
        "@type": "PropertyValue",
        name: SITE_NAME,
        value: "VIM-CAREER-002",
      },
      hiringOrganization: organization,
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
    {
      "@type": "JobPosting",
      title: "Frontend Next.js Developer",
      description:
        "Build performant and accessible interfaces using Next.js and modern UI systems, focusing on quality, scalability, and brand-consistent UX.",
      datePosted: baseDatePosted,
      validThrough,
      employmentType: "FULL_TIME",
      identifier: {
        "@type": "PropertyValue",
        name: SITE_NAME,
        value: "VIM-CAREER-003",
      },
      hiringOrganization: organization,
      jobLocationType: "TELECOMMUTE",
      applicantLocationRequirements: {
        "@type": "Country",
        name: "IN",
      },
    },
  ];

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
        itemListElement: jobPostings.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item,
        })),
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
