import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";

export const metadata = {
  title: "AI Tools for Interfaces, Logic and Specs",
  description: "Generate copy, screens and technical briefs with safe defaults."
};

export default function Page() {
  return (
    <>
      <Hero
        title="AI assistants for interfaces, logic and specs"
        subtitle="Generate copy, screens and technical briefs with safe defaults."
        primary={{ href: "/studio", label: "Try in Studio" }}
        secondary={{ href: "/templates", label: "View examples" }}
      />
      <FeatureGrid items={[
        { title: "Command bar", desc: "Use /add button or /add screen quiz." },
        { title: "Spec & copy", desc: "Screen descriptions turn into UI blocks." },
        { title: "Examples", desc: "Quiz, booking and survey flows." }
      ]} />
    </>
  );
}
