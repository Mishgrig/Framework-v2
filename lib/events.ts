export type AppEvent =
  | "sign_up"
  | "template_view"
  | "template_clone"
  | "contact_submit";

export type EventProps = Record<string, string | number | boolean | null | undefined>;
