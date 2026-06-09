import { describe, it, expect, vi, beforeEach } from "vitest";
import { getPublishedPostBySlug } from "./get-published-post-by-slug";

vi.mock("@/server/repositories/post-repository", () => ({
  findPublishedPostBySlugRepo: vi.fn(),
}));

import { findPublishedPostBySlugRepo } from "@/server/repositories/post-repository";

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

describe("getPublishedPostBySlug", () => {
  beforeEach(() => vi.clearAllMocks());

  it("throws when slug is empty", async () => {
    await expect(getPublishedPostBySlug("")).rejects.toThrow();
  });

  it("returns published post when slug is valid", async () => {
    vi.mocked(findPublishedPostBySlugRepo).mockResolvedValue(mockPost);
    const result = await getPublishedPostBySlug("hello-world");
    expect(result).toEqual(mockPost);
  });

  it("returns null for draft post", async () => {
    vi.mocked(findPublishedPostBySlugRepo).mockResolvedValue(null);
    const result = await getPublishedPostBySlug("draft-post");
    expect(result).toBeNull();
  });

  it("throws when repository fails", async () => {
    vi.mocked(findPublishedPostBySlugRepo).mockRejectedValue(new Error("db error"));
    await expect(getPublishedPostBySlug("hello-world")).rejects.toThrow("Failed to get published post by slug");
  });
});
