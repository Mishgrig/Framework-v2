import "./globals.css";
import { Metadata } from "next";
import { site } from "@/lib/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";
import { AnalyticsScripts } from "@/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: "%s · " + site.name },
  description: site.description,
  openGraph: {
    title: site.name, description: site.description, url: site.url,
    siteName: site.name, images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    locale: site.locale, type: "website"
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: [site.ogImage] },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <AnalyticsScripts />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org","@type":"WebSite","name":site.name,"url":site.url
          }) }} />
      </body>
    </html>
  );
}
