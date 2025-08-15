import { Button } from "./ui/button";

export function Hero(props: {
  title: string; subtitle: string; bullets?: string[];
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  media?: React.ReactNode;
}) {
  const { title, subtitle, bullets = [], primary, secondary, media } = props;
  return (
    <section className="container grid gap-8 md:grid-cols-2 items-center py-16 md:py-24">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>
        {bullets.length > 0 && (
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {bullets.map((b) => <li key={b}>• {b}</li>)}
          </ul>
        )}
        <div className="mt-8 flex gap-3">
          {primary && <a href={primary.href}><Button>{primary.label}</Button></a>}
          {secondary && <a href={secondary.href}><Button variant="secondary">{secondary.label}</Button></a>}
        </div>
      </div>
      <div className="rounded-2xl border aspect-video bg-muted" aria-hidden>{media}</div>
    </section>
  );
}
