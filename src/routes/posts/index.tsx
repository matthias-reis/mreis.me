import { For, Show, Suspense } from "solid-js";
import { A, createAsync, query } from "@solidjs/router";
import type { RouteDefinition } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";
import type { PostMeta } from "~/lib/content";
import { H1 } from "~/components/Typography";

function apiBase() {
  const event = getRequestEvent();
  return event ? new URL(event.request.url).origin : "";
}

const getPosts = query(async () => {
  const res = await fetch(`${apiBase()}/api/posts`);
  return res.json() as Promise<PostMeta[]>;
}, "posts");

export const route: RouteDefinition = {
  preload: () => getPosts(),
};

function PostCard(props: { post: PostMeta }) {
  return (
    <article>
      <A
        href={`/posts/${props.post.slug}`}
        class="border rounded-lg p-5 block outline-offset-2 outline-col-hi-bg focus:outline-2 hover:outline-2 rounded-lg transition-all"
      >
        <div class="flex items-center justify-between gap-2 mb-5">
          <span class="text-xs font-mono uppercase tracking-wide rounded ">
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

export default function PostIndex() {
  const posts = createAsync(() => getPosts());

  return (
    <main class="max-w-4xl mx-auto px-5 pb-20">
      <H1 class="!mb-4">Posts & Talks</H1>
      <p class="text-xl leading-relaxed mb-16">
        Occasional articles and slides from technical talks.
      </p>

      <Suspense>
        <Show when={posts()}>
          {(all) => (
            <Show when={all().length > 0}>
              <section class="mb-16">
                <div class="space-y-4">
                  <For each={all()}>
                    {(post) => <PostCard post={post} />}
                  </For>
                </div>
              </section>
            </Show>
          )}
        </Show>
      </Suspense>
    </main>
  );
}
