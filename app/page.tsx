import { AboutMinimal } from "@/components/AboutMinimal";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ProcessOffer } from "@/components/ProcessOffer";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/getProjects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ProcessOffer />

      <section
        id="proyectos"
        aria-label="Proyectos"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-24 pt-8 sm:pb-32 sm:pt-12"
      >
        <p className="text-sm uppercase tracking-widest text-muted">
          Trabajos destacados
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          Proyectos reales que desarrollé y publiqué. Cada uno
          resolvió un problema concreto de negocio.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="motion-safe:animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <ProjectCard
                slug={project.slug}
                title={project.frontmatter.title}
                client={project.frontmatter.client}
                techStack={project.frontmatter.techStack}
                liveUrl={project.frontmatter.liveUrl}
                imageSrc={`/${project.slug}-preview.webp`}
                brandColor={project.frontmatter.brandColor}
                logoPath={project.frontmatter.logoPath}
                logoScale={project.frontmatter.logoScale}
                impact={project.frontmatter.impact}
              />
            </div>
          ))}
        </div>
      </section>

      <AboutMinimal imageSrc="/profile.webp" />
      <Contact />
    </main>
  );
}
