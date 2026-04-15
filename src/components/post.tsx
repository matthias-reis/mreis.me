import { For, JSX, Show } from "solid-js";
import { A } from "@solidjs/router";
import { Title, Meta } from "@solidjs/meta";
import type { ComponentMap, ParseResult, CustomBlockProps } from "solid-mds";
import type { PostMeta } from "~/lib/content";
import { H1 } from "~/components/Typography";
import { Calendar, ChevronLeft } from "lucide-solid";
import { CtaButton } from "./CtaButton";

export type TransformResult = ParseResult<PostMeta, {}>;

export function PostCard(props: { post: PostMeta }) {
  return (
    <article>
      <A
        href={`/posts/${props.post.slug}`}
        class="border rounded-lg p-5 block outline-offset-2 outline-col-hi-bg focus:outline-2 hover:outline-2 rounded-lg transition-all h-full"
      >
        <div class="flex items-center justify-between gap-2 mb-5">
          <span class="text-xs font-mono uppercase tracking-wide rounded">
            {props.post.variant}
          </span>
          <Show when={props.post.date}>
            <span class="text-xs bg-col-hi-bg/20 text-col-hi-bg rounded-full px-3 py-1">
              {props.post.date}
            </span>
          </Show>
        </div>
        <h3 class="font-bold text-xl">{props.post.title}</h3>
        <p class="mt-3 leading-relaxed">{props.post.description}</p>
      </A>
    </article>
  );
}

export const postComponentMap: ComponentMap = {
  h1: (
    props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLHeadingElement>,
  ) => <h2 class="mt-12 mb-4 text-4xl font-bold" {...props} />,
  h2: (
    props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLHeadingElement>,
  ) => <h2 class="mt-12 mb-4 text-3xl font-bold" {...props} />,
  h3: (
    props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLHeadingElement>,
  ) => <h2 class="mt-12 mb-4 text-xl font-bold" {...props} />,
  p: (
    props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLParagraphElement>,
  ) => <p class="my-4 text-lg leading-relaxed" {...props} />,
  a: (
    props: JSX.IntrinsicAttributes &
      JSX.AnchorHTMLAttributes<HTMLAnchorElement>,
  ) => <a class="text-col-hi-bg hover:underline" {...props} />,
  li: (
    props: JSX.IntrinsicAttributes & JSX.LiHTMLAttributes<HTMLLIElement>,
  ) => <li class="my-2 text-lg leading-relaxed" {...props} />,
  ul: (
    props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLUListElement>,
  ) => <ul class="my-4 list-disc list-inside" {...props} />,
  ol: (
    props: JSX.IntrinsicAttributes & JSX.OlHTMLAttributes<HTMLOListElement>,
  ) => <ol class="my-4 list-decimal list-inside" {...props} />,
  blockquote: (
    props: JSX.IntrinsicAttributes &
      JSX.BlockquoteHTMLAttributes<HTMLQuoteElement>,
  ) => <blockquote class="my-4 border-l-4 border-col-hi-bg pl-4" {...props} />,
  pre: (
    props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLPreElement>,
  ) => <pre class="my-4 overflow-x-auto" {...props} />,
  code: (props: JSX.IntrinsicAttributes & JSX.HTMLAttributes<HTMLElement>) => (
    <code class="bg-col-hi-bg/20 px-2 py-1 rounded" {...props} />
  ),
  cta: (
    props: JSX.IntrinsicAttributes &
      JSX.HTMLAttributes<HTMLAnchorElement> &
      CustomBlockProps,
  ) => (
    <CtaButton href={props.data?.href as string}>{props.data?.label}</CtaButton>
  ),
};

export function PostView(props: { meta: PostMeta; result: TransformResult }) {
  const steps = () =>
    Object.values(props.result.steps).sort((a, b) => a.current - b.current);

  return (
    <>
      <Title>{props.meta.title} - Matthias Reis</Title>
      <Meta name="description" content={props.meta.description} />
      <Meta property="og:title" content={props.meta.title} />
      <Meta property="og:description" content={props.meta.description} />
      <Show when={props.meta.image}>
        {(img) => (
          <>
            <Meta property="og:image" content={img()} />
            <Meta property="og:image:width" content="1200" />
            <Meta property="og:image:height" content="675" />
          </>
        )}
      </Show>
      <main class="max-w-2xl mx-auto px-5 pb-20">
        <div class="mb-12">
          <A href="/posts" class="text-sm flex items-center gap-2">
            <ChevronLeft size={16} /> all posts
          </A>
        </div>

        <div class="mb-12">
          <H1 class="text-center">{props.meta.title}</H1>
          <Show when={props.meta.image}>
            <img src={props.meta.image} alt={props.meta.title} class="my-5" />
          </Show>
          <Show when={props.meta.date}>
            <p class="text-sm flex items-center justify-end gap-2">
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
    </>
  );
}
