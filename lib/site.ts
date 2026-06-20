export const whatsappPrefillMessage =
  "Hola Valentín, vi tu portfolio y me gustaría charlar sobre un proyecto.";

const WHATSAPP_PHONE = "5493518126970";

export function getWhatsAppUrl(
  message = whatsappPrefillMessage,
): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const siteContact = {
  email: "valentinfelizia@gmail.com",
  whatsapp: getWhatsAppUrl(),
  linkedin: "https://linkedin.com/in/valentín-felizia-103059212",
  github: "https://github.com/ValenFelizia",
};
