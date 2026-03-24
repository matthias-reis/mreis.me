# Project Context

Use @./beans.md for instructions on how to use beans and work on tasks.

This project uses the following tech stack:

- **Framework:** SolidStart (v2)
- **Styling Library:** TailwindCSS
- **Language:** TypeScript
- **Package Manager:** Bun

## Styling and Components

- **Reusability:** Create re-usable components in `src/components` rather than
  inline tailwind classes as soon as something repeats.
- **Existing Components:** Always use the components that are already there. For
  example, use the typographic components `<H1>`, `<H2>`, `<H3>` from
  `src/components/Typography.tsx`.
- **Headings Structure:** Only one `H1` per page. Only 2 additional heading
  levels (`H2` and `H3`) are permitted.
- **Color Scheme:** The design is pure black and white. Use only the `col-fg`
  and `col-bg` generic text and background colors respectively. Any exceptions
  for primary colors (cta) or transparency (logo) are already implemented in
  components.
- **Header Layout:** The header must be identical on all pages:
  - **Left side:** The `<Logo />` component.
  - **Right side:** The Theme switcher.
  - **Left of Theme switcher:** Navigation links (if applicable).
