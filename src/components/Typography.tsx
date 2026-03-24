import { JSX } from "solid-js";

export const H1 = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      {...props}
      class={`text-[5rem] font-black font-serif mb-2 leading-none ${props.class || ""}`}
    >
      {props.children}
    </h1>
  );
};
export const H2 = (
  props: JSX.HTMLAttributes<HTMLHeadingElement> & { noMargin?: boolean },
) => {
  return (
    <h2
      {...props}
      class={`text-4xl font-black tracking-tight ${props.class || ""}`}
      classList={{
        "m-0": props.noMargin,
        "mb-2 mt-5": !props.noMargin,
      }}
    >
      {props.children}
    </h2>
  );
};
export const H3 = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      {...props}
      class={`text-2xl mb-2 mt-5 font-black tracking-tight ${props.class || ""}`}
    >
      {props.children}
    </h3>
  );
};
