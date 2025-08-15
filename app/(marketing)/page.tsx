import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { Stepper } from "@/components/stepper";
import ContactForm from "@/components/contact-form";
import { JsonLd } from "./schema-org";
import { site } from "@/lib/site";

export const metadata = {
  title: "Telegram MiniApps Framework — Launch in 14 days",
  description: "Templates, AI tools, legal-first approach, CI/CD and analytics to design and publish Telegram Mini Apps in 14 days."
};

export default function Page() {
  const features = [
    { title: "Template-driven", desc: "Reuse up to 70% of UI and flows by design." },
    { title: "AI-assisted build", desc: "Generate copy, screens and specs with safe defaults." },
    { title: "Legal-first", desc: "IP filters, naming and mechanics guidelines." }
  ];
  const steps = [
    { title: "Discovery", desc: "Market & needs analysis.", cta: { href: "/methodology", label: "See methodology" } },
    { title: "Visualization", desc: "Wireframes & starter UI." },
    { title: "Legal", desc: "IP filters & regional rules.", cta: { href: "/legal-first", label: "Read legal-first" } },
    { title: "Assembly", desc: "Templates + AI build.", cta: { href: "/templates", label: "Explore templates" } },
    { title: "Launch", desc: "CI/CD, review, publish." },
    { title: "Support", desc: "Measure and iterate." }
  ];

  const orgLd = { "@context":"https://schema.org","@type":"Organization","name":site.name,"url":site.url,"logo":site.ogImage };
  const productLd = { "@context":"https://schema.org","@type":"Product","name":"Telegram MiniApps Framework","description":site.description,"brand":site.name };
  const faqLd = {
    "@context":"https://schema.org","@type":"FAQPage",
    "mainEntity":[
      { "@type":"Question","name":"Do you provide legal advice?","acceptedAnswer": { "@type":"Answer","text":"No. We provide legal-first guidelines and filters; not legal advice." } },
      { "@type":"Question","name":"What analytics are included?","acceptedAnswer": { "@type":"Answer","text":"Event tracking for sign_up, template_view, template_clone and contact_submit." } }
    ]
  };

  return (<>
    <Hero
      title="Launch Telegram Mini Apps in 14 days"
      subtitle="Templates, AI tools, legal-first approach, CI/CD and analytics — from idea to publish."
      bullets={[
        "Template-driven assembly (UI, logic, monetization)",
        "AI for copy, flows and technical specs",
        "CI/CD and events analytics built-in"
      ]}
      primary={{ href: "/templates", label: "Start with a template" }}
      secondary={{ href: "/studio", label: "Try Studio" }}
    />
    <FeatureGrid items={features} />
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">A predictable 6-step path</h2>
      <p className="mt-2 text-muted-foreground">Discovery → Visualization → Legal → Assembly → Launch → Support</p>
    </section>
    <Stepper steps={steps} />
    <section className="container py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Contact and demo</h2>
          <p className="mt-2 text-muted-foreground">Tell us about your goals — we’ll propose the fastest safe path.</p>
        </div>
        <ContactForm />
      </div>
    </section>
    <JsonLd data={orgLd} />
    <JsonLd data={productLd} />
    <JsonLd data={faqLd} />
  </>);
}
