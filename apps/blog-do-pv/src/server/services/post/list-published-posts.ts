import "server-only";
import { findPublishedPostsRepo } from "@/server/repositories/post-repository";

export async function listPublishedPosts() {
  try {
    return await findPublishedPostsRepo();
  } catch (error) {
    console.error("listPublishedPosts error", error);
    throw new Error("Failed to list published posts");
  }
}
