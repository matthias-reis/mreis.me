---
# mreis.me-s2tl
title: Foundation & Theme Setup
status: done
type: feature
created_at: 2026-03-23T21:06:19Z
updated_at: 2026-03-23T21:06:19Z
parent: mreis.me-ysti
---

Preparation tasks to initialize the Solid Start project structure, global
theming, typography, and base components.

## Tasks

- [x] Remove default bootstrapping pages from Solid Start
- [x] Implement Light / Dark Mode switching (store decision in a cookie)
- [x] Setup local web fonts: Junction (copy) & Sorts Mill Goudy (headlines)
- [x] Place some reference text on the home page for typographic scale testing
- [x] Create a Call to Action button component with 5 color variants and display
      them on the home page

## Make sure to ...

- download the fonts from their sources and serve them from local.
- set up tailwind for the fonts
- set up tailwind for color scheme and `lightdark()` variables (we won't use
  tailwind's classes to address dark mode)
