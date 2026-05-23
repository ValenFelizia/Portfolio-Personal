import Link from "next/link";
import { NavAnchorLink } from "@/components/NavAnchorLink";

const navLinks = [
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#111111]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-gray-200 font-semibold tracking-tight text-foreground transition-colors duration-300 hover:text-accent"
        >
          Valentín Felizia
        </Link>

        <nav aria-label="Principal">
          <ul className="flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavAnchorLink
                  href={link.href}
                  label={link.label}
                  className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
