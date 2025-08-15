"use server";

export async function submitContact(formData: FormData): Promise<boolean> {
  const email = String(formData.get("email") ?? "");
  const name = String(formData.get("name") ?? "");
  if (!email.includes("@") || !name) return false;
  console.log("[contact_submit]", {
    at: new Date().toISOString(),
    name,
    email,
    org: formData.get("org"),
    usecase: formData.get("usecase"),
    message: formData.get("message")
  });
  return true;
}
