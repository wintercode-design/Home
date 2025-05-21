// lib/middlewares/withI18n.ts
import type { NextMiddleware, NextFetchEvent, NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";

const intl = createIntlMiddleware(routing);

export const withI18n =
  (next: NextMiddleware): NextMiddleware =>
  async (req: NextRequest, _ev: NextFetchEvent) => {
    // Apply locale routing / rewrites
    const intlResult = intl(req);

    // If next-intl produced a response (rewrite / redirect) → stop chain
    if (intlResult) return intlResult;

    // Otherwise continue
    return next(req, _ev);
  };
