import { JSX } from "solid-js";

export function Box(props: {
  title: string;
  children: JSX.Element;
  class?: string;
}) {
  return (
    <div
      class={`border border-[var(--color-fg-primary)] rounded-lg p-6 ${
        props.class || ""
      }`}
    >
      <strong class="block text-lg font-bold mb-5 border-b-2 border-col-fg pb-1">
        {props.title}
      </strong>
      <div>{props.children}</div>
    </div>
  );
}
