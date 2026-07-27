import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link
          href="/"
          className="shrink-0 truncate text-sm font-semibold tracking-tight text-foreground transition-colors duration-300 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-base"
        >
          Valentín Felizia
        </Link>

        <Link href="/#contacto" className="btn-primary shrink-0 py-2 text-xs sm:text-sm">
          Hablemos
        </Link>
      </div>
    </header>
  );
}
