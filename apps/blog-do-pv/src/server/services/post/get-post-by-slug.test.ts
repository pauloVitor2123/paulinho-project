import { describe, it, expect, vi, beforeEach } from "vitest";
import { getPostBySlug } from "./get-post-by-slug";

vi.mock("@/server/repositories/post-repository", () => ({
  findPostBySlugRepo: vi.fn(),
}));

import { findPostBySlugRepo } from "@/server/repositories/post-repository";

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

describe("getPostBySlug", () => {
  beforeEach(() => vi.clearAllMocks());

  it("throws when slug is empty", async () => {
    await expect(getPostBySlug("")).rejects.toThrow();
  });

  it("returns post when slug is valid", async () => {
    vi.mocked(findPostBySlugRepo).mockResolvedValue(mockPost);
    const result = await getPostBySlug("hello-world");
    expect(result).toEqual(mockPost);
  });

  it("returns null when post not found", async () => {
    vi.mocked(findPostBySlugRepo).mockResolvedValue(null);
    const result = await getPostBySlug("not-found");
    expect(result).toBeNull();
  });

  it("throws when repository fails", async () => {
    vi.mocked(findPostBySlugRepo).mockRejectedValue(new Error("db error"));
    await expect(getPostBySlug("hello-world")).rejects.toThrow("Failed to get post by slug");
  });
});
