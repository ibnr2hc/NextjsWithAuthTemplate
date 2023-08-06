'use client'
import { signIn } from "next-auth/react";

export default function AuthLogin() {
    return (
        <button
            className="rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-800"
            onClick={() => signIn("discord")}
        >
            Login
        </button>
    )
}