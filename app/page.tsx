import type { Metadata } from "next";
import { AboutMinimal } from "@/components/AboutMinimal";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ServiceOffer } from "@/components/ServiceOffer";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/getProjects";
import { siteMetadata } from "@/lib/site";

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

export default async function Home() {
  const projects = await getProjects();
  const featured =
    projects.find((project) => project.slug === FEATURED_SLUG) ?? projects[0];
  const rest = projects.filter((project) => project.slug !== featured?.slug);

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero />

      <section
        id="proyectos"
        aria-labelledby="proyectos-heading"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-16 pt-4 sm:pb-24 sm:pt-8"
      >
        <div className="grid gap-4 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-12">
          <div className="min-w-0">
            <h2 id="proyectos-heading" className="section-title">
              Trabajos destacados
            </h2>
          </div>
          <p className="min-w-0 max-w-xl text-base leading-relaxed text-muted md:justify-self-end">
            Proyectos reales publicados. Podés ver el detalle leyendo el caso de estudio.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {featured && (
            <ProjectCard
              variant="featured"
              slug={featured.slug}
              title={featured.frontmatter.title}
              client={featured.frontmatter.client}
              liveUrl={featured.frontmatter.liveUrl}
              imageSrc={`/${featured.slug}-preview.webp`}
              brandColor={featured.frontmatter.brandColor}
              logoPath={featured.frontmatter.logoPath}
              logoScale={featured.frontmatter.logoScale}
              impact={featured.frontmatter.impact}
              priorityImage
            />
          )}

          {rest.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((project) => (
                <div key={project.slug} className="min-w-0">
                  <ProjectCard
                    variant="compact"
                    slug={project.slug}
                    title={project.frontmatter.title}
                    client={project.frontmatter.client}
                    highlights={project.frontmatter.highlights}
                    liveUrl={project.frontmatter.liveUrl}
                    imageSrc={`/${project.slug}-preview.webp`}
                    brandColor={project.frontmatter.brandColor}
                    logoPath={project.frontmatter.logoPath}
                    logoScale={project.frontmatter.logoScale}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ServiceOffer />
      <AboutMinimal imageSrc="/profile.webp" />
      <Contact />
    </main>
  );
}
