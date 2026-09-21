import { localeBootstrapScript } from "./locale";

/** Runs before paint to set html lang / data-locale (static export safe). */
export function LocaleScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: localeBootstrapScript }}
    />
  );
}
