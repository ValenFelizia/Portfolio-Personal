export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
    locale: string;
  };
  skipLink: string;
  header: {
    cta: string;
  };
  languageSwitcher: {
    groupLabel: string;
    es: string;
    en: string;
    optionLabel: {
      es: string;
      en: string;
    };
  };
  hero: {
    headline: string;
    subtitle: string;
    cta: string;
    selectedWorkHeading: string;
  };
  projects: {
    heading: string;
    lede: string;
  };
  projectCard: {
    readCaseStudy: string;
    visitLiveSite: string;
    captureAlt: (title: string) => string;
    logoAlt: (client: string) => string;
    benefitsLabel: string;
    captureSoon: string;
  };
  serviceOffer: {
    heading: string;
    lede: string;
    services: Array<{
      title: string;
      line: string;
    }>;
  };
  about: {
    heading: string;
    imageAlt: string;
    paragraphs: string[];
  };
  contact: {
    heading: string;
    lede: string;
    afterHeading: string;
    afterLede: string;
    expectations: string[];
    recommendedChannel: string;
    options: {
      whatsapp: { label: string; description: string };
      email: { label: string };
      linkedin: { label: string; description: string };
      github: { label: string; description: string };
    };
  };
  footer: {
    thanks: string;
    openSourceBefore: string;
    openSourceLink: string;
    openSourceAfter: string;
    sectionsLabel: string;
    projects: string;
    about: string;
    contact: string;
  };
  notFound: {
    title: string;
    lede: string;
    backHome: string;
  };
  projectPage: {
    backHome: string;
    viewLive: string;
    technicalDetails: string;
    viewRepo: string;
    similarHeading: string;
    similarLede: string;
    similarCta: string;
    defaultDescription: (title: string, client: string) => string;
    captureAlt: (title: string) => string;
    logoAlt: (client: string) => string;
  };
  processOffer: {
    eyebrow: string;
    heading: string;
    lede: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
};

export const es: Dictionary = {
  meta: {
    title: "Valentín Felizia | Desarrollo Web",
    description:
      "Sitios y catálogos web para negocios locales. Ayudo a vender mejor y generar confianza online.",
    ogImageAlt: "Valentín Felizia, desarrollo web para negocios locales",
    locale: "es_AR",
  },
  skipLink: "Saltar al contenido principal",
  header: {
    cta: "Hablemos",
  },
  languageSwitcher: {
    groupLabel: "Idioma",
    es: "ES",
    en: "EN",
    optionLabel: {
      es: "Español",
      en: "English",
    },
  },
  hero: {
    headline: "Desarrollo web enfocado en procesos y negocio.",
    subtitle:
      "Trabajo con negocios locales que venden por WhatsApp, necesitan un catálogo o tienda online y buscan una presencia digital clara y confiable.",
    cta: "Hablemos de tu proyecto",
    selectedWorkHeading: "Sitios publicados",
  },
  projects: {
    heading: "Trabajos destacados",
    lede: "Proyectos reales publicados. Podés ver el detalle leyendo el caso de estudio.",
  },
  projectCard: {
    readCaseStudy: "Leer caso de estudio",
    visitLiveSite: "Visitar sitio publicado",
    captureAlt: (title: string) => `Captura de ${title}`,
    logoAlt: (client: string) => `Logo de ${client}`,
    benefitsLabel: "Beneficios del proyecto",
    captureSoon: "Captura próximamente",
  },
  serviceOffer: {
    heading: "Qué puedo hacer por tu negocio",
    lede: "Elijo el formato que resuelve tu caso y entrego algo publicable, sin hablar de presupuesto hasta entender la operación.",
    services: [
      {
        title: "Landing institucional",
        line: "Carta de presentación o landing con agenda, video o varias secciones, a medida de lo que el negocio necesita mostrar.",
      },
      {
        title: "Catálogo online",
        line: "Productos en la web y pedidos listos para WhatsApp, autogestionable y sin comisiones por venta.",
      },
      {
        title: "Tienda a medida",
        line: "E-commerce adaptado a tu operación, solo cuando landing o catálogo ya no alcanzan.",
      },
    ],
  },
  about: {
    heading: "Entiendo tu negocio antes de escribir código",
    imageAlt: "Foto profesional",
    paragraphs: [
      "Vengo de un background en ingeniería, donde aprendí a analizar procesos y detectar el problema real antes de proponer una solución. Eso me llevó al desarrollo web con un enfoque distinto: primero entender cómo opera tu negocio, después diseñar y construir algo que tenga sentido en el día a día.",
      "Desarrollo sitios rápidos, catálogos y e-commerces pensados para resultados concretos: menos fricción operativa, más confianza del cliente final y decisiones técnicas que no te atan a comisiones ni herramientas que no necesitás.",
    ],
  },
  contact: {
    heading: "¿Tenés un proyecto en mente?",
    lede: "La forma más directa de empezar es por WhatsApp. Si preferís otro canal, también está disponible.",
    afterHeading: "Después de escribirme",
    afterLede:
      "Charlamos sin vueltas, me contás qué necesitás y en qué etapa está tu negocio.",
    expectations: [
      "Primera charla sin compromiso",
      "Analizo tu operación y te armo una propuesta/presupuesto",
    ],
    recommendedChannel: "Canal recomendado",
    options: {
      whatsapp: {
        label: "WhatsApp",
        description: "¡Charlemos!",
      },
      email: {
        label: "Email",
      },
      linkedin: {
        label: "LinkedIn",
        description: "Conectemos profesionalmente",
      },
      github: {
        label: "GitHub",
        description: "Repositorios de mis proyectos",
      },
    },
  },
  footer: {
    thanks: "Gracias por leer.",
    openSourceBefore: "P.D. Este sitio también lo hice yo,",
    openSourceLink: "open source en GitHub",
    openSourceAfter: ".",
    sectionsLabel: "Secciones",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
  },
  notFound: {
    title: "Página no encontrada",
    lede: "La ruta que buscás no existe o fue movida.",
    backHome: "Volver al inicio",
  },
  projectPage: {
    backHome: "Volver al inicio",
    viewLive: "Ver sitio en producción",
    technicalDetails: "Detalles técnicos",
    viewRepo: "Ver repositorio",
    similarHeading: "¿Tenés un problema parecido?",
    similarLede: "Si tu negocio enfrenta algo similar, charlemos, sin compromiso.",
    similarCta: "Escribime",
    defaultDescription: (title: string, client: string) =>
      `Caso de estudio: ${title} para ${client}.`,
    captureAlt: (title: string) => `Captura de ${title}`,
    logoAlt: (client: string) => `Logo de ${client}`,
  },
  processOffer: {
    eyebrow: "Cómo trabajo",
    heading: "De la primera charla al sitio en vivo",
    lede: "Sin pasos innecesarios: entiendo tu operación, diseño el flujo y construyo algo publicable.",
    steps: [
      {
        number: "1",
        title: "Entender el negocio",
        description:
          "Escucho cómo operás hoy, qué te frena y qué resultado buscás.",
      },
      {
        number: "2",
        title: "Diseñar el flujo",
        description:
          "Traduzco lo que necesitás en una solución concreta, sin agregar complejidad de más.",
      },
      {
        number: "3",
        title: "Construir y lanzar",
        description:
          "Desarrollo, publico en producción y te dejo herramientas para autogestionarte.",
      },
    ],
  },
};
