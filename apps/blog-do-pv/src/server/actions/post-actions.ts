"use server";
import { requireAuth } from "@/server/services/auth/require-auth";
import { createPost } from "@/server/services/post/create-post";
import { updatePost } from "@/server/services/post/update-post";
import { deletePost } from "@/server/services/post/delete-post";
import type { PostCreateInput, PostUpdateInput } from "@/validators/post-validator";

export async function createPostAction(input: PostCreateInput) {
  await requireAuth();
  return createPost(input);
}

export async function updatePostAction(slug: string, input: PostUpdateInput) {
  await requireAuth();
  return updatePost(slug, input);
}

export async function deletePostAction(slug: string) {
  await requireAuth();
  return deletePost(slug);
}
