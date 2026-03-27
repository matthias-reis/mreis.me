```yaml @@
title: SolidJS — Reactivity Without the Virtual DOM
description:
  A talk introducing SolidJS reactive primitives and how fine-grained reactivity
  changes the mental model for building UIs.
slug: solidjs-reactivity
variant: slides
date: 2026-02-10
```

+++problem

# The Problem With Re-rendering

React's model: _re-run the component function on every state change._

```tsx
function Counter() {
  const [count, setCount] = useState(0);
  console.log("render"); // fires on EVERY update
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

The Virtual DOM diffs the output to figure out what changed. But we already
_knew_ what changed — we called `setCount`.

+++signals

# Signals: The Primitive of Reactivity

In SolidJS, state is a **signal** — a getter/setter pair.

```tsx
import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);

count(); // read: subscribes the current computation
setCount(1); // write: notifies all subscribers
```

The component function runs **once**. Only the expressions that read signals
re-evaluate.

+++derived

# Derived State

`createMemo` creates a derived signal — computed lazily, cached until its
dependencies change.

```tsx
const doubled = createMemo(() => count() * 2);
```

No `useMemo` dependency arrays. No stale closure bugs. The dependency is
_implicit_ — whatever signals are read during execution.

+++effects

# Effects

`createEffect` runs a side effect when its dependencies change.

```tsx
createEffect(() => {
  document.title = `Count: ${count()}`;
});
```

Again: no dependency array. The effect re-runs when `count()` changes. When it
re-runs, the previous effect is automatically cleaned up.

+++jsx

# JSX That Compiles to DOM Operations

SolidJS JSX doesn't create Virtual DOM nodes. It compiles to direct DOM
operations.

```tsx
// Your JSX
<p>{count()}</p>;

// Compiles to (roughly)
const el = document.createElement("p");
createEffect(() => {
  el.textContent = count();
});
```

No diffing. No reconciliation. Just targeted updates.

+++perf

# Performance

SolidJS consistently ranks at the top of the
[js-framework-benchmark](https://krausest.github.io/js-framework-benchmark/).

Not because it's a micro-optimised toy — but because the model is inherently
efficient. Updates are surgical. Components don't re-render. Only reactive
expressions re-run.

+++takeaway

# Takeaways

- Signals are the reactive primitive — read to subscribe, write to notify
- Components run once — no re-renders, no stale closures
- `createMemo` for derived state, `createEffect` for side effects
- JSX compiles to DOM ops — no Virtual DOM overhead

SolidJS makes you think about _what changes_ rather than _when to re-render_.

**Try it:** [solidjs.com](https://solidjs.com)
