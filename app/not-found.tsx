import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-start justify-center px-6 py-24 text-left sm:py-32"
    >
      <div className="mx-auto w-full max-w-lg">
        <p className="font-display text-5xl text-accent">404</p>
        <h1 className="section-title mt-4">Página no encontrada</h1>
        <p className="section-lede">
          La ruta que buscás no existe o fue movida.
        </p>
        <Link href="/" className="btn-primary mt-10">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
