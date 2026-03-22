import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/libs/auth", () => ({
  auth: {
    api: {
      getSession: vi.fn(),
    },
  },
}));

vi.mock("next/headers", () => ({
  headers: vi.fn(),
}));

import { getSession } from "./get-session";
import { auth } from "@/libs/auth";
import { headers } from "next/headers";

const mockHeaders = new Headers();

describe("getSession", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(headers).mockResolvedValue(mockHeaders as Awaited<ReturnType<typeof headers>>);
  });

  it("returns null when there is no active session", async () => {
    vi.mocked(auth.api.getSession).mockResolvedValue(null);

    const result = await getSession();

    expect(result).toBeNull();
    expect(auth.api.getSession).toHaveBeenCalledOnce();
    expect(auth.api.getSession).toHaveBeenCalledWith({ headers: mockHeaders });
  });

  it("returns session and user when a valid session exists", async () => {
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
    vi.mocked(auth.api.getSession).mockResolvedValue(mockSession);

    const result = await getSession();

    expect(result).toEqual(mockSession);
  });

  it("propagates errors thrown by auth.api.getSession", async () => {
    vi.mocked(auth.api.getSession).mockRejectedValue(new Error("auth failure"));

    await expect(getSession()).rejects.toThrow("auth failure");
  });
});
