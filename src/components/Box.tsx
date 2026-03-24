import { JSX } from "solid-js";

export function Box(props: { title: string; children: JSX.Element; class?: string }) {
  return (
    <div
      class={`border border-[var(--color-fg-primary)] rounded-lg p-6 ${
        props.class || ""
      }`}
    >
      <strong class="block text-lg font-bold mb-4 border-b border-[var(--color-fg-primary)] pb-2">
        {props.title}
      </strong>
      <div class="text-[var(--color-fg-muted)]">{props.children}</div>
    </div>
  );
}
