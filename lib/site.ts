export const whatsappPrefillMessage =
  "Hola Valentín, vi tu portfolio y me gustaría charlar sobre un proyecto.";

const WHATSAPP_PHONE = "5493518126970";

export function getWhatsAppUrl(
  message = whatsappPrefillMessage,
): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/** URL pública del sitio. Configurar en Cloudflare Pages: NEXT_PUBLIC_SITE_URL */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-vfelizia.pages.dev/";

export const siteMetadata = {
  name: "Valentín Felizia",
  title: "Valentín Felizia | Desarrollo Web",
  description:
    "Sitios y catálogos web para negocios locales. Ayudo a vender mejor y generar confianza online.",
  locale: "es_AR",
  ogImageAlt: "Valentín Felizia — Desarrollo web para negocios locales",
};

export const siteContact = {
  email: "valentinfelizia@gmail.com",
  whatsapp: getWhatsAppUrl(),
  linkedin: "https://www.linkedin.com/in/valent%C3%ADn-felizia-103059212",
  github: "https://github.com/ValenFelizia",
};

/** Portfolio repository (open source). */
export const siteRepoUrl = "https://github.com/ValenFelizia/Portfolio-Personal";
