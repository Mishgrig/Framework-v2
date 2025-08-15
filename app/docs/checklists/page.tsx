export const metadata = {
  title: "Checklists — Legal-first & Launch",
  description: "Download legal-first and launch checklists."
};

export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Checklists</h1>
      <p className="mt-4 text-muted-foreground">Legal-first and launch checklists to support your build.</p>
      <ul className="mt-6 list-disc pl-5 text-sm text-muted-foreground">
        <li><a className="underline" href="/legal-checklist.md">Legal-first checklist (Markdown)</a></li>
        <li><a className="underline" href="/launch-checklist.md">Launch checklist (Markdown)</a></li>
      </ul>
    </section>
  );
}
