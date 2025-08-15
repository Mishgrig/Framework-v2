"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Hero } from "@/components/hero";
import { TemplateCard } from "@/components/template-card";
import { compressToEncodedURIComponent } from "lz-string";
import { track } from "@/lib/analytics";
import { JsonLd } from "@/app/(marketing)/schema-org";

export const metadata = {
  title: "Templates — Booking, Quizzes, Civic & more",
  description: "Start from proven templates. Open any template in the Studio and share by URL.",
  alternates: { canonical: "/templates" }
};

const presets: Record<string, unknown> = {
  booking: { screens: [{ type: "form", title: "Book a slot", fields: ["name","email","date"] }], logic: [{ on: "submit", action: "confirm" }] },
  quizzes: { screens: [{ type: "quiz", title: "Sample quiz", questions: 5 }], logic: [{ on: "complete", action: "score" }] },
  civic:   { screens: [{ type: "survey", title: "City feedback", fields: ["topic","message"] }], logic: [{ on: "submit", action: "notify" }] }
};

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();
  const lang = params.get("lang") ?? "en";

  useEffect(() => { track("template_view", { path: "/templates" }); }, []);

  const openInStudio = (key: keyof typeof presets) => {
    const s = compressToEncodedURIComponent(JSON.stringify(presets[key]));
    router.push(`/studio?s=${s}&lang=${lang}`);
  };

  const itemList = {
    "@context":"https://schema.org","@type":"ItemList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Booking"},
      {"@type":"ListItem","position":2,"name":"Quizzes"},
      {"@type":"ListItem","position":3,"name":"Civic"}
    ]
  };

  return (<>
    <Hero
      title="Templates to start fast"
      subtitle="Booking, quizzes, civic surveys, registration, notifications, checklists."
      primary={{ href: "#gallery", label: "Browse templates" }}
      secondary={{ href: "/studio", label: "Try Studio" }}
    />
    <section id="gallery" className="container py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <TemplateCard name="Booking" desc="Appointment flow with confirmation" tags={["Booking"]} onOpen={() => openInStudio("booking")} href="#" />
      <TemplateCard name="Quizzes" desc="Single/multi-choice, scoring and feedback" tags={["Quizzes"]} onOpen={() => openInStudio("quizzes")} href="#" />
      <TemplateCard name="Civic" desc="Surveys, registrations and notifications" tags={["Civic"]} onOpen={() => openInStudio("civic")} href="#" />
    </section>
    <JsonLd data={itemList} />
  </>);
}
