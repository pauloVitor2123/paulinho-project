import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("./get-session", () => ({
  getSession: vi.fn(),
}));

import { requireAuth } from "./require-auth";
import { getSession } from "./get-session";

const mockSession = {
  session: {
    id: "session-1",
    userId: "user-1",
    token: "tok",
    expiresAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ipAddress: null,
    userAgent: null,
  },
  user: {
    id: "user-1",
    email: "admin@test.com",
    name: "Admin",
    emailVerified: false,
    image: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

describe("requireAuth", () => {
  beforeEach(() => vi.clearAllMocks());

  it("throws Unauthorized error when there is no active session", async () => {
    vi.mocked(getSession).mockResolvedValue(null);

    await expect(requireAuth()).rejects.toThrow("Unauthorized");
  });

  it("returns the session when the user is authenticated", async () => {
    vi.mocked(getSession).mockResolvedValue(mockSession);

    const result = await requireAuth();

    expect(result).toEqual(mockSession);
  });
});
