import { For, Show, Suspense } from "solid-js";
import { createAsync, query } from "@solidjs/router";
import type { RouteDefinition } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";
import type { PostMeta } from "~/lib/content";
import { H1 } from "~/components/Typography";
import { PostCard } from "~/components/post";

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
