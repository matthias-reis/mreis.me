import { createSignal, onMount } from "solid-js";
import { CtaButton } from "~/components/CtaButton";
import { Logo } from "~/components/Logo";
import { H1, H2, H3 } from "~/components/Typography";

export default function Home() {
  const [theme, setTheme] = createSignal("light dark");

  onMount(() => {
    const match = document.cookie.match(/(?:^|;)\s*theme=([^;]*)/);
    if (match) setTheme(match[1]);
  });

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
    document.documentElement.style.colorScheme = newTheme;
  };

  return (
    <main class="max-w-4xl mx-auto p-8">
      <header class="flex justify-between items-center mb-12">
        <Logo />
        <div class="flex gap-2">
          <button
            class={`px-3 py-1 text-sm border rounded ${theme() === "light" ? "bg-[var(--color-fg-primary)] text-[var(--color-bg-primary)]" : "border-[var(--color-fg-primary)] text-[var(--color-fg-primary)]"}`}
            onClick={() => toggleTheme("light")}
          >
            Light
          </button>
          <button
            class={`px-3 py-1 text-sm border rounded ${theme() === "dark" ? "bg-[var(--color-fg-primary)] text-[var(--color-bg-primary)]" : "border-[var(--color-fg-primary)] text-[var(--color-fg-primary)]"}`}
            onClick={() => toggleTheme("dark")}
          >
            Dark
          </button>
          <button
            class={`px-3 py-1 text-sm border rounded ${theme() === "light dark" ? "bg-[var(--color-fg-primary)] text-[var(--color-bg-primary)]" : "border-[var(--color-fg-primary)] text-[var(--color-fg-primary)]"}`}
            onClick={() => toggleTheme("light dark")}
          >
            Auto
          </button>
        </div>
      </header>

      <section class="space-y-8 mb-16">
        <h2 class="text-3xl font-serif border-b pb-2">
          Typographic Scale (DM Serif Display)
        </h2>
        <div>
          <H1>Heading 1: The Quick Brown Fox</H1>
          <p>
            Typography is the art and technique of arranging type to make
            written language legible, readable, and appealing when displayed.
            The arrangement of type involves selecting typefaces, point sizes,
            line lengths, line-spacing, and letter-spacing, and adjusting the
            space between pairs of letters.
          </p>
          <H2>Heading 2: The Quick Brown Fox</H2>
          <p>
            This setup utilizes <strong>DM Sans</strong> (a variable font) for
            sans-serif needs and general body copy, providing a clean and
            approachable readability.
          </p>
          <H3>Heading 3: The Quick Brown Fox</H3>
          <p>
            For headings, <em>DM Serif Display</em> is employed, offering a
            classic and robust seriffed contrast that anchors the typographic
            hierarchy.
          </p>
        </div>
      </section>

      <section class="mb-16">
        <h2 class="text-3xl font-serif border-b pb-4 mb-6">
          Call to Action Button
        </h2>
        <div class="flex flex-wrap gap-4 items-center">
          <CtaButton>Primary Action</CtaButton>
        </div>
      </section>
    </main>
  );
}
