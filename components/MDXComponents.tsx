import type { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h2">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const headingAccent =
  "border-l-2 border-[color:color-mix(in_srgb,var(--brand-color,#6366f1)_35%,transparent)] pl-4 transition-[border-color,filter] duration-300 hover:border-[color:var(--brand-color,#6366f1)] motion-safe:hover:drop-shadow-[0_0_14px_color-mix(in_srgb,var(--brand-color,#6366f1)_22%,transparent)]";

function H2(props: HeadingProps) {
  return (
    <h2
      className={`mt-12 scroll-mt-24 text-2xl font-medium tracking-tight text-foreground first:mt-0 sm:text-3xl ${headingAccent}`}
      {...props}
    />
  );
}

function H3(props: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={`mt-8 scroll-mt-24 text-xl font-medium tracking-tight text-foreground ${headingAccent}`}
      {...props}
    />
  );
}

function P(props: ParagraphProps) {
  return (
    <p className="mt-4 text-base leading-relaxed text-muted" {...props} />
  );
}

function Ul(props: ListProps) {
  return (
    <ul
      className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-[color:var(--brand-color,#6366f1)]"
      {...props}
    />
  );
}

function Li(props: ListItemProps) {
  return <li className="leading-relaxed" {...props} />;
}

function A(props: AnchorProps) {
  return (
    <a
      className="text-foreground underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-300 hover:text-[color:var(--brand-color,#6366f1)] hover:decoration-[color:var(--brand-color,#6366f1)]"
      {...props}
    />
  );
}

function Blockquote(props: BlockquoteProps) {
  return (
    <blockquote
      className="mt-6 border-l-2 border-[color:color-mix(in_srgb,var(--brand-color,#6366f1)_55%,transparent)] pl-4 text-muted italic"
      {...props}
    />
  );
}

export const MDXComponents = {
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  li: Li,
  a: A,
  blockquote: Blockquote,
};
