import "server-only";
import { PostCreateInputSchema, type PostCreateInput } from "@/validators/post-validator";
import { insertPostRepo } from "@/server/repositories/post-repository";

export async function createPost(input: PostCreateInput) {
  PostCreateInputSchema.parse(input);
  try {
    const publishedAt = input.status === "published" ? new Date() : null;
    return await insertPostRepo({ ...input, publishedAt });
  } catch (error) {
    console.error("createPost error", error);
    throw new Error("Failed to create post");
  }
}
