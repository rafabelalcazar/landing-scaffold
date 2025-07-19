# ===== Builder Stage =====
# This stage installs dependencies and builds the application.
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies using npm ci for deterministic builds
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Disable Genkit telemetry during build
ENV GENKIT_TELEMETRY_DISABLED=true

# Build the Next.js application for production
RUN npm run build

# ===== Runner Stage =====
# This stage creates the final, lean production image.
FROM node:20-alpine AS runner

# Set the working directory
WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production
# Disable Genkit telemetry in production
ENV GENKIT_TELEMETRY_DISABLED=true

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the built application artifacts from the builder stage
# This includes the standalone server output for optimized performance
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set the user to the non-root user
USER nextjs

# Expose the port the app will run on
EXPOSE 3000

# Set the default command to start the Next.js server
CMD ["node", "server.js"]
