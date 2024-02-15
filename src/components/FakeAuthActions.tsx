import { lucia, validateRequest } from "@/lib/auth/lucia";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const FakeAuthActions = async () => {
  async function login() {
    "use server";

    // Create test user if it doesn't exist, just so we have *something*
    await db.user.upsert({
      where: {
        id: "test",
      },
      update: {},
      create: {
        id: "test",
      },
    });

    const session = await lucia.createSession("test", {});
    const sessionCookie = await lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie);
    return redirect("/");
  }

  async function logout() {
    "use server";

    const { session } = await validateRequest();
    if (!session) {
      return {
        error: "Unauthorized",
      };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/");
  }

  return (
    <div className="flex gap-3">
      <form action={login}>
        <button type="submit" className="p-2 rounded-md bg-green-500 text-white">
          Login
        </button>
      </form>
      <form action={logout}>
        <button type="submit" className="p-2 rounded-md bg-red-500 text-white">
          Logout
        </button>
      </form>
    </div>
  );
};
