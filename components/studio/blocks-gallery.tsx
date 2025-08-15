"use client";
import { Button } from "@/components/ui/button";

export function BlocksGallery({ onInsert }: { onInsert: (snippet: any) => void }) {
  const blocks = [
    { name: "Booking form", snippet: { screens: [{ type: "form", title: "Book", fields: ["name","email","date"] }] } },
    { name: "Quiz", snippet: { screens: [{ type: "quiz", title: "Quiz", questions: 3 }] } },
    { name: "Survey", snippet: { screens: [{ type: "survey", title: "Survey", fields: ["topic","message"] }] } }
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {blocks.map(b => (
        <div key={b.name} className="rounded-xl border p-3">
          <div className="text-sm font-medium">{b.name}</div>
          <Button className="mt-2 w-full" onClick={() => onInsert(b.snippet)}>Insert</Button>
        </div>
      ))}
    </div>
  );
}
