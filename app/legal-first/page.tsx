import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";

export const metadata = {
  title: "Legal-first — IP-Safe Guidelines & Checklist",
  description: "IP filters for naming, mechanics and assets with regional awareness. Not legal advice."
};

export default function Page() {
  return (
    <>
      <Hero
        title="Legal-first by design"
        subtitle="IP filters, naming and mechanics guidelines with regional awareness."
        primary={{ href: "/privacy", label: "See Privacy" }}
        secondary={{ href: "/terms", label: "See Terms" }}
        bullets={[
          "Prevent IP issues early",
          "Use safe naming and assets",
          "Follow regional usage rules"
        ]}
      />
      <FeatureGrid items={[
        { title: "Principles", desc: "Early prevention, safe defaults, documented boundaries." },
        { title: "Checklist", desc: "Naming, claims, assets, data handling, consent, attribution." },
        { title: "Boundaries", desc: "Guidelines only — not legal advice." }
      ]} />
      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Compliance checklist</h2>
        <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5">
          <li>Naming: no trademark confusion; descriptive, generic where possible.</li>
          <li>Claims: no unverifiable promises; avoid regulated claims.</li>
          <li>Assets: use licensed or original assets only; keep proof of license.</li>
          <li>Mechanics: avoid copying protected game/app mechanics verbatim.</li>
          <li>Data: collect minimum necessary; disclose purpose; honor deletion requests.</li>
          <li>Consent: explicit consent for tracking; cookie banner visible and accessible.</li>
          <li>Attribution: include required credits; follow brand usage rules.</li>
          <li>Regions: check local rules for payments, promotions and data storage.</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">Download: <a className="underline" href="/legal-checklist.md">Legal-first checklist (Markdown)</a></p>
      </section>
    </>
  );
}
