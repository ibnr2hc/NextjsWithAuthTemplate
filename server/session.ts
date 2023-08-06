import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function getSession() {
    return await getServerSession(authOptions);
}