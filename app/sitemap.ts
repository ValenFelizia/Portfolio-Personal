import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/getProjects";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const base = siteUrl.replace(/\/$/, "");

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${base}/proyectos/${project.slug}`,
      lastModified: new Date(project.frontmatter.date),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
