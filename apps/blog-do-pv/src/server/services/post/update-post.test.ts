import { describe, it, expect, vi, beforeEach } from "vitest";
import { updatePost } from "./update-post";
import type { PostUpdateInput } from "@/validators/post-validator";

vi.mock("@/server/repositories/post-repository", () => ({
  findPostBySlugRepo: vi.fn(),
  updatePostBySlugRepo: vi.fn(),
}));

import { findPostBySlugRepo, updatePostBySlugRepo } from "@/server/repositories/post-repository";

const existingPost = {
  id: "1",
  slug: "my-post",
  title: "My Post",
  content: "Content",
  excerpt: "Excerpt",
  status: "draft" as const,
  publishedAt: null,
  coverImageUrl: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const publishedPost = {
  ...existingPost,
  status: "published" as const,
  publishedAt: new Date("2026-01-01"),
};

describe("updatePost", () => {
  beforeEach(() => vi.clearAllMocks());

  it("throws when slug is empty", async () => {
    await expect(updatePost("", { title: "New Title" })).rejects.toThrow();
  });

  it("throws when post not found", async () => {
    vi.mocked(findPostBySlugRepo).mockResolvedValue(null);
    await expect(updatePost("nonexistent", { title: "New Title" })).rejects.toThrow("Post not found");
  });

  it("updates post fields", async () => {
    vi.mocked(findPostBySlugRepo).mockResolvedValue(existingPost);
    const updated = { ...existingPost, title: "New Title" };
    vi.mocked(updatePostBySlugRepo).mockResolvedValue(updated);
    const result = await updatePost("my-post", { title: "New Title" });
    expect(result).toEqual(updated);
  });

  it("sets publishedAt when publishing for the first time", async () => {
    vi.mocked(findPostBySlugRepo).mockResolvedValue(existingPost);
    vi.mocked(updatePostBySlugRepo).mockResolvedValue({ ...existingPost, status: "published", publishedAt: new Date() });
    await updatePost("my-post", { status: "published" });
    expect(updatePostBySlugRepo).toHaveBeenCalledWith(
      "my-post",
      expect.objectContaining({ publishedAt: expect.any(Date) })
    );
  });

  it("does not alter publishedAt if post is already published", async () => {
    vi.mocked(findPostBySlugRepo).mockResolvedValue(publishedPost);
    vi.mocked(updatePostBySlugRepo).mockResolvedValue(publishedPost);
    await updatePost("my-post", { status: "published" });
    expect(updatePostBySlugRepo).toHaveBeenCalledWith(
      "my-post",
      expect.not.objectContaining({ publishedAt: expect.any(Date) })
    );
  });

  it("throws when repository fails", async () => {
    vi.mocked(findPostBySlugRepo).mockResolvedValue(existingPost);
    vi.mocked(updatePostBySlugRepo).mockRejectedValue(new Error("db error"));
    await expect(updatePost("my-post", { title: "New" })).rejects.toThrow("Failed to update post");
  });
});
