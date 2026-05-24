# syntax=docker/dockerfile:1.7
#
# Production Dockerfile for findyourdistro.
#
# Multi-stage build:
#   1. builder: Node + Vite to produce static files
#   2. runtime: nginx-alpine serving the built files
#
# Final image is ~25 MB. No Node, no npm, no source code in the runtime.

# -----------------------------------------------------------------------------
# Stage 1: Build
# -----------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps first so this layer caches when only source changes
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 2: Runtime
# -----------------------------------------------------------------------------
FROM nginx:1.27-alpine AS runtime

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy built static files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our hardened nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Run as non-root nginx user (nginx:alpine includes the 'nginx' user already)
# The default config already drops privileges to nginx user after start.

# Healthcheck: hit the root and expect 200
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --spider --tries=1 http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
