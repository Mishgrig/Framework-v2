import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";

export const metadata = {
  title: "Why Telegram for Mini Apps",
  description: "900M+ users, no-install apps, payments/Web3/ads — and a growing Mini Apps ecosystem."
};

export default function Page() {
  return (
    <>
      <Hero
        title="Why Telegram for Mini Apps"
        subtitle="900M+ users, no-install apps, payments/Web3/ads — and a growing Mini Apps ecosystem."
        primary={{ href: "/templates", label: "Start with a Telegram template" }}
        secondary={{ href: "/contact", label: "Learn publishing flow" }}
      />
      <FeatureGrid items={[
        { title: "No install", desc: "Cross-platform Mini Apps inside Telegram." },
        { title: "Built-in tools", desc: "Payments, promotion and Web3 integrations." },
        { title: "Ecosystem", desc: "A growing catalog of Mini Apps." }
      ]} />
    </>
  );
}
