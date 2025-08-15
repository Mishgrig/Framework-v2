import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contact and demo",
  description: "Tell us about your goals — we’ll propose the fastest safe path."
};

export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Contact and demo</h1>
      <p className="mt-2 text-muted-foreground">Tell us about your goals.</p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
