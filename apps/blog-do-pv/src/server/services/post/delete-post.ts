import "server-only";
import { z } from "zod";
import { deletePostBySlugRepo } from "@/server/repositories/post-repository";

const SlugSchema = z.string().min(1);

export async function deletePost(slug: string) {
  SlugSchema.parse(slug);
  try {
    await deletePostBySlugRepo(slug);
  } catch (error) {
    console.error("deletePost error", error);
    throw new Error("Failed to delete post");
  }
}
