import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/libs/db";
import { user, session, account, verification } from "@paulinho-project/db";

if (!process.env["BETTER_AUTH_SECRET"]) {
  throw new Error("BETTER_AUTH_SECRET environment variable is required");
}

const secret = process.env["BETTER_AUTH_SECRET"];
const baseURL = process.env["BETTER_AUTH_URL"];

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { user, session, account, verification },
  }),
  emailAndPassword: {
    enabled: true,
  },
  secret,
  baseURL,
});

export type Session = typeof auth.$Infer.Session;
