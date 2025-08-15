"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { submitContact } from "@/app/actions";
import { track } from "@/lib/analytics";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const onSubmit = async (formData: FormData) => {
    setPending(true);
    const ok = await submitContact(formData);
    setPending(false);
    if (ok) { track("contact_submit", { source: "contact_form" }); alert("Thanks — we’ll get back within 1–2 business days."); }
    else { alert("Something went wrong."); }
  };
  return (
    <form action={onSubmit} className="grid gap-4 max-w-xl">
      <div>
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required placeholder="Jane Doe" />
      </div>
      <div>
        <Label htmlFor="email">Work email</Label>
        <Input id="email" name="email" type="email" required placeholder="name@company.com" />
      </div>
      <div>
        <Label htmlFor="org">Organization</Label>
        <Input id="org" name="org" placeholder="City Library" />
      </div>
      <div>
        <Label htmlFor="usecase">Use case</Label>
        <Input id="usecase" name="usecase" placeholder="Booking / Quizzes / Civic" />
      </div>
      <div>
        <Label htmlFor="msg">Message</Label>
        <Textarea id="msg" name="message" rows={4} placeholder="Tell us about your goal…" />
      </div>
      <div className="flex items-center gap-2">
        <input id="consent" name="consent" type="checkbox" required />
        <Label htmlFor="consent" className="text-sm text-muted-foreground">I agree to the Privacy Policy and Terms.</Label>
      </div>
      <Button disabled={pending} type="submit">{pending ? "Sending…" : "Request a demo"}</Button>
    </form>
  );
}
