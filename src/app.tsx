import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
import "./app.css";

export default function App() {
  onMount(() => {
    // Check theme cookie and apply it on mount and during transitions if needed.
    const match = document.cookie.match(/(?:^|;)\s*theme=([^;]*)/);
    if (match) {
      document.documentElement.style.colorScheme = match[1];
    }
  });

  return (
    <Router
      root={props => (
        <>
          <Suspense fallback={<div class="p-4 font-sans">Loading...</div>}>
            {props.children}
          </Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
