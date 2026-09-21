import type { Metadata } from "next";
import { AboutMinimal } from "@/components/AboutMinimal";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { HomeProjects, type HomeProjectCardData } from "@/components/HomeProjects";
import { ServiceOffer } from "@/components/ServiceOffer";
import { getProjects, type Project } from "@/lib/getProjects";
import { siteMetadata } from "@/lib/site";
import type { LocalizedString } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

const FEATURED_SLUG = "rumbos";
const COMPACT_ORDER = ["felisa", "forvex"] as const;

function localizedField(
  esValue: string | undefined,
  enValue: string | undefined,
): LocalizedString | undefined {
  if (!esValue) {
    return undefined;
  }

  return {
    es: esValue,
    en: enValue,
  };
}

function toCardData(project: Project): HomeProjectCardData {
  const es = project.locales.es.frontmatter;
  const en = project.locales.en?.frontmatter;

  return {
    slug: project.slug,
    title: { es: es.title, en: en?.title },
    client: { es: es.client, en: en?.client },
    liveUrl: es.liveUrl,
    imageSrc: `/${project.slug}-preview.webp`,
    brandColor: es.brandColor,
    logoPath: es.logoPath,
    logoScale: es.logoScale,
    impact: localizedField(es.impact, en?.impact),
    highlights: localizedField(es.highlights, en?.highlights),
  };
}

export default async function Home() {
  const projects = await getProjects();
  const featuredProject =
    projects.find((project) => project.slug === FEATURED_SLUG) ?? projects[0];
  const restProjects = projects
    .filter((project) => project.slug !== featuredProject?.slug)
    .sort((a, b) => {
      const ai = COMPACT_ORDER.indexOf(
        a.slug as (typeof COMPACT_ORDER)[number],
      );
      const bi = COMPACT_ORDER.indexOf(
        b.slug as (typeof COMPACT_ORDER)[number],
      );
      const aRank = ai === -1 ? COMPACT_ORDER.length : ai;
      const bRank = bi === -1 ? COMPACT_ORDER.length : bi;
      return aRank - bRank;
    });

  const featured = featuredProject ? toCardData(featuredProject) : null;
  const rest = restProjects.map(toCardData);

  const selectedWork = [featuredProject, ...restProjects]
    .filter((project): project is NonNullable<typeof project> =>
      Boolean(project),
    )
    .map((project) => ({
      slug: project.slug,
      title: {
        es: project.locales.es.frontmatter.title,
        en: project.locales.en?.frontmatter.title,
      },
    }));

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero selectedWork={selectedWork} />
      <HomeProjects featured={featured} rest={rest} />
      <ServiceOffer />
      <AboutMinimal imageSrc="/profile.webp" />
      <Contact />
    </main>
  );
}
