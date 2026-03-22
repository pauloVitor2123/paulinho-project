import "server-only";
import { z } from "zod";
import { PostUpdateInputSchema, type PostUpdateInput } from "@/validators/post-validator";
import { findPostBySlugRepo, updatePostBySlugRepo } from "@/server/repositories/post-repository";

const SlugSchema = z.string().min(1);

export async function updatePost(slug: string, input: PostUpdateInput) {
  SlugSchema.parse(slug);
  PostUpdateInputSchema.parse(input);

  const existing = await findPostBySlugRepo(slug);
  if (!existing) {
    throw new Error("Post not found");
  }

  try {
    const updateData: PostUpdateInput & { publishedAt?: Date } = { ...input };
    if (input.status === "published" && !existing.publishedAt) {
      updateData.publishedAt = new Date();
    }
    return await updatePostBySlugRepo(slug, updateData);
  } catch (error) {
    console.error("updatePost error", error);
    throw new Error("Failed to update post");
  }
}
