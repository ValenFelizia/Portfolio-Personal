import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:py-32"
    >
      <p className="text-sm uppercase tracking-widest text-muted">404</p>
      <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        La ruta que buscás no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-safe:hover:-translate-y-0.5"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
