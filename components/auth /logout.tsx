'use client'
import { signOut } from "next-auth/react"

export default function AuthLogout() {
    return (
        <button
            className="rounded py-2 px-4 font-bold text-black border-2 border-black hover:bg-gray-200"
            onClick={() => signOut({
                callbackUrl: "/",
            })}
        >
            Logout
        </button>
    )
}