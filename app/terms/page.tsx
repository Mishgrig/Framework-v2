export const metadata = {
  title: "Terms of Use",
  description: "Acceptable use, intellectual property and limitations."
};

export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Terms of Use</h1>
      <p className="mt-4 text-muted-foreground">These Terms govern your use of the website and the Studio.</p>
      <h2 className="mt-8 text-xl font-semibold">1. Scope</h2>
      <p className="mt-2 text-sm text-muted-foreground">You may use this website and the Studio as-is for exploration and evaluation purposes.</p>
      <h2 className="mt-6 text-xl font-semibold">2. Acceptable Use</h2>
      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
        <li>No unlawful, infringing or harmful content.</li>
        <li>No attempts to disrupt or reverse engineer the services.</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">3. Intellectual Property</h2>
      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
        <li>Templates and presets are examples; adapt safely for your jurisdiction.</li>
        <li>You are responsible for rights to any assets and data you use.</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">4. Disclaimers</h2>
      <p className="mt-2 text-sm text-muted-foreground">We provide guidelines and filters but do not provide legal advice. Outputs may require human review for accuracy and compliance.</p>
      <h2 className="mt-6 text-xl font-semibold">5. Limitation of Liability</h2>
      <p className="mt-2 text-sm text-muted-foreground">The services are provided “as is”, to the extent permitted by law.</p>
      <h2 className="mt-6 text-xl font-semibold">6. Contact</h2>
      <p className="mt-2 text-sm text-muted-foreground">Email: contact@example.com</p>
    </section>
  );
}
