import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12 text-sm">
      <div className="container grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">Telegram MiniApps Framework</div>
          <p className="mt-2 text-muted-foreground">Templates, AI tools, legal-first, CI/CD and analytics.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Product</div>
          <ul className="space-y-1">
            <li><Link href="/templates" className="hover:underline">Templates</Link></li>
            <li><Link href="/methodology" className="hover:underline">Methodology</Link></li>
            <li><Link href="/legal-first" className="hover:underline">Legal-first</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1">
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 text-muted-foreground">&copy; {new Date().getFullYear()} Telegram MiniApps Framework</div>
    </footer>
  );
}
