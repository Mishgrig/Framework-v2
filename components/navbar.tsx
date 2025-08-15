"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { dict, getLocaleFromSearch } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const params = useSearchParams();
  const pathname = usePathname();
  const locale = getLocaleFromSearch(Object.fromEntries(params.entries()));
  const t = dict[locale];
  const withLang = (href: string) => `${href}${href.includes("?") ? "&" : "?"}lang=${locale}`;

  const links = [
    { href: "/", label: t.nav_home },
    { href: "/solution", label: t.nav_solution },
    { href: "/methodology", label: t.nav_methodology },
    { href: "/templates", label: t.nav_templates },
    { href: "/legal-first", label: t.nav_legal },
    { href: "/pricing", label: t.nav_pricing },
    { href: "/studio", label: t.nav_studio }
  ];

  const toggleLang = () => {
    const next = locale === "en" ? "ru" : "en";
    const q = new URLSearchParams(params.toString());
    q.set("lang", next);
    window.location.assign(`${pathname}?${q.toString()}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="container flex h-14 items-center gap-4">
        <Link href={withLang("/")} className="font-semibold">Telegram MiniApps Framework</Link>
        <div className="hidden md:flex items-center gap-4">
          {links.map(l => <Link key={l.href} href={withLang(l.href)} className="text-sm hover:underline">{l.label}</Link>)}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" onClick={toggleLang}>{locale.toUpperCase()}</Button>
          <Link href={withLang("/studio")}><Button>{dict[locale].cta_try_studio}</Button></Link>
          <Link href={withLang("/pricing")}><Button variant="secondary">Pricing</Button></Link>
        </div>
      </nav>
    </header>
  );
}
