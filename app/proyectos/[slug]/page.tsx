import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/MDXComponents";
import { ProjectArticle } from "@/components/ProjectArticle";
import {
  getProjectBySlug,
  getProjects,
  type ProjectFrontmatter,
} from "@/lib/getProjects";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE } from "@/lib/i18n/types";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function getProjectDescription(frontmatter: ProjectFrontmatter): string {
  const dictionary = getDictionary(DEFAULT_LOCALE);

  return (
    frontmatter.seoDescription ??
    frontmatter.summary ??
    frontmatter.impact ??
    dictionary.projectPage.defaultDescription(
      frontmatter.title,
      frontmatter.client,
    )
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const { frontmatter } = project.locales.es;
  const title = frontmatter.title;
  const description = getProjectDescription(frontmatter);
  const canonicalPath = `/proyectos/${slug}`;
  const ogImage = `/${slug}-preview.webp`;
  const dictionary = getDictionary(DEFAULT_LOCALE);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalPath,
      type: "article",
      images: [
        {
          url: ogImage,
          alt: dictionary.projectPage.captureAlt(frontmatter.title),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalPath,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const es = project.locales.es;
  const en = project.locales.en;

  return (
    <ProjectArticle
      es={{
        frontmatter: es.frontmatter,
        body: <MDXRemote source={es.content} components={MDXComponents} />,
      }}
      en={
        en
          ? {
              frontmatter: en.frontmatter,
              body: (
                <MDXRemote source={en.content} components={MDXComponents} />
              ),
            }
          : undefined
      }
    />
  );
}
