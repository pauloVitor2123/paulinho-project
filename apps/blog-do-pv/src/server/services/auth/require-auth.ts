import "server-only";
import { getSession } from "./get-session";

export async function requireAuth() {
  const session = await getSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  return session;
}
