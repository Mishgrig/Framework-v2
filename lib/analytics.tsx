"use client";

import { AppEvent, EventProps } from "./events";

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: EventProps }) => void;
    dataLayer?: unknown[];
    gtag?: (...args: any[]) => void;
  }
}

export function track(event: AppEvent, props?: EventProps) {
  try {
    if (typeof window === "undefined") return;
    if (window.plausible) { window.plausible(event, props ? { props } : undefined); return; }
    if (window.gtag) { window.gtag("event", event, props || {}); return; }
    console.log("[analytics]", event, props || {});
  } catch (e) { console.warn("track error", e); }
}

export function useTrack() { return track; }

export function AnalyticsScripts() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const ga4 = process.env.NEXT_PUBLIC_GA4_ID;
  return (<>
    {plausibleDomain && (<script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />)}
    {ga4 && (<>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`} />
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', '${ga4}');`}} />
    </>)}
  </>);
}
