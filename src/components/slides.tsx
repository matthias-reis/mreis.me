import { createSignal, onCleanup, onMount, type Component } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { ComponentMap, transform } from "solid-mds";
import type { PostMeta } from "~/lib/content";
import { ChevronLeft, ChevronRight } from "lucide-solid";
import { H1 } from "./Typography";

export type TransformResult = ReturnType<typeof transform<PostMeta>>;

// --- Static slides -----------------------------------------------------------

function CoverSlide(props: { meta: PostMeta }) {
  return (
    <div class="text-center space-y-6">
      <H1>{props.meta.title}</H1>
      <p class="text-2xl text-col-fg max-w-2xl mx-auto mt-8">
        {props.meta.description}
      </p>
      <p class="text-lg text-col-fg/60 mt-16">
        Matthias Reis · {props.meta.date}
      </p>
    </div>
  );
}

function AboutSlide() {
  return (
    <div class="space-y-8">
      <h2 class="text-4xl font-bold">About me</h2>
      <div class="space-y-4 text-lg text-col-fg/80 max-w-2xl">
        <p>
          <strong class="text-col-fg">Matthias Reis</strong> — Engineering Lead
          & Software Architect with 20+ years of experience building and
          evolving high‑traffic, large‑scale web platforms.
        </p>
        <p>
          I lead frontend platform teams, drive technical strategy, and scale
          engineering organisations. My focus is on maintainability, delivery
          confidence, and making teams work better together.
        </p>
        <ul class="space-y-1 list-none pt-2">
          <li>📦 Monorepo & Design System ownership (1.4M+ lines of code)</li>
          <li>⚡ SSR platforms at 600 req/s</li>
          <li>🤝 Community of 40+ contributors</li>
          <li>🔧 TypeScript · React · Solid.js · GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

function ThanksSlide() {
  return (
    <div class="text-center space-y-8">
      <h2 class="text-5xl font-bold">Thank you!</h2>
      <p class="text-xl text-col-fg/60">Questions? Let's connect.</p>
      <div class="flex flex-col items-center gap-3 text-lg pt-4">
        <a href="mailto:mr@mreis.me" class="text-col-hi-bg hover:underline">
          mr@mreis.me
        </a>
        <a
          href="https://www.linkedin.com/in/matthias-reis-439992214/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-col-hi-bg hover:underline"
        >
          linkedin.com/in/matthias-reis
        </a>
        <a
          href="https://github.com/matthias-reis"
          target="_blank"
          rel="noopener noreferrer"
          class="text-col-hi-bg hover:underline"
        >
          github.com/matthias-reis
        </a>
        <a
          href="https://bsky.app/profile/octahedron.world"
          target="_blank"
          rel="noopener noreferrer"
          class="text-col-hi-bg hover:underline"
        >
          @octahedron.world
        </a>
      </div>
    </div>
  );
}

// --- Main component ----------------------------------------------------------

interface Slide {
  id: string;
  El: Component;
}

export const slidesComponentMap: ComponentMap = {};

export function SlidesView(props: { meta: PostMeta; result: TransformResult }) {
  const contentSteps = Object.values(props.result.steps).sort(
    (a, b) => a.current - b.current,
  );

  const slides: Slide[] = [
    { id: "__cover", El: () => <CoverSlide meta={props.meta} /> },
    { id: "__about", El: AboutSlide },
    ...contentSteps.map((step) => ({ id: step.id, El: step.Body })),
    { id: "__thanks", El: ThanksSlide },
  ];

  const total = slides.length;
  const [current, setCurrent] = createSignal(0);
  const navigate = useNavigate();

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(total - 1, i + 1));

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    else if (e.key === "Escape") navigate("/posts");
  }

  onMount(() => document.addEventListener("keydown", onKeyDown));
  onCleanup(() => document.removeEventListener("keydown", onKeyDown));

  return (
    <main class="absolute w-full h-full top-0 left-0 z-10 bg-col-bg flex flex-col">
      {/* Header */}
      <div class="shrink-0 px-4 py-3 flex items-center justify-between border-b border-col-fg/10">
        <A
          href="/posts"
          class="text-sm flex items-center gap-1 text-col-fg/50 hover:text-col-fg transition-colors"
        >
          <ChevronLeft size={16} /> all posts
        </A>
        <span class="text-sm font-bold truncate max-w-xs">
          {props.meta.title}
        </span>
        <span class="text-sm text-col-fg/40">
          {current() + 1} / {total}
        </span>
      </div>

      {/* Slide area — all slides rendered, one visible at a time */}
      <div class="relative flex-1 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            class={`absolute inset-0 flex items-center justify-center px-12 transition-opacity duration-200 ${
              i === current() ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div class="w-full max-w-4xl">
              <slide.El />
            </div>
          </div>
        ))}
      </div>

      {/* Footer nav */}
      <div class="shrink-0 px-4 py-3 flex items-center justify-end gap-2 border-t border-col-fg/10">
        <button
          onClick={prev}
          disabled={current() === 0}
          class="p-2 rounded hover:bg-col-fg/10 disabled:opacity-30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          disabled={current() === total - 1}
          class="p-2 rounded hover:bg-col-fg/10 disabled:opacity-30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </main>
  );
}
