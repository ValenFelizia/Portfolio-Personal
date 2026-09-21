import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { type Locale } from "@/lib/i18n/types";

export interface ProjectFrontmatter {
  title: string;
  client: string;
  techStack: string;
  date: string;
  role: string;
  liveUrl: string;
  /** Only for open-source projects shown in the portfolio. */
  repoUrl?: string;
  brandColor?: string;
  logoPath?: string;
  logoScale?: number;
  summary?: string;
  impact?: string;
  seoDescription?: string;
  /** Business-facing tags for home cards (comma-separated in MDX). */
  highlights?: string;
}

export interface ProjectLocaleContent {
  frontmatter: ProjectFrontmatter;
  content: string;
}

export interface Project {
  slug: string;
  /** Spanish source of truth (also used for static metadata defaults). */
  frontmatter: ProjectFrontmatter;
  content: string;
  /** Per-locale bodies; `es` always present, `en` when `content/en/{slug}.mdx` exists. */
  locales: Partial<Record<Locale, ProjectLocaleContent>> & {
    es: ProjectLocaleContent;
  };
}

const CONTENT_DIR = path.join(process.cwd(), "content");
const CONTENT_EN_DIR = path.join(CONTENT_DIR, "en");

const REQUIRED_FRONTMATTER_KEYS: (keyof ProjectFrontmatter)[] = [
  "title",
  "client",
  "techStack",
  "date",
  "role",
  "liveUrl",
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

function parseFrontmatter(
  data: Record<string, unknown>,
  filename: string,
): ProjectFrontmatter {
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
    repoUrl: parseOptionalString(data.repoUrl),
    brandColor: parseOptionalString(data.brandColor),
    logoPath: parseOptionalString(data.logoPath),
    logoScale: parseOptionalNumber(data.logoScale),
    summary: parseOptionalString(data.summary),
    impact: parseOptionalString(data.impact),
    seoDescription: parseOptionalString(data.seoDescription),
    highlights: parseOptionalString(data.highlights),
  };
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, "");
}

async function readProjectFile(
  filePath: string,
  filename: string,
): Promise<ProjectLocaleContent> {
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    frontmatter: parseFrontmatter(data, filename),
    content: content.trim(),
  };
}

async function readEnglishLocale(
  slug: string,
): Promise<ProjectLocaleContent | null> {
  const filename = `${slug}.mdx`;
  const filePath = path.join(CONTENT_EN_DIR, filename);

  try {
    await fs.access(filePath);
  } catch {
    return null;
  }

  return readProjectFile(filePath, `en/${filename}`);
}

/** Pick locale content with Spanish fallback. */
export function getProjectLocaleContent(
  project: Project,
  locale: Locale,
): ProjectLocaleContent {
  if (locale === "en" && project.locales.en) {
    return project.locales.en;
  }

  return project.locales.es;
}

export async function getProjects(): Promise<Project[]> {
  const entries = await fs.readdir(CONTENT_DIR);
  const mdxFiles = entries.filter((file) => file.endsWith(".mdx"));

  const projects = await Promise.all(
    mdxFiles.map(async (filename) => {
      const slug = slugFromFilename(filename);
      const filePath = path.join(CONTENT_DIR, filename);
      const es = await readProjectFile(filePath, filename);
      const en = await readEnglishLocale(slug);

      const locales: Project["locales"] = { es };
      if (en) {
        locales.en = en;
      }

      return {
        slug,
        frontmatter: es.frontmatter,
        content: es.content,
        locales,
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
