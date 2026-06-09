import { describe, it, expect, vi, beforeEach } from "vitest";
import { listAllPosts } from "./list-all-posts";

vi.mock("@/server/repositories/post-repository", () => ({
  findAllPostsRepo: vi.fn(),
}));

import { findAllPostsRepo } from "@/server/repositories/post-repository";

const mockPosts = [
  {
    id: "1",
    slug: "published-post",
    title: "Published",
    content: "Content",
    excerpt: "Excerpt",
    status: "published" as const,
    publishedAt: new Date("2026-01-01"),
    coverImageUrl: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    slug: "draft-post",
    title: "Draft",
    content: "Content",
    excerpt: "Excerpt",
    status: "draft" as const,
    publishedAt: null,
    coverImageUrl: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe("listAllPosts", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns all posts including drafts and published", async () => {
    vi.mocked(findAllPostsRepo).mockResolvedValue(mockPosts);
    const result = await listAllPosts();
    expect(result).toHaveLength(2);
    expect(result).toEqual(mockPosts);
  });

  it("throws when repository fails", async () => {
    vi.mocked(findAllPostsRepo).mockRejectedValue(new Error("db error"));
    await expect(listAllPosts()).rejects.toThrow("Failed to list all posts");
  });
});
