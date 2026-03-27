import { For, JSX, Show } from "solid-js";
import { A } from "@solidjs/router";
import { transform } from "solid-mds";
import type { ComponentMap } from "solid-mds";
import type { PostMeta } from "~/lib/content";
import { H1 } from "~/components/Typography";
import { Calendar, ChevronLeft } from "lucide-solid";

export type TransformResult = ReturnType<typeof transform<PostMeta>>;

export const postComponentMap: ComponentMap = {
  h1: (props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 class="mt-12 mb-4 text-4xl font-bold" {...props} />
  ),
  h2: (props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 class="mt-12 mb-4 text-3xl font-bold" {...props} />
  ),
  h3: (props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 class="mt-12 mb-4 text-xl font-bold" {...props} />
  ),
  p: (props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLParagraphElement>) => (
    <p class="my-4 text-lg leading-relaxed" {...props} />
  ),
  a: (props: JSX.IntrinsicAttributes & JSX.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a class="text-col-hi-bg hover:underline" {...props} />
  ),
  li: (props: JSX.IntrinsicAttributes & JSX.LiHTMLAttributes<HTMLLIElement>) => (
    <li class="my-2 text-lg leading-relaxed" {...props} />
  ),
  ul: (props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLUListElement>) => (
    <ul class="my-4 list-disc list-inside" {...props} />
  ),
  ol: (props: JSX.IntrinsicAttributes & JSX.OlHTMLAttributes<HTMLOListElement>) => (
    <ol class="my-4 list-decimal list-inside" {...props} />
  ),
  blockquote: (
    props: JSX.IntrinsicAttributes & JSX.BlockquoteHTMLAttributes<HTMLQuoteElement>,
  ) => <blockquote class="my-4 border-l-4 border-col-hi-bg pl-4" {...props} />,
  pre: (props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLPreElement>) => (
    <pre class="my-4 overflow-x-auto" {...props} />
  ),
  code: (props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLElement>) => (
    <code class="bg-col-hi-bg/20 px-2 py-1 rounded" {...props} />
  ),
};

export function PostView(props: { meta: PostMeta; result: TransformResult }) {
  const steps = () =>
    Object.values(props.result.steps).sort((a, b) => a.current - b.current);

  return (
    <main class="max-w-2xl mx-auto px-5 pb-20">
      <div class="mb-12">
        <A href="/posts" class="text-sm flex items-center gap-2">
          <ChevronLeft size={16} /> all posts
        </A>
      </div>

      <div class="mb-12">
        <H1>{props.meta.title}</H1>
        <Show when={props.meta.date}>
          <p class="text-sm flex items-center gap-2">
            <Calendar size={16} /> {props.meta.date}
          </p>
        </Show>
      </div>

      <For each={steps()}>
        {(step) => (
          <section class="mb-12">
            <step.Body />
          </section>
        )}
      </For>
    </main>
  );
}
