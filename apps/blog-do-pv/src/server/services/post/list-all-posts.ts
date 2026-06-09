import "server-only";
import { findAllPostsRepo } from "@/server/repositories/post-repository";

export async function listAllPosts() {
  try {
    return await findAllPostsRepo();
  } catch (error) {
    console.error("listAllPosts error", error);
    throw new Error("Failed to list all posts");
  }
}
