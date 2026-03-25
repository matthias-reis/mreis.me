import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { MetaProvider } from "@solidjs/meta";
import { Logo } from "~/components/Logo";
import "./app.css";

const ThemeToggle = clientOnly(() =>
  import("./components/ThemeToggle").then((m) => ({ default: m.ThemeToggle })),
);

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <>
            <Suspense
              fallback={<div class="p-4 font-sans text-col-fg">Loading...</div>}
            >
              <div class="min-h-screen flex flex-col">
                <header class="py-8 px-5 w-full max-w-4xl mx-auto flex items-center justify-between">
                  <Logo />
                  <ThemeToggle />
                </header>
                <div class="flex-grow">{props.children}</div>
                <footer class="w-full max-w-4xl mx-auto py-12 px-5 mt-auto">
                  <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans">
                    <p>© {new Date().getFullYear()} Matthias Reis</p>
                    <ul class="flex flex-wrap justify-center gap-6">
                      <li>
                        <a
                          href="mailto:mr@mreis.me"
                          class="hover:underline hover:text-col-hi-bg transition-colors outline-offset-2 outline-col-hi-bg focus:outline-2 rounded-sm"
                        >
                          Email
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/matthias-reis-439992214/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="hover:underline hover:text-col-hi-bg transition-colors outline-offset-2 outline-col-hi-bg focus:outline-2 rounded-sm"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/matthias-reis"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="hover:underline hover:text-col-hi-bg transition-colors outline-offset-2 outline-col-hi-bg focus:outline-2 rounded-sm"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bsky.app/profile/octahedron.world"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="hover:underline hover:text-col-hi-bg transition-colors outline-offset-2 outline-col-hi-bg focus:outline-2 rounded-sm"
                        >
                          Bluesky
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
              </div>
            </Suspense>
          </>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
