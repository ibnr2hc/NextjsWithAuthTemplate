import { z } from "zod";

// サーバー側で必要な環境変数
export const serverSchema = z.object({
    DATABASE_URL: z.string().url(), // データベースのURL
    NODE_ENV: z.enum(["development", "staging", "production"]), // NODE_ENV
    NEXTAUTH_SECRET: z.string(), // NextAuthのシークレット
    NEXTAUTH_URL: z.preprocess( // NextAuthのURL
        (str) => process.env.VERCEL_URL ?? str,
        process.env.VERCEL ? z.string() : z.string().url(),
    ),
    DISCORD_CLIENT_ID: z.string(), // DiscordのクライアントID
    DISCORD_CLIENT_SECRET: z.string(), // Discordのクライアントシークレット
})

// クライアント側で必要な環境変数
export const clientSchema = z.object({});

export const clientEnv = {};