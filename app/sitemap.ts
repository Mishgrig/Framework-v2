import { type MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["","solution","methodology","templates","ai","legal-first","analytics","pricing","studio","about","contact","why-telegram","privacy","terms"];
  const now = new Date();
  return pages.map((p) => ({
    url: `${site.url}/${p}`, lastModified: now, changeFrequency: "weekly", priority: p === "" ? 1 : 0.7
  }));
}
