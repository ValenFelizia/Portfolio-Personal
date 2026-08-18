import Link from "next/link";
import { siteRepoUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-rule)] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4 text-left text-sm leading-relaxed text-muted">
          <p className="font-display text-xl text-foreground">
            Gracias por leer.
          </p>
          <p>Valentín Felizia · {new Date().getFullYear()}</p>
          <p>
            P.D. Este sitio también lo hice yo,{" "}
            <a
              href={siteRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/90 underline decoration-transparent transition-colors duration-300 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              open source en GitHub
            </a>
            .
          </p>
        </div>

        <nav aria-label="Secciones" className="shrink-0">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li>
              <Link
                href="/#proyectos"
                className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/#sobre-mi"
                className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                href="/#contacto"
                className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
