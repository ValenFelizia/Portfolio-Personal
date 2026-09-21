"use client";

import { useDictionary } from "@/lib/i18n";
import type { LocalizedString } from "@/components/ProjectCard";
import { ProjectCard } from "@/components/ProjectCard";

export type HomeProjectCardData = {
  slug: string;
  title: LocalizedString;
  client: LocalizedString;
  liveUrl: string;
  imageSrc: string;
  brandColor?: string;
  logoPath?: string;
  logoScale?: number;
  impact?: LocalizedString;
  highlights?: LocalizedString;
};

type HomeProjectsProps = {
  featured: HomeProjectCardData | null;
  rest: HomeProjectCardData[];
};

export function HomeProjects({ featured, rest }: HomeProjectsProps) {
  const { projects } = useDictionary();

  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-16 pt-4 sm:pb-24 sm:pt-8"
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-12">
        <div className="min-w-0">
          <h2 id="proyectos-heading" className="section-title">
            {projects.heading}
          </h2>
        </div>
        <p className="min-w-0 max-w-xl text-base leading-relaxed text-muted md:justify-self-end">
          {projects.lede}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {featured && (
          <ProjectCard
            variant="featured"
            slug={featured.slug}
            title={featured.title}
            client={featured.client}
            liveUrl={featured.liveUrl}
            imageSrc={featured.imageSrc}
            brandColor={featured.brandColor}
            logoPath={featured.logoPath}
            logoScale={featured.logoScale}
            impact={featured.impact}
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
                  title={project.title}
                  client={project.client}
                  highlights={project.highlights}
                  liveUrl={project.liveUrl}
                  imageSrc={project.imageSrc}
                  brandColor={project.brandColor}
                  logoPath={project.logoPath}
                  logoScale={project.logoScale}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
