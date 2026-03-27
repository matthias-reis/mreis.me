import { parse } from "hast-mds";
import type { HastParseResult } from "hast-mds";
import type { PostMeta } from "./content";

const rawFiles = import.meta.glob("/content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export function getAllPostMetas(): PostMeta[] {
  return Object.values(rawFiles)
    .map((raw) => parse<PostMeta>(raw).global)
    .filter((meta): meta is PostMeta => meta !== null)
    .sort((a, b) => (a.date && b.date ? b.date.localeCompare(a.date) : 0));
}

export function parsePostBySlug(slug: string): HastParseResult<PostMeta> | null {
  for (const raw of Object.values(rawFiles)) {
    const parsed = parse<PostMeta>(raw);
    if (parsed.global?.slug === slug) {
      return parsed;
    }
  }
  return null;
}
