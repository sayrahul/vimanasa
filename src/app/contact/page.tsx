import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { buildPageMetadata, getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Vimanasa Services for manpower outsourcing, telecom deployments, IT projects, and tender-related business inquiries.",
  path: "/contact",
  keywords: [
    "contact staffing company",
    "telecom project inquiry",
    "business support Maharashtra",
  ],
});

export default function ContactPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/contact`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: "Contact",
        url: pageUrl,
        description:
          "Contact Vimanasa Services for manpower outsourcing, telecom deployments, IT projects, and tender-related business inquiries.",
      },
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        email: "vimanasaservices@gmail.com",
        telephone: "+91-9921713207",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "vimanasaservices@gmail.com",
            telephone: "+91-9921713207",
            areaServed: "IN",
            availableLanguage: ["en", "hi", "mr"],
          },
        ],
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "227, Undegaon, Post Kodri, Taluka Gangakhed",
            addressLocality: "Parbhani",
            addressRegion: "Maharashtra",
            postalCode: "431514",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "Nath Valley Road, Kanchanwadi",
            addressLocality: "Chhatrapati Sambhajinagar",
            addressRegion: "Maharashtra",
            postalCode: "431001",
            addressCountry: "IN",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: SITE_NAME,
        url: siteUrl,
        image: `${siteUrl}/logo.png`,
        telephone: "+91-9921713207",
        email: "vimanasaservices@gmail.com",
        areaServed: "IN",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nath Valley Road, Kanchanwadi",
          addressLocality: "Chhatrapati Sambhajinagar",
          addressRegion: "Maharashtra",
          postalCode: "431001",
          addressCountry: "IN",
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
      <ContactPageClient />
    </>
  );
}
