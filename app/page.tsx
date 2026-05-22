import { AboutMinimal } from "@/components/AboutMinimal";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/getProjects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex flex-1 flex-col">
      <Hero />

      <section
        aria-label="Proyectos"
        className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8 sm:pb-32 sm:pt-12"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.frontmatter.title}
              client={project.frontmatter.client}
              techStack={project.frontmatter.techStack}
              liveUrl={project.frontmatter.liveUrl}
              imageSrc={`/${project.slug}-preview.webp`}
              brandColor={project.frontmatter.brandColor}
              logoPath={project.frontmatter.logoPath}
              logoScale={project.frontmatter.logoScale}
            />
          ))}
        </div>
      </section>

      <AboutMinimal imageSrc="/profile.webp" />
    </main>
  );
}
