import type { APIEvent } from "@solidjs/start/server";
import { getAllPostMetas } from "~/lib/content.server";

export function GET(_event: APIEvent) {
  return Response.json(getAllPostMetas());
}
