import { JSX } from "solid-js";

export const Buttons = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      class={`flex flex-col p-4 md:p-0 md:flex-row gap-2 ${props.class || ""}`}
    >
      {props.children}
    </div>
  );
};
