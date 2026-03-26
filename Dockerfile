# Build Stage
FROM oven/bun:1 AS builder
WORKDIR /app

# Cache dependencies
COPY package.json bun.lock ./
ARG CACHEBUST=2
RUN bun install --frozen-lockfile

# Build application
COPY . .
RUN bun run build


# Runtime Stage
# Using Node for runtime as SolidStart Nitro builds are optimized for Node.js
FROM oven/bun:1 AS runner
WORKDIR /app

# Copy build output
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

RUN cd .output/server && bun install --production

# Expose port and set environment variables
EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NODE_ENV=production

# Start the application
CMD ["bun", ".output/server/index.mjs"]
