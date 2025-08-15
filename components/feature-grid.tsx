import { cn } from "@/lib/utils";

export function FeatureGrid({ items, className }: { items: { title: string; desc: string; icon?: React.ReactNode }[]; className?: string }) {
  return (
    <section className={cn("container py-12", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border bg-card p-6">
            <div className="mb-3">{it.icon}</div>
            <div className="font-semibold">{it.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
