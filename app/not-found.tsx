"use client";

import Link from "next/link";
import { useDictionary } from "@/lib/i18n";

export default function NotFound() {
  const { notFound } = useDictionary();

  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-start justify-center px-6 py-24 text-left sm:py-32"
    >
      <div className="mx-auto w-full max-w-lg">
        <p className="font-display text-5xl text-accent">404</p>
        <h1 className="section-title mt-4">{notFound.title}</h1>
        <p className="section-lede">{notFound.lede}</p>
        <Link href="/" className="btn-primary mt-10">
          {notFound.backHome}
        </Link>
      </div>
    </main>
  );
}
