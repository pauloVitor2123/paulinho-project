import { describe, it, expect, vi, beforeEach } from "vitest";
import { createPost } from "./create-post";
import type { PostCreateInput } from "@/validators/post-validator";

vi.mock("@/server/repositories/post-repository", () => ({
  insertPostRepo: vi.fn(),
}));

import { insertPostRepo } from "@/server/repositories/post-repository";

const validDraftInput: PostCreateInput = {
  slug: "my-post",
  title: "My Post",
  content: "Content here",
  excerpt: "Short excerpt",
  status: "draft",
};

const validPublishedInput: PostCreateInput = {
  slug: "my-published-post",
  title: "My Published Post",
  content: "Content here",
  excerpt: "Short excerpt",
  status: "published",
};

describe("createPost", () => {
  beforeEach(() => vi.clearAllMocks());

  it("throws with invalid input (empty slug)", async () => {
    await expect(createPost({ ...validDraftInput, slug: "" })).rejects.toThrow();
  });

  it("throws with invalid input (empty title)", async () => {
    await expect(createPost({ ...validDraftInput, title: "" })).rejects.toThrow();
  });

  it("creates a draft with publishedAt null", async () => {
    const expectedPost = { ...validDraftInput, id: "1", publishedAt: null, createdAt: new Date(), updatedAt: new Date(), coverImageUrl: null };
    vi.mocked(insertPostRepo).mockResolvedValue(expectedPost);
    const result = await createPost(validDraftInput);
    expect(insertPostRepo).toHaveBeenCalledWith(expect.objectContaining({ publishedAt: null }));
    expect(result).toEqual(expectedPost);
  });

  it("creates a published post with publishedAt set", async () => {
    const expectedPost = { ...validPublishedInput, id: "1", publishedAt: expect.any(Date), createdAt: new Date(), updatedAt: new Date(), coverImageUrl: null };
    vi.mocked(insertPostRepo).mockResolvedValue(expectedPost);
    await createPost(validPublishedInput);
    expect(insertPostRepo).toHaveBeenCalledWith(
      expect.objectContaining({ publishedAt: expect.any(Date) })
    );
  });

  it("throws when repository fails", async () => {
    vi.mocked(insertPostRepo).mockRejectedValue(new Error("db error"));
    await expect(createPost(validDraftInput)).rejects.toThrow("Failed to create post");
  });
});
