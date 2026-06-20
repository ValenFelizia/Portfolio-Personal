/**
 * Dimensiones de referencia para assets en /public.
 * Al agregar previews o fotos nuevas, correr: npm run optimize-images
 */
export const imageConfig = {
  profile: {
    width: 352,
    height: 352,
  },
  projectPreview: {
    width: 1000,
    height: 625,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
} as const;
