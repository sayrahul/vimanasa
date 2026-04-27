import type { Metadata } from "next";
import { buildPageMetadata, getSiteUrl, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms and Conditions",
  description:
    "Review terms and conditions for use of the Vimanasa Services website and service-related communications.",
  path: "/terms-and-conditions",
  keywords: ["terms and conditions", "service terms", "website usage terms"],
});

export default function TermsAndConditionsPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/terms-and-conditions`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
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
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Terms and Conditions</h1>
        <p className="mb-10 text-sm text-muted-foreground">Last updated: April 25, 2026</p>

        <div className="space-y-7 rounded-3xl border border-border bg-card p-7 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Use of This Website</h2>
            <p>By accessing this website, you agree to use it for lawful informational and business communication purposes only.</p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Content and Intellectual Property</h2>
            <p>All brand assets, written content, and design elements are owned by Vimanasa Services unless otherwise stated. Unauthorized reuse is prohibited.</p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Commercial Information</h2>
            <p>Project scope, pricing, and availability shown on this website are indicative and may change based on requirements, compliance conditions, and contractual agreements.</p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Limitation of Liability</h2>
            <p>While we aim for accuracy, this website content is provided on an as-is basis. We are not liable for indirect losses resulting from reliance on website information.</p>
          </section>
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">Contact</h2>
            <p>For legal or contractual clarification, contact us at <a className="text-primary hover:underline" href="mailto:vimanasaservices@gmail.com">vimanasaservices@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
