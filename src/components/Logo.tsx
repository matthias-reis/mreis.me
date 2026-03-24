import { JSX } from "solid-js";

export const Logo = (props: JSX.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      class={`font-black font-sans tracking-tighter ${props.class || ""} flex flex-col leading-none`}
    >
      <span class="text-[20px] text-col-fg/50">mreis.me</span>
      <span class="text-[21px]">Matthias</span>
      <span class="text-[21px]">Reis</span>
    </span>
  );
};
