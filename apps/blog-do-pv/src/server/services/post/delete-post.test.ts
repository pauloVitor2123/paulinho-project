import { describe, it, expect, vi, beforeEach } from "vitest";
import { deletePost } from "./delete-post";

vi.mock("@/server/repositories/post-repository", () => ({
  deletePostBySlugRepo: vi.fn(),
}));

import { deletePostBySlugRepo } from "@/server/repositories/post-repository";

describe("deletePost", () => {
  beforeEach(() => vi.clearAllMocks());

  it("throws when slug is empty", async () => {
    await expect(deletePost("")).rejects.toThrow();
  });

  it("deletes post with valid slug", async () => {
    vi.mocked(deletePostBySlugRepo).mockResolvedValue(undefined);
    await expect(deletePost("my-post")).resolves.not.toThrow();
    expect(deletePostBySlugRepo).toHaveBeenCalledWith("my-post");
  });

  it("propagates repository error", async () => {
    vi.mocked(deletePostBySlugRepo).mockRejectedValue(new Error("db error"));
    await expect(deletePost("my-post")).rejects.toThrow("Failed to delete post");
  });
});
