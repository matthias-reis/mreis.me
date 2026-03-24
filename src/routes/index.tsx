import { createSignal, onMount, For } from "solid-js";
import { CtaButton } from "~/components/CtaButton";
import { Logo } from "~/components/Logo";
import { H1, H2, H3 } from "~/components/Typography";
import { Box } from "~/components/Box";
import { Tag } from "~/components/Tag";

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

  const skillsData = [
    {
      title: "Leadership, People & Org",
      skills: ["Mentoring and Guidance", "Org & Platform Strategy", "Agile Development", "Kaizen", "Communication", "Facilitation", "Connection", "Community Management"]
    },
    {
      title: "Web Technologies",
      skills: ["Typescript", "React.js", "Solid.js", "Apollo GraphQL", "CSS in all Flavours"]
    },
    {
      title: "Solution Spaces",
      skills: ["Maintaining high traffic servers", "Complex CI flows", "Monorepo Management", "Design System and DRY", "Web Performance and Core Web Vitals"]
    },
    {
      title: "AI and Agentic Coding",
      skills: ["Claude / Claude Code", "VS Code Copilot / GH Copilot", "Chat GPT / Codex", "Gemini / Antigravity"]
    }
  ];

  const impactData = [
    {
      title: "Scale Frontend Monorepo Migration",
      content: "1.4M+ LOC, 40+ contributors."
    },
    {
      title: "Company-wide Platform Ownership",
      content: "Ownership of a high-traffic frontend platform delivering ~600 req/s."
    },
    {
      title: "Scalable Standards",
      content: "Establishment of robust patterns across Continuous Delivery, Design Systems and Web Performance."
    }
  ];

  return (
    <main class="max-w-4xl mx-auto p-8">
      <header class="flex justify-between items-center mb-24">
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

      <section class="space-y-6 mb-32 text-center animate-fade-in-up">
        <H1 class="mx-auto max-w-3xl">
          Engineering Lead & Software Architect
        </H1>
        <p class="text-xl leading-relaxed text-[var(--color-fg-muted)] max-w-2xl mx-auto mt-8">
          I am an engineer with over 20 years of experience building and evolving high‑traffic large scale web platforms. I seek leadership roles where I can drive technical strategy and scale engineering organizations.
        </p>
        <p class="text-lg leading-relaxed text-[var(--color-fg-muted)] max-w-2xl mx-auto">
          Proven track record in leading high-performing teams, driving and defining frontend architecture in high scale web platforms, and delivering complex company-wide technical transformations.
        </p>
        <div class="flex justify-center flex-wrap gap-4 pt-8">
          <CtaButton href="/cv" class="no-underline">View Professional CV</CtaButton>
          <CtaButton href="/freelance" class="no-underline">Freelance Portfolio</CtaButton>
        </div>
      </section>

      <div class="mb-32">
        <section class="space-y-8">
          <H2 class="!mt-0">Skills & Expertise</H2>
          <div class="space-y-6 max-w-3xl">
            <For each={skillsData}>
              {(category) => (
                <div>
                  <H3 class="!mt-0 mb-3">{category.title}</H3>
                  <div class="leading-relaxed text-[var(--color-fg-muted)] flex flex-wrap items-center gap-y-2">
                    <For each={category.skills}>
                      {(skill, i) => (
                        <>
                          <Tag>{skill}</Tag>
                          {i() < category.skills.length - 1 && <span class="mx-2 text-[var(--color-fg-primary)]">·</span>}
                        </>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        </section>

        <section class="space-y-8">
          <H2 class="mt-32">Selected Impact</H2>
          <div class="space-y-6 max-w-3xl">
            <For each={impactData}>
              {(impact) => (
                <Box title={impact.title}>
                  <p class="m-0 text-md leading-relaxed">{impact.content}</p>
                </Box>
              )}
            </For>
          </div>
        </section>
      </div>
    </main>
  );
}
