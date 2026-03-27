import type { APIEvent } from "@solidjs/start/server";
import { parsePostBySlug } from "~/lib/content.server";

export function GET(event: APIEvent) {
  const result = parsePostBySlug(event.params.slug);
  if (!result) return new Response(null, { status: 404 });
  return Response.json(result);
}
