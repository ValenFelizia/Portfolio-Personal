"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

type NavAnchorLinkProps = {
  href: string;
  label: string;
  className?: string;
};

function getSectionId(href: string): string | null {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return null;
  }

  return href.slice(hashIndex + 1);
}

function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  element.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

export function NavAnchorLink({ href, label, className }: NavAnchorLinkProps) {
  const pathname = usePathname();
  const sectionId = getSectionId(href);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!sectionId || pathname !== "/") {
      return;
    }

    event.preventDefault();
    scrollToSection(sectionId);
    window.history.pushState(null, "", `/#${sectionId}`);
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {label}
    </Link>
  );
}
