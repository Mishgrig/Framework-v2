"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";

const CommandBar = dynamic(() => import("@/components/studio/command-bar").then(m => m.CommandBar), { ssr: false });
const JsonEditor = dynamic(() => import("@/components/studio/json-editor").then(m => m.JsonEditor), { ssr: false });
const DeviceSwitch = dynamic(() => import("@/components/studio/device-switch").then(m => m.DeviceSwitch), { ssr: false });
const PreviewSurface = dynamic(() => import("@/components/studio/preview-surface").then(m => m.PreviewSurface), { ssr: false });
const EventConsole = dynamic(() => import("@/components/studio/event-console").then(m => m.EventConsole), { ssr: false });
const BlocksGallery = dynamic(() => import("@/components/studio/blocks-gallery").then(m => m.BlocksGallery), { ssr: false });

export default function StudioPage() {
  const [device, setDevice] = useState("mobile" as "mobile"|"tablet"|"desktop");
  const [logs, setLogs] = useState<string[]>([]);
  const [jsonText, setJsonText] = useState<string>('{"screens": []}');
  const json = useMemo(() => { try { return JSON.parse(jsonText); } catch { return { screens: [] }; } }, [jsonText]);

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("s");
    if (s) {
      const raw = decompressFromEncodedURIComponent(s);
      if (raw) setJsonText(raw);
    }
  }, []);

  const onCommand = (cmd: string) => {
    setLogs((l) => [`> ${cmd}`, ...l]);
    const data: any = { ...json };
    if (!Array.isArray(data.screens)) data.screens = [];
    if (cmd.startsWith("/add screen quiz")) data.screens.push({ type: "quiz", title: "Quiz" });
    if (cmd.startsWith("/add button")) data.screens.push({ type: "button", title: cmd.split("'")[1] ?? "Button" });
    setJsonText(JSON.stringify(data, null, 2));
  };

  const onInsert = (snippet: any) => {
    const data: any = { ...json };
    data.screens = [...(data.screens ?? []), ...(snippet.screens ?? [])];
    setJsonText(JSON.stringify(data, null, 2));
    setLogs((l) => [`+ Inserted "${snippet.screens?.[0]?.type ?? "block"}"`, ...l]);
  };

  const share = () => {
    const s = compressToEncodedURIComponent(jsonText);
    const url = `${location.origin}/studio?s=${s}`;
    navigator.clipboard.writeText(url);
    alert("Shareable link copied to clipboard.");
  };

  return (
    <section className="container py-6 md:py-10">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <CommandBar onCommand={onCommand} />
          <JsonEditor value={jsonText} onChange={setJsonText} />
          <BlocksGallery onInsert={onInsert} />
        </div>
        <div className="space-y-4">
          <DeviceSwitch value={device as any} onChange={setDevice as any} />
          <PreviewSurface json={json} device={device as any} />
          <EventConsole logs={logs} />
          <Button variant="secondary" onClick={share}>Share</Button>
        </div>
      </div>
    </section>
  );
}
