import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, onMount } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { Logo } from "~/components/Logo";
import "./app.css";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <>
            <Suspense
              fallback={<div class="p-4 font-sans text-col-fg">Loading...</div>}
            >
              <header class="py-8 px-5 max-w-4xl mx-auto flex items-center justify-between">
                <Logo />
                <ThemeToggle />
              </header>
              {props.children}
            </Suspense>
          </>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
