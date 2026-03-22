import { describe, it, expect, vi, beforeEach } from "vitest";
import { listPublishedPosts } from "./list-published-posts";

vi.mock("@/server/repositories/post-repository", () => ({
  findPublishedPostsRepo: vi.fn(),
}));

import { findPublishedPostsRepo } from "@/server/repositories/post-repository";

const mockPost = {
  id: "1",
  slug: "hello-world",
  title: "Hello World",
  content: "Content",
  excerpt: "Excerpt",
  status: "published" as const,
  publishedAt: new Date("2026-01-01"),
  coverImageUrl: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("listPublishedPosts", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns empty array when there are no posts", async () => {
    vi.mocked(findPublishedPostsRepo).mockResolvedValue([]);
    const result = await listPublishedPosts();
    expect(result).toEqual([]);
  });

  it("returns published posts", async () => {
    vi.mocked(findPublishedPostsRepo).mockResolvedValue([mockPost]);
    const result = await listPublishedPosts();
    expect(result).toEqual([mockPost]);
  });

  it("throws when repository fails", async () => {
    vi.mocked(findPublishedPostsRepo).mockRejectedValue(new Error("db error"));
    await expect(listPublishedPosts()).rejects.toThrow("Failed to list published posts");
  });
});
