---
# mreis.me-55za
title: Blog & Talks Section
status: in-progress
type: feature
priority: normal
created_at: 2026-03-23T20:32:26Z
updated_at: 2026-03-26T00:00:00Z
parent: mreis.me-ysti
---

Section for occasional articles and potential slides from technical talks.

## Routes

- `/post` — overview listing all posts and talks (`src/routes/post/index.tsx`)
- `/post/:slug` — detail view, behaviour depends on variant (`src/routes/post/[slug].tsx`)

## Content Structure

All content lives in `/content/*.mds` files (MDS format, see below).
The content registry `src/lib/content.ts` uses `import.meta.glob` to load and parse all files at build time.

### Content Variants

Each file must declare a `variant` in its global metadata:

- `post` — rendered as a continuous long-form article (all steps concatenated)
- `slides` — rendered as a step-by-step slide deck with Previous / Next navigation

### Required Global Metadata Fields

Every content file must declare these in a `yaml @@` block at the top:

| Field         | Type                  | Description                              |
|---------------|-----------------------|------------------------------------------|
| `title`       | string                | Displayed heading in list and detail     |
| `description` | string                | Short teaser, shown on overview page     |
| `slug`        | string                | URL-safe identifier, must be unique      |
| `variant`     | `"post"` or `"slides"` | Determines rendering mode               |
| `date`        | string (YYYY-MM-DD)   | Optional, used for sorting               |

---

## MDS Format Reference

The project uses [hast-mds](../monorepo/packages/hast-mds) for parsing and
[solid-mds](../monorepo/packages/solid-mds) for rendering.

MDS (Markdown Steps) is a superset of Markdown that adds step separators and
structured metadata blocks.

### Global Metadata Block (required at top of file)

Must come before any `+++step` separators.

````
```yaml @@
title: My Post Title
description: A short description shown on the overview page.
slug: my-post-title
variant: post
date: 2026-03-26
```
````

### Step Separators

Steps are delimited by `+++` followed by a step ID on its own line.
Step IDs must match `/^[a-z0-9-]+$/` (lowercase letters, digits, hyphens only).

```
+++intro

# Introduction

Content of the first step/slide.

+++details

# Going Deeper

Content of the second step/slide.
```

If no `+++` separators are present, the entire file is treated as a single step (`default`).

### Per-Step Local Metadata (optional)

A `yaml @` block (single `@`) at the start of a step sets step-local data.
A `md @/name` block sets a named markdown sub-section (e.g., speaker notes).

````
+++my-slide
```yaml @
layout: centered
```

```md @/notes
Speaker notes go here — not shown in the main body.
```

# Slide Content
````

### Supported Markdown Features

- Standard Markdown (headings, bold, italic, links, images, lists, code blocks)
- GitHub Flavored Markdown (tables, task lists, strikethrough)
- Math via LaTeX: `$inline$` and `$$block$$` (rendered via KaTeX)
- Custom component blocks: `` ```yaml componentName `` / `` ```md componentName/path ``

---

## Implementation Notes

- `src/lib/content.ts` — parses all `/content/*.mds` files eagerly via `import.meta.glob`
- `PostMeta` interface defines the TypeScript shape of global metadata
- `getAllPosts()` — returns sorted list of all post metadata
- `getPostBySlug(slug)` — returns `{ meta, result }` where `result` is a solid-mds `ParseResult`
- `Step.Body()` is a Solid component function — call as `{step.Body()}` in JSX

## Tasks

- [x] Set up MDS content parsing with hast-mds + solid-mds
- [x] Create `src/lib/content.ts` registry
- [x] Create `/post` overview page
- [x] Create `/post/:slug` detail page (post + slides variants)
- [x] Create example content files in `/content/`
- [ ] Add prose styling (Tailwind Typography or custom) for post body
- [ ] Link to /post from homepage / navigation
