import { MoonIcon, SunIcon } from "lucide-solid";
import { createSignal, onMount } from "solid-js";

export function ThemeToggle() {
  const [theme, setTheme] = createSignal("light");

  onMount(() => {
    const match = document.cookie.match(/(?:^|; )colorScheme=([^;]+)/);
    const cookieTheme = match ? match[1] : "light";
    setTheme(cookieTheme === "system" ? "light" : cookieTheme);
  });

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.cookie = `colorScheme=${newTheme}; path=/; max-age=31536000`;

    document.documentElement.classList.remove("dark", "light");

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (newTheme === "light") {
      document.documentElement.classList.add("light");
    }
  };

  const toggleTheme = () => {
    updateTheme(theme() === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      class="flex items-center gap-1 p-1 border border-col-fg rounded-full p-1 text-sm transition-colors cursor-pointer outline-offset-2 outline-col-hi-bg focus:outline-2"
      title="Toggle Theme"
    >
      <div
        class={`p-1 rounded-full ${theme() === "light" ? "text-col-bg bg-col-fg" : "text-col-fg"}`}
      >
        <SunIcon size={16} />
      </div>
      <div
        class={`p-1 rounded-full ${theme() === "light" ? "text-col-fg" : "text-col-bg bg-col-fg"}`}
      >
        <MoonIcon size={16} />
      </div>
    </button>
  );
}
