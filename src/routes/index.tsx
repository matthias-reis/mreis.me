import { For } from "solid-js";
import { CtaButton } from "~/components/CtaButton";
import { H1, H2, H3 } from "~/components/Typography";
import { Box } from "~/components/Box";
import { Skills } from "~/components/Skills";

export default function Home() {
  const skillsData = [
    {
      title: "Leadership, People & Org",
      skills: [
        "Mentoring and Guidance",
        "Org & Platform Strategy",
        "Agile Development",
        "Kaizen",
        "Communication",
        "Facilitation",
        "Connection",
        "Community Management",
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        "Typescript",
        "React.js",
        "Solid.js",
        "Apollo GraphQL",
        "CSS in all Flavours",
      ],
    },
    {
      title: "Solution Spaces",
      skills: [
        "Maintaining high traffic servers",
        "Complex CI flows",
        "Monorepo Management",
        "Design System and DRY",
        "Web Performance and Core Web Vitals",
      ],
    },
    {
      title: "AI and Agentic Coding",
      skills: [
        "Claude / Claude Code",
        "VS Code Copilot / GH Copilot",
        "Chat GPT / Codex",
        "Gemini / Antigravity",
      ],
    },
  ];

  const impactData = [
    {
      title: "Frontend Monorepo & Company Wide Migration Projects",
      content: "1.4M+ Linse of Code, Steering a community of 40+ contributors.",
    },
    {
      title: "Technical Platform Ownership",
      content:
        "Ownership of a high-traffic frontend platform delivering up to 600 req/s with server side rendering technology.",
    },
    {
      title: "Scalable Standards",
      content:
        "Establishment of robust patterns across Continuous Delivery, Design Systems and Web Performance.",
    },
  ];

  return (
    <main class="max-w-4xl mx-auto p-8">
      <section class="space-y-6 mb-32 text-center animate-fade-in-up">
        <H1 class="mx-auto max-w-3xl">Engineering Lead & Software Architect</H1>
        <p class="text-xl leading-relaxed max-w-2xl mx-auto mt-8">
          I am an engineer with over 20 years of experience building and
          evolving high‑traffic large scale web platforms. I seek leadership
          roles where I can drive technical strategy and scale engineering
          organizations.
        </p>
        <p class="text-lg leading-relaxed text-[var(--color-fg-muted)] max-w-2xl mx-auto">
          Proven track record in leading high-performing teams, driving and
          defining frontend architecture in high scale web platforms, and
          delivering complex company-wide technical transformations.
        </p>
        <div class="flex justify-center flex-wrap gap-4 pt-8">
          <CtaButton href="/cv" class="no-underline">
            View Professional CV
          </CtaButton>
          <CtaButton href="/portfolio" class="no-underline">
            View Portfolio
          </CtaButton>
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
                  <Skills
                    skills={category.skills}
                    class="leading-relaxed text-[var(--color-fg-muted)]"
                  />
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
