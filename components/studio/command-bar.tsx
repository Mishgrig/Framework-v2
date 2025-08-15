"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function CommandBar({ onCommand }: { onCommand: (cmd: string) => void }) {
  const [value, setValue] = useState("");
  return (
    <div className="border rounded-xl p-2 bg-background sticky top-16">
      <Input value={value} onChange={e => setValue(e.target.value)} placeholder="/add screen quiz  |  /add button 'Book now'" onKeyDown={(e) => {
        if (e.key === "Enter" && value.trim()) { onCommand(value.trim()); setValue(""); }
      }} />
      <div className="mt-2 text-xs text-muted-foreground">Tips: /add screen quiz | /add button 'Submit' | /link action confirm</div>
    </div>
  );
}
