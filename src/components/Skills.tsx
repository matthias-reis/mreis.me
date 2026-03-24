import { For } from "solid-js";
import { Skill } from "./Skill";

export function Skills(props: { skills: string[]; class?: string }) {
  return (
    <div class={`flex flex-wrap items-center gap-y-2 ${props.class || ""}`}>
      <For each={props.skills}>
        {(skill, i) => (
          <>
            <Skill>{skill}</Skill>
            {i() < props.skills.length - 1 && (
              <span class="mx-2 text-[var(--color-fg-primary)] font-bold">
                ·
              </span>
            )}
          </>
        )}
      </For>
    </div>
  );
}
