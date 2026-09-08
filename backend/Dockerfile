FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && pnpm install --frozen-lockfile

COPY prisma ./prisma
COPY prisma.config.ts ./
COPY src ./src

RUN pnpm exec prisma generate

EXPOSE 8000

CMD ["pnpm", "start"]
