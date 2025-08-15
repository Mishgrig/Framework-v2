"use client";
import { Textarea } from "@/components/ui/textarea";

export function JsonEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <Textarea className="font-mono text-sm h-[50vh] md:h-[calc(100vh-14rem)] bg-muted" value={value} onChange={(e) => onChange(e.target.value)} />
  );
}
