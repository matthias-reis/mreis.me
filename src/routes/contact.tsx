import { Title, Meta } from "@solidjs/meta";
import { H1 } from "~/components/Typography";
import { Box } from "~/components/Box";
import { ProfileBox } from "~/components/ProfileBox";
import { Mail } from "lucide-solid";

const IconLinkedIn = (props: { class?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class={props.class}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const IconGithub = (props: { class?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class={props.class}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconBluesky = (props: { class?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class={props.class}
  >
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.905C2.566 1.075 1.056.924.475 2.45c-.265.698-.108 3.593.125 4.885.667 3.69 3.616 4.853 5.37 5.176-2.587.11-5.118 1.139-4.832 3.411.391 3.1 4.545 4.7 7.158 3.179l.525-.333.315-.224c.264-.207.545-.453.864-.753.32.3.6.546.864.753l.315.224.525.333c2.613 1.521 6.767-.078 7.158-3.18.286-2.27-2.245-3.3-4.832-3.41 1.754-.323 4.703-1.486 5.37-5.176.233-1.292.39-4.187.125-4.885-.581-1.527-2.091-1.375-4.727.445-2.752 1.852-5.711 5.791-6.798 7.905z" />
  </svg>
);

export default function ContactPage() {
  const links = [
    {
      label: "Email",
      href: "mailto:mr@mreis.me",
      value: "mr@mreis.me",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/matthias-reis-439992214/",
      value: "matthias-reis-439992214",
      icon: IconLinkedIn,
    },
    {
      label: "GitHub",
      href: "https://github.com/matthias-reis",
      value: "matthias-reis",
      icon: IconGithub,
    },
    {
      label: "Bluesky",
      href: "https://bsky.app/profile/octahedron.world",
      value: "@octahedron.world",
      icon: IconBluesky,
    },
  ];

  return (
    <main class="py-12 min-h-screen font-sans">
      <Title>Contact - Matthias Reis</Title>
      <Meta name="description" content="Contact Matthias Reis." />

      <div class="px-5 mx-auto max-w-4xl">
        <div class="p-8 md:p-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div class="flex-1">
            <H1 class="mb-4">Contact Me</H1>
            <p class="opacity-80 max-w-2xl text-xl font-sans mb-8">
              Feel free to reach out to me via email or connect with me on
              social media. I'm always open to discussing new projects, creative
              ideas, or opportunities.
            </p>
          </div>

          <ProfileBox />
        </div>

        <div class="max-w-xl mx-auto flex flex-col gap-6">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                class="flex gap-5 items-center hover:outline-2 outline-offset-2 outline-col-hi-bg focus:outline-2 rounded-lg p-2"
              >
                <IconComponent class="w-8 h-8 shrink-0 text-col-fg" />
                <div class="flex flex-col gap-1">
                  <span class="text-xl font-bold">{link.label}</span>
                  <span class="">{link.value}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
