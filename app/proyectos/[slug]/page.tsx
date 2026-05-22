import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
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

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="inline-flex text-sm text-muted transition-colors duration-300 hover:text-accent"
      >
        ← Volver al inicio
      </Link>

      <header className="mt-12 space-y-4 border-b border-white/10 pb-10">
        <p className="text-sm text-muted">{frontmatter.client}</p>
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {frontmatter.title}
        </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <span>{frontmatter.role}</span>
          <span>{frontmatter.date}</span>
        </div>
      </header>

      <article className="py-12">
        <MDXRemote source={content} components={MDXComponents} />
      </article>
    </main>
  );
}
