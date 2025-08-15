import { Hero } from "@/components/hero";
import { PricingTable } from "@/components/pricing-table";

export const metadata = {
  title: "Pricing & Publisher Model (up to 49%)",
  description: "Choose publisher share, white-label implementation or consulting. Legal-first guardrails included."
};

export default function Page() {
  return (
    <>
      <Hero
        title="Pricing and publisher model"
        subtitle="Choose between publisher (up to 49%), white-label or consulting."
        primary={{ href: "/contact", label: "Contact sales" }}
        secondary={{ href: "/templates", label: "Explore templates" }}
      />
      <PricingTable />
    </>
  );
}
