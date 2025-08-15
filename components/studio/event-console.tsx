"use client";
export function EventConsole({ logs }: { logs: string[] }) {
  return (
    <div className="mt-4 border rounded-xl bg-background p-3 text-xs h-40 overflow-auto">
      {logs.length === 0 ? <div className="text-muted-foreground">No events yet.</div> :
        logs.map((l, i) => <div key={i}>{l}</div>)}
    </div>
  );
}
