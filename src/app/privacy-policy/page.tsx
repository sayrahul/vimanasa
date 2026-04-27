import type { Metadata } from "next";
import { buildPageMetadata, getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Vimanasa Services, including data usage, retention, and communication practices.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "data protection", "website privacy notice"],
});

export default function PrivacyPolicyPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/privacy-policy`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: siteUrl,
    },
  };

  return (
    <div className="w-full pb-12 pt-28 md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="container mx-auto max-w-4xl px-6">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mb-10 text-sm text-muted-foreground">Last updated: April 25, 2026</p>

        <div className="space-y-7 rounded-3xl border border-border bg-card p-7 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Information We Collect</h2>
            <p>We may collect contact details you provide through forms or direct communication, including your name, organization details, phone number, email address, and inquiry content.</p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">How We Use Information</h2>
            <p>We use submitted information to respond to business inquiries, prepare proposals, support active projects, and improve service quality and communication responsiveness.</p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Data Sharing</h2>
            <p>We do not sell personal information. We may share information with authorized internal teams or service partners only when necessary to process a request or execute a project.</p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Data Security and Retention</h2>
            <p>We apply reasonable technical and organizational controls to protect information and retain records only for legitimate business, operational, and legal purposes.</p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Your Rights</h2>
            <p>You may request correction or deletion of personal information by contacting us at <a className="text-primary hover:underline" href="mailto:vimanasaservices@gmail.com">vimanasaservices@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
