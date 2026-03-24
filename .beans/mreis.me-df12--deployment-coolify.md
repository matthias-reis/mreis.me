---
# mreis.me-df12
title: Deployment with Coolify
status: done
type: feature
priority: normal
created_at: 2026-03-24T15:39:20Z
updated_at: 2026-03-24T15:39:20Z
parent: mreis.me-ysti
---

Deploy the application to the root domain (`/`) via Coolify. 
Since Nixpacks had problems with `bun` previously, we will create a custom `Dockerfile` to handle the build and runtime execution safely without relying on Nixpacks auto-configuration.

## Tasks
- [x] Create a `Dockerfile` optimized for Bun and SolidStart
- [x] Ensure build step runs cleanly (`bun run build`)
- [x] Define the proper start command (e.g. `node .output/server/index.mjs`) and expose the correct port
- [x] Configure Coolify to deploy using this Dockerfile
