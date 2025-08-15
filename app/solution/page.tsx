import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";

export const metadata = {
  title: "Production System for Telegram Mini Apps",
  description: "Template libraries, AI assistance, legal-first filters, CI/CD and analytics for faster, safer launches."
};

export default function Page() {
  return (
    <>
      <Hero
        title="A production system for Telegram Mini Apps"
        subtitle="Templates + AI + legal-first + CI/CD = faster, safer launches."
        primary={{ href: "/templates", label: "Explore templates" }}
        secondary={{ href: "/methodology", label: "See methodology" }}
      />
      <FeatureGrid items={[
        { title: "Template libraries", desc: "UI, logic, monetization and onboarding blocks." },
        { title: "AI tools", desc: "Generate interfaces, content and specs." },
        { title: "Legal-first", desc: "IP filters and guidelines built-in." }
      ]} />
    </>
  );
}
