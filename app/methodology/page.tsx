import { Hero } from "@/components/hero";
import { Stepper } from "@/components/stepper";
import { JsonLd } from "@/app/(marketing)/schema-org";

export const metadata = {
  title: "6-Step Methodology for Telegram Mini Apps",
  description: "Discovery, Visualization, Legal, Assembly, Launch, Support — a predictable path to publish."
};

const howTo = {
  "@context":"https://schema.org","@type":"HowTo","name":"6-Step Methodology for Telegram Mini Apps",
  "step":[
    {"@type":"HowToStep","name":"Discovery","text":"Goals, constraints, criteria, scope."},
    {"@type":"HowToStep","name":"Visualization","text":"Wireframes & starter UI."},
    {"@type":"HowToStep","name":"Legal","text":"IP filters & regional rules."},
    {"@type":"HowToStep","name":"Assembly","text":"Templates + AI build."},
    {"@type":"HowToStep","name":"Launch","text":"CI/CD, review, publish."},
    {"@type":"HowToStep","name":"Support","text":"Measure and iterate."}
  ]
};

export default function Page() {
  const steps = [
    { title: "Discovery", desc: "Goals, constraints, criteria, initial scope.", cta: { href: "/contact", label: "Start assessment" } },
    { title: "Visualization", desc: "Wireframes & starter UI; Mobile/Tablet/Desktop.", cta: { href: "/studio", label: "Open sample in Studio" } },
    { title: "Legal", desc: "IP filters: naming, mechanics, assets; regional rules.", cta: { href: "/legal-first", label: "Download checklist" } },
    { title: "Assembly", desc: "Assemble UI/logic from library; AI for copy/specs.", cta: { href: "/templates", label: "Open a template" } },
    { title: "Launch", desc: "CI/CD, review, publish; events logging.", cta: { href: "/analytics", label: "View workflow example" } },
    { title: "Support", desc: "Funnels, logs; scaling with parallel teams.", cta: { href: "/consulting", label: "Book a consultation" } }
  ];
  return (<>
    <Hero
      title="The 6-step methodology"
      subtitle="Repeatable path from idea to publish in Telegram."
      primary={{ href: "/templates", label: "Explore templates" }}
      secondary={{ href: "/pricing", label: "See pricing" }}
    />
    <Stepper steps={steps} />
    <JsonLd data={howTo} />
  </>);
}
