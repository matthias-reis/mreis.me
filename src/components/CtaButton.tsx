import { JSX } from "solid-js";

interface CtaButtonProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: JSX.Element;
}

export function CtaButton(props: CtaButtonProps) {
  const baseClasses =
    "px-6 py-2 text-xl font-black font-serif rounded shadow-sm hover:shadow transition-all duration-200 active:scale-95 bg-col-hi-bg text-col-hi-fg";

  return (
    <a {...props} class={`${baseClasses} ${props.class || ""}`}>
      {props.children}
    </a>
  );
}
