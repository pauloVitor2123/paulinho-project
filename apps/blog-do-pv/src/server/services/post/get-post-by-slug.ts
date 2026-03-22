import "server-only";
import { z } from "zod";
import { findPostBySlugRepo } from "@/server/repositories/post-repository";

const InputSchema = z.object({ slug: z.string().min(1) });

export async function getPostBySlug(slug: string) {
  InputSchema.parse({ slug });
  try {
    return await findPostBySlugRepo(slug);
  } catch (error) {
    console.error("getPostBySlug error", error);
    throw new Error("Failed to get post by slug");
  }
}
