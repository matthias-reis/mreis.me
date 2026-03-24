import { For } from "solid-js";
import { H1, H2, H3 } from "~/components/Typography";
import { Skills } from "~/components/Skills";
import { A } from "@solidjs/router";

export default function Portfolio() {
  const skillsData = [
    {
      title: "Core Stack",
      skills: [
        "TypeScript",
        "React",
        "Next.js",
        "Remix",
        "Solid.js / SolidStart",
      ],
    },
    {
      title: "Styling, UX, Content",
      skills: ["Tailwind", "Advanced CSS", "Styled Components", "A11y", "SEO"],
    },
    {
      title: "Full Stack & APIs",
      skills: [
        "GraphQL",
        "REST",
        "tRPC / RPC",
        "Serverless",
        "TypeScript Backends",
        "Postgres",
        "MongoDB",
      ],
    },
    {
      title: "Infrastructure & CI",
      skills: ["GitHub Actions", "Vercel", "Coolify", "Firebase"],
    },
    {
      title: "Specials",
      skills: ["Markdown Pipelines", "Asset Optimisation (SVGO, Sharp)"],
    },
    {
      title: "Soft Skills",
      skills: ["Project Organisation", "People Management", "Agile"],
    },
  ];

  const referencesData = [
    {
      title: "Bio für Kinder",
      url: "https://biospeiseplan.de",
      content:
        "SaaS platform for caterers: organic meal and cooking plans for kindergartens & schools — including cost and nutritional aggregation, shopping organisation, and an instance of Tina CMS for content and workshop management.",
      imageUrl: "/reference/biospeiseplan.jpg",
    },
    {
      title: "Sounds Vegan",
      url: "https://soundsvegan.com",
      content:
        "Music & lifestyle blog with band interviews, editorial content, and sustainability focus — built with react.js and Payload CMS, a custom fuzzy search and a lot of on-page SEO aspects.",
      imageUrl: "/reference/soundsvegan.jpg",
    },
    {
      title: "Mosquito Social (in progress)",
      url: "https://mosquito.social",
      content:
        "Open Source and federated social network for small groups built on the AT Protocol (Bluesky). Exploring decentralised identity, federated data, and modern social UX patterns.",
      imageUrl: "/reference/mosquito-social.jpg",
    },
    {
      title: "Octahedron World",
      url: "https://octahedron.world",
      content:
        "Constantly growing collection of short stories and digital experiments. Built with SolidStart and a remark based developer pipeline for content.",
      imageUrl: "/reference/octahedron.jpg",
    },
  ];

  return (
    <main class="max-w-4xl mx-auto p-8 animate-fade-in">
      <section class="space-y-6 mb-16">
        <H1 class="!mb-4">Project Portfolio</H1>
        <p>Concept ⋅ Web Architecture ⋅ Full Stack Engineering ⋅ Consulting</p>
        <p class="text-xl leading-relaxed ">
          <A
            href="/cv"
            class="hover:underline underline-offset-2 text-col-hi-bg outline-offset-2 outline-col-hi-bg focus:outline-2"
          >
            In my main role
          </A>{" "}
          I lead the web frontend engineering team at XING.com, owning the full
          frontend layer of a high-scale application serving 300+ server-side
          rendered requests per second.
        </p>
        <p class="text-xl leading-relaxed ">
          My freelance projects benefit directly from this: architectural
          thinking, production mindset, and real hands-on implementation — zero
          handoff friction.
        </p>
      </section>

      <div class="mb-32">
        <section class="space-y-8 mb-24">
          <H2 class="!mt-0">Skills & Expertise</H2>
          <div class="space-y-8 max-w-3xl">
            <For each={skillsData}>
              {(category) => (
                <div class="space-y-2">
                  <H3 class="mb-3">{category.title}</H3>
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
          <H2 class="!mt-0">Selected References</H2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <For each={referencesData}>
              {(ref) => (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="overflow-hidden border rounded-lg outline-offset-2 outline-col-hi-bg focus:outline-2 hover:outline-2        "
                >
                  <article class="flex flex-col h-full ">
                    <img
                      src={ref.imageUrl}
                      alt={ref.title}
                      class="w-full aspect-image object-cover"
                      loading="lazy"
                    />
                    <div class="p-6 flex-1 flex flex-col">
                      <p class="font-bold">{ref.title}</p>
                      <p class="text-col-fg/50 mb-5">{ref.url}</p>
                      <p class="m-0 text-md leading-relaxed flex-1">
                        {ref.content}
                      </p>
                    </div>
                  </article>
                </a>
              )}
            </For>
          </div>
        </section>
      </div>
    </main>
  );
}
