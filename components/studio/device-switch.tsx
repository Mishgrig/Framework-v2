"use client";
import { Button } from "@/components/ui/button";

export function DeviceSwitch({ value, onChange }: { value: "mobile"|"tablet"|"desktop"; onChange: (v: "mobile"|"tablet"|"desktop") => void }) {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" onClick={() => onChange("mobile")}>Mobile</Button>
      <Button variant="ghost" onClick={() => onChange("tablet")}>Tablet</Button>
      <Button variant="ghost" onClick={() => onChange("desktop")}>Desktop</Button>
    </div>
  );
}
