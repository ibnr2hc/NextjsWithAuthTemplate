import AuthLogin from "@/components/auth /login";
import AuthLogout from "@/components/auth /logout";
import getSession from "@/server/session";

export default async function Logout() {
  const session = await getSession()
  const authComponent = session ? <AuthLogout /> : <AuthLogin />

  return (
    <main>
      <div className="px-2 w-full">
        <div className="flex flex-col min-h-screen items-center justify-center p-8 md:p-24">
          {/* Logo */}
          <div className="text-xl font-bold mb-8">NextjsWithAuthTemplate</div>
          {/* ログインしている場合にはユーザー情報を表示する */}
          {session?.user && (
            <div className="mb-3">
              ようこそ、{session?.user?.name}さん！
            </div>
          )}
          {authComponent}

        </div>
      </div>
    </main>
  )
}
