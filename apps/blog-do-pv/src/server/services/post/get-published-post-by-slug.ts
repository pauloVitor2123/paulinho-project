import "server-only";
import { z } from "zod";
import { findPublishedPostBySlugRepo } from "@/server/repositories/post-repository";

const InputSchema = z.object({ slug: z.string().min(1) });

export async function getPublishedPostBySlug(slug: string) {
  InputSchema.parse({ slug });
  try {
    return await findPublishedPostBySlugRepo(slug);
  } catch (error) {
    console.error("getPublishedPostBySlug error", error);
    throw new Error("Failed to get published post by slug");
  }
}
