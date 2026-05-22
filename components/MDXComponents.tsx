import type { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h2">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

function H2(props: HeadingProps) {
  return (
    <h2
      className="mt-12 scroll-mt-24 text-2xl font-medium tracking-tight text-foreground first:mt-0 sm:text-3xl"
      {...props}
    />
  );
}

function H3(props: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className="mt-8 scroll-mt-24 text-xl font-medium tracking-tight text-foreground"
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
      className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-accent"
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
      className="text-foreground underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-300 hover:text-accent hover:decoration-indigo-500"
      {...props}
    />
  );
}

function Blockquote(props: BlockquoteProps) {
  return (
    <blockquote
      className="mt-6 border-l-2 border-accent/60 pl-4 text-muted italic"
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
