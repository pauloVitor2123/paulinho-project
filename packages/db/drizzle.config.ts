import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
import { resolve } from "path";

// Carrega o .env da raiz do monorepo quando executado de packages/db
config({ path: resolve(__dirname, "../../.env") });

if (!process.env["DATABASE_URL"]) {
  throw new Error("DATABASE_URL environment variable is required");
}

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: { url: process.env["DATABASE_URL"] },
  verbose: true,
  strict: true,
});
