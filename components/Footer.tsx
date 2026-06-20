import { siteRepoUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto max-w-xl space-y-3 text-center text-sm text-muted">
        <p>
          Este sitio también lo hice yo, es{" "}
          <a
            href={siteRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 underline decoration-transparent transition-colors duration-300 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            open source en GitHub
          </a>
          .
        </p>
        <p>Valentín Felizia • {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
