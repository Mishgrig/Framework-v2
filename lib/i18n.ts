export type Locale = "en" | "ru";

export const dict: Record<Locale, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_solution: "Solution",
    nav_methodology: "Methodology",
    nav_templates: "Templates",
    nav_ai: "AI Tools",
    nav_legal: "Legal-first",
    nav_analytics: "Analytics & CI/CD",
    nav_pricing: "Pricing",
    nav_studio: "Studio",
    nav_about: "About",
    nav_contact: "Contact",
    cta_start_template: "Start with a template",
    cta_try_studio: "Try Studio",
    cta_request_demo: "Request a demo",
    cookie_text: "We use analytics events to improve this website. Learn more in our Privacy Policy.",
    cookie_accept: "Accept",
    cookie_manage: "Manage settings"
  },
  ru: {
    nav_home: "Главная",
    nav_solution: "Решение",
    nav_methodology: "Методология",
    nav_templates: "Шаблоны",
    nav_ai: "AI-инструменты",
    nav_legal: "Legal-first",
    nav_analytics: "Аналитика и CI/CD",
    nav_pricing: "Цены",
    nav_studio: "Студия",
    nav_about: "О нас",
    nav_contact: "Контакты",
    cta_start_template: "Начать с шаблона",
    cta_try_studio: "Открыть Студию",
    cta_request_demo: "Запросить демо",
    cookie_text: "Мы используем аналитические события для улучшения сайта. Подробнее в Политике конфиденциальности.",
    cookie_accept: "Принять",
    cookie_manage: "Настройки"
  }
};

export function getLocaleFromSearch(searchParams?: Record<string, string | string[] | undefined>): Locale {
  const lang = (searchParams?.lang ?? "en");
  const v = Array.isArray(lang) ? lang[0] : lang;
  return v === "ru" ? "ru" : "en";
}
