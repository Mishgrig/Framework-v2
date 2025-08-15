"use client";
export function PreviewSurface({ json, device }: { json: any; device: "mobile"|"tablet"|"desktop" }) {
  const width = device === "mobile" ? 390 : device === "tablet" ? 768 : "100%";
  const screens: any[] = Array.isArray(json?.screens) ? json.screens : [];
  return (
    <div className="border rounded-xl bg-card p-4 h-[50vh] md:h-[calc(100vh-14rem)] overflow-auto">
      <div style={{ width }} className="mx-auto">
        {screens.length === 0 && <div className="text-sm text-muted-foreground">No screens yet. Try the command bar or gallery.</div>}
        {screens.map((s, idx) => (
          <div key={idx} className="rounded-xl border p-4 mb-4">
            <div className="font-semibold">{s.title ?? s.type}</div>
            <div className="mt-2 text-sm text-muted-foreground">Type: {s.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
