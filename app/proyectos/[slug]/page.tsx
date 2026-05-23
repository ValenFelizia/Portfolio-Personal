import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { CSSProperties } from "react";
import { MDXComponents } from "@/components/MDXComponents";
import { getProjectBySlug, getProjects } from "@/lib/getProjects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;
  const brandColor = frontmatter.brandColor ?? "#6366f1";
  const logoScale = frontmatter.logoScale ?? 1;

  const brandStyle = {
    "--brand-color": brandColor,
  } as CSSProperties;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 rounded-md px-1 py-1 -ml-1 text-sm text-muted transition-colors duration-300 hover:text-foreground"
      >
        <ArrowLeft
          className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:-translate-x-0.5"
          aria-hidden
        />
        Volver al inicio
      </Link>

      <article style={brandStyle} className="mt-12">
        <header className="space-y-6 border-b border-[color:color-mix(in_srgb,var(--brand-color)_20%,transparent)] pb-10">
          <p className="text-sm uppercase tracking-widest text-muted">
            {frontmatter.client}
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-4">
              <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {frontmatter.title}
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                <span>{frontmatter.role}</span>
                <span>{frontmatter.date}</span>
              </div>
            </div>

            {frontmatter.logoPath && (
              <div
                className={`shrink-0 self-start rounded-lg border border-white/15 bg-white/95 shadow-sm ${
                  logoScale > 1 ? "p-1" : "p-2"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={frontmatter.logoPath}
                  alt={`Logo de ${frontmatter.client}`}
                  className="w-auto object-contain object-left"
                  style={{
                    height: `${1.75 * logoScale}rem`,
                    maxWidth: `${5 * logoScale}rem`,
                  }}
                />
              </div>
            )}
          </div>
        </header>

        <div className="py-12">
          <MDXRemote source={content} components={MDXComponents} />
        </div>
      </article>
    </main>
  );
}
