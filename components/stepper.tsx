export function Stepper({ steps }: { steps: { title: string; desc: string; cta?: { href: string; label: string } }[] }) {
  return (
    <section className="container py-12">
      <ol className="grid gap-4 md:grid-cols-6">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-xl border p-4">
            <div className="text-sm text-muted-foreground">Step {i + 1}</div>
            <div className="mt-1 font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            {s.cta && <a className="mt-3 inline-flex text-sm underline" href={s.cta.href}>{s.cta.label}</a>}
          </li>
        ))}
      </ol>
    </section>
  );
}
