---
# mreis.me-ag7x
title: Article — Generic Setup of AI Agents
status: todo
type: feature
priority: normal
created_at: 2026-04-15T00:00:00Z
updated_at: 2026-04-15T00:00:00Z
parent: mreis.me-55za
---

Article covering the foundational building blocks for setting up AI agents:
tools, memory, context, orchestration patterns, and model selection.

## Topics to cover / draft

**always verify, fail fast, always review**

Let's start with the obvious. What we all practiced with others is becoming much
more important now. Write tests in a way that they don't need 30 minutes to run.
This is really different. In a CI pipeline, visual tests are running anyway, so
sometimes it's better to rely more on integration tests. If every small task
causes the agent to start a huge pipeling, the experience drops and the token
usage rises.

But then also: you don't have to write the tests yourself. Brings me to Reviews.
Reviewing is probably one of the big differentiators between Vibe Coding and
Agentic Coding, right. So review and understand. And especially review the test
cases. Last tip: Don't bother with code style or variable names too much, but at
least they should make sense to you.

**do simple fixes yourself**

Agents are astonishingly fast with patching dependencies. But often they just
chose the wrong approach. The proper way would be to restart. But for me most
often a little tip helped and sometimes even a small code change on my own did
the trick.

BTW: I've found out that agents especially with good skill management are better
than expected with design. They even go the extra mile and I saw transitions
where I wouldn't have bothered myself. But they often bend the system (e.g.
strange css and weird tailwind classes). So I actually still do code changes
myself before explaining. Be aware that this is still a possibility. You
wouldn't believe.

**keep context together, don't mix agents if possible**

When something is smooth in one case. You'll be annoyed by playing the assistant
for the agent in another case. Several times I started in e.g. Claude App. Then
it told me to try a bash command. Then I had to fiddle the command with a
placeholder together. Several times.

Learning: If you expect to change something in a file, start in the coding
agent.

**rights**

You get a lot of annoying questions from the Agent? On a plain setup, agents ask
for access and rights to execute anything. May I run the linter? May I run the
tests? Yes. yes to all of course. Do it, I don't want to come back from my
coffee machine and see that you waited for me.

I have set up an allow and guard principle. I allow a lot (especially everything
concerning readin, like `ls`, `cat`, `jq` ...). And then I have created code to
guard it. E.g. I never let the agent read any `.env*` file or my `.zshrc`.

**allow to commit, allow to push. But never on `main`**

Agents are especially good in creating summaries of their work. So they are the
perfect commit message creators. So I let them of course. I even allow them to
create branches, create pull requests and - yes - push. Then my guard kicks in
again and says "do no push to `main` or `staging`, who do you think you are?".

**describe the problem, not the solution**

In the beginning I often started my discovery with generic questions with the
intent to build up my knowledge. Things like "what is the cheapest way to add
caching to ...". It almost always turned out to become more concrete and then
you might have accumulated context in the wrong tool (e.g. Claude App with Opus)
any you wished to be in Claude Code or Cursor or Antigravity or Copilot.

A soluton is of course to have the AI write a handover prompt. But it's
annoying. Therefore. When it's about code, start in the angent tool. Since I
have set up my Second Brain" I'm anyway there nuch more often.

**env variable consistency**

If your setup gets more sophisticalted (which it should), you might stumble upon
some obstacles.

On the one hand more tools (or more variants of the same tool) have to access
APIs or other settings that rely on env variables (e.g. for API keys). And all
of them have a different context. Command line tools properly inherit the
values, but IDE plugins don't.

The only solution that worked for me here was 1Password and its excellent
command line tooling and the cool injection functionality that works in `.env`
files as well:

```bash
GEMINI_API_KEY="op://vault/item/section/label"
```

**skill and command hierarchy**

Every work situation is different, therefore the approach that skills get
installed next to the code in the repo is a good start.

But I also found that I want some of that stuff globally (e.g. the claude design
skill). So whenever you think you need a skill or you find a really useful one
from an internet tip. Think about where it should live.

- global - in your `~` folder. E.g. for claude the least that should be in there
  is the "find skills" skill. But the things should be generic, your writing
  style, your general coding preferences etc.
- project related but private - in the `./CLAUDE.local.md` added to
  `.gitignore`. Ideally this is not needed. It's for highly personal preferences
  in an otherwise team owned space. Why shouldn't others profit from your
  improvements as well.
- project - stored in a way that all types of agents can access it. Most of them
  speak natural language equally well, so your context doesn not differ so much
  between open code, codex and claude code. And of course you commit that.

**work on tasks in parallel**

I set up git worktree from the ground up in the meantime. So I have a project
folder and subfolders for the worktrees. I don't like to have a worktree within
a project like Claude is doing it from time to time. I'd like to be explicit.

I personally only have two at a time but that's due to my token limits. But this
setup works well for more than that.

There's a second aspect: It's your way of working. Force yourself to keep tasks
independent of each other (when Task B needs A first, a parallel execution won't
work). So I usually work in areas as far away as possible from each other. Or
(to be honest) I switch projects and context myself.

But also use the waiting time to continue creating tasks and don't listen to the
grass growing (as we say in Germany).

## Tasks

- [x] Define key points and outline their text
- [x] Write first draft in `/content/generic-setup-of-ai-agents.md`
- [x] add Intro and summary (Summary is a short bullet list of tips and placed
      in the beginning framed as a quick access service)
- [ ] Review and edit
- [ ] create KV image
- [ ] Publish (set `date` in frontmatter, deploy)
