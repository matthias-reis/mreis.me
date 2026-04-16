import { createMemo, Show, Suspense } from "solid-js";
import { useParams, query, createAsync } from "@solidjs/router";
import type { RouteDefinition } from "@solidjs/router";
import { getRequestEvent } from "solid-js/web";
import type { HastParseResult } from "hast-mds";
import { transform } from "solid-mds";
import type { PostMeta } from "~/lib/content";
import { PostView, postComponentMap } from "~/components/post";
import { slidesComponentMap, SlidesView } from "~/components/slides";

function apiBase() {
  const event = getRequestEvent();
  return event ? new URL(event.request.url).origin : "";
}

// query returns raw HAST (serializable JSON) — hast-mds stays server-only
const getPostHast = query(async (slug: string) => {
  const res = await fetch(`${apiBase()}/api/posts/${slug}`);
  if (!res.ok) throw new Response(null, { status: res.status });
  return res.json() as Promise<HastParseResult<PostMeta>>;
}, "post");

export const route: RouteDefinition = {
  preload: ({ params }) => getPostHast(params.slug!),
};

export default function PostDetail() {
  const params = useParams<{ slug: string }>();
  const hastData = createAsync(() => getPostHast(params.slug), { deferStream: true });

  // transform() called here (client-side) — solid-mds converts HAST to Solid components
  const post = createMemo(() => {
    const hast = hastData();
    if (!hast) return null;
    return transform<PostMeta, {}>(
      hast,
      hast.global?.variant === "slides" ? slidesComponentMap : postComponentMap,
    );
  });

  return (
    <Suspense>
      <Show when={post()}>
        {(p) => (
          <Show
            when={p().global?.variant === "slides"}
            fallback={<PostView meta={p().global!} result={p()} />}
          >
            <SlidesView meta={p().global!} result={p()} />
          </Show>
        )}
      </Show>
    </Suspense>
  );
}
