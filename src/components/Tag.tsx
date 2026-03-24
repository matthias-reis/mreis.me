import { JSX } from "solid-js";

export function Tag(props: { children: JSX.Element; class?: string }) {
  return (
    <span
      class={`inline-block border border-[var(--color-fg-primary)] px-2 py-1 text-sm rounded ${
        props.class || ""
      }`}
    >
      {props.children}
    </span>
  );
}
