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
  const faqItems = [
    {
      question: "Which industries do you serve?",
      answer:
        "We serve private enterprises, public infrastructure initiatives, healthcare organizations, institutions, and government departments.",
    },
    {
      question: "Can Vimanasa manage staffing and telecom work together?",
      answer:
        "Yes, we support integrated delivery models that combine manpower, telecom execution, and digital support under one team.",
    },
    {
      question: "Do you provide custom commercial proposals?",
      answer:
        "Yes, we provide custom proposals based on site conditions, service scope, timeline requirements, and compliance needs.",
    },
  ];

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
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
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
      <HomePageClient />
    </>
  );
}
