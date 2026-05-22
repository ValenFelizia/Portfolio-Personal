import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface ProjectFrontmatter {
  title: string;
  client: string;
  techStack: string;
  date: string;
  role: string;
  liveUrl: string;
  repoUrl: string;
  brandColor?: string;
  logoPath?: string;
  logoScale?: number;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

const REQUIRED_FRONTMATTER_KEYS: (keyof ProjectFrontmatter)[] = [
  "title",
  "client",
  "techStack",
  "date",
  "role",
  "liveUrl",
  "repoUrl",
];

function normalizeDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return String(value);
}

function parseOptionalNumber(value: unknown): number | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : undefined;
}

function parseOptionalString(value: unknown): string | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  return String(value);
}

function parseFrontmatter(data: Record<string, unknown>, filename: string): ProjectFrontmatter {
  const missing = REQUIRED_FRONTMATTER_KEYS.filter((key) => !data[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing frontmatter in ${filename}: ${missing.join(", ")}`,
    );
  }

  return {
    title: String(data.title),
    client: String(data.client),
    techStack: String(data.techStack),
    date: normalizeDate(data.date),
    role: String(data.role),
    liveUrl: String(data.liveUrl),
    repoUrl: String(data.repoUrl),
    brandColor: parseOptionalString(data.brandColor),
    logoPath: parseOptionalString(data.logoPath),
    logoScale: parseOptionalNumber(data.logoScale),
  };
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, "");
}

export async function getProjects(): Promise<Project[]> {
  const entries = await fs.readdir(CONTENT_DIR);
  const mdxFiles = entries.filter((file) => file.endsWith(".mdx"));

  const projects = await Promise.all(
    mdxFiles.map(async (filename) => {
      const filePath = path.join(CONTENT_DIR, filename);
      const raw = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(raw);

      return {
        slug: slugFromFilename(filename),
        frontmatter: parseFrontmatter(data, filename),
        content: content.trim(),
      };
    }),
  );

  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}
