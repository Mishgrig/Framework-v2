import { Button } from "./ui/button";

export function PricingTable() {
  const plans = [
    {
      title: "Publisher (up to 49%)",
      features: [
        "Co-publish with revenue share (up to 49%)",
        "Templates, AI assistance, CI/CD, analytics",
        "Legal-first checklists, documentation"
      ],
      cta: { href: "/contact", label: "Become a publisher" }
    },
    {
      title: "White-label",
      features: [
        "Fixed-scope implementation under your brand",
        "Templates + AI, safe defaults",
        "Handover and training"
      ],
      cta: { href: "/contact", label: "Request a quote" }
    },
    {
      title: "Consulting",
      features: [
        "Assessment, planning and training",
        "Legal-first guidance",
        "Analytics & CI/CD best practices"
      ],
      cta: { href: "/contact", label: "Book a consultation" }
    }
  ];
  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div key={p.title} className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {p.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <a className="mt-6 inline-flex" href={p.cta.href}><Button>{p.cta.label}</Button></a>
          </div>
        ))}
      </div>
    </section>
  );
}
