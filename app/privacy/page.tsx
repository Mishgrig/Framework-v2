export const metadata = {
  title: "Privacy Policy",
  description: "How we handle data, cookies and user rights."
};

export default function Page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-muted-foreground">This Privacy Policy explains how we handle data, cookies and user rights.</p>
      <h2 className="mt-8 text-xl font-semibold">1. Data We Collect</h2>
      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
        <li>Contact submissions (name, email, organization, message).</li>
        <li>Usage analytics events (e.g., sign_up, template_view, template_clone, contact_submit).</li>
        <li>Cookies related to analytics and your consent choice.</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">2. How We Use Data</h2>
      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
        <li>To respond to inquiries and provide requested information.</li>
        <li>To improve the website and templates through aggregated analytics.</li>
        <li>To maintain security and prevent misuse.</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">3. Cookies</h2>
      <p className="mt-2 text-sm text-muted-foreground">We use analytics cookies as described in the cookie banner. You can manage your consent using the provided controls.</p>
      <h2 className="mt-6 text-xl font-semibold">4. Data Sharing</h2>
      <p className="mt-2 text-sm text-muted-foreground">We do not sell your data. Analytics providers may process data on our behalf under their terms.</p>
      <h2 className="mt-6 text-xl font-semibold">5. Data Retention</h2>
      <p className="mt-2 text-sm text-muted-foreground">We retain data only as long as necessary for the purposes described above or as required by law.</p>
      <h2 className="mt-6 text-xl font-semibold">6. Your Rights</h2>
      <p className="mt-2 text-sm text-muted-foreground">You may request access or deletion of your personal data by contacting us.</p>
      <h2 className="mt-6 text-xl font-semibold">7. Changes</h2>
      <p className="mt-2 text-sm text-muted-foreground">We may update this Policy from time to time. The latest version applies.</p>
      <h2 className="mt-6 text-xl font-semibold">8. Contact</h2>
      <p className="mt-2 text-sm text-muted-foreground">Email: contact@example.com</p>
      <p className="mt-8 text-xs text-muted-foreground">Disclaimer: We provide a legal-first approach (guidelines and filters). This Policy does not constitute legal advice.</p>
    </section>
  );
}
