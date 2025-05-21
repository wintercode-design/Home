// lib/middlewares/withAuth.ts
import type { NextMiddleware, NextFetchEvent, NextRequest } from "next/server";
import nextAuthMiddleware, { NextRequestWithAuth } from "next-auth/middleware";

const protectedRoutes = ["/dashboard", "/about", "/services", "/settings"];

export const withAuth =
  (next: NextMiddleware): NextMiddleware =>
  async (req: NextRequest, _ev: NextFetchEvent) => {
    const needsAuth = protectedRoutes.some((p) =>
      req.nextUrl.pathname.includes(p)
    );

    if (needsAuth) {
      // Run Next-Auth’s middleware first
      const authResult = await nextAuthMiddleware(req as NextRequestWithAuth);

      // 1️⃣  If user is NOT authenticated, Next-Auth returns a redirect → stop chain
      if (authResult) return authResult;
      // 2️⃣  If user IS authenticated, fall through to the next middleware
    }

    return next(req, _ev);
  };
