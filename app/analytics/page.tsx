import { Hero } from "@/components/hero";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Analytics & CI/CD — Events and Workflow",
  description: "Events, funnels and logs with automated builds and deploys."
};

export default function Page() {
  return (
    <>
      <Hero
        title="Analytics and CI/CD built-in"
        subtitle="Events, funnels and logs with automated builds and deploys."
        primary={{ href: "/templates", label: "Start with a template" }}
        secondary={{ href: "/pricing", label: "See pricing" }}
      />
      <section className="container py-12 grid gap-6">
        <Card>
          <h2 className="text-xl font-semibold">Events</h2>
          <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5">
            <li><code>sign_up</code> — primary CTA click (“Start with a template” / “Try Studio”)</li>
            <li><code>template_view</code> — page view of <code>/templates</code></li>
            <li><code>template_clone</code> — “Open in Studio” click on a template</li>
            <li><code>contact_submit</code> — successful contact form submission</li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Funnel</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            sign_up → template_view → template_clone → contact_submit
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">CI/CD</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            GitHub Actions: lint → typecheck → build → deploy (Vercel). Preview for PRs, production for main.
          </p>
        </Card>
      </section>
    </>
  );
}
