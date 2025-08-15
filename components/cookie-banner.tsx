"use client";
import { useEffect, useState } from "react";
import { dict, getLocaleFromSearch } from "@/lib/i18n";
import { Button } from "./ui/button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { if (typeof window !== "undefined" && !localStorage.getItem("cookie-accepted")) setVisible(true); }, []);
  if (!visible) return null;
  const locale = getLocaleFromSearch(Object.fromEntries(new URLSearchParams(typeof window !== "undefined" ? window.location.search : "").entries()));
  const t = dict[locale];
  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[min(90%,720px)] -translate-x-1/2 rounded-2xl bg-primary text-primary-foreground p-4 shadow-lg">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">{t.cookie_text}</p>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => alert("No settings implemented in MVP")}>{t.cookie_manage}</Button>
          <Button onClick={() => { localStorage.setItem("cookie-accepted", "1"); setVisible(false); }}>{t.cookie_accept}</Button>
        </div>
      </div>
    </div>
  );
}
