import { JSX } from "solid-js";

interface CtaButtonProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: JSX.Element;
}

export function CtaButton(props: CtaButtonProps) {
  const baseClasses =
    "flex justify-center items-center px-6 py-2 text-xl font-black border-2 border-col-hi-bg font-serif rounded-lg shadow-sm hover:shadow transition-all duration-100 bg-col-hi-bg text-col-hi-fg hover:outline-2 outline-offset-2 outline-col-hi-bg focus:outline-2";

  return (
    <a {...props} class={`${baseClasses} ${props.class || ""}`}>
      {props.children}
    </a>
  );
}

export function CtaButtonSecondary(props: CtaButtonProps) {
  const baseClasses =
    "flex justify-center items-center px-6 py-2 text-xl font-black border-2 border-col-fg font-serif rounded-lg shadow-sm hover:shadow transition-all duration-100 hover:outline-2 outline-offset-2 outline-col-hi-bg focus:outline-2";

  return (
    <a {...props} class={`${baseClasses} ${props.class || ""}`}>
      {props.children}
    </a>
  );
}
