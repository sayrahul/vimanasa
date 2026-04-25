import type { Metadata } from "next";

export const SITE_NAME = "Vimanasa Services LLP";
export const SITE_TAGLINE = "Manpower, Telecom, and IT Solutions";
export const DEFAULT_OG_IMAGE = "/logo.png";

const FALLBACK_SITE_URL = "http://localhost:3000";

function normalizeSiteUrl(input?: string): string {
  if (!input) {
    return FALLBACK_SITE_URL;
  }

  const trimmed = input.trim().replace(/\/+$/, "");
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export function getSiteUrl(): string {
  const candidate = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

  try {
    return new URL(candidate).toString().replace(/\/+$/, "");
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const metadataBase = new URL(getSiteUrl());

const BASE_KEYWORDS = [
  "manpower outsourcing company in India",
  "telecom infrastructure services",
  "IT solutions company",
  "facility management services",
  "security staffing services",
  "government tender support",
];

type PageMetadataConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataConfig): Metadata {
  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 512,
          height: 512,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
