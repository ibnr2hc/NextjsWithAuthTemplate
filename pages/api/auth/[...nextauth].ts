import { prisma } from "@/server/db/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { env } from "../../../env/server.mjs";

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, authOptions);

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: "auth/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id
      return session
    }
  }
}

export default authHandler;