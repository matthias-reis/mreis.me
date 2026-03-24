# Build Stage
FROM oven/bun:1 AS builder
WORKDIR /app

# Cache dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Build application
COPY . .
RUN bun run build

# Runtime Stage
# Using Node for runtime as SolidStart Nitro builds are optimized for Node.js
FROM node:22-alpine AS runner
WORKDIR /app

# Copy build output
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

# Expose port and set environment variables
EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NODE_ENV=production

# Start the application
CMD ["node", ".output/server/index.mjs"]
