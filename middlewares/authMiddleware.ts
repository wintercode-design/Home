import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import nextAuthMiddleware, { NextRequestWithAuth } from "next-auth/middleware";

export function authMiddleware(middleware: NextMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // middleware logic
    return middleware(request, event);
  };
}
