## Overview
Nextjs Starter Kit with Authentication Feature Implemented

## Getting Started
```bash
# Copy env file
cp .env.template .env

# Start DB on local
supabase start

# Start service on local
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables
- DATABASE_URL="postgresql://postgres:postgres@localhost:54322/postgres"
- NODE_ENV="development"
- NEXTAUTH_SECRET="{secret}"
- NEXTAUTH_URL="http://localhost:3000"
- DISCORD_CLIENT_ID="{ID}"
- DISCORD_CLIENT_SECRET="{SECRET}"

## Modules
- TypeScript: v5.1.6
- Nextjs: v13.4.12
- NextAuth: v4.22.3
- Prisma: v5.1.1
- TailwindCSS: v3.3.3

