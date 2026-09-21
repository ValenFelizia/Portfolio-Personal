import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Valentín Felizia | Web Development",
    description:
      "Websites and online catalogs for local businesses. I help you sell better and build trust online.",
    ogImageAlt: "Valentín Felizia, web development for local businesses",
    locale: "en_US",
  },
  skipLink: "Skip to main content",
  header: {
    cta: "Let's talk",
  },
  languageSwitcher: {
    groupLabel: "Language",
    es: "ES",
    en: "EN",
    optionLabel: {
      es: "Spanish",
      en: "English",
    },
  },
  hero: {
    headline: "Web development focused on process and business.",
    subtitle:
      "I work with local businesses that sell on WhatsApp, need an online catalog or store, and want a clear, trustworthy digital presence.",
    cta: "Let's talk about your project",
    selectedWorkHeading: "Live sites",
  },
  projects: {
    heading: "Selected work",
    lede: "Real projects in production. Open a case study for the full story.",
  },
  projectCard: {
    readCaseStudy: "Read case study",
    visitLiveSite: "Visit live site",
    captureAlt: (title: string) => `Screenshot of ${title}`,
    logoAlt: (client: string) => `Logo for ${client}`,
    benefitsLabel: "Project benefits",
    captureSoon: "Screenshot coming soon",
  },
  serviceOffer: {
    heading: "What I can do for your business",
    lede: "I choose the format that fits your case and ship something publishable, without talking budget until I understand how you operate.",
    services: [
      {
        title: "Institutional landing",
        line: "A presentation site or landing with schedule, video, or multiple sections, tailored to what the business needs to show.",
      },
      {
        title: "Online catalog",
        line: "Products on the web and orders ready for WhatsApp, self-managed and with no commission per sale.",
      },
      {
        title: "Custom store",
        line: "E-commerce adapted to your operations, only when a landing or catalog is no longer enough.",
      },
    ],
  },
  about: {
    heading: "I understand your business before writing code",
    imageAlt: "Professional photo",
    paragraphs: [
      "I come from an engineering background, where I learned to analyze processes and find the real problem before proposing a solution. That led me to web development with a different approach: first understand how your business operates, then design and build something that fits day-to-day work.",
      "I build fast sites, catalogs, and e-commerce experiences aimed at concrete results: less operational friction, more trust from end customers, and technical decisions that do not lock you into commissions or tools you do not need.",
    ],
  },
  contact: {
    heading: "Got a project in mind?",
    lede: "The most direct way to start is WhatsApp. If you prefer another channel, those are available too.",
    afterHeading: "After you message me",
    afterLede:
      "We talk straight, you tell me what you need and where your business stands.",
    expectations: [
      "A first conversation with no commitment",
      "I review how you operate and put together a proposal/quote",
    ],
    recommendedChannel: "Recommended channel",
    options: {
      whatsapp: {
        label: "WhatsApp",
        description: "Let's chat!",
      },
      email: {
        label: "Email",
      },
      linkedin: {
        label: "LinkedIn",
        description: "Connect professionally",
      },
      github: {
        label: "GitHub",
        description: "Repositories from my projects",
      },
    },
  },
  footer: {
    thanks: "Thanks for reading.",
    openSourceBefore: "P.S. I also built this site,",
    openSourceLink: "open source on GitHub",
    openSourceAfter: ".",
    sectionsLabel: "Sections",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  notFound: {
    title: "Page not found",
    lede: "The route you are looking for does not exist or was moved.",
    backHome: "Back to home",
  },
  projectPage: {
    backHome: "Back to home",
    viewLive: "View live site",
    technicalDetails: "Technical details",
    viewRepo: "View repository",
    similarHeading: "Facing a similar problem?",
    similarLede:
      "If your business is dealing with something similar, let's talk — no commitment.",
    similarCta: "Message me",
    defaultDescription: (title: string, client: string) =>
      `Case study: ${title} for ${client}.`,
    captureAlt: (title: string) => `Screenshot of ${title}`,
    logoAlt: (client: string) => `Logo for ${client}`,
  },
  processOffer: {
    eyebrow: "How I work",
    heading: "From the first chat to a live site",
    lede: "No unnecessary steps: I understand your operations, design the flow, and build something publishable.",
    steps: [
      {
        number: "1",
        title: "Understand the business",
        description:
          "I listen to how you operate today, what is blocking you, and what outcome you want.",
      },
      {
        number: "2",
        title: "Design the flow",
        description:
          "I turn what you need into a concrete solution, without adding extra complexity.",
      },
      {
        number: "3",
        title: "Build and launch",
        description:
          "I develop, ship to production, and leave you with tools to manage it yourself.",
      },
    ],
  },
};
