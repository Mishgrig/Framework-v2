"use client";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { track } from "@/lib/analytics";

export function TemplateCard(props: {
  name: string; desc: string; tags?: string[]; onOpen?: () => void; href?: string;
}) {
  const { name, desc, tags = [], onOpen, href } = props;
  const open = () => { track("template_clone", { template: name }); onOpen?.(); };
  return (
    <article className="rounded-2xl border p-4 bg-card hover:shadow-md transition">
      <div className="aspect-video rounded-xl bg-muted mb-4" />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => <Badge key={t}>{t}</Badge>)}
      </div>
      <div className="mt-4 flex gap-2">
        <Button onClick={open}>Open in Studio</Button>
        {href && <a href={href}><Button variant="secondary">Preview</Button></a>}
      </div>
    </article>
  );
}
