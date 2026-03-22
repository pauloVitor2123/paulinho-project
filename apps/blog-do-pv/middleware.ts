import { NextRequest, NextResponse } from "next/server";

// BetterAuth session cookie name
const SESSION_COOKIE = "better-auth.session_token";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get(SESSION_COOKIE);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/entrar", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Protect all routes inside the (private) route group.
  // Add specific paths here as private routes are created.
  matcher: ["/painel/:path*"],
};
